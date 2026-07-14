import { CANONICAL_HOST, OG_IMAGE, type SeoOptions } from './seo';
import { FOUNDING_MODE } from '../config';

/**
 * W3b - SINGLE SOURCE OF TRUTH for per-route SEO. Consumed by BOTH the client `useSeo` hook (runtime, SPA
 * navigations) AND the build-time prerender (`scripts/prerender.mjs`, via `entry-server.tsx`). Because both
 * read this one module, the static per-route HTML and the client head can never drift.
 *
 * 🟥 Guardrails 6+7: schema claims = visible signed claims only. Product/Offer carries the £29 fact and
 * nothing invented (no ratings/reviews); FAQPage is generated from the same visible Q&A copy; every Code
 * answer cites its Appendix-8 section; zero compliance-verdict language anywhere in this file.
 */

// 🟥 Only the signed £29 fact - no ratings/reviews (invented). Mirrors the visible Pricing page copy exactly.
export const PRODUCT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'SMS Workboat',
  description: 'Safety management system software for the UK Workboat Code Edition 3, for small commercial workboats.',
  brand: { '@type': 'Brand', name: 'SMS Workboat' },
  offers: {
    '@type': 'Offer',
    price: '29.00',
    priceCurrency: 'GBP',
    url: `${CANONICAL_HOST}/pricing`,
    availability: 'https://schema.org/InStock',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '29.00', priceCurrency: 'GBP', unitText: 'boat per month' },
  },
};

export interface Faq { q: string; a: string; cite?: string }

/**
 * The FAQ corpus (rendered by FaqPage AND turned into FAQPage schema below). 🟥 Every Code-fact answer
 * carries its section citation (same Appendix-8 set the Code page uses); every product answer is TRUE to
 * WB3-CAPABILITY-MAP.md; NO compliance verdict ever appears. These entries also seed the future
 * Website-Nova corpus (K1).
 */
export const FAQS: Faq[] = [
  {
    q: 'Do I legally need a safety management system on my workboat?',
    a: 'Yes. The Workboat Code Edition 3 came into force on 13 December 2023, and under it every small commercial workboat needs a safety management system. What that SMS must contain is set out in the Code itself.',
    cite: 'Workboat Code Edition 3, Appendix 8, section 1.1',
  },
  {
    q: 'What must my SMS actually include?',
    a: 'The Code lists ten elements: a Safety and Environmental Protection Policy; a Risk Assessment for Safe Working; a Health and Safety Protection Policy; responsibilities of the Master and Personnel; training of Personnel; procedures for safe operation; emergencies; reporting of accidents; maintenance of the vessel and equipment; and review. SMS Workboat gives each one a home and the record to prove it.',
    cite: 'Workboat Code Edition 3, Appendix 8, section 1.1',
  },
  {
    q: 'What is a Designated Person Ashore?',
    a: 'The Code requires you to designate a person ashore responsible for monitoring the safe operation of the vessel, with sufficient authority, knowledge and resources to fulfil the role. SMS Workboat has a Person Ashore surface where you record who that is.',
    cite: 'Workboat Code Edition 3, Appendix 8, section 6',
  },
  {
    q: 'Do my crew need any training or familiarisation?',
    a: 'Yes - before the first occasion of working on the vessel, each worker must receive appropriate familiarisation training and instruction in on-board procedures. SMS Workboat keeps a per-crew familiarisation register, and a login-holding crew member can countersign their own record.',
    cite: 'Workboat Code Edition 3, Appendix 8, section 7',
  },
  {
    q: 'Do I have to record drills?',
    a: 'Yes. Exercises in the identified emergency situations must be carried out and recorded, including the names of those who took part. SMS Workboat records each drill (with a photo if you want one) against those names.',
    cite: 'Workboat Code Edition 3, Appendix 8, section 10',
  },
  {
    q: 'What about maintenance records?',
    a: 'The Code asks you to develop documented inspection and maintenance procedures - you set the frequency - and to record all inspections and maintenance. SMS Workboat is a maintenance log that derives its own due dates and keeps an append-only record of what was done.',
    cite: 'Workboat Code Edition 3, Appendix 8, section 12',
  },
  {
    q: 'What happens at an inspection or survey?',
    a: 'A surveyor reviews your SMS and its records. SMS Workboat gives you an inspection pack that is ready any day, and a read-only inspector link - four hours, one boat, no app - that notifies you the moment it opens and can be revoked when they leave. Whether you comply is your surveyor’s or Designated Person’s decision, not ours.',
  },
  {
    q: 'How long does it take to set up?',
    a: 'From nothing to a working SMS in an afternoon, on your phone. You photograph certificates you already have and Nova reads the details off the picture so you just confirm them; your documents start from Workboat-Code templates rather than a blank page.',
  },
  {
    q: 'What does it cost?',
    a: FOUNDING_MODE
      ? '£29 a month per boat at launch, everything included - no tiers, no per-user charges, nothing gated behind a “Pro” plan. Right now we run a Founding Skippers programme: 10 boats use SMS Workboat free while we finish it together, then £15 a month forever, instead of £29.'
      : '£29 a month per boat, everything included - no tiers, no per-user charges, nothing gated behind a “Pro” plan. There is a 14-day free trial and no card is required to start.',
  },
  {
    q: 'Does it work offline, out on the water?',
    a: 'Within a loaded session, yes: record drills, snap evidence and sign crew on with no signal. It saves on board and syncs itself when you are back in range - a photo you take offline reads “On board”, not “Saved”, until the server confirms it. (It is reliable within a session you have already opened; it is not a fully offline app.)',
  },
  {
    q: 'How does crew sign onto a boat?',
    a: 'A crew member scans the wheelhouse QR sticker with their own phone - no app, no account - signs onto the boat, and can put their signature on the risk assessment or documents they need to acknowledge. Crew can read and self-sign; they don’t change your records.',
  },
  {
    q: 'I only have one boat - is this overkill?',
    a: 'No. With one boat there is zero fleet clutter - just your boat. The fleet office (overview, the what’s-needed-where feed, the switcher, crew, per-boat QR and inspector links) only appears when you add a second boat.',
  },
  {
    q: 'What if I run a fleet?',
    a: 'Add a second boat and the fleet office appears automatically. The price stays flat at £29 per boat - the features that arrive as you grow are already included, which is the fleet discount.',
  },
  {
    q: 'Can I get my documents out - do I own my data?',
    a: 'You can download your whole SMS as a PDF document pack any time, and the inspection pack is assembled and ready any day of the year. Your records are yours.',
  },
];

