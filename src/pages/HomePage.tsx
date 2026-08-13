import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight, ShieldCheck, Wifi, WifiOff, Camera, Anchor, QrCode, Scale,
  Ship, CheckCircle2, FileText, ClipboardCheck, Sparkles, BellRing,
} from 'lucide-react';
import Screenshot from '../components/Screenshot';
import { TRIAL_HREF, DEMO_ENABLED, DEMO_URL, FOUNDING_MODE } from '../config';
import ApplyCta from '../components/ApplyCta';
import { useSeo } from '../lib/seo';
import { ROUTE_SEO } from '../lib/routeSeo';
import { SHOTS } from '../lib/screenshots';

/**
 * The two primary CTAs - trial is primary; the live demo (design §2c) ships DEFAULT-OFF.
 * `showDemoPlaceholder` gates ONLY the pre-launch "coming with launch" placeholder, so it isn't repeated on
 * every CtaRow down the page - kept on the hero + final CTA, off in the mid-page rows. Once DEMO_ENABLED
 * flips true the real "no sign-up" button always shows, regardless of this flag.
 */
function CtaRow({ className = '', showDemoPlaceholder = true }: { className?: string; showDemoPlaceholder?: boolean }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      {FOUNDING_MODE ? (
        <ApplyCta className="btn-primary justify-center" />
      ) : (
        <Link to={TRIAL_HREF} className="btn-primary justify-center">
          Start free trial <ChevronRight className="w-4 h-4" />
        </Link>
      )}
      {DEMO_ENABLED ? (
        <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary justify-center">Try SMS Workboat - no sign-up</a>
      ) : showDemoPlaceholder ? (
        <span
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border-default text-text-muted text-sm font-medium cursor-default"
          title="A no-sign-up live demo arrives with launch"
        >
          Try SMS Workboat - live demo coming with launch
        </span>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  useSeo(ROUTE_SEO['/']);
  return (
    <div className="pt-16 md:pt-20">
      {/* ── §2 - LAW-CHANGED HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* W5b (founder) - the FULL recovered logo on arrival: the wave + SMS WORKBOAT + the
                  "Simple • Compliant • Connected" strapline (the original lockup, found in the product's
                  files). The small mark stays in the nav/favicon - the lockup gets room to breathe here. */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.35 }}
                className="mb-6 inline-flex"
              >
                <img
                  src="/sms-workboat-logo.jpg"
                  alt="SMS Workboat - Simple, Compliant, Connected"
                  className="h-36 md:h-44 w-auto object-contain rounded-2xl"
                />
              </motion.div>
              <span className="flex w-fit items-center gap-2 rounded-full border border-border-default bg-surface-1 px-3 py-1 text-xs font-medium text-text-secondary">
                <Scale className="w-3.5 h-3.5 text-brand-primary" /> Workboat Code Edition 3 · SMS required by 13 December 2026
              </span>
              <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-text-primary">
                The law now requires an SMS.{' '}
                <span className="gradient-text">We are the SMS.</span>
              </h1>
              {/* §W-D honesty-trimmed sub-line, VERBATIM. 🟥 The original's verdict phrasing was dropped - 
                  records-ready wording only ("keeps every record ready"), never a pass/fail promise. */}
              <p className="mt-5 text-lg text-text-secondary">
                Every small commercial workboat must hold a Safety Management System by 13 December 2026 -
                Workboat Code Edition 3, law since 2023. SMS Workboat builds yours, and keeps every record
                ready for the day the surveyor steps aboard.
              </p>
              <CtaRow className="mt-8" />
              <p className="mt-4 text-sm text-text-muted">{FOUNDING_MODE ? 'Founding Skippers: free while we finish it, then a permanent founder’s discount below our public price · 10 boats.' : '14-day free trial · no card · £29 a month per boat, everything included.'}</p>

              {/* Trust stack - publishable-now facts only. First line names the company in FULL so the
                  triple pun lands (SMS = Safety Management System = Smart Maintenance Systems). */}
              <div className="mt-8 flex flex-col gap-2 text-sm text-text-secondary">
                <span className="flex items-center gap-2"><Ship className="w-4 h-4 text-brand-primary shrink-0" /> SMS Workboat - by <span className="font-medium text-text-primary">Smart Maintenance Systems</span>.</span>
                <span className="flex items-center gap-2"><Anchor className="w-4 h-4 text-text-muted shrink-0" /> Built by people who work at sea - not people guessing from an office.</span>
                <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-accent-cyan shrink-0" /> Nova handles the compliance, you handle the boat.</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Screenshot {...SHOTS.homeHero} aspect="phone" />
            </div>
          </div>

          <p className="mt-14 text-center text-xl md:text-2xl font-medium text-text-primary max-w-3xl mx-auto">
            No demo to book, no hidden pricing, no sales call. The whole product&rsquo;s right here - have a look.
          </p>
        </div>
      </section>

      {/* ── W5e (founder) - THE CREDIBILITY BAND, directly under the hero ("it's our credibility").
             🟥 Company-level claims only; wording honesty-checked (the PROGRAM recognises, IUK explained).
             Kept off the hero itself and off the Code page (no false-authority near compliance). ── */}
      <section className="border-t border-border-subtle bg-surface-1/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-8">
          <div className="flex items-center gap-4">
            <img src="/innovate-uk-ukri.png" alt="UKRI - Innovate UK" className="h-12 w-auto object-contain shrink-0" />
            <div>
              <p className="text-sm font-bold text-text-primary">Government backed</p>
              <p className="text-sm text-text-secondary">Supported by Innovate UK - the UK government&rsquo;s innovation agency.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/nvidia-inception-badge.jpg" alt="NVIDIA Inception Program" className="h-16 md:h-20 w-auto object-contain shrink-0 rounded" />
            <div>
              <p className="text-sm font-bold text-text-primary">AI recognised</p>
              <p className="text-sm text-text-secondary">Our AI vision is part of NVIDIA&rsquo;s Inception program for AI startups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HONEST POSITIONING - the calm counter to the deadline-fear sellers. Headline FOUNDER-LOCKED.
             🟥 Every Code quote is a <blockquote> with its source visibly cited, VERBATIM from the on-file
             MGN 710 PDF - the honest pitch depends on them being checkable. MGN 710 = guidance (the 3-year
             figure is Code App 8 §13, cited via §6.1). No new claims, no compliance verdict, no "MCA-approved". ── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider">The honest version</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary leading-tight">
              The deadline is real. The panic isn&rsquo;t.
            </h2>
            <p className="mt-5 text-lg text-text-secondary leading-relaxed">
              Yes, UK law now requires a safety management system on every small commercial workboat, by
              13 December 2026. That part&rsquo;s real. But the panic around it (the countdown clocks, the
              scare emails) isn&rsquo;t coming from the law. It&rsquo;s coming from people trying to sell
              you something. Here&rsquo;s the calm truth, straight from the guidance you&rsquo;ll actually be
              measured against:
            </p>
          </div>

          {/* the four reassurances - a 2×2 grid; claim bold, verbatim quote in a cited blockquote */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border-default bg-surface-1 p-6">
              <p className="text-base font-semibold text-text-primary">Yours is meant to be small.</p>
              <blockquote className="mt-3 border-l-2 border-brand-primary/40 pl-4 italic text-text-secondary leading-relaxed">
                &ldquo;&hellip;proportionate to the size, complexity and risk profile of their operations.&rdquo;
              </blockquote>
              <cite className="mt-3 block not-italic font-mono text-xs text-text-muted">MGN 710, &sect;1.2</cite>
            </div>
            <div className="rounded-2xl border border-border-default bg-surface-1 p-6">
              <p className="text-base font-semibold text-text-primary">It&rsquo;s not meant to be a burden.</p>
              <blockquote className="mt-3 border-l-2 border-brand-primary/40 pl-4 italic text-text-secondary leading-relaxed">
                &ldquo;&hellip;practical and effective without being unnecessarily burdensome.&rdquo;
              </blockquote>
              <cite className="mt-3 block not-italic font-mono text-xs text-text-muted">MGN 710, &sect;1</cite>
            </div>
            <div className="rounded-2xl border border-border-default bg-surface-1 p-6">
              <p className="text-base font-semibold text-text-primary">You can start it before it&rsquo;s finished.</p>
              <blockquote className="mt-3 border-l-2 border-brand-primary/40 pl-4 italic text-text-secondary leading-relaxed">
                &ldquo;&hellip;specific items in the assessment may reflect ongoing development, as full
                implementation of all the necessary systems is underway.&rdquo;
              </blockquote>
              <cite className="mt-3 block not-italic font-mono text-xs text-text-muted">MGN 710, &sect;3.8 <span className="text-text-muted/80">(about the self-assessment)</span></cite>
            </div>
            <div className="rounded-2xl border border-border-default bg-surface-1 p-6">
              <p className="text-base font-semibold text-text-primary">The surveyor samples. They don&rsquo;t grade you.</p>
              <blockquote className="mt-3 border-l-2 border-brand-primary/40 pl-4 italic text-text-secondary leading-relaxed">
                &ldquo;Sampling is intended to be brief and focused; it does not assess the effectiveness of
                the SMS.&rdquo;
              </blockquote>
              <cite className="mt-3 block not-italic font-mono text-xs text-text-muted">MGN 710, &sect;4.3</cite>
            </div>
          </div>

          {/* the close - the differentiator (names no one) + the founder-signed line as a pull-quote + CTA */}
          <div className="mt-10 max-w-3xl">
            <p className="text-text-secondary leading-relaxed">
              So ignore the three-minute &ldquo;compliance scorecards&rdquo; and the countdown timers. No quiz
              can tell you your SMS is compliant. A real survey doesn&rsquo;t even assess that. What
              counts is that you&rsquo;ve <strong className="font-semibold text-text-primary">started</strong>,
              and that you&rsquo;re <strong className="font-semibold text-text-primary">honest</strong> about
              where you are.
            </p>
            <p className="mt-6 text-2xl md:text-3xl font-bold text-text-primary leading-snug">
              Being started and honest is enough. So start today.
            </p>
            <CtaRow className="mt-8" showDemoPlaceholder={false} />
          </div>
        </div>
      </section>

      {/* ── BUILT THE SAME WAY - the pay-off to the honest-positioning section above: the pitch promises
             calm + honest + proportionate; this shows the PRODUCT is built that way. 🟥 PRODUCT claims (not
             Code quotes) - plain bold-claim + explanation cards, NO <blockquote>/<cite> (that stays reserved
             for the verbatim Code quotes above). No "compliant"/"guaranteed"/"MCA-approved"; the close lands
             on honest + started. Reads as a PAIR with the section above (same shell + 2×2 grid). ── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider">No panic, by design</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary leading-tight">
              Built the same way.
            </h2>
            <p className="mt-5 text-lg text-text-secondary leading-relaxed">
              We didn&rsquo;t just tell you not to panic. We built the whole product around it. SMS
              Workboat is designed to be honest and proportionate: the same calm, plain-spoken approach the
              Code actually asks for.
            </p>
          </div>

          {/* four design truths - a 2×2 grid; product claims, plain bold claim + explanation (no blockquotes) */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border-default bg-surface-1 p-6">
              <p className="text-base font-semibold text-text-primary">It shows what you&rsquo;ve done, never grades you.</p>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                No pass, no fail, no &ldquo;compliance score.&rdquo; Just a clear view of what you&rsquo;ve
                recorded and what&rsquo;s still open. Nova, the built-in assistant, will never tell you
                you&rsquo;re compliant. That&rsquo;s the surveyor&rsquo;s call, not an app&rsquo;s.
              </p>
            </div>
            <div className="rounded-2xl border border-border-default bg-surface-1 p-6">
              <p className="text-base font-semibold text-text-primary">Every &ldquo;done&rdquo; is one a surveyor could trust.</p>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                When something needs a look, it says so, plainly. It would rather show you an honest
                amber than a comforting green that isn&rsquo;t earned. Nothing here is dressed up to look
                finished when it isn&rsquo;t.
              </p>
            </div>
            <div className="rounded-2xl border border-border-default bg-surface-1 p-6">
              <p className="text-base font-semibold text-text-primary">Start small. Build it up.</p>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                A one-boat operation&rsquo;s SMS is meant to be small, so setup is four plain areas, not
                a wall of forms. Do what you can today, and come back and add the rest. It&rsquo;s built to be
                <em> started</em>, not finished in one sitting.
              </p>
            </div>
            <div className="rounded-2xl border border-border-default bg-surface-1 p-6">
              <p className="text-base font-semibold text-text-primary">Your surveyor gets exactly what they sample.</p>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                When the examination comes, you hand over your self-assessment and the evidence behind it,
                in their language, the way they actually check it. No last-minute scramble, no separate
                folder to build.
              </p>
            </div>
          </div>

          {/* the close - a pull-quote landing on honest, mirroring the section above + the shared CtaRow */}
          <div className="mt-10 max-w-3xl">
            <p className="text-2xl md:text-3xl font-bold text-text-primary leading-snug">
              An honest message deserves an honest tool. This is one.
            </p>
            <CtaRow className="mt-8" showDemoPlaceholder={false} />
          </div>
        </div>
      </section>

      {/* ── §2b - SHOW EVERYTHING: real screens · the price · Nova's honest refusal ── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">See the actual product</h2>
            <p className="mt-3 text-text-secondary">Real screens - no illustrations, no mockups. This is what you get.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Screenshot {...SHOTS.certificates} />
            <Screenshot {...SHOTS.maintenance} />
            <Screenshot {...SHOTS.riskAssessments} />
            <Screenshot {...SHOTS.personAshore} />
            <Screenshot {...SHOTS.certCapture} />
            <Screenshot {...SHOTS.recordSigned} />
          </div>
        </div>
      </section>

      {/* ── §2c LIVE DEMO - the anti-gatekeeping CTA. Real seeded product; DEMO_ENABLED gates the link so
             there is no dead public link pre-launch. Honesty: every claim is true - it IS the real product
             on dummy data you can drive, so "book a call" vs "drive it yourself" is what is on offer, not a boast. ── */}
      <section className="relative border-t border-border-subtle bg-surface-1/60 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-3">
            No sales call. No &ldquo;book a demo.&rdquo; No catch.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5 leading-tight">
            Drive it right now.
          </h2>
          <p className="text-lg text-text-secondary mb-4">
            Everyone else makes you book a call and take their word for it. Ours you can drive right now - a demo boat, fully set up, click anything.
          </p>
          <p className="text-text-secondary mb-8">
            It is not a video and it is not a guided tour on rails. It is the actual product with a real boat&apos;s SMS already built - the certificates, the risk assessments, the drill records, the self-assessment, and Nova answering Code questions in plain English. Poke at all of it - there is nothing you can break. What you see on this page is the shape of it; there is more underneath once you&rsquo;re aboard.
          </p>
          <div className="flex justify-center">
            {DEMO_ENABLED ? (
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
                Open the live demo <ChevronRight className="w-4 h-4" />
              </a>
            ) : (
              <span
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border-default text-text-muted text-sm font-medium cursor-default"
                title="A no-sign-up live demo arrives with launch"
              >
                Live demo coming with launch
              </span>
            )}
          </div>
          <p className="mt-4 text-sm text-text-muted">
            Dummy data · no sign-up · nothing to install · two minutes.
          </p>
        </div>
      </section>

      {/* ── NOVA - its own section (W5 Task 2). 🟥 Guardrail 6: retrieves + cites, never a verdict; no
             "AI does your compliance" overclaim. Examples are real product behaviour, no invented UI. ── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-accent-cyan"><Sparkles className="w-4 h-4" /> Meet Nova</div>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-text-primary max-w-2xl">Nova handles the compliance, you handle the boat.</h2>
          <p className="mt-3 text-text-secondary max-w-2xl">
            It retrieves and cites the Workboat Code, flags what&rsquo;s coming due before it slips, and tells
            you honestly when a call isn&rsquo;t the software&rsquo;s to make. It never rules a verdict - that
            stays with your surveyor.
          </p>

          <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* the honest-refusal card - moved here; it's Nova's story */}
            <div className="rounded-2xl border border-accent-cyan/25 bg-surface-1 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-accent-cyan mb-3">
                <Sparkles className="w-4 h-4" /> Ask Nova: &ldquo;Will I pass survey?&rdquo;
              </div>
              <blockquote className="border-l-2 border-accent-cyan/40 pl-4 text-text-secondary leading-relaxed">
                &ldquo;This isn&rsquo;t a pass/fail - your surveyor or Designated Person decides that.
                What I can do is show you exactly where you stand.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-text-muted">
                Nova retrieves and cites the Code; it never rules a verdict. The refusal is the feature - 
                you can trust what it <em>does</em> say.
              </p>
            </div>
            <Screenshot {...SHOTS.novaRefusal} aspect="phone" className="justify-self-center" />
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-border-default bg-surface-1 p-5">
              <BellRing className="w-6 h-6 text-brand-primary" />
              <p className="mt-3 text-sm font-semibold text-text-primary">It comes to you first</p>
              <p className="mt-1 text-xs text-text-muted leading-relaxed">
                Expiry and next-due dates surface before they slip - &ldquo;your liferaft service is due
                next month - want it on the calendar?&rdquo; One tap and it&rsquo;s logged.
              </p>
            </div>
            <div className="rounded-xl border border-border-default bg-surface-1 p-5">
              <Scale className="w-6 h-6 text-brand-primary" />
              <p className="mt-3 text-sm font-semibold text-text-primary">It cites the actual Code</p>
              <p className="mt-1 text-xs text-text-muted leading-relaxed">
                Answers come back with their section reference - Appendix 8, section 12 for maintenance -
                the same citation the product shows, so you can check its working.
              </p>
            </div>
            <div className="rounded-xl border border-border-default bg-surface-1 p-5">
              <ShieldCheck className="w-6 h-6 text-accent-cyan" />
              <p className="mt-3 text-sm font-semibold text-text-primary">It never rules a verdict</p>
              <p className="mt-1 text-xs text-text-muted leading-relaxed">
                Whether you pass isn&rsquo;t for it to answer - that&rsquo;s your surveyor or Designated Person.
                It shows you where you stand; the decision stays human.
              </p>
            </div>
            <div className="rounded-xl border border-border-default bg-surface-1 p-5">
              <ClipboardCheck className="w-6 h-6 text-brand-primary" />
              <p className="mt-3 text-sm font-semibold text-text-primary">It walks you through your pack</p>
              <p className="mt-1 text-xs text-text-muted leading-relaxed">
                &ldquo;Show me the fire-fighting records&rdquo; - Nova goes straight to them and cites what
                you&rsquo;ve got, so a survey visit is a walk-through, not a scramble.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── W-S1 - THE MOMENTS YOUR SMS MEETS THE WORLD ───────────────────────── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary max-w-2xl">The moments your SMS meets the world</h2>
          {/* Two moments as balanced text cards; the inspector screen shows one of them full-width below. */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {/* Crew (QR) */}
            <div className="rounded-2xl border border-border-default bg-surface-1 p-6">
              <div className="flex items-center gap-2 text-brand-primary font-semibold"><QrCode className="w-5 h-5" /> A deckhand joins for the day</div>
              <p className="mt-3 text-text-secondary leading-relaxed">
                You invite them once; they sign in on their own phone - no app to download - scan the
                wheelhouse sticker to sign onto the boat, and put their signature on the risk assessment
                before you leave the berth.
              </p>
            </div>
            {/* Inspector (the link) */}
            <div className="rounded-2xl border border-border-default bg-surface-1 p-6">
              <div className="flex items-center gap-2 text-brand-primary font-semibold"><ShieldCheck className="w-5 h-5" /> Survey day</div>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Hand the inspector a link - 4 hours, one boat, read-only, no app. You&rsquo;re notified the
                moment it opens; kill it when they leave. If something&rsquo;s missing, it shows as missing.
                Surveyors trust records that don&rsquo;t pretend.
              </p>
            </div>
          </div>
          {/* the inspector link, shown - the real screen, full-width so the wide capture reads clearly */}
          <div className="mt-8 max-w-4xl mx-auto">
            <Screenshot {...SHOTS.inspectorPack} />
          </div>
        </div>
      </section>

      {/* ── W-S2 - WORKS WHERE YOU WORK (offline) — centered single column (the On board→Saved pills are
             the visual; no image needed, and the live demo carries the motion). ─────────────────────── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-status-warning font-semibold"><WifiOff className="w-5 h-5" /> Works where you work</div>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-text-primary">
            Keep working when the signal drops - record drills, snap evidence, sign crew on.
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            It saves on board and syncs itself when you&rsquo;re back in range. A photo you snap offline
            reads <span className="text-text-primary font-medium">&ldquo;On board&rdquo;</span> - not
            &ldquo;Saved&rdquo; - until the server confirms it. Honesty you can see.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1 text-text-secondary"><WifiOff className="w-3.5 h-3.5" /> On board</span>
            <ChevronRight className="w-4 h-4 text-text-muted" />
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1 text-status-success"><Wifi className="w-3.5 h-3.5" /> Saved</span>
          </div>
        </div>
      </section>

      {/* ── W-S3 - STARTS WITH ONE BOAT. GROWS INTO A FLEET. ──────────────────── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <Screenshot {...SHOTS.fleetOverview} />
          <div>
            <div className="flex items-center gap-2 text-brand-primary font-semibold"><Ship className="w-5 h-5" /> Grows with you</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-text-primary">Starts with one boat. Grows into a fleet.</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              One boat means zero fleet clutter - just your boat. Add a second and the fleet office appears:
              the overview, the what&rsquo;s-needed-where feed, the boat switcher, crew, per-boat QR and
              inspector links. The features arriving free as you grow <em>are</em> the fleet discount - 
              which is why the price stays flat, £29 per boat.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-text-secondary">
              {['Fleet overview, worst-first', 'What’s needed where - one tap to fix', 'Per-boat QR stickers + inspector links'].map((f) => (
                <li key={f} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-status-success shrink-0" /> {f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── W-S4 - THE CAMERA MOMENT ──────────────────────────────────────────── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 text-brand-primary font-semibold"><Camera className="w-5 h-5" /> Fix first, document after</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-text-primary">Photograph the fix, done.</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Snap → review → caption → saved. The evidence writes itself around the photo. And when a
              certificate lands, Nova reads the details from the picture so you just confirm them.
            </p>
          </div>
          <Screenshot {...SHOTS.cameraReview} aspect="phone" className="justify-self-center" />
        </div>
      </section>

      {/* ── FOUNDING SKIPPERS strip (W6 Task 3) — FOUNDING_MODE only. Quiet: the offer + the static
             "10 boats" (no live counter, no countdown) + apply. 🟥 The £29 stays visible (teaser below). ── */}
      {FOUNDING_MODE && (
        <section className="relative border-t border-border-subtle py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-accent-cyan/25 bg-surface-1 p-6 md:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-accent-cyan"><Anchor className="w-4 h-4" /> Founding Skippers · 10 boats</div>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-text-primary">Free while we finish it together. Then a permanent founder’s discount - always below our public price.</h2>
              <p className="mt-3 text-text-secondary">Free to test, then founder pricing that stays below our public rate. Ten boats join as founding skippers, use it for real, and shape what it becomes.</p>
              <p className="mt-4 text-sm text-text-muted">What we ask: real use on a real boat · honest findings · a conversation when we need one.</p>
              <div className="mt-6"><ApplyCta className="btn-primary" /></div>
            </div>
          </div>
        </section>
      )}

      {/* ── PRICING TEASER (W-P) ──────────────────────────────────────────────── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">£29 a month per boat. Everything included.</h2>
          <p className="mt-3 text-text-secondary">No tiers, no per-user charges, nothing gated behind a &ldquo;Pro&rdquo; plan.</p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
            {[
              { icon: ClipboardCheck, t: 'Your annual self-assessment', d: 'Produced from your records.' },
              { icon: FileText, t: 'Your whole SMS as PDFs', d: 'Download the document pack any time.' },
              { icon: ShieldCheck, t: 'The inspection pack', d: 'Ready any day of the year.' },
            ].map((o) => (
              <div key={o.t} className="rounded-xl border border-border-default bg-surface-1 p-4">
                <o.icon className="w-5 h-5 text-brand-primary" />
                <p className="mt-2 text-sm font-semibold text-text-primary">{o.t}</p>
                <p className="text-xs text-text-muted mt-0.5">{o.d}</p>
              </div>
            ))}
          </div>
          <CtaRow className="mt-10 justify-center" />
          <p className="mt-4 text-sm text-text-muted">{FOUNDING_MODE ? 'Founding Skippers: free while we finish it, then a permanent founder’s discount below our public price · 10 boats.' : '14-day free trial · no card required.'}</p>
          <Link to="/pricing" className="mt-4 inline-block text-sm text-brand-primary hover:text-brand-hover">See what&rsquo;s included &rarr;</Link>
        </div>
      </section>
    </div>
  );
}
