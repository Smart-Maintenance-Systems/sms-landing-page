# W-695 / W-693 — the website's FIX NOW claims: build report

> **Branch** `w695-site-claims`, on top of `w679-nova-paperwork` @ `d341cdb` (the Nova line), so both publish in one push.
> **Commits, in order:** `998bba4` derivation only (`W695-DERIVATION.md` + the PyMuPDF extraction) → `e84c79b` copy edits → this report + proof files.
> **Commission:** `sms-platform-workboat` `BUILD_STAGES/FABLE/COMMISSIONS/WB3-W695-WEBSITE-FIX-NOW-CLAIMS.md` incl. DELTA 1 (lane tip `c71bda84`). Rows from `WB3-ASHFORDS-WORDING-PACK.md` §6.2 + ADDENDUM.
> 🟥 **`w1-website-skeleton` was NOT touched or pushed.** Only `w695-site-claims` was pushed. Nothing in `sms-platform-workboat` was written.
> **Not signed off by me.** A keeper read is owed.

## 1 · The count

| | n |
|---|---|
| Pack §6.2 FIX NOW rows | 26 |
| − WEB-03 (DELTA 1: held, brand wordplay, for Ashfords) | 25 |
| − WEB-34 (DELTA 1: screenshots deferred until the app words change) | 24 |
| − WEB-07 (already changed by W-679 at `d341cdb`; the commission says skip) | **23** |
| **FIX NOW rows changed** | **23 / 23** |
| Misquotes corrected (W-693) | **2** — WEB-10 (full stop not in source → ellipsis), WEB-24 (two sentences joined as one → ellipsis + "sections 7.1 and 7.2") |
| Wrong citation corrected | WEB-23 (App 8 §1.1 → Code §31.1.1 / §31.2.1) |
| Extra, beyond the rows (DELTA 1 "exact sub-clauses") | 3 FAQ cites: §7 → §7.2, §10 → §10.5, §12 → §12.2 — **not in the 23** |

The commission said "the pack's FIX NOW set minus WEB-03 and WEB-34" (24). The one difference is WEB-07, which W-679 already changed. Its instruction to skip anything W-679 changed applies.

## 2 · Row → file:line (at `e84c79b`) → old → new

