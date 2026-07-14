# COPY REVIEW - the founder's read-through (2026-07-14) - fix in ONE slice

Founder is reading the site end to end; keeper logs every note here; ONE commit fixes the lot.

| # | Line (as shipped) | Founder note | Fix (proposed / picked) |
|---|---|---|---|
| 1 | "We show you everything - the product, the price, Nova's sources, even your own gaps." (Home + About echo + home meta description) | "i dont like this line" - design-principle voice, insider words (Nova/gaps unearned) | Options offered: (1) "No demo to book, no hidden pricing, no sales call. The whole product's right here - have a look." (2) "Everything's on this page: what it looks like, what it costs, how it works." (3) "Nothing to hide - real screens, real prices, and an AI that tells you the truth." (4) cut it. **SHIPPED: option 1** (rec applied; one-word veto swaps) |
| 2 | "The gaps show honestly - the honesty spine playing for you." (inspector section) | "i dont like this line either" - INTERNAL JARGON leaked to public copy | Options: (1) "If something's missing, it shows as missing. Surveyors trust records that don't pretend." (2) "It shows what's done and what isn't - no dressing it up." (3) "Warts and all - because pretending helps nobody at a survey." **SHIPPED: option 1** |
| 3 | "No tiers, no fleet discount, no per-user charges, nothing gated behind a 'Pro' plan." (Pricing + FAQ echo) | drop "no fleet discount" - advertising a missing discount to fleet buyers is a negative | **SHIPPED**: → "No tiers, no per-user charges, nothing gated behind a 'Pro' plan." (all occurrences incl. meta/FAQ) |

## Keeper's parallel jargon sweep - RESULTS (2026-07-14)
Good news: the leak is CONTAINED to the founder's two finds. Exact locations for the oner:
- **#1 lives in three places:** HomePage.tsx:99 · AboutPage.tsx:36 ("We show you everything:
  … even your own gaps") · routeSeo.ts:158 (the /about meta description ends "…even your own
  gaps" - swap to match whatever #1 pick lands).
- **#2 lives once:** HomePage.tsx:229 (the inspector card) - "…kill it when they leave. The gaps
  show honestly - the honesty spine playing for you." (line-wrapped, which is why greps missed it).
- **Everything else checked clean:** all other "honest/honestly" uses are natural English (Nova
  "tells you honestly when a call isn't hers" · pricing "honest findings"); "surface" hits are CSS
  class names only; zero "spine/record-completeness/capture-arming/deny-by" elsewhere in copy.

## Shipped 2026-07-14 - the oner
All three applied in one commit; verified in served HTML (0 "own gaps"/"honesty spine",
0 "no fleet discount"). KEPT (veto-able): the POSITIVE fleet-discount reframe on Home + the FAQ
("the features arriving free as you grow ARE the fleet discount") - answers the fleet buyer,
not the negative listing the founder flagged.
