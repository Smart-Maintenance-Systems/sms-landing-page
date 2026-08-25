import {
  Ship, Wrench, FileCheck, Camera, CheckCircle2, ArrowRight, ChevronRight,
  Shield, Star, Anchor, Scale, Brain, ClipboardCheck, Radio, LifeBuoy,
  QrCode, FileText, Clock, Users,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import Screenshot from '../components/Screenshot';

// SMS Workboat — the LIVE, featured product (company-site flip, 2026-08-25). Copy is lifted verbatim from the
// live product site smsworkboat.co.uk (approved claim-leashed strings). CTAs point OUT to the live site + demo.
// 🟥 Claim leash: "builds your SMS / survey-ready", NEVER "MCA-approved / certified / guaranteed compliant";
// Nova never rules a pass/fail verdict — that's the surveyor's call.
const WB_SITE = 'https://smsworkboat.co.uk';
const WB_DEMO = 'https://demo.smsworkboat.co.uk/workboat-demo';

export default function LightPage() {
  return (
    <>
      {/* Hero — live product, regulatory hook */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-status-success/5 to-surface-0" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-status-success/10 border border-status-success/20 rounded-full text-sm text-status-success mb-6">
                <Scale className="w-4 h-4" />
                Workboat Code Edition 3 · SMS required by 13 December 2026
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                The law now requires an SMS.{' '}
                <span className="text-status-success">We are the SMS.</span>
              </h1>

              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                Every small commercial workboat must hold a Safety Management System by 13 December 2026 —
                Workboat Code Edition 3, law since 2023. SMS Workboat builds yours, and keeps every record
                ready for the day the surveyor steps aboard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a href={WB_SITE} target="_blank" rel="noopener noreferrer" className="btn-light text-base px-8 py-4">
                  Try SMS Workboat
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href={WB_DEMO} target="_blank" rel="noopener noreferrer" className="btn-secondary border-status-success/30 text-status-success hover:bg-status-success/10 text-base px-8 py-4">
                  See the live demo
                </a>
              </div>

              <p className="text-sm text-text-muted">
                £29 a month per boat, everything included. No sign-up to look — the whole product's right there.
              </p>
            </div>

            {/* Real dashboard screenshot */}
            <ScrollReveal direction="right" className="flex justify-center">
              <Screenshot
                src="/screens/kestrel-dashboard.jpg"
                alt="MV Guardian's dashboard in SMS Workboat"
                caption="MV Guardian — your dashboard, built from the records you keep."
                aspect="phone"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The honest version — the deadline is real, the panic isn't */}
      <section className="py-24 md:py-32 bg-surface-1/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The honest version"
            title="The deadline is real. The panic isn't."
            subtitle="Yes, UK law now requires a safety management system on every small commercial workboat, by 13 December 2026. That part's real. The panic around it — the countdown clocks, the scare emails — isn't coming from the law. It's coming from people trying to sell you something. Here's the calm truth, straight from the guidance you'll actually be measured against:"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                claim: 'Yours is meant to be small.',
                quote: '“…proportionate to the size, complexity and risk profile of their operations.”',
                cite: 'MGN 710, §1.2',
              },
              {
                claim: "It's not meant to be a burden.",
                quote: '“…practical and effective without being unnecessarily burdensome.”',
                cite: 'MGN 710, §1.2',
              },
              {
                claim: "You can start it before it's finished.",
                quote: '“…specific items in the assessment may reflect ongoing development, as full implementation of all the necessary systems is underway.”',
                cite: 'MGN 710, §3.8',
              },
              {
                claim: "The surveyor samples. They don't grade you.",
                quote: '“Sampling is intended to be brief and focused; it does not assess the effectiveness of the SMS.”',
                cite: 'MGN 710, §4.3',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.cite + i} delay={i * 0.1}>
                <div className="h-full rounded-xl bg-surface-2/50 border border-white/5 p-6">
                  <h3 className="text-base font-semibold text-text-primary mb-3">{item.claim}</h3>
                  <blockquote className="text-sm text-text-secondary italic leading-relaxed mb-2">
                    {item.quote}
                  </blockquote>
                  <p className="text-xs font-mono text-status-success">{item.cite}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="mt-10 text-center text-lg text-text-primary font-medium max-w-2xl mx-auto">
              Being started and honest is enough. So start today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* See the actual product — real screenshots */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="See the actual product"
            subtitle="Real screens — no illustrations, no mockups. This is what you get."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: '/screens/certificates-dt.png', alt: 'Vessel and crew certificates in SMS Workboat', cap: 'Certificates, with expiry reminders.' },
              { src: '/screens/maintenance-dt.png', alt: 'Maintenance log in SMS Workboat', cap: 'A maintenance log that derives its own due dates.' },
              { src: '/screens/ra-dt.png', alt: 'A risk assessment in SMS Workboat', cap: 'Risk assessments from templates you confirm.' },
              { src: '/screens/person-ashore-dt.png', alt: 'Person Ashore in SMS Workboat', cap: 'Your designated person ashore.' },
              { src: '/screens/records-timeline.png', alt: 'The records timeline in SMS Workboat', cap: 'Your whole SMS as a running timeline.' },
              { src: '/screens/signed-records-dt.png', alt: 'The signed-records register in SMS Workboat', cap: 'Every signed record, in one register.' },
            ].map((s, i) => (
              <ScrollReveal key={s.src} delay={i * 0.1}>
                <Screenshot src={s.src} alt={s.alt} caption={s.cap} aspect="video" contain />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Nova — the honest refusal */}
      <section className="py-24 md:py-32 bg-surface-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-sm font-semibold text-accent-violet uppercase tracking-wider mb-3">Meet Nova</p>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Nova handles the compliance, you handle the boat.
                </h2>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  It retrieves and cites the Workboat Code, flags what's coming due before it slips, and tells you
                  honestly when a call isn't the software's to make. It never rules a verdict — that stays with
                  your surveyor.
                </p>
                <ul className="space-y-3">
                  {[
                    'It surfaces what\'s coming due — before it slips, one tap to add it to the calendar.',
                    'It cites the actual Code — answers come back with their section reference, so you can check its working.',
                    'It never rules a verdict — whether you pass is your surveyor or Designated Person, not an app.',
                    'It walks you through your pack — so a survey visit is a walk-through, not a scramble.',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent-violet shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Screenshot
                src="/screens/nova-refusal.jpeg"
                alt="Nova declining to give a pass/fail verdict and showing where the boat stands instead"
                caption="Ask Nova “will I pass?” — she refuses to rule a verdict, and shows where you stand. The refusal is the feature."
                aspect="video"
                contain
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The depth is the difference */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The depth is the difference"
            title="Because it's captured properly, your SMS can read itself back to you."
            subtitle="Every record goes in as structured data from the first day — not a scan of a form, not a note in a folder. That's what lets the product do things a filing cabinet never could:"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "Records that can't be quietly changed.", body: "Every signed record carries a cryptographic signature. Change a signed record after it's signed and it shows as altered — so a “done” is one your surveyor can trust." },
              { icon: FileText, title: 'Your whole SMS as a timeline.', body: 'Your SMS is a running timeline, not a pile of PDFs — scroll the history, and pull an evidence pack for any window: a survey, an incident review, a new insurer.' },
              { icon: ClipboardCheck, title: 'A periodic review that reads your own record back.', body: 'When your 3-yearly review comes round, it pulls the review together from what you\'ve actually logged — what\'s recurring, what\'s due, what\'s changed — each point citing the record behind it. You edit it and sign it. It never says whether you pass.' },
              { icon: FileCheck, title: 'One certificate, many items.', body: "Snap a service certificate covering five extinguishers and it tracks each unit's own serial and next-due date — the certificate renews on the earliest one." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="h-full rounded-xl bg-surface-1 border border-white/5 p-6 card-glow">
                  <div className="p-2.5 rounded-lg bg-brand-primary/10 w-fit mb-4">
                    <item.icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="mt-10 text-center text-lg text-text-primary font-medium max-w-2xl mx-auto">
              Anyone can store your paperwork. This understands it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Survey day + crew — the moments your SMS meets the world */}
      <section className="py-24 md:py-32 bg-surface-1/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="The moments your SMS meets the world" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Users, title: 'A deckhand joins for the day', body: 'You invite them once; they sign in on their own phone — no app to download — scan the wheelhouse sticker to sign onto the boat, and put their signature on the risk assessment before you leave the berth.' },
              { icon: ClipboardCheck, title: 'Survey day', body: "Hand the inspector a link — 4 hours, one boat, read-only, no app. You can see when it's been opened, and kill it any time. They get the same tabbed view you do — certificates, maintenance, risk assessments, drills — each computed live from your records. If something's missing, it shows as missing. Surveyors trust records that don't pretend." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="h-full rounded-xl bg-surface-1 border border-white/5 p-6 card-glow">
                  <div className="p-2.5 rounded-lg bg-status-success/10 w-fit mb-4">
                    <item.icon className="w-5 h-5 text-status-success" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 max-w-3xl mx-auto">
              <Screenshot
                src="/screens/inspector-pack.png"
                alt="Creating a read-only inspector link for the evidence pack in SMS Workboat"
                caption="A read-only link for the inspector — one boat, 4-hour expiry, revoke any time."
                aspect="video"
                contain
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Everything included — £29 a month per boat" subtitle="No tiers, no per-user charges, nothing gated behind a “Pro” plan." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: FileCheck, label: 'Certificates & tickets', desc: 'Vessel + crew, expiry reminders' },
              { icon: Wrench, label: 'Maintenance log', desc: 'Derives its own due dates' },
              { icon: Shield, label: 'Risk assessments', desc: 'From templates you confirm' },
              { icon: LifeBuoy, label: 'Drills & exercises', desc: 'Logged with evidence' },
              { icon: ClipboardCheck, label: 'Annual self-assessment', desc: 'Produced from your records' },
              { icon: Anchor, label: 'Person Ashore', desc: 'Your designated contact' },
              { icon: Camera, label: 'Photo evidence', desc: 'Snap → review → saved' },
              { icon: QrCode, label: 'QR sign-on + inspector links', desc: 'Per boat' },
              { icon: Brain, label: 'Nova', desc: 'Cites the Code, never a verdict' },
              { icon: Radio, label: 'Works offline', desc: 'Syncs when back in range' },
              { icon: FileText, label: 'Whole SMS as PDFs', desc: 'Download the pack any time' },
              { icon: Clock, label: 'Inspection pack', desc: 'Ready any day of the year' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-lg bg-surface-1 border border-white/5 p-4 card-glow">
                  <div className="p-2 rounded-lg bg-status-success/10 shrink-0">
                    <item.icon className="w-4 h-4 text-status-success" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">{item.label}</div>
                    <div className="text-xs text-text-muted">{item.desc}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Skipper + pricing */}
      <section className="py-24 md:py-32 bg-surface-1/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl bg-gradient-to-br from-status-success/10 to-surface-1 border border-status-success/20 p-8 md:p-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-status-warning/20 text-status-warning rounded-full text-xs font-bold mb-4">
                <Star className="w-3.5 h-3.5" />
                Founding Skippers · first 10 boats
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                £29 a month per boat. Everything included.
              </h2>
              <p className="text-lg text-text-secondary mb-4 leading-relaxed">
                No tiers, no per-user charges. The first ten boats join as Founding Skippers — free while we
                finish it together, then a permanent founder's discount that always stays below our public price.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <a href={WB_SITE} target="_blank" rel="noopener noreferrer" className="btn-light text-base px-8 py-4">
                  Try SMS Workboat
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href={WB_DEMO} target="_blank" rel="noopener noreferrer" className="btn-secondary border-status-success/30 text-status-success hover:bg-status-success/10 text-base px-8 py-4">
                  See the live demo
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-status-success/5 to-surface-0 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Ship className="w-10 h-10 text-status-success mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Start it today. Build it up as you go.
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              No sales call, no “book a demo”, no catch — the live demo boat is fully set up, click anything.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WB_SITE} target="_blank" rel="noopener noreferrer" className="btn-light text-base px-10 py-4">
                Try SMS Workboat
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={WB_DEMO} target="_blank" rel="noopener noreferrer" className="btn-secondary text-base px-10 py-4">
                Open the live demo
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
