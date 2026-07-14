# REVIEW NOTES — W1 website skeleton (for founder sign-off)

Built to the signed design (`W-WEBSITE-DESIGN.md`, incl. the ★ FOUNDER-SIGNED 2026-07-12 additions).
🟥 **This is a LOCAL build for review — nothing deploy-side was touched, nothing is public** (#259).
Stack kept: Vite + React 18 + Tailwind + react-router + framer-motion + lucide.

`npm run build` clean · `tsc --noEmit` clean · mobile-first (max-w containers, single-column stacks,
44–48px touch targets). Verify the 375px + 1280px renders on a real browser (`npm run dev`, port 4000).

---

## W2 update (2026-07-13) — theme blend + taglines
- **Theme:** the site now wears the PRODUCT's `.workboat-light` glossy identity (light off-white surfaces,
  ocean-blue brand, cyan Nova accent, `wb-gloss-bg` warmth) — zero theme shock crossing to
  `/workboat-login`. Same brand mark as the product (`sms-workboat-mark.jpg`, white-ring framed). No dark mode.
- **Taglines:** every keeper line from master's originals is catalogued in **`TAGLINE-BANK.md`** (root),
  marked USED / BANK / KILLED. Wired now: *"Your boat deserves better than a notebook."* (leads
  How-it-works) and *"Less than £1 a day."* (Pricing — arithmetic-honest: £29 ÷ 30 ≈ £0.97). Killed on
  sight: £10/£20/£39, "coffee a week", "Register Interest", Twelve-modules/Innovate-UK/2,660-tests, "dark
  mode default", "fleet of fifty". The 🟥 audited Code quotes + £29 pricing facts were left untouched.
- **🟥 HERO — ✅ DECIDED (W4, founder-signed §W-D).** The Home hero is now the recovered original:
  **"The law now requires an SMS. We are the SMS."** with the honesty-trimmed sub-line (verbatim §W-D):
  *"Every small commercial workboat must now hold a Safety Management System — Workboat Code Edition 3, in
  force since December 2023. SMS Workboat builds yours, and keeps every record ready for the day the surveyor
  steps aboard."* The original's "keeps you survey-ready" was verdict language (banned) → records-ready
  wording only. The triple pun lands because the company is named in full near it — see W4 below.

---

## W3 update (2026-07-13) — SEO layer + real FAQ

Canonical host: **`https://smsworkboat.co.uk`** (`CANONICAL_HOST` in `src/lib/seo.ts`). `npm run build`
clean · `tsc --noEmit` clean · all 6 routes + `/robots.txt` + `/sitemap.xml` return 200 under `node server.js`.
**Validators:** JSON-LD parsed with `JSON.parse` (Organization) + generated from typed objects (Product,
FAQPage); `sitemap.xml` checked well-formed (6 `<url>`, valid `<?xml>`/`urlset`); guardrail grep empty
(no `you will pass`/`guaranteed`/`mca-approved`/`compliant`-verdict/competitor tokens). Run Google's Rich
Results Test on the live URL post-deploy for the final schema tick.

### Per-route head (Task 1 — `useSeo` hook, dependency-free)
| Route | Title | JSON-LD |
|---|---|---|
| `/` | SMS Workboat — the simplest way to meet the Workboat Code | — (Organization is site-wide, in `index.html`) |
| `/how-it-works` | How SMS Workboat works — from nothing to an SMS in an afternoon | — |
| `/pricing` | Pricing — £29 a month per boat, everything included \| SMS Workboat | **Product + Offer** (£29 GBP, per boat/month) |
| `/code` | Workboat Code Edition 3 explained — what your SMS must include \| SMS Workboat | — |
| `/faq` | SMS Workboat FAQ — the Workboat Code, setup, crew, pricing | **FAQPage** (all 14 Q&As) |
| `/about` | Why SMS Workboat — built from inside the industry | — |

`index.html` carries the site-wide **Organization** JSON-LD + the root canonical + default OG (the static
first-paint baseline). Each page then upserts its own title/description/canonical/OG/Twitter + optional
JSON-LD client-side. 🟥 **Schema claims = visible signed claims only:** the Product Offer states just the
£29 fact (no invented ratings/reviews); FAQPage schema is generated from the same visible Q&A text.

