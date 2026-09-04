import { Link } from 'react-router-dom';
import {
  CheckCircle2, X, ChevronRight, Ship, Building2, Cpu,
  ArrowRight, Zap, Star, Shield, Users, Anchor, Clock,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';

interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  excluded?: string[];
  cta: { label: string; href: string; style: string };
  highlight?: boolean;
  badge?: string;
  icon: React.ElementType;
}

function PlanCard({
  name,
  price,
  period,
  description,
  features,
  excluded = [],
  cta,
  highlight = false,
  badge,
  icon: Icon,
}: PlanCardProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden ${
        highlight
          ? 'bg-surface-1 border-2 border-brand-primary/50 ring-1 ring-brand-primary/20'
          : 'bg-surface-1 border border-white/5'
      } card-glow flex flex-col`}
    >
      {badge && (
        <div className="absolute top-0 right-0">
          <div className="bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            {badge}
          </div>
        </div>
      )}

      <div className="p-6 flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${highlight ? 'bg-brand-primary/20' : 'bg-surface-2'}`}>
            <Icon className={`w-5 h-5 ${highlight ? 'text-brand-primary' : 'text-text-primary'}`} />
          </div>
          <h3 className="text-lg font-semibold text-text-primary">{name}</h3>
        </div>

        <div className="mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl md:text-4xl font-bold text-text-primary font-mono tabular-nums">
              {price}
            </span>
            <span className="text-sm text-text-muted">{period}</span>
          </div>
          <p className="text-sm text-text-secondary mt-2">{description}</p>
        </div>

        <ul className="space-y-2.5 mb-4">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
              <CheckCircle2 className="w-4 h-4 text-status-success shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
          {excluded.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
              <X className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 pt-0">
        <Link to={cta.href} className={`${cta.style} w-full justify-center`}>
          {cta.label}
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Pricing"
            title="Per vessel, not per seat. Everything included."
            subtitle="SMS Bridge — the full fleet & operations platform — is in build now; register your interest for founding pricing. Running a single workboat under 24m? SMS Workboat is live today at £49 a month per boat."
          />
        </div>
      </section>

      {/* SMS Bridge — the flagship platform (primary), in build now */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-xl bg-surface-1 border-2 border-accent-violet/40 ring-1 ring-accent-violet/20 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-accent-violet/20">
                    <Building2 className="w-6 h-6 text-accent-violet" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary">SMS Bridge</h2>
                    <p className="text-sm text-text-secondary">The full fleet & operations platform — for commercial operators, fleets, and offshore companies.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-sm font-semibold text-accent-violet">
                    <Clock className="w-4 h-4" /> In build now · coming soon
                  </span>
                </div>

                <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                  All modules, unlimited users, priced by gross tonnage so your cost scales with vessel complexity. In build now with our first trial operators. Register your interest and we'll bring you in as it opens up.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                  {[
                    'Maintenance & Equipment Management',
                    'HSE, Permits to Work & Safety',
                    'Purchasing & Supply Chain',
                    'Operations & Daily Reporting',
                    'AI Intelligence & Analytics',
                    'Unlimited users (entire crew + shore)',
                    'Unlimited shore locations',
                    'Self-service onboarding',
                    'All future updates included',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-status-success shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <a href="mailto:info@smsystems.uk?subject=SMS%20for%20fleets" className="btn-primary text-base px-8 py-4 justify-center">
                    Register interest — SMS for fleets <ChevronRight className="w-5 h-5" />
                  </a>
                  <a href="https://smsworkboat.co.uk" target="_blank" rel="noopener noreferrer" className="btn-secondary text-base px-8 py-4 justify-center">
                    Under 24m? Try SMS Workboat now
                  </a>
                </div>

                {/* Founding Partner */}
                <div className="rounded-lg bg-gradient-to-r from-brand-primary/10 to-accent-violet/10 border border-brand-primary/30 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-brand-primary" />
                    <h3 className="text-sm font-bold text-text-primary">Founding Partner Programme</h3>
                    <span className="text-xs font-bold px-2 py-0.5 bg-status-warning/20 text-status-warning rounded-full">
                      Limited to 10 companies
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Early fleet operators who join SMS Bridge during its build get founding partner pricing — reduced rates locked in for life. Register your interest for details.
                  </p>
                </div>
              </div>

              {/* Fleet + Annual */}
              <div className="px-8 md:px-10 py-6 bg-surface-2/30 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Anchor className="w-4 h-4 text-brand-primary" />
                      <h3 className="text-sm font-bold text-text-primary">Fleet discounts available for 5+ vessels</h3>
                    </div>
                    <p className="text-xs text-text-muted">Scaling discounts for growing fleets. Contact us for fleet pricing.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-brand-primary" />
                      <h3 className="text-sm font-bold text-text-primary">Annual commitment</h3>
                    </div>
                    <p className="text-xs text-text-muted">Pay annually and get 2 months free — effectively 17% off every vessel.</p>
                  </div>
                </div>
              </div>

              {/* Free Onboarding */}
              <div className="px-8 md:px-10 py-6 border-t border-white/5">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-brand-primary/20 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary mb-1">
                      Set up at your pace. Pay when you're operational.
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      60 days of free onboarding per vessel. Full platform access during setup. Billing starts when your first department goes operational. Each vessel has its own independent window.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SMS Workboat — live now, cross-link OUT to its own site (not the headline here) */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-xl bg-surface-1 border border-status-success/20 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-status-success/20">
                    <Ship className="w-5 h-5 text-status-success" />
                  </div>
                  <h2 className="text-xl font-bold text-text-primary">SMS Workboat</h2>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-status-success/10 border border-status-success/30 text-xs font-semibold text-status-success">
                    Live now
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Run a single commercial workboat under 24m? SMS Workboat is our live product — the Safety
                  Management System the Workboat Code requires, <span className="text-text-primary font-medium">from £49 a month per boat, everything included</span>. It has its own site.
                </p>
              </div>
              <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto">
                <a href="https://smsworkboat.co.uk" target="_blank" rel="noopener noreferrer" className="btn-light text-sm px-6 py-3 justify-center">
                  Try SMS Workboat <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://demo.smsworkboat.co.uk/workboat-demo" target="_blank" rel="noopener noreferrer" className="btn-secondary border-status-success/30 text-status-success hover:bg-status-success/10 text-sm px-6 py-3 justify-center">
                  See the live demo
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-xl bg-surface-1 border border-white/5 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-surface-2">
                  <Cpu className="w-6 h-6 text-text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Enterprise</h3>
                  <p className="text-sm text-text-muted">50+ vessel fleets</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                Custom pricing for large fleet operators. Everything in SMS Bridge plus the full AI
                intelligence suite, fleet-wide anomaly detection, equipment health scoring, predictive
                insights, dedicated account management, custom integrations, and SLA guarantees. Part of the
                SMS Bridge roadmap — coming soon.
              </p>
              <a href="mailto:info@smsystems.uk" className="btn-secondary text-sm px-6 py-3">
                Contact Us <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Unlimited Users — The Differentiator */}
      <section className="py-16 md:py-24 bg-surface-1/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <Users className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-text-primary mb-3">
                Unlimited users. No per-seat fees. Ever.
              </h2>
              <p className="text-base text-text-secondary max-w-2xl mx-auto">
                Most maritime software charges per user on top of vessel fees. SMS includes every user
                at no extra cost — the entire crew, shore staff, and office managers.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="rounded-xl bg-surface-1 border border-white/5 p-6">
                <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-4">
                  What this means for your team
                </h3>
                <ul className="space-y-3">
                  {[
                    'Every role gets access — engineers, HSE, purchasing, operations, shore management',
                    'No "only 5 people have access" bottleneck that kills adoption',
                    'Shore staff and office managers included — no separate license',
                    'New crew joining a rotation get instant access with the right permissions for their role',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-status-success shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-xl bg-surface-1 border border-white/5 p-6">
                <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-4">
                  Why it matters
                </h3>
                <ul className="space-y-3">
                  {[
                    'More users means more data flowing into the platform',
                    'More data means smarter AI intelligence across your fleet',
                    'Higher adoption means the platform becomes indispensable',
                    'A system 40 people use daily is worth more than one only 5 can access',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                      <Zap className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How SMS Compares — no specific competitor claims */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How SMS compares"
            subtitle="The typical maritime CMMS comes with costs beyond the license fee."
          />

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-text-muted"></th>
                    <th className="text-center py-4 px-4">
                      <div className="text-sm font-semibold text-text-muted">Typical Maritime CMMS</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="text-sm font-semibold text-brand-primary">SMS</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['User licensing', 'Per-seat fees on top of vessel cost', 'Unlimited users included'],
                    ['Implementation', 'Consultants, months of setup', 'Self-service, weeks to go live'],
                    ['Implementation cost', 'Separate project fee', 'Included in subscription'],
                    ['Module pricing', 'Pay per module', 'All modules included at every tier'],
                    ['Shore access', 'Separate shore license', 'Shore locations included free'],
                    ['Training', 'Classroom sessions, additional cost', 'Built into the workflow'],
                    ['Contract terms', 'Multi-year lock-in', 'Monthly or annual, cancel anytime'],
                  ].map(([label, typical, sms]) => (
                    <tr key={label} className="hover:bg-surface-2/30 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-text-primary">{label}</td>
                      <td className="py-3 px-4 text-sm text-text-muted text-center">{typical}</td>
                      <td className="py-3 px-4 text-sm text-status-success text-center font-medium">{sms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Upgrade Path */}
      <section className="py-16 md:py-24 bg-surface-1/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Grow when you're ready"
            subtitle="Start with SMS Workboat on one boat today. When you outgrow it, SMS Bridge (coming soon) is the full fleet & operations platform — and your data comes with you."
          />

          <div className="space-y-3">
            {[
              { trigger: 'Buy a second vessel', reason: 'Need fleet overview and equipment transfers' },
              { trigger: 'Hire crew', reason: 'Need role separation, task assignment, departments' },
              { trigger: 'Win a commercial contract', reason: 'Need compliance reporting, permits, HSE' },
              { trigger: 'Face an insurance or class audit', reason: 'Need formal audit trail and documentation' },
              { trigger: 'Grow to 3+ vessels', reason: 'Need superintendent view and fleet analytics' },
            ].map((item) => (
              <ScrollReveal key={item.trigger}>
                <div className="flex items-start gap-4 rounded-lg bg-surface-1 border border-white/5 p-4">
                  <ArrowRight className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-medium text-text-primary">{item.trigger}</span>
                    <span className="text-sm text-text-muted"> — {item.reason}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-6 rounded-lg bg-brand-primary/5 border border-brand-primary/20 p-4 text-center">
              <p className="text-sm text-brand-primary font-medium">
                Upgrade is seamless — all your data is already in the platform. No migration. No re-entry.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Common questions" />

          <div className="space-y-4">
            {[
              {
                q: 'What does "per vessel" mean?',
                a: 'You pay per vessel on your account. All crew members on that vessel get full access at no extra cost. No per-seat licensing.',
              },
              {
                q: 'Why is pricing based on gross tonnage?',
                a: 'GT directly correlates with vessel complexity, equipment count, and crew size — so your price reflects the value SMS delivers. Every operator knows their GT, which makes quoting instant.',
              },
              {
                q: 'Are shore locations extra?',
                a: 'No. Yards, workshops, and offices are included at no extra cost. Only vessels count toward your subscription.',
              },
              {
                q: 'Is there a setup fee?',
                a: 'No. SMS Workboat is self-service — you set it up yourself, no implementation fee. SMS Bridge (coming soon) will include guided onboarding per vessel.',
              },
              {
                q: 'Can I move up to SMS Bridge later?',
                a: "Yes — that's the plan. SMS Workboat is live now; SMS Bridge, the full fleet & operations platform, is in build. When it opens, your data comes with you. Register your interest and we'll bring you in.",
              },
              {
                q: 'What if I cancel?',
                a: 'You can export your data at any time. No lock-in, no penalties. Your data is yours.',
              },
              {
                q: 'How do I try it?',
                a: "SMS Workboat is live — try the demo boat right now at demo.smsworkboat.co.uk, no sign-up, and start for real at smsworkboat.co.uk. £49 a month per boat, everything included. The first ten boats join as Founding Skippers.",
              },
            ].map(({ q, a }) => (
              <ScrollReveal key={q}>
                <div className="rounded-lg bg-surface-1 border border-white/5 p-5">
                  <h3 className="text-sm font-semibold text-text-primary mb-2">{q}</h3>
                  <p className="text-sm text-text-secondary">{a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface-1/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to get started?</h2>
            <p className="text-text-secondary mb-8">
              SMS Bridge is in build now — register your interest for founding fleet pricing. Running a single workboat under 24m? SMS Workboat is live today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:info@smsystems.uk?subject=SMS%20for%20fleets" className="btn-primary text-base px-8 py-4">
                Register interest <ChevronRight className="w-5 h-5" />
              </a>
              <a href="https://smsworkboat.co.uk" target="_blank" rel="noopener noreferrer" className="btn-light text-base px-8 py-4">
                Try SMS Workboat <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
