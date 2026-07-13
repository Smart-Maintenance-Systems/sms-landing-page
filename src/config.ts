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
