/**
 * W5 Task 4 - the ONE screenshot manifest. Every <Screenshot> still on the site reads its src/alt/caption
 * from here, keyed by slot. When the founder reshoots from the dressed demo world (keeper's
 * WEBSITE-SHOT-LIST.md), the swap is a drop-in of files + a one-line path change here - ZERO per-page code
 * edits. Slot keys mirror the shot-list numbering (noted per entry). Layout props (aspect/className) stay
 * on the page; only content lives here.
 *
 * ✅ Reshot 2026-08-23 from the MV Guardian demo (keeper wired the file swap + depth section). Prior
 *    07-16/07-21 captures replaced in place; slot paths unchanged.
 */
export interface Shot {
  src: string;
  alt: string;
  caption?: string;
}

export const SHOTS = {
  // Home
  homeHero: {
    src: '/screens/kestrel-dashboard.jpg',
    alt: "MV Guardian's dashboard in SMS Workboat",
    caption: 'MV Guardian — your dashboard, built from the records you keep.',
  }, // shot 1 - Home hero (MV Guardian phone dashboard, reshot 2026-08-23; file kept at kestrel-dashboard.jpg path)
  // Nova's honest refusal - a REAL capture (2026-07-21): asked "Will I pass my MCA inspection?", Nova
  // declines the verdict ("This isn't a pass/fail - your surveyor decides that") and shows where you stand.
  // The strongest proof of the honesty leash; replaced the "to be filmed" clip placeholder.
  novaRefusal: {
    src: '/screens/nova-refusal.jpeg',
    alt: 'Nova declining to give a pass/fail verdict and showing where the boat stands instead',
    caption: 'Ask Nova “will I pass?” - she refuses to rule a verdict, and shows where you stand.',
  },
  // The inspector read-only link - a REAL capture (2026-07-21): QR or copy-link, one boat, 4-hour expiry,
  // revoke any time, download the pack. Replaced the "to be filmed" inspector clip placeholder.
  inspectorPack: {
    src: '/screens/inspector-pack.png',
    alt: 'Creating a read-only inspector link for the evidence pack in SMS Workboat',
    caption: 'A read-only link for the inspector - one boat, 4-hour expiry, revoke any time.',
  },
  certificates: {
    src: '/screens/certificates-dt.png',
    alt: 'Vessel and crew certificates in SMS Workboat',
    caption: 'Certificates, with expiry reminders.',
  }, // shot 3 - Certificates (real desktop capture 2026-07-16)
  maintenance: {
    src: '/screens/maintenance-dt.png',
    alt: 'Maintenance log in SMS Workboat',
    caption: 'A maintenance log that derives its own due dates.',
  }, // shot 5 - Maintenance (real desktop capture 2026-07-16)
  riskAssessments: {
    src: '/screens/ra-dt.png',
    alt: 'A risk assessment in SMS Workboat',
    caption: 'Risk assessments from templates you confirm.',
  }, // shot 6 - Risk assessments (real desktop capture 2026-07-16)
  personAshore: {
    src: '/screens/person-ashore-dt.png',
    alt: 'Person Ashore in SMS Workboat',
    caption: 'Your designated person ashore.',
  }, // shot 7 - Person Ashore (real desktop capture 2026-07-16)
  fleetOverview: {
    src: '/screens/fleet-overview.png',
    alt: 'Fleet overview across several boats in SMS Workboat',
    caption: "Every boat's readiness at a glance - and what's needed where.",
  }, // shot 11 - Fleet overview (real desktop capture 2026-07-16)
  certCapture: {
    src: '/screens/cert-capture.jpg',
    alt: 'Capturing a certificate in SMS Workboat',
    caption: 'Snap a certificate - Nova reads the details.',
  }, // shot 4 - Cert capture (OCR) (real capture 2026-07-16)
  recordSigned: {
    src: '/screens/signed-records-dt.png',
    alt: 'The signed-records register in SMS Workboat',
    caption: 'Every signed record, in one register.',
  }, // shot 6 (detail) - signed-records register (real desktop capture 2026-07-17)
  cameraReview: {
    src: '/screens/camera-review.jpg',
    alt: 'Reviewing a captured evidence photo of a repair in SMS Workboat',
    caption: 'Photograph the fix - review - save.',
  }, // shot 9 - Camera evidence review (real capture 2026-07-16)

  // ── DEPTH section (WB-WEBSITE-COPY-REFRESH §2/§5) — SHOT 2026-08-23 from the MV Guardian demo and wired
  //    into the depth "moat" section on HomePage (smsReview + recordsTimeline side by side, multiItemCert
  //    centred below the four capability cards). ──
  smsReview: {
    src: '/screens/sms-review.png',
    alt: 'The signed 3-yearly periodic SMS review, drafted from the boat’s own records with citations',
    caption: 'Your 3-yearly review, drafted from your own records — each point citing the record behind it. You sign it.',
  }, // shot smsReview - periodic §13 review (shot 2026-08-23, wired into depth section)
  recordsTimeline: {
    src: '/screens/records-timeline.png',
    alt: 'The whole SMS as a scrollable running timeline in SMS Workboat',
    caption: 'Your whole SMS as a timeline — and an evidence pack for any window.',
  }, // shot recordsTimeline - Toolbox Talks timeline (shot 2026-08-23, wired into depth section)
  multiItemCert: {
    src: '/screens/multi-item-cert.png',
    alt: 'One service certificate covering five extinguishers, each with its own serial and next-due date',
    caption: 'One certificate, five extinguishers — each unit tracked on its own date.',
  }, // shot multiItemCert - F14 5-item extinguisher panel FES-CMS-25-0771 (shot 2026-08-23, wired)

  // How it works (CAPTURE → AUTHOR → ASSESS) - no captions (the step copy carries the story)
  howCapture: {
    src: '/screens/cert-capture.jpg',
    alt: 'Capturing a certificate',
  }, // shot 4 - Capture (real capture 2026-07-16)
  howAuthor: {
    src: '/screens/ra-authoring.jpg',
    alt: 'Authoring a risk assessment',
  }, // shot 6 - Author (real capture 2026-07-16)
  howAssess: {
    src: '/screens/self-assessment.jpg',
    alt: 'The signed annual self-assessment',
  }, // shot 17 - Assess (real capture 2026-07-16). NB the "accurately and accurately" is verbatim MCA MGN 710 Annex A — correct, not a typo.
} satisfies Record<string, Shot>;

export type ShotKey = keyof typeof SHOTS;