### ✅ Task 3 (prerendering) — DONE in W3b (founder-approved server.js one-diff, ON THIS BRANCH ONLY)
The W3 STOP was because the deployed `server.js` rewrote every extensionless route to the ROOT `index.html`,
so per-route static HTML couldn't be served. **W3b (founder-approved) applied the recommended one-diff to
`server.js` on `w1-website-skeleton`** and completed the prerender.

**Tool (stated):** Vite's built-in **SSR build** (`vite build --ssr src/entry-server.tsx`) + `react-dom/server`
(already a dependency) + a ~40-line post-build script (`scripts/prerender.mjs`). **Zero new dependencies.**
Rejected: `react-snap`/`vite-plugin-prerender` (bundle Chromium — heavy for 6 routes); `vite-react-ssg`
(would replace the just-shipped `useSeo` head system with its own + a router refactor = two head systems = debt).

**How it works (no drift by construction):** `src/lib/routeSeo.ts` is the SINGLE source of truth (title,
description, canonical, OG/Twitter, JSON-LD, FAQ corpus). The client `useSeo` hook reads it at runtime; the
build reads the *same* module (`renderHeadTags` for the head, `render()` for the body) — so static HTML and
the hydrated client can't disagree. `npm run build` now = client build → SSR build → `prerender.mjs`, which
writes `dist/<route>/index.html` for all 6 routes (Home → `dist/index.html`). Client boot stays CSR
(`main.tsx` `createRoot`, no hydration) — bots/no-JS get the prerendered HTML, users get the SPA; chosen over
`hydrateRoot` to avoid framer-motion animation mismatches.

**server.js one-diff (applied, branch only — deploy/main untouched):** (1) before the SPA fallback, serve
`dist/<url>/index.html` when it exists; (2) add `.txt` → `text/plain` and `.xml` → `application/xml` to
`MIME_TYPES`; (3) strip the query string for file resolution. Unknown routes still fall back to Home.

**Verified under `node server.js`:** every route returns its own `<title>` + prerendered body + canonical +
JSON-LD (Product on `/pricing`, FAQPage on `/faq`, Organization site-wide); **`/robots.txt` → `text/plain`,
`/sitemap.xml` → `application/xml`** (the earlier octet-stream issue is fixed); unknown route → 200 (Home).

### FAQ (Task 4) — claims + citations for founder sign-off
14 buyer questions in `src/pages/FaqPage.tsx`. **Code-fact answers cite the section** (same Appendix-8 set the
Code page uses); **product answers are checked against `WB3-CAPABILITY-MAP.md`**; **zero verdict language** —
the FAQ inherits Nova's leash ("your surveyor's or Designated Person's call"). These entries also seed the
future Website-Nova corpus (K1).

| # | Question | Basis |
|---|---|---|
| 1 | Do I legally need an SMS? | Code — **Appendix 8, §1.1** + in force 13 Dec 2023 |
| 2 | What must my SMS include? (the ten elements) | Code — **Appendix 8, §1.1** (verbatim list) |
| 3 | What is a Designated Person Ashore? | Code — **Appendix 8, §6** |
| 4 | Do crew need familiarisation/training? | Code — **Appendix 8, §7** |
| 5 | Do I have to record drills? | Code — **Appendix 8, §10** |
| 6 | What about maintenance records? | Code — **Appendix 8, §12** |
| 7 | What happens at an inspection/survey? | Product (inspector link) — no verdict, "surveyor's decision" |
| 8 | How long to set up? | Product (capture + Nova cert-read) — capability-map true |
| 9 | What does it cost? | £29 signed fact (mirrors Pricing) |
| 10 | Does it work offline? | Product — the honest "within a loaded session… 'On board' not 'Saved'… not a fully offline app" |
| 11 | How does crew sign on? | Product (QR, read + self-sign only) |
| 12 | One boat — overkill? | Product (fleet office hidden at one boat) |
| 13 | What if I run a fleet? | Product (£29 flat, "the features are the fleet discount") |
| 14 | Can I get my data out? | Product (PDF pack, inspection pack) — evidence-archive export NOT claimed |

