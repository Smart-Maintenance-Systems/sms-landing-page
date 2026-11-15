# Website, 15 Nov 2026: privacy notice, terms, claims sweep

Branch `w1-website-skeleton`, base `2b470d6`. Not pushed (the keeper pushes after review).
Platform evidence read at `sms-platform-workboat` tree `e9257d7d8`.

## 1 · Privacy and Terms pages

- `/privacy` = GDPR-2 D1 (founder-approved draft, 13 Nov). Blanks filled per the founder, 15 Nov: contact
  info@smsystems.uk; emergency-contact basis "the operator's legitimate interests"; Version 1, 15 November 2026.
  Sign-in log line uses the "today" wording ("we are building automatic clean-up; until then we delete them on
  request"). Medical: "Medical notes are not currently being collected."
- The Anthropic row's absolute "Never medical notes or emergency contacts" is replaced by the founder's own row
  6(a) wording (27, 12 Nov): stored notes and contacts are not sent; scanned documents, including medical fitness
  certificates, are; please do not type medical details. Verified again today: 28 non-test API files import
  `lib/llm`; the only one naming the private service is `routes/wb3.ts` (`:1134`, `getStoodDownSince`, which returns
  ids, a date and a yes/no flag, `crew-private.service.ts:216-231`). Control: "certificate" found in 12 of the 28.
- "We do not store what you ask the assistant": checked, `services/wb3/nova/interaction-log.ts:43-53` (question and
  answer never written).
- Kept the existing website-analytics paragraph (GA4 and Clarity only after consent) as "On this website".
- `/terms` = GDPR-2 D2, with these changes:
  - §4: "The trial is free. We will tell you before any charge." No payment-provider words (D2's own instruction).
  - §6: closure is row 2a, "To close your account, contact us and we will explain the steps." (founder, 12 Nov),
    plus D2's 90-day and 89-day backup sentences. D2's B9 steps are left out: "access off promptly", "offer you a
    copy", "we keep only the records that must be kept longer", "if a trial ends... we email you first". Founder,
    13 Nov: "B9 must be implemented and tested before we publish the full account-closure promise."
  - §8: the previous website availability and liability wording, kept until a solicitor reviews it (D2's instruction).

## 2 · Claims sweep (6.67, files 04 and 27)

| Page | Old words | New words | Evidence |
|---|---|---|---|
| Privacy | "You can export your records at any time"; "each under a data-processing agreement"; "a payment provider"; "cookies essential only"; "not used to train third-party AI models" | replaced by D1 (see above) | founder decision (D1, 13 Nov; 15 Nov blanks) |
| Terms | "You can export your data at any time, and you can delete it by closing your account"; subscription, auto-renew, "payments handled by our payment provider"; "the export is there for exactly that" | replaced by D2 (see above) | founder decision (D2; row 2a); 6.59 no provider; 6.61 no export/closure |
| FAQ (survey answer) | "read-only inspector link - four hours, one boat, no app" | "one boat, no app, four hours by default (or 24 hours or 7 days if you choose)" | `inspector-grant.service.ts:27-31`; `InspectorAccessCard.tsx:28` |
| Home (Survey day) | "a link - 4 hours, one boat, read-only, no app" | "one boat, read-only, no app, 4 hours by default (or 24 hours or 7 days)" | same |
| Home screenshot caption | "one boat, 4-hour expiry, revoke any time" | "4-hour expiry by default (24 hours or 7 days if you choose)" | same |
| FAQ (offline) | "Yes. Open it once with a signal... after that it keeps working out at sea... The only limits are the very first load... and a very long stretch fully offline" | "For the everyday records, yes. Open the app with a signal before you go out... record drills, snap evidence and sign crew on... Some things still need a signal, such as signing your self-assessment. A phone needs to be opened with a signal at least once every 30 days" | `offline-auth.ts:21` (30 days); `outbox-types.ts:35-52` (drill, evidence-photo, sign-on queue; `:40` SA-sign stays online); finish Part 4 rows 4.1-4.7 open |
| Home (offline section) | "It saves on board and syncs itself when you're back in range." | "Open the app with a signal before you go out. With no signal, the phone keeps the work and sends it when you're back in range... Some things, like signing your self-assessment, wait for a signal." | same |
| Pricing (included list) | "Works offline on board, syncs when you're back in range" | "Record drills, evidence and crew sign-on with no signal; sent when you're back in range" | same |
| SEO /privacy | "Privacy policy"; "holds, why, and your rights" | "Privacy notice"; "holds, why, who else receives it, and your rights" | matches the new page |
| SEO /terms | "...billing, your content, and liability" | "...the free trial, your records, data processing, and liability" | matches the new page (no billing section) |

## 3 · Left for the founder (not changed)

1. **£49 price** (Home, Pricing, FAQ, SEO, Product JSON-LD `routeSeo.ts:15-28`): "£49 a month per boat at launch". No
   billing exists (6.59). It is worded as a launch price; whether to keep showing it is his.
2. **NVIDIA Inception** badge and "Our AI vision is part of NVIDIA's Inception program" (Home `:120-123`, About
   `:50-52`): membership not checkable by us (6.67). Keep or remove, his call.
3. **"Simple • Compliant • Connected"** strapline image on Home (`HomePage.tsx:56-66`): the word "Compliant" in the
   brand lockup. Judgement call.
4. **Copy of records "within 30 days"** (Terms §5, D2 as approved) differs from file 27's "Deliberately not
   promised: a number of days for a copy". Kept as D2; he may prefer row 1's "as soon as we reasonably can".
5. **Row 6(b), SMS's own maintenance knowledge** (approved 12 Nov) is not in D1 and is not published. Terms §7.3
   says the data is used for nothing else; publish 6(b) only with the Terms change it promises.
6. **Not re-checked by this job** (founder-approved D1 facts from GDPR-2 items 03/05/20): the transfer agreements
   named per provider; "logging out removes the sign-in and the copy"; "a copy of your boats for up to 30 days"
   (only the active boat is pre-saved, `useWb3OfflinePrefetch.ts:224-291`, per finish Part 4).
7. "Nova never rules a verdict" (About, Footer, FAQ): true of the shipped router; the B3 agent is dark. No change.

## 4 · Build and screenshots

`npm run build`: vite client + SSR + prerender, 9 routes written, exit 0. `npx tsc --noEmit -p .`: exit 0.
Served with `node server.js` on PORT 4321 (PID 1628, stopped after). Every page 200, no horizontal overflow.
Screenshots (outside the repo), `C:\Users\darre\AppData\Local\Temp\claude\2fd4b33aaa223d88\4dfe0e94-fb5b-44e3-8a59-655e71b9eb23\scratchpad\website\`:
`privacy-390.png`, `privacy-1280.png`, `terms-390.png`, `terms-1280.png`, `home-390.png`, `home-1280.png`,
`faq-390.png`, `faq-1280.png`, `pricing-390.png`, `pricing-1280.png`.

Round 1 pushed by the keeper (`1751eb4`), live on www.smsworkboat.co.uk.

---

# Round 2 · 15 Nov 2026 (founder: "keep £49, keep nvidia, keep compliant, fix the 30 days. also our offline section.. we have at sea mode now?")

Items 1 to 3 of the round 1 founder list are settled as **keep**, with no change. Platform tree `e9257d7d8`.

## 1 · Privacy, "On your phone"

Old: "your sign-in, a copy of your boats for up to 30 days, and any work not yet sent. Logging out removes the sign-in
and the copy. Unsent work stays until it is sent."
New: "your sign-in, which keeps working without signal for up to 30 days after you last used the app with signal; a
copy of the records for the boats you can open, refreshed while you have signal; and any work not yet sent. Logging
out removes the sign-in and the copy. Unsent work stays on the phone until it is sent."

| Claim | Evidence |
|---|---|
| 30-day offline sign-in, counted from the last use with signal | `apps/web/src/features/auth/offline-auth.ts:21` (`GRACE_CAP_MS`), `:95` |
| the copy covers **every boat the person can open**, not only the open one | `apps/web/src/features/workboat/hooks/useWb3OfflinePrefetch.ts:191-198` (OFF1b Part A, founder decision (i), 30 Oct), loops `:261-265`, `:279-291`. **The brief's "only the boat you have open is saved" (finish Part 4 text, `:224-291`) is out of date:** the code now saves the active boat plus every boat in the switcher. |
| refreshed while you have signal | same file, the repeat run on an interval or when the page returns (comment above `run`, `:229-235`) |
| log out removes sign-in and copy, never unsent work | `apps/web/src/features/workboat/hooks/useAccountLogOut.ts:41-48` (`clearAuth`, `removeReFetchableCopy`; "never the outbox") |

Terms §5 "within 30 days" unchanged, as instructed.

## 2 · At Sea Mode (Home section, FAQ answer, Pricing line)

Home section, replacing "Works where you work" (`src/pages/HomePage.tsx`, the W-S2 section):

| Words on the site | Evidence |
|---|---|
| "When the signal goes, switch to At Sea Mode." / "One screen for the boat you're on: what's due, and the records you can make. What you record is saved on the phone and sends itself when signal's back." | CHANGELOG-WORKBOAT.md v1.23.0 ("when the signal goes, the app now switches to At Sea Mode: one clear screen with what's due on this boat and the records you can make"); `AtSeaBanner.tsx:30`; `at-sea-words.ts:62` ("It all saves on this phone and sends itself when signal's back.") |
| "What's due on this boat, from the copy saved on the phone, with the time it was last checked with the server." | `at-sea-words.ts:67` (What's due), `:94-95` ("Checked with the server {time}"); `AtSeaBanner.tsx:30` |
| "Record jobs done, defects, engine hours and toolbox talks - and, depending on your role, drills and incidents. Photos go with jobs, defects, drills and incidents." | `at-sea-words.ts:51-59` (photo rule in the header comment), `:78-80` (crew / actor / master lists) |
| "Read and sign your documents. Your signatures send when you have signal." | `at-sea-words.ts:61`; `AtSeaScreen.tsx:370` |
| "A job you mark done moves to 'waiting to send', with the time you did it, so it isn't done twice by mistake." | `at-sea-words.ts:104-109` ("Done on this phone, waiting to send"; "Done {date}, recorded {time} by you. Waiting for signal to send."); CHANGELOG v1.24.0 ("No more doing a job twice by mistake") |
| "Leave a form half done and it offers Carry on or Discard next time." | `DraftPrompt.tsx:4-5`; CHANGELOG v1.23.0 ("Unfinished forms are kept") |
| "Open the app with signal before you sail, so the phone has your boat's copy." | `at-sea-words.ts:24-25` (`AT_SEA_NOT_READY`: "Connect to the internet and open SMS to prepare At-Sea Mode") |
| "Some things still need signal: signing your self-assessment, and a job's documents and service history." | `offline/outbox-types.ts:40` ("SA-sign stays online"); `at-sea-words.ts:98` |
| "A phone needs signal at least once every 30 days to keep working offline." | `offline-auth.ts:21`; `at-sea-words.ts:28-29` (due list unavailable when more than 30 days old) |

FAQ "Does it work offline?" (`src/lib/routeSeo.ts`): rewritten around At Sea Mode with the same facts and cites
(adds nothing beyond the table). Pricing included-list line: "At Sea Mode: record jobs, defects, hours and toolbox
talks with no signal; sent when signal's back" (`at-sea-words.ts:78`, the crew list, true for every role).

Removed: the "On board → Saved" pills. "On board" is the label on the photo strip (`SessionShotStrip.tsx:9`), not
At Sea's waiting row, so the new section uses At Sea's own words instead.

Deliberately not claimed: the in-app camera (v1.24.0 notes it is walked on Android only, iPhone not walked); anything
about iPhone; "works anywhere"; any compliance or approval word.

## 3 · Images (real captures, fictional demo boat MV Ironbark)

| Published | Source (platform repo) | Crop | Size |
|---|---|---|---|
| `public/screens/at-sea-mode.png` (600×1115) | `BUILD_STAGES/FABLE/AUDITS/WB3-VISUAL-FIX-1-MERGED-BROWSER-EVIDENCE/phone-own-at-sea-foot.png` | y 60-1510: from "Signed in as Frank Ironbark" to "Checked with the server 14 Nov, 10:31"; drops the Next.js dev "N" bubble (y 1575+) and the half-cut boat name | 57 KB (128-colour PNG) |
| `public/screens/at-sea-whats-due.png` (388×416) | `.../WB3-4B-MERGED-BROWSER-EVIDENCE/2-named-plan-met-at-sea-whats-due.png` | y 140-556: three jobs (Jet unit greasing, Gearbox oil, Main engine oil & filters) with Due soon and Mark done; drops the drills block, the "N" bubble and a 3px edge line | 9 KB |

Rejected: `phone-own-at-sea-top.png` and `w390-at-sea-top.png` (the "N" bubble covers "Boat essentials"; the header
shows the "Signal's back." chip); `1-plan-open-nameless-at-sea-whats-due.png` (test name "4B-MERGED-TEST planned fire
drill"); the VISUAL-FIX-2/3/4 "home-offline" shots (full-app home with offline chips, not At Sea).

**Fresh shots that would help (not taken: the app was not started):** a "Done on this phone, waiting to send" row
with its time; the record form with a photo attached; At Sea at the top with the boat name and "No signal." in the
header; all on MV Ironbark, a production build (no "N" bubble), 390 wide.

## 4 · Build and screenshots

`npm run build` exit 0 (9 routes prerendered); `npx tsc --noEmit -p .` exit 0. Served on PORT 4321, stopped by PID.
Every page 200, no horizontal overflow at 390 or 1280. Screenshots in the same scratchpad folder as round 1 (overwritten
with round 2): `home-390.png`, `home-1280.png`, `faq-*.png`, `pricing-*.png`, `privacy-*.png`, `terms-*.png`, plus
the section alone: `home-at-sea-section-390.png`, `home-at-sea-section-1280.png` (the sticky header and the cookie
banner appear over the section in these element captures; they are page chrome, not part of the section).

---

# Round 3 · 15 Nov 2026: production-build At Sea shots

New captures, production build, MV Ironbark (demo), framed by the keeper's tester, checked by the keeper. The round 2
crops (`public/screens/at-sea-mode.png`, `at-sea-whats-due.png`) are replaced and deleted.

| Published | Shows (read off the image) | Caption on the site |
|---|---|---|
| `public/screens/at-sea-mode-no-signal.webp` (1000×1664, 75 KB, from `framed-1-at-sea-home.webp`) | "AT SEA MODE", "No signal.", MV Ironbark, What's due "0 overdue · 9 due soon", Record something, To read and sign, Waiting to send, Boat essentials | "No signal: At Sea Mode shows what's due and what you can record." |
| `public/screens/at-sea-job-waiting-to-send.webp` (1000×1472, 61 KB, from `framed-2-job-waiting-to-send.webp`) | job list; under "Done on this phone, waiting to send": "Gearbox oil · Done 15 Nov 2026, recorded 16:14 by you. Waiting for signal to send." | "A job marked done with no signal waits on the phone until signal's back." |

The wording in the shots matches the code: `AT_SEA_WHY_NO_SIGNAL` "No signal." (`at-sea-words.ts:47`),
`AT_SEA_WAITING_DONE_HEADING` (`:104`), `waitingDoneLine` (`:106-109`).

**Not used: shot 3** (`framed-3-job-done-with-photo.webp`, the Mark as done form for Gearbox oil with a photo
attached). The photo is a generated seascape on a gearbox job, which reads oddly beside "Photo of this service". **For
the founder:** use it as it is, or retake it with a real engine-room photo.

Layout: from `sm` up, the two phones sit side by side, about 252 px each at 1280. On a phone they sit in a swipeable
row: each shot is 72% of the width, the second peeks in from the right, and the row scrolls while the page does not.
Both images have `loading="lazy"`, `decoding="async"`, width and height set, and alt text. The transparent frames
render on the section's light background with no black box (corner alpha 0, checked). The phone frame is cut at the
bottom of each image by design.

Checks: `npm run build` exit 0, `npx tsc --noEmit -p .` exit 0. Served on PORT 4321 and stopped by PID. Both images
load (`complete`, natural width > 0), with no horizontal overflow at 390 or 1280. Section screenshots (cookie banner
declined, header hidden for the capture):
`C:\Users\darre\AppData\Local\Temp\claude\2fd4b33aaa223d88\4dfe0e94-fb5b-44e3-8a59-655e71b9eb23\scratchpad\website\home-at-sea-section-390.png`,
`...\website\home-at-sea-section-390-swiped.png`, `...\website\home-at-sea-section-1280.png`.
