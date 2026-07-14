// W1 - public-site config.
//
// 🟥 The live-demo CTA (design §2c) ships DEFAULT-OFF: "Try SMS Workboat - no sign-up" is designed in
// place but the trial-signup CTA stays primary until the demo ENVIRONMENT exists (it builds with the S1
// deploy - a live demo IS a deployment). No dead public links: while DEMO_ENABLED is false the demo
// button is not rendered as a live link.
export const DEMO_ENABLED = false;
export const DEMO_URL = '#';

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
