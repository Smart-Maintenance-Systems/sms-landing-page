/**
 * W5 Task 4 - the ONE screenshot manifest. Every <Screenshot> still on the site reads its src/alt/caption
 * from here, keyed by slot. When the founder reshoots from the dressed demo world (keeper's
 * WEBSITE-SHOT-LIST.md), the swap is a drop-in of files + a one-line path change here - ZERO per-page code
 * edits. Slot keys mirror the shot-list numbering (noted per entry). Layout props (aspect/className) stay
 * on the page; only content lives here.
 *
 * 🟥 Current images predate this week's product (dated shots) - kept in place until the reshoot lands.
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
    alt: "A workboat's dashboard in SMS Workboat",
    caption: 'Your dashboard, built from the records you keep.',
  }, // shot 1 - Home hero / boat-setup (real capture 2026-07-16)
  certificates: {
    src: '/screens/dave-certificates.jpg',
    alt: 'Vessel and crew certificates in SMS Workboat',
    caption: 'Certificates, with expiry reminders.',
  }, // shot 3 - Certificates (real capture 2026-07-16)
  maintenance: {
    src: '/screens/maintenance-log.jpg',
    alt: 'Maintenance log in SMS Workboat',
    caption: 'A maintenance log that derives its own due dates.',
  }, // shot 5 - Maintenance (real capture 2026-07-16)
  riskAssessments: {
    src: '/screens/risk-assessments.jpg',
    alt: 'Risk assessments in SMS Workboat',
    caption: 'Risk assessments from templates you confirm.',
  }, // shot 6 - Risk assessments (real capture 2026-07-16)
  personAshore: {
    src: '/screens/person-ashore.jpg',
    alt: 'Person Ashore in SMS Workboat',
    caption: 'Your designated person ashore.',
  }, // shot 7 - Person Ashore (real capture 2026-07-16)
  certCapture: {
    src: '/screens/cert-1.png',
    alt: 'Capturing a certificate in SMS Workboat',
    caption: 'Snap a certificate - Nova reads the details.',
  }, // shot 4 - Cert capture (OCR)
  recordSigned: {
    src: '/screens/ra-3.png',
    alt: 'A signed, dated record in SMS Workboat',
    caption: 'Every record signed and dated.',
  }, // shot 6 (detail) - signed record
  cameraReview: {
    src: '/screens/cert-2.png',
    alt: 'Reviewing a captured certificate in SMS Workboat',
    caption: 'Snap a certificate - check what Nova read - save.',
  }, // shot 9 - Camera evidence review

  // How it works (CAPTURE → AUTHOR → ASSESS) - no captions (the step copy carries the story)
  howCapture: {
    src: '/screens/cert-1.png',
    alt: 'Capturing a certificate',
  }, // shot 4 - Capture
  howAuthor: {
    src: '/screens/ra-2.png',
    alt: 'Authoring a risk assessment',
  }, // shot 6 - Author
  howAssess: {
    src: '/screens/person-ashore-2.png',
    alt: 'The annual self-assessment',
  }, // shot 17 - Assess
} satisfies Record<string, Shot>;

export type ShotKey = keyof typeof SHOTS;
