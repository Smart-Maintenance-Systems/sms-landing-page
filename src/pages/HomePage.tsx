import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight, ShieldCheck, Wifi, WifiOff, Camera, Anchor, QrCode, Scale,
  Ship, CheckCircle2, FileText, ClipboardCheck, Sparkles, BellRing,
} from 'lucide-react';
import Screenshot from '../components/Screenshot';
import ScreenshotPlaceholder from '../components/ScreenshotPlaceholder';
import { TRIAL_HREF, DEMO_ENABLED, DEMO_URL } from '../config';
import { useSeo } from '../lib/seo';
import { ROUTE_SEO } from '../lib/routeSeo';
import { SHOTS } from '../lib/screenshots';

/** The two primary CTAs - trial is primary; the live demo (design §2c) ships DEFAULT-OFF. */
function CtaRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Link to={TRIAL_HREF} className="btn-primary justify-center">
        Start free trial <ChevronRight className="w-4 h-4" />
      </Link>
      {DEMO_ENABLED ? (
        <a href={DEMO_URL} className="btn-secondary justify-center">Try SMS Workboat - no sign-up</a>
      ) : (
        <span
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border-default text-text-muted text-sm font-medium cursor-default"
          title="A no-sign-up live demo arrives with launch"
        >
          Try SMS Workboat - live demo coming with launch
        </span>
      )}
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
                <Scale className="w-3.5 h-3.5 text-brand-primary" /> Workboat Code Edition 3 · in force 13 December 2023
              </span>
              <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-text-primary">
                The law now requires an SMS.{' '}
                <span className="gradient-text">We are the SMS.</span>
              </h1>
              {/* §W-D honesty-trimmed sub-line, VERBATIM. 🟥 The original's verdict phrasing was dropped - 
                  records-ready wording only ("keeps every record ready"), never a pass/fail promise. */}
              <p className="mt-5 text-lg text-text-secondary">
                Every small commercial workboat must now hold a Safety Management System - Workboat Code
                Edition 3, in force since December 2023. SMS Workboat builds yours, and keeps every record
                ready for the day the surveyor steps aboard.
              </p>
              <CtaRow className="mt-8" />
              <p className="mt-4 text-sm text-text-muted">14-day free trial · no card · £29 a month per boat, everything included.</p>

              {/* Trust stack - publishable-now facts only. First line names the company in FULL so the
                  triple pun lands (SMS = Safety Management System = Smart Maintenance Systems). */}
              <div className="mt-8 flex flex-col gap-2 text-sm text-text-secondary">
                <span className="flex items-center gap-2"><Ship className="w-4 h-4 text-brand-primary shrink-0" /> SMS Workboat - by <span className="font-medium text-text-primary">Smart Maintenance Systems</span>.</span>
                <span className="flex items-center gap-2"><Anchor className="w-4 h-4 text-text-muted shrink-0" /> Built by people who work at sea - not people guessing from an office.</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-text-muted shrink-0" /> Built with serving industry reviewers.</span>
                <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-accent-cyan shrink-0" /> Nova handles the compliance, you handle the boat.</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Screenshot {...SHOTS.homeHero} aspect="phone" />
            </div>
          </div>

          <p className="mt-14 text-center text-xl md:text-2xl font-medium text-text-primary max-w-3xl mx-auto">
            We show you everything - the product, the price, Nova&rsquo;s sources, even your own gaps.
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
            <img src="/nvidia-inception-badge.jpg" alt="NVIDIA Inception Program" className="h-12 w-auto object-contain shrink-0 rounded" />
            <div>
              <p className="text-sm font-bold text-text-primary">AI recognised</p>
              <p className="text-sm text-text-secondary">Our AI vision is part of NVIDIA&rsquo;s Inception program for AI startups.</p>
            </div>
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

      {/* ── NOVA - her own section (W5 Task 2). 🟥 Guardrail 6: retrieves + cites, never a verdict; no
             "AI does your compliance" overclaim. Examples are real product behaviour, no invented UI. ── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-accent-cyan"><Sparkles className="w-4 h-4" /> Meet Nova</div>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-text-primary max-w-2xl">Nova handles the compliance, you handle the boat.</h2>
          <p className="mt-3 text-text-secondary max-w-2xl">
            She retrieves and cites the Workboat Code, flags what&rsquo;s coming due before it slips, and tells
            you honestly when a call isn&rsquo;t hers to make. She never rules a verdict - that stays with your
            surveyor.
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
            <ScreenshotPlaceholder
              kind="clip"
              aspect="phone"
              label="Nova declining “will I pass survey?”"
              caption="Clip: Nova’s honest refusal, live - to be filmed."
              className="justify-self-center"
            />
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border-default bg-surface-1 p-5">
              <BellRing className="w-6 h-6 text-brand-primary" />
              <p className="mt-3 text-sm font-semibold text-text-primary">She comes to you first</p>
              <p className="mt-1 text-xs text-text-muted leading-relaxed">
                Expiry and next-due dates surface before they slip - &ldquo;your liferaft service is due
                next month - want it on the calendar?&rdquo; One tap and it&rsquo;s logged.
              </p>
            </div>
            <div className="rounded-xl border border-border-default bg-surface-1 p-5">
              <Scale className="w-6 h-6 text-brand-primary" />
              <p className="mt-3 text-sm font-semibold text-text-primary">She cites the actual Code</p>
              <p className="mt-1 text-xs text-text-muted leading-relaxed">
                Answers come back with their section reference - Appendix 8, section 12 for maintenance - 
                the same citation the product shows, so you can check her working.
              </p>
            </div>
            <div className="rounded-xl border border-border-default bg-surface-1 p-5">
              <ShieldCheck className="w-6 h-6 text-accent-cyan" />
              <p className="mt-3 text-sm font-semibold text-text-primary">She never rules a verdict</p>
              <p className="mt-1 text-xs text-text-muted leading-relaxed">
                Whether you pass isn&rsquo;t hers to answer - that&rsquo;s your surveyor or Designated Person.
                She shows you where you stand; the decision stays human.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── W-S1 - THE MOMENTS YOUR SMS MEETS THE WORLD ───────────────────────── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary max-w-2xl">The moments your SMS meets the world</h2>
          <div className="mt-10 grid lg:grid-cols-2 gap-10">
            {/* Crew (QR) */}
            <div className="rounded-2xl border border-border-default bg-surface-1 p-6">
              <div className="flex items-center gap-2 text-brand-primary font-semibold"><QrCode className="w-5 h-5" /> A deckhand joins for the day</div>
              <p className="mt-3 text-text-secondary leading-relaxed">
                They scan the wheelhouse sticker with their own phone - no app, no account - sign onto the
                boat, and put their signature on the risk assessment before you leave the berth.
              </p>
              <ScreenshotPlaceholder kind="clip" aspect="phone" label="Scanning the QR → sign-on → RA signature" caption="Clip: the QR sign-on on a crew phone - to be filmed." className="mt-6 justify-self-center" />
            </div>
            {/* Inspector (the link) */}
            <div className="rounded-2xl border border-border-default bg-surface-1 p-6">
              <div className="flex items-center gap-2 text-brand-primary font-semibold"><ShieldCheck className="w-5 h-5" /> Survey day</div>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Hand the inspector a link - 4 hours, one boat, read-only, no app. You&rsquo;re notified the
                moment it opens; kill it when they leave. The gaps show honestly - the honesty spine
                playing for you.
              </p>
              <ScreenshotPlaceholder kind="clip" label="The inspector link opening the pack" caption="Clip: the inspector link opening - to be filmed." className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* ── W-S2 - WORKS WHERE YOU WORK (offline) ─────────────────────────────── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 text-status-warning font-semibold"><WifiOff className="w-5 h-5" /> Works where you work</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-text-primary">
              Keep working when the signal drops - record drills, snap evidence, sign crew on.
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              It saves on board and syncs itself when you&rsquo;re back in range. A photo you snap offline
              reads <span className="text-text-primary font-medium">&ldquo;On board&rdquo;</span> - not
              &ldquo;Saved&rdquo; - until the server confirms it. Honesty you can see.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1 text-text-secondary"><WifiOff className="w-3.5 h-3.5" /> On board</span>
              <ChevronRight className="w-4 h-4 text-text-muted" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1 text-status-success"><Wifi className="w-3.5 h-3.5" /> Saved</span>
            </div>
          </div>
          <ScreenshotPlaceholder kind="clip" aspect="phone" label="Airplane mode → snap → “On board” → signal → “Saved”" caption="Clip: offline capture syncing on reconnect - to be filmed." className="justify-self-center" />
        </div>
      </section>

      {/* ── W-S3 - STARTS WITH ONE BOAT. GROWS INTO A FLEET. ──────────────────── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <ScreenshotPlaceholder kind="clip" label="Tap “Add another boat” → the Fleet office appears" caption="Clip: the fleet office materialising on boat #2 - to be filmed." />
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

      {/* ── PRICING TEASER (W-P) ──────────────────────────────────────────────── */}
      <section className="relative border-t border-border-subtle py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">£29 a month per boat. Everything included.</h2>
          <p className="mt-3 text-text-secondary">No tiers, no fleet discount, no per-user charges, nothing gated behind a &ldquo;Pro&rdquo; plan.</p>
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
          <p className="mt-4 text-sm text-text-muted">14-day free trial · no card required.</p>
          <Link to="/pricing" className="mt-4 inline-block text-sm text-brand-primary hover:text-brand-hover">See what&rsquo;s included &rarr;</Link>
        </div>
      </section>
    </div>
  );
}
