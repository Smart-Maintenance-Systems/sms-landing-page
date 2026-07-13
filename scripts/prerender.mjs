// W3b — build-time prerender. Runs AFTER `vite build` (client) + `vite build --ssr` (server bundle).
// For every route in ROUTE_SEO it writes a real per-route dist/<route>/index.html: the route's static head
// (from routeSeo.ts) + the server-rendered body. server.js then serves these files directly.
//
// No new dependencies: uses Node's fs + the vite-built SSR bundle (react-dom/server, already installed).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');

const { render, renderHeadTags, PRERENDER_ROUTES } = await import(
  pathToFileURL(join(ROOT, 'dist-ssr', 'entry-server.js')).href
);

const template = readFileSync(join(DIST, 'index.html'), 'utf8');

const SEO_RE = /<!-- SEO:START[\s\S]*?SEO:END -->/;
const ROOT_DIV = '<div id="root"></div>';

if (!SEO_RE.test(template)) throw new Error('prerender: SEO:START/END markers not found in dist/index.html');
if (!template.includes(ROOT_DIV)) throw new Error(`prerender: "${ROOT_DIV}" not found in dist/index.html`);

let count = 0;
for (const route of PRERENDER_ROUTES) {
  const body = render(route); // throws on any SSR-time browser-global — we WANT the build to fail loudly
  const head = renderHeadTags(route);

  const html = template
    .replace(SEO_RE, `<!-- SEO:START (prerendered: ${route}) -->\n    ${head}\n    <!-- SEO:END -->`)
    .replace(ROOT_DIV, `<div id="root">${body}</div>`);

  // '/' -> dist/index.html ; '/pricing' -> dist/pricing/index.html
  const outPath = route === '/' ? join(DIST, 'index.html') : join(DIST, route, 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, 'utf8');
  count++;
  console.log(`prerendered ${route} -> ${outPath.replace(ROOT + '\\', '').replace(ROOT + '/', '')}`);
}

console.log(`prerender: ${count} route(s) written.`);
