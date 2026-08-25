# Company site — SMS Workboat-live / SMS Main-coming-soon flip

> **What this repo is:** the LIVE company site **`www.smartmaintenancesystems.co.uk`**. GitHub =
> **`sms-dm/sms-landing-page`** (founder's account; public). Vite + React + Tailwind static site, served by
> `node server.js` on **port 8080**. Deploys via **Railway** — service named **`sms-landing-page`**.
> **⚠️ Deploy history (2026-08-25):** Railway had *lost* its GitHub link to this repo ("Repo not found") — the
> founder **reconnected it** (Settings → Source → `sms-dm/sms-landing-page`, root = `/`). Confirmed live again:
> deploy `ac00dbbd` Active, "SMS Website running on port 8080". So **a push to `sms-dm/sms-landing-page` now
> auto-deploys.** (Do NOT confuse with `Smart-Maintenance-Systems/sms-landing-page` = the *WB* site
> `smsworkboat.co.uk`, or `sms-platform/sms-website` = a stale local copy — neither is the live company site.)

## The goal (founder, 2026-08-25)
Flip the product hierarchy: **SMS Workboat = the LIVE, featured product** (it's live at `smsworkboat.co.uk`);
**SMS Main = "Coming Soon"** (the big fleet platform isn't ready). Right now it's backwards — Main is featured
and the workboat product is a "coming soon / £10" afterthought called **"SMS Light"** (the old name).

## Honesty rules (from `WB3-MARKETING-CLAIM-BANK.md` in the workboat repo)
- **SMS Workboat price = £29/boat/month + Founding Skipper** (first 10, relative permanent discount). **KILL the old "£10/month".**
- Workboat is **LIVE** — remove "Coming Soon" / "Register your interest" on the workboat product.
- Never "MCA-approved / certified / guaranteed compliant". WB "builds your SMS / survey-ready", not "makes you compliant".
- Workboat CTAs point OUT to **`https://smsworkboat.co.uk`** + the demo (don't duplicate the whole WB site here).
- SMS Main "coming soon" = honest: *"SMS for fleets & operations — the full AI-native platform. Coming soon."* + register-interest mailto `info@smsystems.uk`.

## Status
- ✅ **Nav + Footer** — "SMS Light" → "SMS Workboat"; nav CTA now "Try SMS Workboat" → `smsworkboat.co.uk`. (commit `bbbde8f`, local, **push held**)
- ⬜ **`src/pages/LightPage.tsx`** (412 ln) → the SMS Workboat page: live, £29 + Founding Skipper, real MV Guardian screenshots, CTAs → `smsworkboat.co.uk` + demo. Kill "Coming Soon"/"£10"/"Register interest".
- ⬜ **`src/pages/PlatformPage.tsx`** (367 ln) = SMS Main → **Coming Soon** treatment + register-interest.
- ⬜ **`src/pages/HomePage.tsx`** (897 ln) → flip hero + product tiles: SMS Workboat = live headline, SMS Main = coming-soon second tile.
- ⬜ **`src/pages/PricingPage.tsx`** (520 ln) → SMS Light tier @ £10 → SMS Workboat @ £29 + Founding Skipper.
- ⬜ **`src/pages/AboutPage.tsx`** (286 ln) → 2× "SMS Light" mentions → "SMS Workboat".
- ⬜ **Screenshots:** copy MV Guardian shots from the WB site (`Smart-Maintenance-Systems/sms-landing-page` → `public/screenshots/` or the SHOTS manifest) into this repo's `public/` and wire into the Workboat page via the `Screenshot` component. (Existing `public/` shots are the old Main-platform ones — reuse for the Main "coming soon" teaser or drop.)

## Do the pages together (coherence)
Home + Light + Platform (+ Pricing) must flip in ONE pass or the site is half-flipped (nav says Workboat, page
says Light). Build-test (`pnpm i && pnpm build` / `vite build`) before committing. **Push stays HELD until the
founder reviews** (a push auto-deploys to the live company site now).
