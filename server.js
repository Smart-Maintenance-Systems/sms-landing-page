import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST = join(__dirname, 'dist');
const PORT = process.env.PORT || 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

const server = createServer((req, res) => {
  const urlPath = req.url.split('?')[0]; // ignore query string for file resolution
  let filePath = join(DIST, urlPath === '/' ? 'index.html' : urlPath);

  // If no extension, prefer a prerendered per-route file (e.g. /pricing -> dist/pricing/index.html),
  // otherwise fall back to the root index.html for SPA client-side routing.
  if (!extname(filePath)) {
    const routeFile = join(DIST, urlPath, 'index.html');
    filePath = existsSync(routeFile) ? routeFile : join(DIST, 'index.html');
  }

  if (!existsSync(filePath)) {
    // Fallback to index.html for SPA routes
    filePath = join(DIST, 'index.html');
  }

  const ext = extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  try {
    const content = readFileSync(filePath);

    // Cache static assets for 1 year, HTML for 0
    const cacheControl = ext === '.html'
      ? 'no-cache'
      : 'public, max-age=31536000, immutable';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': cacheControl,
    });
    res.end(content);
  } catch {
    res.writeHead(500);
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`SMS Website running on port ${PORT}`);
});
