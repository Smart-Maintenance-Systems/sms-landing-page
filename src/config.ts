// W1 - public-site config.
//
// 🟥 The live-demo CTA (design §2c). LIVE 2026-07-22: the demo environment is deployed (login-free,
// read-only, on the deterministic self-refreshing box), so the "Try SMS Workboat - no sign-up" button is
// switched on and points at the demo entry. Flip DEMO_ENABLED back to false to instantly retire the link
// (the site falls back to the "coming with launch" placeholder — no dead links either way).
export const DEMO_ENABLED = true;
export const DEMO_URL = 'https://glorious-fulfillment-production-4993.up.railway.app/workboat-demo';

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
const FOUNDING_APPLY_BODY = [
  'Name:',
  'Boat(s) and what they do:',
  'Where you operate:',
  'Why (one line):',
  '',
].join('\n');
export const FOUNDING_APPLY_HREF =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Founding Skipper application')}` +
  `&body=${encodeURIComponent(FOUNDING_APPLY_BODY)}`;
export const FOUNDING_CTA_LABEL = 'Apply to be a Founding Skipper';