export const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.cite ? `${f.a} (${f.cite}.)` : f.a },
  })),
};

/**
 * Every crawlable route → its head. `path` doubles as the sitemap/prerender key. 🟥 Titles/descriptions are
 * the exact copy the pages already showed; moving them here is a de-dup, not a wording change.
 */
export const ROUTE_SEO: Record<string, SeoOptions> = {
  '/': {
    title: 'The law now requires an SMS. We are the SMS. | SMS Workboat',
    description: FOUNDING_MODE
      ? 'UK law now requires a safety management system on every small commercial workboat (Workboat Code Edition 3). SMS Workboat is the simplest way to have one - on your phone, in an afternoon. £29 a month per boat at launch, everything included. Founding Skippers: free while we finish it, then £15 a month forever - 10 boats.'
      : 'UK law now requires a safety management system on every small commercial workboat (Workboat Code Edition 3). SMS Workboat is the simplest way to have one - on your phone, in an afternoon. £29 a month per boat, everything included. 14-day free trial, no card.',
    path: '/',
  },
  '/how-it-works': {
    title: 'How SMS Workboat works - from nothing to an SMS in an afternoon',
    description:
      'Three steps in owner language: capture what you have, let it author your documents from Workboat-Code templates, then sign your annual self-assessment. On your phone, on your boat.',
    path: '/how-it-works',
  },
  '/pricing': {
    title: 'Pricing - £29 a month per boat, everything included | SMS Workboat',
    description: FOUNDING_MODE
      ? '£29 flat per boat per month at launch. No tiers, no per-user charges, nothing gated. Founding Skippers: free while we finish it, then £15 a month forever - 10 boats. Produces your annual self-assessment, downloads your whole SMS as PDFs, and keeps the inspection pack ready.'
      : '£29 flat per boat per month. No tiers, no per-user charges, nothing gated. 14-day free trial, no card. Produces your annual self-assessment, downloads your whole SMS as PDFs, and keeps the inspection pack ready.',
    path: '/pricing',
    jsonLd: PRODUCT_JSONLD,
  },
  '/code': {
    title: 'Workboat Code Edition 3 explained - what your SMS must include | SMS Workboat',
    description:
      'What the Workboat Code Edition 3 (in force 13 December 2023) actually requires of a small commercial workboat: the safety management system elements, quoted verbatim with their Appendix 8 section references. Plain, factual, cited - never a verdict.',
    path: '/code',
  },
  '/faq': {
    title: 'SMS Workboat FAQ - the Workboat Code, setup, crew, pricing',
    description:
      'Honest answers to what workboat owners actually ask: do I need an SMS, what is a Person Ashore, what happens at a survey, how long setup takes, what it costs, offline, crew, fleet. Code facts cited; never a compliance verdict.',
    path: '/faq',
    jsonLd: FAQ_JSONLD,
  },
  '/about': {
    title: 'Why SMS Workboat - built from inside the industry',
    description:
      'Built by its founders between jobs at sea, with serving industry reviewers. Its AI cites the Workboat Code and never rules a verdict. No demo to book, no hidden pricing - the whole product is on the site to see.',
    path: '/about',
  },
};

/** Routes that get their own prerendered HTML file + a sitemap entry (the crawlable set). */
export const PRERENDER_ROUTES = Object.keys(ROUTE_SEO);

// --- pure head-tag string builder (no DOM): the prerender injects this; useSeo mirrors it at runtime ---

function escAttr(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function escText(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
/** JSON-LD in a <script> - neutralise any `</script>`/`<` so the block can't break out. */
function jsonLdScript(data: object): string {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}

/**
 * The exact per-route head tags, as an HTML string, for build-time injection. Mirrors `useSeo` field-for-field
 * so the static HTML and the hydrated client agree.
 */
export function renderHeadTags(path: string): string {
  const seo = ROUTE_SEO[path];
  if (!seo) return '';
  const url = `${CANONICAL_HOST}${seo.path}`;
  const title = escText(seo.title);
  const desc = escAttr(seo.description);
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${desc}" />`,
    `<link rel="canonical" href="${escAttr(url)}" />`,
    `<meta property="og:title" content="${escAttr(seo.title)}" />`,
    `<meta property="og:description" content="${desc}" />`,
    `<meta property="og:url" content="${escAttr(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:image" content="${escAttr(OG_IMAGE)}" />`,
    `<meta property="og:site_name" content="SMS Workboat" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escAttr(seo.title)}" />`,
    `<meta name="twitter:description" content="${desc}" />`,
    `<meta name="twitter:image" content="${escAttr(OG_IMAGE)}" />`,
  ];
  if (seo.jsonLd) {
    const blocks = Array.isArray(seo.jsonLd) ? seo.jsonLd : [seo.jsonLd];
    for (const b of blocks) tags.push(jsonLdScript(b));
  }
  return tags.join('\n    ');
}
