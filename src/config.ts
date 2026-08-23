// W1 - public-site config.
//
// 🟥 The live-demo CTA (design §2c). LIVE 2026-07-22: the demo environment is deployed (login-free,
// read-only, on the deterministic self-refreshing box), so the "Try SMS Workboat - no sign-up" button is
// switched on and points at the demo entry. Flip DEMO_ENABLED back to false to instantly retire the link
// (the site falls back to the "coming with launch" placeholder — no dead links either way).
export const DEMO_ENABLED = true;
export const DEMO_URL = 'https://demo.smsworkboat.co.uk/workboat-demo';

// The trial funnel front-ends the EXISTING product register/activation path (design §5). Until the S1
// deploy wires that path, "Start free trial" routes to the Pricing page (a real page carrying the price
// + the 14-day no-card terms) - never a dead link. Swap to the register URL when it deploys.
export const TRIAL_HREF = '/pricing';

// The quiet SMS-Main cross-sell (design §3) - a mailto until the Main site/route exists (no invented page).
export const MAIN_CONTACT = 'mailto:info@smsystems.uk?subject=SMS%20for%20fleets%20%26%20shore%20operations';
export const CONTACT_EMAIL = 'info@smsystems.uk';

// W6 - Founding Skippers pre-launch programme (founder-signed 2026-07-14, spec:
// GROWTH/FOUNDING-SKIPPERS-PROGRAMME.md). While ON: every trial CTA becomes "Apply to be a Founding
// Skipper" (a pre-filled mailto), the pricing page reframes to launch pricing with the founding offer as
// the star, and a quiet founding strip shows on Home. 🟥 Flag OFF restores today's site byte-identically
// (launch day = one flip). The £29 launch price + the Product/Offer JSON-LD NEVER change with this flag -
// the founding deal is an application, not a SKU.
export const FOUNDING_MODE = true;

// Pre-filled application email (founder picks 10 by hand; a form is over-engineering per the spec).
// 🟦 mailto is fragile (needs a configured mail client — founder hit this on Outlook); a lightweight
// web form is the flagged longer-term fix (pre-outreach gate item 5). Body kept richer so one reply
// gives the founder enough to qualify a Founding Fleet place without a back-and-forth.
const FOUNDING_APPLY_BODY = [
  'Thanks for your interest in a Founding Fleet place — a few quick things so we can see how we can help. No wrong answers.',
  '',
  'Your name:',
  'Company / operation:',
  'Boat(s) — name, type, and what they do:',
  'Where you operate (ports / area):',
  'How do you manage your SMS today? (nothing yet / paper / spreadsheet / another system):',
  'Biggest compliance or paperwork headache right now:',
  'Best phone number to reach you:',
  'Anything else you want us to know:',
  '',
].join('\n');
export const FOUNDING_APPLY_HREF =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Founding Skipper application')}` +
  `&body=${encodeURIComponent(FOUNDING_APPLY_BODY)}`;
export const FOUNDING_CTA_LABEL = 'Apply to be a Founding Skipper';

// Audit #12 — the reliable replacement for the fragile mailto: a real /apply form that POSTs to the
// in-house endpoint (works on a phone with no mail client). ApplyCta now routes here; the /apply page
// keeps FOUNDING_APPLY_HREF as an explicit "prefer email?" fallback.
export const APPLY_HREF = '/apply';

// Analytics (task #344) — consent-gated. The GA4 Measurement ID is NOT a secret (it appears in the page
// source of any site using GA), so it lives here as a literal like the rest of this config. Microsoft
// Clarity is OFF until a project id is set. Both load ONLY after the visitor accepts the cookie banner
// (components/CookieConsent.tsx) — no analytics cookie is set before consent (UK GDPR / PECR).
export const GA4_MEASUREMENT_ID = 'G-ZZVZR0HQ1P';
export const CLARITY_PROJECT_ID = 'y6uifvw0n8'; // Microsoft Clarity — consent-gated via CookieConsent.tsx

// The trial API base the /apply form POSTs to (POST {API_BASE}/api/public/founding-apply). The endpoint
// is public + rate-limited + honeypot-gated; its CORS union already allows this marketing origin. Literal
// (this config is all literals) — change here + rebuild if the API host moves.
export const API_BASE = 'https://claudesmsapi-production.up.railway.app';
