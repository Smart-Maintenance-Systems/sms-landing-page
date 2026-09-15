# W-679 report — the website Nova line

**Commission:** `sms-platform-workboat` → `BUILD_STAGES/FABLE/COMMISSIONS/WB3-W679-WEBSITE-NOVA-LINE.md` (lane tip `9c513d5c`). Keeper `build-stages-25`.
**Branch:** `w679-nova-paperwork`, cut from `w1-website-skeleton` @ `1d384f8` (same as `origin/w1-website-skeleton` at fetch time). 🟥 `w1-website-skeleton` was **not** pushed.
**Change:** "Nova handles the compliance, you handle the boat." → **"Nova handles the paperwork, you handle the boat."** Nothing else changed.

## 1 · Where the old line was (derived, not taken from the commission)

`git grep -nIi "handles the compliance" w1-website-skeleton` (whole tracked tree: `src/`, `index.html`, `public/`, `scripts/`, docs):

```
src/components/Footer.tsx:51    <Anchor …/> Nova handles the compliance, you handle the boat.
src/pages/AboutPage.tsx:71      &ldquo;Nova handles the compliance, you handle the boat.&rdquo;
src/pages/HomePage.tsx:92       <span …><Sparkles …/> Nova handles the compliance, you handle the boat.</span>
src/pages/HomePage.tsx:326      <h2 …>Nova handles the compliance, you handle the boat.</h2>
```

Four occurrences. This matches the keeper's scan.

Also checked:
- **`dist/` and `dist-ssr/` are gitignored** (`.gitignore:2`), so they are rebuilt, not tracked. Before the build, the old line was in all 9 prerendered pages, the client bundle and the SSR bundle. Nothing is hand-edited there; the rebuild replaces it (§3).
- **`index.html`, `public/`, `scripts/prerender.mjs`, the SEO/meta source and image `alt` text:** none has the line.
- A looser search (`handle[s]? the (compliance|boat)|you handle`) turned up one more hit, which I did **not** change: **`REVIEW-NOTES.md:135-136`**. The line is split across two lines there. It is a dated, internal record of an earlier build task, so rewriting it would falsify that history. It is not published, and nothing in `dist` comes from it.

## 2 · The diff

```diff
--- a/src/components/Footer.tsx
+++ b/src/components/Footer.tsx
@@ -51 @@
-              <Anchor className="w-3.5 h-3.5" /> Nova handles the compliance, you handle the boat.
+              <Anchor className="w-3.5 h-3.5" /> Nova handles the paperwork, you handle the boat.
--- a/src/pages/AboutPage.tsx
+++ b/src/pages/AboutPage.tsx
@@ -71 @@
-          &ldquo;Nova handles the compliance, you handle the boat.&rdquo;
+          &ldquo;Nova handles the paperwork, you handle the boat.&rdquo;
--- a/src/pages/HomePage.tsx
+++ b/src/pages/HomePage.tsx
@@ -92 @@
-                <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-accent-cyan shrink-0" /> Nova handles the compliance, you handle the boat.</span>
+                <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-accent-cyan shrink-0" /> Nova handles the paperwork, you handle the boat.</span>
@@ -326 @@
-          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-text-primary max-w-2xl">Nova handles the compliance, you handle the boat.</h2>
+          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-text-primary max-w-2xl">Nova handles the paperwork, you handle the boat.</h2>
```

`git diff --stat`: 3 files, 4 insertions, 4 deletions. Every spot keeps its punctuation, curly quotes, icon and classes. The tagline "Simple · Compliant · Connected" and "the record to prove it" are untouched.

## 3 · Proof

**Source after the edit:**
```
$ git grep -nIi "handles the compliance" -- src index.html public scripts
(no output, exit 1)
$ git grep -nIi "handles the paperwork"
src/components/Footer.tsx:51
src/pages/AboutPage.tsx:71
src/pages/HomePage.tsx:92
src/pages/HomePage.tsx:326
```
The new line is in exactly the four places the old one was.

**`npm run build` (tail):**
```
✓ 1848 modules transformed.
dist/index.html                  3.87 kB │ gzip:   1.35 kB
dist/assets/index-DH15Z0sI.css  26.73 kB │ gzip:   5.78 kB
dist/assets/index-Bpx6mcON.js  379.68 kB │ gzip: 115.18 kB
✓ built in 18.94s
vite v5.4.21 building SSR bundle for production...
✓ 21 modules transformed.
dist-ssr/entry-server.js  128.07 kB
✓ built in 595ms
prerendered / -> dist\index.html
prerendered /how-it-works -> dist\how-it-works\index.html
prerendered /pricing -> dist\pricing\index.html
prerendered /code -> dist\code\index.html
prerendered /faq -> dist\faq\index.html
prerendered /about -> dist\about\index.html
prerendered /privacy -> dist\privacy\index.html
prerendered /terms -> dist\terms\index.html
prerendered /apply -> dist\apply\index.html
prerender: 9 route(s) written.
EXIT=0
```

**The prerendered pages, after the build:**
```
--- OLD line, whole dist + dist-ssr ---
(files: 0)
--- NEW line, count per prerendered page ---
dist/about/index.html: 2          (footer + blockquote)
dist/apply/index.html: 1          (footer)
dist/code/index.html: 1
dist/faq/index.html: 1
dist/how-it-works/index.html: 1
dist/index.html: 3                (footer + hero + Meet Nova h2)
dist/pricing/index.html: 1
dist/privacy/index.html: 1
dist/terms/index.html: 1
--- new line in client bundle / ssr bundle ---
4
4
```
All 9 published pages carry the new words, and none carries the old line. The per-page counts match the source: the footer is on every page, the home page adds 2 and the about page adds 1.

**Tests and lint:** `package.json` has no test or lint script (`dev`, `build`, `build:client`, `preview` only). As a stand-in I ran `npx tsc --noEmit -p tsconfig.json` → `TSC_EXIT=0`.

## 4 · Not done / not built

Nothing the commission asked for is missing. Deliberately **not** changed: `REVIEW-NOTES.md:135-136` (see §1), the tagline, and "the record to prove it". The site goes live only when the founder pushes `w1-website-skeleton`, after the keeper's read.
