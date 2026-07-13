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
- **🟥 HERO — founder's pick.** The signed law-changed hero STAYS in place. Alternatives, side by side:
  1. *(IN PLACE, signed)* "UK law now requires a safety management system on every small commercial workboat. SMS Workboat is the simplest way to have one."
  2. "Your boat deserves better than a notebook." *(warm, owner-first — currently leads How-it-works)*
  3. "Built for the operators everyone else ignores." *(positioning)*
  Pick one for the Home hero, or keep #1 — your call, not a silent swap.

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

### 🟥 Task 3 (prerendering) — STOPPED, as the brief requires
The brief said: *server.js must serve the new dist UNCHANGED — if it would need edits, STOP and report.*
It would. **Verified empirically:** `server.js` rewrites every extensionless route to the ROOT `index.html`
(`if (!extname(filePath)) filePath = join(DIST, 'index.html')`), so `/` and `/pricing` return **byte-identical
HTML** (same md5). Per-route prerendered `.html` files (e.g. `dist/pricing/index.html`) would never be served
without changing that rewrite. So no prerenderer was added and the per-route head is client-side (fine for
Googlebot, which executes JS; the static baseline is the `index.html` defaults). **This is why titles/OG are
in a JS hook, not baked HTML.**

**Recommended minimal server.js change (founder call, one small diff — NOT made this session):**
1. Serve a real per-route file when it exists *before* the SPA fallback: try `join(DIST, req.url, 'index.html')`
   and use it if present — then `vite-plugin-prerender`/`vite-react-ssg` output would be served as static HTML.
2. Add `.txt` → `text/plain` and `.xml` → `application/xml` to `MIME_TYPES` (see next note).

### robots.txt / sitemap.xml Content-Type (same frozen-server class)
`public/robots.txt` and `public/sitemap.xml` build into `dist/` and serve 200, **but** `server.js`'s
`MIME_TYPES` map has no `.txt`/`.xml`, so they go out as `application/octet-stream`. Google/Bing still parse
valid octet-stream robots + sitemaps, so this is **not launch-blocking** — but it's untidy and is fixed by the
same one-line `MIME_TYPES` addition above. Flagged, not worked around (server.js is frozen this session).

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