🟥 The audited Code quotes and the £29 facts were **not** altered by this brief.

---

## W4 update (2026-07-13) — hero recovered + the triple pun

- **Hero (Home):** headline **"The law now requires an SMS. We are the SMS."** + the honesty-trimmed
  §W-D sub-line (verbatim; records-ready, no "survey-ready" verdict). `tsc`/`build` clean; the new hero +
  sub-line verified present in the **prerendered** `dist/index.html` (no JS needed).
- **`routeSeo.ts` (single source):** `/` title → *"The law now requires an SMS. We are the SMS. | SMS
  Workboat"*; OG/Twitter title inherit it automatically (verified in prerendered head). `index.html` dev
  default kept in lock-step (no drift).
- **The triple pun — company named in full in all three founder-specified spots** (SMS = Safety Management
  System = Smart Maintenance Systems):
  | Spot | Copy |
  |---|---|
  | Nav lockup | sub-label now **"by Smart Maintenance Systems"** (was "Workboat Code 3 SMS") |
  | Hero trust strip | first line **"SMS Workboat — by Smart Maintenance Systems."** |
  | Footer | copyright line **"© {year} SMS Workboat — built by Smart Maintenance Systems."** |
- 🟥 Code quotes + £29 facts untouched. Guardrail sweep empty (the only earlier hit was a code comment
  containing the banned token while documenting the ban — reworded so the sweep is clean; comments are
  build-stripped and never public regardless).

---

## W5 update (2026-07-13) — identity polish: the founders' voice · Nova's section · the mark

- **Task 1 — the founders' voice (SIGNED, plural).** Swept `Geoquip|Fugro|20 years|marine engineer` to
  **zero** across the served HTML (grep-proven, all 6 routes). Trust strip → *"Built by people who work at
  sea — not people guessing from an office."*; About long → *"…built by its founders between jobs at sea…
  ones we live with…"*; About credential card retitled *"Built at sea"*; `routeSeo` `/about` description
  updated (single source). Co-founder **unnamed**; no company names, no year counts, no individual credit.
- **Task 2 — Nova's own Home section** (new block after show-everything), heading **"Nova handles the
  compliance, you handle the boat."** The honest-refusal card **moved here** (it's Nova's story) with the
  refusal clip; plus three guardrail-6 points — *comes to you first · cites the actual Code (Appendix 8 §12)
  · never rules a verdict.* 🟥 **Honesty substitution to flag:** the brief's example phrase was "…want to
  book it?"; SMS Workboat has **no booking integration**, so it ships as *"…want it on the calendar?"* (the
  real add-to-calendar behaviour) — same "comes to you first" intent, no invented UI. No "AI does your
  compliance" overclaim anywhere.
- **Task 3 — the mark everywhere.** Favicon now the **WB3 workboat mark**, not the old dark Main logo:
  `public/favicon.svg` (scalable, embeds `sms-workboat-mark.jpg` on a square white tile) + jpeg fallback +
  apple-touch-icon; `sms-logo-small.png` reference removed from `index.html` (tab icon reads WB3).
  🟥 **Tooling note:** no raster tool was available (magick/convert/sharp all absent) and the mark is a
  179×152 non-square JPG — so I shipped the brief's **svg-or-png option** (the scalable SVG) rather than
  pixel-cut 32/180 PNGs. A pixel-optimised PNG set can drop in later from a square source (the founder is
  redoing brand assets anyway). **Hero mark LARGE on arrival** — an 80/96px glossy tile with a spring
  scale-in, mirroring master's big animated logo (`git show master:…HomePage.tsx`) in the light theme; nav
  lockup grown a size. 🟥 **Founder's eyes are the gate** on the exact hero-mark size (bold, not clownish).
- **Task 4 — screenshot slots swap-ready.** One manifest, `src/lib/screenshots.ts`, keyed by slot (keys
  mirror `WEBSITE-SHOT-LIST.md` numbering). Every `<Screenshot>` still reads src/alt/caption from it; layout
  props stay on the page. The founder's reshoot lands as a **drop-in of files + one manifest edit — zero
  per-page code**. Current (dated) shots stay in place meanwhile. The 5 clip placeholders are unchanged
  (still "to be filmed").
