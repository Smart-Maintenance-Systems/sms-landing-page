import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

/**
 * W3b - SSR entry for build-time prerendering ONLY (never shipped to the browser; the client still boots
 * from `main.tsx`). `scripts/prerender.mjs` imports the vite-built version of this module and, for each
 * route, gets the rendered body HTML plus the head tags - both from the same `routeSeo` source the client
 * `useSeo` hook uses, so static HTML and hydrated client agree.
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}

export { renderHeadTags, PRERENDER_ROUTES } from './lib/routeSeo';
