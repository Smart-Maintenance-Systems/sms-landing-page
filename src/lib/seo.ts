import { useEffect } from 'react';

/**
 * W3 Task 1 - per-route head management, dependency-free (proportionate for a small SPA; react-helmet-async
 * would be heavier and this needs no server rendering). `useSeo` upserts the title, description, canonical,
 * OpenGraph/Twitter tags, and an optional JSON-LD block on mount/route-change.
 *
 * W3b - the site is now PRERENDERED at build time (`scripts/prerender.mjs` via `entry-server.tsx`), so every
 * route ships as real static HTML with its own head; `renderHeadTags` in `routeSeo.ts` builds that static
 * head from the SAME `ROUTE_SEO` this hook consumes at runtime. `useSeo` therefore just keeps the head in
 * sync across client-side (SPA) navigations - upserting is idempotent over the prerendered tags.
 */
export const CANONICAL_HOST = 'https://www.smsworkboat.co.uk';
export const OG_IMAGE = `${CANONICAL_HOST}/sms-workboat-mark.jpg`; // the real brand mark (v1; no invented imagery)

export interface SeoOptions {
  title: string;
  description: string;
  /** Absolute path on the canonical host, e.g. "/pricing". */
  path: string;
  /** Optional JSON-LD object(s) - 🟥 only claims that are also visible on the page. */
  jsonLd?: object | object[];
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeo({ title, description, path, jsonLd }: SeoOptions) {
  useEffect(() => {
    const url = `${CANONICAL_HOST}${path}`;
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:image', OG_IMAGE);
    upsertMeta('property', 'og:site_name', 'SMS Workboat');
    upsertMeta('name', 'twitter:card', 'summary');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', OG_IMAGE);

    // Route-scoped JSON-LD: tagged so we can remove it on unmount (site-wide Organization stays in index.html).
    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-route', path);
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => { script?.remove(); };
  }, [title, description, path, jsonLd]);
}