| WEB | file:line | Old words | New words |
|---|---|---|---|
| 03 | HomePage :75 · index.html :16,19,26 · routeSeo :123 | "We are the SMS." | **skipped: held (DELTA 1)** |
| 06 | HomePage :80-82 (+ comment :77-78) | "SMS Workboat builds yours, and keeps every record ready for the day the surveyor steps aboard." | "SMS Workboat helps you set yours up and keeps its records in one place for the day the surveyor steps aboard." |
| 07 | HomePage :92, :322 · Footer :51 · About :71 | "Nova handles the compliance, you handle the boat." | **skipped: already done by W-679** (still present as "Nova handles the paperwork, you handle the boat." — checked in dist, §4) |
| 09 | HomePage :144 | "straight from the guidance you'll actually be measured against:" | "straight from the MCA's own guidance, MGN 710:" |
| 10 | HomePage :153 | "…proportionate to the size, complexity and risk profile of their operations." | "…proportionate to the size, complexity and risk profile of their operations…" |
| 11 | HomePage :185-186 | "No quiz can tell you your SMS is compliant. A real survey doesn't even assess that." | "No quiz can tell you your SMS is compliant." — **second sentence dropped** (see §3) |
| 12 | HomePage :191 | "Being started and honest is enough. So start today." | "Started and honest is the right place to begin. So start today." |
| 13 | HomePage :211-212 | "…designed to be honest and proportionate: the same calm, plain-spoken approach the Code actually asks for." | "…designed to be honest and to take the proportionate approach MGN 710 describes." |
| 14 | HomePage :227-229 | heading "Every "done" is one a surveyor could trust." / body "When something needs a look, it says so, plainly. It would rather…" | heading "When something needs a look, it says so." / body "It would rather…" (rest unchanged) |
| 15 | HomePage :243-246 | "Your surveyor gets exactly what they sample." / "When the examination comes, you hand over your self-assessment and the evidence behind it, in their language, the way they actually check it. No last-minute scramble, no separate folder to build." | "Your records, laid out the way a surveyor samples them." / "When the examination comes, there's no last-minute scramble and no separate folder to build." |
| 16 | HomePage :337 | "What I can do is show you exactly where you stand." | "What I can do is show you what your records say." |
| 17 | HomePage :407-409 | "…shows as altered — so a "done" is one your surveyor can trust." | "…shows as altered — so you and your surveyor can see it hasn't changed since it was signed." |
| 18 | HomePage :474-475 | "…certificates, maintenance, risk assessments, drills, each computed live from your records, not a PDF you assembled the night before. If something's missing, it shows as missing. Surveyors trust records that don't pretend." | "…certificates, maintenance, risk assessments and drills, read from your records as they stand." |
| 19 | HomePage :567 · PricingPage :29 · HowItWorksPage :36 · routeSeo :138, :139 | "Produced from your records." · "Produced from the records you keep - ready to sign." · "The records you keep produce your annual self-assessment - ready to sign, with the inspection pack assembled any day you need it." · "Produces your annual self-assessment, …" | "Pre-filled from your records. You check every answer and sign." (both cards) · "Your annual self-assessment is pre-filled from the records you keep. You check every answer and sign, and the inspection pack is assembled any day you need it." · "Pre-fills your annual self-assessment from your records for you to check and sign, …" |
| 20 | HowItWorksPage :49 · routeSeo :130 · routeSeo :77 · AboutPage :31-32 · routeSeo :125, :126 · index.html :17, :20, :27 | "From nothing to a working SMS in an afternoon" · "…- from nothing to an SMS in an afternoon" · "From nothing to a working SMS in an afternoon, on your phone." · "…built for that person: from nothing to a working SMS in an afternoon, the depth kept under the hood." · "SMS Workboat is the simplest way to have one - on your phone, in an afternoon." | **Founder's words:** "Get your SMS set up in an afternoon" (h1; no full stop, as no heading has one) · "How SMS Workboat works - get your SMS set up in an afternoon" · "Get your SMS set up in an afternoon, on your phone." · "…built for that person: get your SMS set up in an afternoon, the depth kept under the hood." · "Get your SMS set up in an afternoon, on your phone." (meta/og/twitter; the WEB-08 sentence before it is held, untouched) |
| 21 | AboutPage :25-26 | "SMS Workboat was built by its founders between jobs at sea. The compliance headaches it fixes are ones we live with - not ones a product manager guessed at." | **Exact final sentences:** "SMS Workboat was built by its founders between jobs at sea, for less time fighting the paperwork. The headaches it takes on are ones we live with - not ones a product manager guessed at." |
| 23 | routeSeo :43 | cite "Workboat Code Edition 3, Appendix 8, section 1.1" | "Workboat Code Edition 3, sections 31.1.1 and 31.2.1" |
| 24 | CodePage :37-39 | cite "…section 7"; "…they undertake. Prior to the first…" | cite "…sections 7.1 and 7.2"; "…they undertake. … Prior to the first…" |
| 25 | CodePage :32, :37, :42, :47 | "…Appendix 8, section 6 / 7 / 10 / 12" | "…section 6.1" · "sections 7.1 and 7.2" · "section 10.5" · "section 12.2" |
| 26 | CodePage :85 · routeSeo :47 | "…and the record to prove it" | "…and a place to keep its records" |
| 27 | routeSeo :51-53 | Q "What is a Designated Person Ashore?" A "The Code requires you to designate a person ashore responsible for monitoring the safe operation of the vessel, with sufficient authority, knowledge and resources to fulfil the role. …"; cite "section 6" | Q "What is the person ashore?" A "The Code says: “The vessel owner/operator shall, … the efficient operation of the vessel.” SMS Workboat has a Person Ashore surface where you record who that is."; cite "section 6.1" |
| 28 | routeSeo :62 | "SMS Workboat records each drill (with a photo if you want one) against those names." | "SMS Workboat lets you record who took part in each drill." |
| 29 | routeSeo :67 | "…keeps an append-only record of what was done." | "…keeps a record of each job done." |
| 30 | routeSeo :72-73 | "A surveyor reviews your SMS and its records." | "MGN 710 says: “Sampling is intended to be brief and focused; … viewing simple supporting evidence.”" (four sentences, verbatim) + new cite "MGN 710 (M), section 4.3" |
| 31 | HomePage :569 · PricingPage :31 · routeSeo :72 · routeSeo :103 · routeSeo :138, :139 | "Ready any day of the year." · "Assembled and ready any day of the year." · "an inspection pack that is ready any day" · "the inspection pack is assembled and ready any day of the year" · "keeps the inspection pack ready" | **Noun form "Your inspection records, together in one place."** on the two cards (HomePage :569, PricingPage :31). **Verb form "Pull your inspection records together when you need them."** in FAQ :72 ("SMS Workboat lets you pull your inspection records together when you need them, and gives you a read-only inspector link…"), FAQ :103 ("…any time, and pull your inspection records together when you need them.") and the pricing SEO :138/:139 ("…and pulls your inspection records together when you need them."). |
| 34 | public/screens/* · screenshots.ts :62 | — | **skipped: deferred (DELTA 1)** |
| extra | routeSeo :58, :63, :68 | FAQ cites "section 7" / "10" / "12" | "section 7.2" / "10.5" / "12.2" (DELTA 1 "exact sub-clauses"; each answer rests on that sub-clause alone, FOUND in the PDF) |

## 3 · WEB-11: why the quote was dropped, not kept

DELTA 1 allows keeping the quote only if it is exact **and** the words around it are neutral. **It is exact** (`w695-extract-quotes-output.txt`: "Sampling is intended to be brief and focused; it does not assess the effectiveness of the SMS." FOUND right after "4.3"). **But it cannot be neutral here.** The sentence straight after it on the site, which I did not change and which no row covers, is *"What counts is that you've started, and that you're honest about where you are."* Put straight after "does not assess the effectiveness of the SMS", that sentence draws the conclusion DELTA 1 forbids: that effectiveness doesn't count. So I took DELTA 1's fallback and dropped the second sentence rather than paraphrase. The same §4.3 sentence is still quoted, with its cite, in the fourth card above (HomePage :175-178, unchanged).

## 4 · Proof

### 4.1 Quotes re-extracted (PyMuPDF), `scripts/_evidence/w695-extract-quotes-output.txt`
- PDF SHA-256s: `Workboat_Code_Edition_3.pdf` `4d97a79860497888e4c8c5ab0189c4709fcf2ce47734d7f5fbd0b4edb70ff9eb` · `MGN 710 (M) … GOV.UK.pdf` `7a5b50532b130c3f21f24bdf567651b47a1fbb18126112c8a0d9588110ca7e5d` (match the pack's §11 prefixes).
- **FOUND:** §1.2 fragment · §1.2b · §3.8 · §4.3 s1 · §31.1.1 · §31.2.1 (first sentence) · App 8 §6.1 · §7.1 s1 · §7.2 s1 · §10.5 (three sentences) · §12.2 (three sentences) · App 8 §1.1 lead.
- **NOT FOUND, as expected:** WEB-10 with its closing full stop; WEB-24's old joined passage.
- **§4.3 four sentences:** the PDF is a GOV.UK browser print. Its page header/footer sits inside the third sentence: *"The CA’s sample, when 16/06/2026, 18:52 MGN 710 (M) … GOV.UK https://… 5/8 based on a self-assessment, should focus"* (`[BREAK]` line). Both sides are FOUND, in order, and no guidance words are skipped. The site shows the sentence whole.

### 4.2 `git grep` — old gone, new present (source)
Run at `e84c79b` over `src index.html`:
- **Old phrases:** one hit only, `src/lib/routeSeo.ts:48 cite: 'Workboat Code Edition 3, Appendix 8, section 1.1'`. That is the **"What must my SMS actually include?"** answer, which correctly cites §1.1 (the ten elements). It is not a WEB-23 location. Every other old phrase returns nothing.
- **New phrases:** every new phrase in §2 is present at the file:line listed.

### 4.3 `npm run build` (foreground), tail — full output `scripts/_evidence/w695-build-output.txt`
```
✓ built in 17.90s
vite v5.4.21 building SSR bundle for production...
✓ 21 modules transformed.
dist-ssr/entry-server.js  128.50 kB
✓ built in 628ms
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
build exit=0
```

### 4.4 Prerendered pages checked, `scripts/_evidence/w695_verify_dist.py` → `w695-verify-dist-output.txt`
**96 PASS, 0 FAIL, on 6 prerendered pages** (`/`, `/how-it-works`, `/pricing`, `/code`, `/faq`, `/about`). The checker strips tags and decodes entities, so it reads what a crawler reads:
- every OLD phrase of the changed rows is absent from its page, including the FAQ JSON-LD (e.g. `"…set out in the Code itself. (Workboat Code Edition 3, Appendix 8, section 1.1.)"` gone, the `31.1.1 and 31.2.1` form present);
- every NEW phrase is present;
- **the W-679 Nova line** "Nova handles the paperwork, you handle the boat." is present on all 6 pages, and "Nova handles the compliance" appears on none;
- **each of the 8 quotations the changed rows show** is present on its page and verbatim in its PDF (the §4.3 check first removes the GOV.UK print header shown in 4.1);
- WEB-24's joined passage "undertake. Prior to the first" no longer appears on `/code`.

🟨 **One red, recorded rather than hidden:** the checker's first run gave 1 FAIL, `"/faq OLD gone: 'Appendix 8, section 1.1 '"`. My check was too broad: it matched the §1.1 cite that is meant to stay (see 4.2). I narrowed it to the WEB-23 answer's own JSON-LD text and reran: 0 FAIL.

### 4.5 `npx tsc --noEmit`
```
tsc exit=0
```

### 4.6 Nothing else changed: `git diff --stat d341cdb e84c79b` (copy commit + derivation)
```
 W695-DERIVATION.md                               | 58 +++
 index.html                                       |  6 +-
 scripts/_evidence/w695-extract-quotes-output.txt | 92 +++
 scripts/_evidence/w695_extract_quotes.py         | 90 +++
 src/lib/routeSeo.ts                              | 37 +++---
 src/pages/AboutPage.tsx                          |  8 +--
 src/pages/CodePage.tsx                           | 12 ++--
 src/pages/HomePage.tsx                           | 42 +++---
 src/pages/HowItWorksPage.tsx                     |  4 +-
 src/pages/PricingPage.tsx                        |  4 +-
```
The 7 source files are exactly the files named in §2. Everything else is derivation, evidence or this report (the report commit adds `W695-REPORT.md`, `w695_verify_dist.py`, `w695-verify-dist-output.txt`, `w695-build-output.txt`). `dist/` and `dist-ssr/` are gitignored.

## 5 · Promised but not built
None of the 23 rows. Skipped by instruction: WEB-03 (held), WEB-07 (done by W-679), WEB-34 (deferred), and every FOR ASHFORDS row (WEB-01, 02, 04, 05, 08, 22, 32, 33, 35). Their words are untouched, including the WEB-08/22 sentences next to the edits in WEB-06, 09 and 20.

## 6 · Seen, not changed — for the keeper to route (no register id minted)
1. **HomePage :186-188** "What counts is that you've started, and that you're honest about where you are." This is the reason WEB-11's quote had to go (§3). It sits in no row.
2. **HomePage :229-231** (the WEB-14 card body) "an honest amber than a comforting green that isn't earned. Nothing here is dressed up to look finished when it isn't." It carries WEB-14's own concern: the self-assessment can sign "Yes" where records are missing. The pack only changed the heading.
3. **HomePage :369** "It shows you where you stand; the decision stays human." This is WEB-16's phrase without "exactly". It sits in no row.
4. **HomePage :336-337** quotes the app's Nova reply. The app still says "exactly where you stand" until pack §5.3 lands, so for now the site quotes words the app doesn't yet say. The `novaRefusal` screenshot may also show the old reply, and it is not one of WEB-34's images.
5. **The FAQ :62 drill answer** now reads "SMS Workboat lets you record who took part in each drill." Per the pack, the product can currently save a drill with no names (fix in progress). "Lets you" is true today; noted so the fix is not forgotten.
6. **Comments** in `routeSeo.ts :10` and `FaqPage.tsx` still say every Code answer cites "its Appendix-8 section", but FAQ :43 now cites §31. These are comments only and were left alone.
7. **The landing repo checkout** was on `w1-website-skeleton` (clean) when this began. After pushing I switch it back there. The gitignored `dist/` on disk is still this branch's build, so rebuild before previewing anything else.
