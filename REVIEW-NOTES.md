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

## Pages built
| Route | Page | State |
|---|---|---|
| `/` | **Home** | Full — the signed section order (law hero → show-everything → W-S1..S4 → pricing teaser) |
| `/pricing` | **Pricing** | Full — £29 signed, everything included, 14-day no-card, outputs named honestly |
| `/code` | **The Code, explained** | Full — only the CITABLE set (verbatim + section refs) |
| `/how-it-works` | **How it works** | Full — CAPTURE → AUTHOR → ASSESS, real screens |
| `/about` | **Why us** | Full — the insider story, publishable-now facts only |
| `/faq`, `/privacy`, `/terms` | Stubs | Honest "being written" placeholders, never dead ends |

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