- **🟥 Untouched:** `server.js` FROZEN (no edits); the W4 hero ("We are the SMS."), the audited Code quotes,
  and every £29 fact are unchanged (grep-verified). tsc 0 · build clean (6 routes prerendered) · raw-HTML
  greps pass · guardrail sweep empty. All on `w1-website-skeleton`, reviewable commits, nothing pushed.

---

## W6 update (2026-07-14) — Founding Skippers (pre-launch, behind a flag)

- **Task 1 — `FOUNDING_MODE` flag (default ON)** in `src/config.ts` (mirrors the `DEMO_ENABLED` pattern).
  While ON, every trial CTA becomes **"Apply to be a Founding Skipper"** — a pre-filled `mailto:` (subject
  *Founding Skipper application*; body asks name · boat(s) + what they do · where they operate · one line on
  why), via a shared `ApplyCta` component. Each CTA site is wrapped
  `{FOUNDING_MODE ? <ApplyCta/> : <today's CTA untouched/>}`, so the off-branch is the current element
  verbatim. **Sites covered:** HomePage `CtaRow` (hero + pricing teaser), Navigation (desktop + mobile),
  Footer, Pricing (card + start block), Code, About, FAQ, How-it-works, Stub.
- **🟥 Flag OFF = byte-identical, PROVEN.** Built at pre-W6 HEAD → snapshot; flipped `FOUNDING_MODE=false`
  → rebuilt → diffed the prerendered HTML of all 6 routes (asset-hash-normalized): **zero diff**. Launch day
  = flip the one constant to `false` and today's trial site returns exactly. (All founding content — CTAs,
  pricing reframe, Home strip — gates on the flag.)
