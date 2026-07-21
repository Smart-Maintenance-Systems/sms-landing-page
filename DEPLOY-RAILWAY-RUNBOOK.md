# WB3 site → Railway go-live runbook

> Deploys THIS repo's `w1-website-skeleton` branch as its OWN Railway service on the bought domains
> (`smsworkboat.co.uk` + `.com`) — **separate from the Main brochure** (two-site plan; master untouched).
> ✅ **Proven locally 2026-07-18:** `npm run build` → `node server.js` serves `/` and `/pricing` HTTP 200
> on `$PORT`. `railway.json` (in this repo) declares build (`npm run build`) + start (`node server.js`).
> Static site — **no env vars, no database, no secrets.**

## One-time deploy (≈10 min, all in your accounts)
1. **Commit `railway.json`** on the `w1-website-skeleton` branch (it's written, uncommitted — review + commit).
2. **Railway → New Project → Deploy from GitHub repo** → `Smart-Maintenance-Systems/sms-landing-page`.
3. In the service **Settings**:
   - **Branch:** `w1-website-skeleton` (NOT master — this is the separate WB3 site).
   - Build/Start are read from `railway.json` (build `npm run build`, start `node server.js`). Nothing to type.
   - No variables needed.
4. **Deploy.** Watch the log: `npm ci` → `npm run build` (vite + prerender) → "SMS Website running on port …".
5. **Smoke-test the Railway URL** (`*.up.railway.app`): open `/`, `/pricing`, `/code`, `/faq`, `/about` —
   all should load (they're prerendered).

## Custom domains + DNS
6. Railway service → **Settings → Networking → Custom Domain** → add **`smsworkboat.co.uk`** and
   **`smsworkboat.com`** (and `www.` if you want both). Railway shows a **CNAME target** per domain.
7. At the **registrar** (where you bought the domains):
   - `www` (and any subdomain): **CNAME → the Railway target**.
   - **Apex** (`smsworkboat.co.uk` / `.com` root): use the registrar's **ALIAS / ANAME / "CNAME flattening"**
     to the Railway target (a bare CNAME isn't allowed at the apex). Cloudflare/most registrars support this;
     if not, Railway also gives an A-record IP option.
8. Wait for DNS propagation + Railway's automatic HTTPS cert (minutes–hours). Railway shows "Active" per domain.

## After it's live
- **Redeploys:** push to `w1-website-skeleton` → Railway auto-builds + redeploys. (Docs-only changes rebuild too.)
- **The 5 walk clips + ex-MCA wording** are honest placeholders — swap them in later as a file drop + one
  manifest edit; no redeploy config change.
- **Founding-mode flag / "10 boats" copy** — edit on the branch, push, auto-redeploys.
- 🟥 **Master brochure is untouched** — this is a distinct Railway service on distinct domains.

## If anything sticks
- Build fails on install → confirm Railway is using **npm** (package-lock.json present; it should auto-detect).
- Blank page / 404 on a route → the prerender didn't run; check the build log shows "prerender: 6 route(s)".
- Domain won't verify → the apex needs ALIAS/ANAME (not a plain CNAME); use Railway's A-record IP if the
  registrar can't flatten.
