import { Link } from 'react-router-dom';
import { Check, ChevronRight, ShieldCheck, FileText, ClipboardCheck, Anchor } from 'lucide-react';
import { TRIAL_HREF, DEMO_ENABLED, DEMO_URL, FOUNDING_MODE } from '../config';
import { useSeo } from '../lib/seo';
import { ROUTE_SEO } from '../lib/routeSeo';
import ApplyCta from '../components/ApplyCta';

/**
 * Pricing (design W-P, FOUNDER-SIGNED 2026-07-12). 🟥 £29 flat per boat, everything included - no tiers,
 * no per-user charges, nothing gated. 14-day no-card trial. The tangible outputs are
 * named honestly: self-assessment · download your SMS as PDFs · inspection pack. The parked
 * evidence-archive export is NOT claimed.
 */

const INCLUDED = [
  'Vessel setup + certificates, with expiry reminders',
  'Risk assessments from templates you confirm',
  'A maintenance log that derives its own due dates',
  'Drills, incidents and near-misses - recorded, photo-first',
  'Person Ashore + crew familiarisation',
  'QR sign-on for crew - no app, no account',
  'Time-limited, read-only inspector links',
  'Nova - the Code assistant, cited answers, no verdicts',
  'The fleet office the moment you add a second boat',
  'Works offline on board, syncs when you’re back in range',
];

const OUTPUTS = [
  { icon: ClipboardCheck, t: 'Your annual self-assessment', d: 'Produced from the records you keep - ready to sign.' },
  { icon: FileText, t: 'Download your whole SMS as PDFs', d: 'The document pack, yours to keep, any time.' },
  { icon: ShieldCheck, t: 'The inspection pack', d: 'Assembled and ready any day of the year.' },
];

export default function PricingPage() {
  useSeo(ROUTE_SEO['/pricing']);
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {FOUNDING_MODE ? (
            <>
              {/* W6 — the founding offer is the star; the £29 stays as the launch anchor below it. */}
              <div className="mx-auto max-w-2xl rounded-2xl border border-accent-cyan/30 bg-surface-1 p-6 md:p-8">
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-accent-cyan"><Anchor className="w-4 h-4" /> Founding Skippers · 10 boats</div>
                <h1 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">Free while we finish it together, then £15 a month — forever.</h1>
                <p className="mt-3 text-lg md:text-xl font-semibold gradient-text">Free to test. £15 forever. Instead of £29.</p>
                <p className="mt-3 text-text-secondary max-w-xl mx-auto">
                  Ten boats join as founding skippers, use SMS Workboat for real, and shape what it becomes.
                  What we ask: real use on a real boat · honest findings · a conversation when we need one.
                </p>
                <div className="mt-6 flex justify-center"><ApplyCta className="btn-primary justify-center" /></div>
              </div>
              <p className="mt-8 text-2xl md:text-3xl font-bold text-text-primary">£29 a month per boat at launch.</p>
              <p className="mt-1 text-xl md:text-2xl font-semibold gradient-text">Everything included.</p>
              <p className="mt-4 text-text-secondary max-w-xl mx-auto">
                One price, the full package. No tiers, no per-user charges, nothing gated
                behind a &ldquo;Pro&rdquo; plan. The features that arrive as you grow are already yours.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl md:text-5xl font-bold text-text-primary">£29 a month per boat.</h1>
              <p className="mt-2 text-2xl md:text-3xl font-semibold gradient-text">Everything included.</p>
              <p className="mt-5 text-text-secondary max-w-xl mx-auto">
                One price, the full package. No tiers, no per-user charges, nothing gated
                behind a &ldquo;Pro&rdquo; plan. The features that arrive as you grow are already yours.
              </p>
            </>
          )}
        </div>

        {/* The card */}
        <div className="mt-10 rounded-2xl border border-brand-primary/30 bg-surface-1 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-4xl font-bold text-text-primary">£29<span className="text-lg font-medium text-text-muted"> / boat / month</span></p>
              {/* W2 - arithmetic-honest anchor: £29/mo ÷ 30 ≈ £0.97 (TAGLINE-BANK.md). */}
              <p className="mt-1 text-sm font-medium text-brand-primary">Less than £1 a day.</p>
              {FOUNDING_MODE
                ? <p className="mt-1 text-sm text-text-secondary">Founding Skippers: free to test, then £15/mo forever.</p>
                : <p className="mt-1 text-sm text-text-secondary">14-day free trial · no card required.</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {FOUNDING_MODE ? (
                <ApplyCta className="btn-primary justify-center" />
              ) : (
                <Link to={TRIAL_HREF === '/pricing' ? '#start' : TRIAL_HREF} className="btn-primary justify-center">Start free trial <ChevronRight className="w-4 h-4" /></Link>
              )}
              {DEMO_ENABLED ? (
                <a href={DEMO_URL} className="btn-secondary justify-center">Try the demo - no sign-up</a>
              ) : null}
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {INCLUDED.map((f) => (
              <div key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-status-success" /> {f}
              </div>
            ))}
          </div>
        </div>

        {/* What it produces */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-text-primary text-center">What your £29 produces</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {OUTPUTS.map((o) => (
              <div key={o.t} className="rounded-xl border border-border-default bg-surface-1 p-5">
                <o.icon className="w-6 h-6 text-brand-primary" />
                <p className="mt-3 text-sm font-semibold text-text-primary">{o.t}</p>
                <p className="mt-1 text-xs text-text-muted leading-relaxed">{o.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Start block. W6: in FOUNDING_MODE it's the founding apply; flag-off restores the trial start block. */}
        {FOUNDING_MODE ? (
          <div className="mt-14 rounded-2xl border border-accent-cyan/25 bg-surface-1 p-6 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary">Apply to be a Founding Skipper</h2>
            <p className="mt-2 text-text-secondary">Ten boats. Free while we finish it together, then £15 a month — forever, instead of £29.</p>
            <p className="mt-4 text-sm text-text-muted">What we ask: real use on a real boat · honest findings · a conversation when we need one.</p>
            <div className="mt-6 flex justify-center"><ApplyCta className="btn-primary justify-center" /></div>
          </div>
        ) : (
          <div id="start" className="mt-14 rounded-2xl border border-border-default bg-surface-2 p-6 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary">Start your 14-day free trial</h2>
            <p className="mt-2 text-text-secondary">Your name, your email, your boat - that&rsquo;s all it takes to begin.</p>
            <p className="mt-4 text-sm text-text-muted">
              The trial sign-up form connects to your account setup when the site goes live. For early access,
              <a href="mailto:info@smsystems.uk?subject=SMS%20Workboat%20trial" className="text-brand-primary hover:text-brand-hover"> email us</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
