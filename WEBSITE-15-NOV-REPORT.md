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