- **Task 2 — Pricing reframes to launch pricing, founding offer as the star** (FOUNDING_MODE only): a
  founding banner (*"Free while we finish it together, then £15 a month — forever."* · *"Free to test. £15
  forever. Instead of £29."* · the what-we-ask line · apply CTA) above the **"£29 a month per boat at
  launch. Everything included."** anchor. 🟥 **£29 never disappears** (7× on the page) and the **Product/Offer
  JSON-LD stays £29** — the founding deal is an application, not a SKU (no £15 schema'd; grep-verified).
- **Task 3 — a quiet founding strip on Home** near the pricing teaser: the offer in two lines + a **static
  "10 boats"** + apply. 🟥 **No urgency theatre** — no live counter, no countdown, no "N left" (grep clean;
  the founder edits the "10 boats" copy by hand as slots fill).
- **🟥 Untouched:** `server.js` FROZEN; the hero ("We are the SMS."), the audited Code quotes, and the
  Workboat-Code badges are unchanged (grep-verified). tsc 0 · build clean (6 routes prerendered) · founding
  copy present in raw HTML with the flag on · guardrail sweep empty. All on `w1-website-skeleton`, reviewable
  commits, nothing pushed.
- **W6 send-back fix (keeper audit) — the trial-promise CLASS gated.** With the flag on, the served HTML
  still *promised the trial* (open-trial claim while applications-only is true — guardrail 7): the two Home
  small-prints, the `/` + `/pricing` meta/OG descriptions, and the FAQ cost answer (+ its JSON-LD). Every one
  now gates on `FOUNDING_MODE` with a founding variant from the signed programme wording (small-prints →
  *"Founding Skippers: free while we finish it, then £15 a month forever · 10 boats"*; FAQ answer states the
  founding state honestly; `routeSeo` now imports the flag so its descriptions are flag-aware).
  **Sweep:** `14-day|free trial|no card` in the served route HTML (flag ON) = **0** (esbuild even DCE's the
  off-branch strings from the JS bundle, since the flag is a build-time const — launch = flip + rebuild +
  deploy). **£29 stays** (7× on Pricing) and the Product/Offer JSON-LD stays £29. Flag-off byte-diff
  re-run: **still identical across all 6 routes.**

---

## Pages built
| Route | Page | State |
|---|---|---|
| `/` | **Home** | Full — the signed section order (law hero → show-everything → W-S1..S4 → pricing teaser) |
| `/pricing` | **Pricing** | Full — £29 signed, everything included, 14-day no-card, outputs named honestly |
| `/code` | **The Code, explained** | Full — only the CITABLE set (verbatim + section refs) |
| `/how-it-works` | **How it works** | Full — CAPTURE → AUTHOR → ASSESS, real screens |
| `/about` | **Why us** | Full — the insider story, publishable-now facts only |
| `/faq` | **FAQ** | Full (W3) — 14 buyer questions, Code answers cited, zero verdicts |
| `/privacy`, `/terms` | Stubs | Honest "being written" placeholders, never dead ends |

Removed the Main-platform-era pages (`PlatformPage`, `LightPage`) and Main copy from Nav/Footer/meta.

---

## 🟥 Placeholders (need real assets before publish)
All rendered as HONEST captioned frames (`ScreenshotPlaceholder`, "clip to be filmed") — never a mockup.

1. **Home / show-everything:** clip — *Nova declining "will I pass survey?"* (`Clip: Nova's honest refusal, live — to be filmed`).
2. **Home / W-S1 crew:** clip — *the QR sign-on on a crew phone*.
3. **Home / W-S1 inspector:** clip — *the inspector link opening the pack*.
4. **Home / W-S2 offline:** clip — *airplane mode → snap → "On board" → signal → "Saved"*.
5. **Home / W-S3 fleet:** clip — *tap "Add another boat" → the fleet office appears*.

**Ex-MCA wording (§2 / #193):** shipped as the placeholder **"Built with serving industry reviewers"**
everywhere (hero trust-stack, footer, About). 🟥 Replace with the exact wording only on his **written
permission**.

**Real screenshots used** (from `SMS_WB_Screenshots/`, copied to `/public/screens/`): boat-setup, certificates,
maintenance, ra-1/2/3, person-ashore-1/2, cert-1/2, nova-intro. Swap any for a sharper shot when available.

---

## Claims + their citations (every Code statement carries its ref)
Quoted VERBATIM from the on-file Workboat Code Edition 3, via the product's PDF-verified clause registry
(`code-clauses.ts`). A claim we could not cite is **not** on the site (rule 2).

- **Hero + Code page:** "UK law now requires a safety management system on every small commercial workboat"
  → **Workboat Code Edition 3, in force 13 December 2023** (design §2, founder-verified) + **MGN 710 (M)**.
- **Code page — the ten SMS elements:** **Workboat Code Edition 3, Appendix 8, section 1.1** (verbatim).
- **Person Ashore:** **Appendix 8, section 6** (verbatim). **Familiarisation/training:** **section 7**.
  **Drills recorded:** **section 10**. **Maintenance programme recorded:** **section 12**.

No invented numbers, testimonials, or logos. **No competitor names anywhere** (the contrast is structural).

---

## Flags / not-yet-wired (honest, no dead links)
- **Live demo CTA (§2c):** designed in place ("Try SMS Workboat — no sign-up") but ships behind
  `DEMO_ENABLED = false` (`src/config.ts`) — rendered as a non-link "live demo coming with launch" note;
  trial CTA stays primary. Flip the flag + set `DEMO_URL` when the demo environment deploys (S1).
- **"Start free trial":** routes to `/pricing` (a real page with the price + terms). The §5 trial sign-up
  form (name/email/boat) front-ends the EXISTING product register path and lands with the S1 deploy —
  until then, `/pricing` offers an "email us for early access" fallback. No dead link anywhere.
- **Website Nova panel (§6):** NOT wired in this skeleton (there's no backend in this repo and nothing is
  public). It lands when the public ask endpoint is reachable + the #256 go-live hardening (§7) is done.
  The honesty framing ("cites sources, never a verdict") is already shown via Nova's quoted refusal on Home.
- **Pricing honesty:** "download your SMS as PDFs" = the document pack (TRUE today). The full
  evidence-archive-in-folders export is PARKED and is **not** claimed.

---

## Before this goes public (design §7 — not in scope tonight, listed for the record)
Adversarial re-run of the #254 Nova battery · `TRUST_PROXY_HOPS` set in prod · CORS locked to the real
origin (no `*`) · rate-limit store note · security headers/CSP · founder sign-off on the demo content.
