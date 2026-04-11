import { Link } from 'react-router-dom';
import {
  ChevronRight, Users, ClipboardList, Wrench, CheckCircle2,
  ArrowRight, ArrowDown, Zap, Clock, Award, Star,
  UserPlus, Layout, Ship, Hammer, FileCheck, BarChart3,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import ScreenshotPlaceholder from '../components/ScreenshotPlaceholder';
import AnimatedCounter from '../components/AnimatedCounter';

function PhaseCard({
  number,
  icon: Icon,
  title,
  time,
  description,
  steps,
  highlight,
}: {
  number: number;
  icon: React.ElementType;
  title: string;
  time: string;
  description: string;
  steps: string[];
  highlight?: string;
}) {
  return (
    <ScrollReveal>
      <div className="relative">
        {/* Phase connector line */}
        {number < 5 && (
          <div className="hidden md:block absolute left-1/2 -bottom-12 transform -translate-x-1/2">
            <ArrowDown className="w-5 h-5 text-brand-primary/30" />
          </div>
        )}

        <div className="rounded-xl bg-surface-1 border border-white/5 overflow-hidden card-glow">
          {/* Header */}
          <div className="flex items-center gap-4 p-6 border-b border-white/5 bg-surface-2/30">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary text-white font-bold text-lg font-mono shrink-0">
              {number}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
              <p className="text-sm text-text-muted flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {time}
              </p>
            </div>
            <Icon className="w-6 h-6 text-brand-primary shrink-0" />
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">{description}</p>

            <ul className="space-y-2 mb-4">
              {steps.map((step) => (
                <li key={step} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-status-success shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            {highlight && (
              <div className="rounded-lg bg-brand-primary/5 border border-brand-primary/20 p-3">
                <p className="text-sm text-brand-primary font-medium">{highlight}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="How It Works"
            title="Go live in weeks. No consultants. No spreadsheet imports."
            subtitle="Every maritime CMMS on the market requires a 3-18 month implementation project costing £50,000+. SMS replaces all of that with a guided, self-service system — because the people documenting your equipment are the people who actually work on it."
          />
        </div>
      </section>

      {/* Why implementations fail */}
      <section className="py-16 md:py-24 bg-surface-1/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-xl bg-surface-1 border border-status-error/20 p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Why maritime software implementations fail
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  The typical CMMS onboarding looks like this: a vendor sends consultants. They spend
                  weeks interviewing your team. They manually enter equipment data from paper records
                  and spreadsheets. They configure the system in isolation, train your crew over three
                  days, then leave.
                </p>
                <p>
                  Six months later, half the equipment records are incomplete, the crew has reverted to
                  their old spreadsheets, and you're paying for a system nobody uses.
                </p>
                <p className="text-text-primary font-medium">
                  The root cause? The people loading the data aren't the people who know the equipment.
                  A consultant reading serial numbers off a nameplate doesn't know that pump #3 needs a
                  specific seal kit every 18 months, or that the starboard crane has a recurring hydraulic
                  issue that only shows up under load.
                </p>
                <p className="text-brand-primary font-semibold">
                  SMS solves this by putting knowledge capture in the hands of the people who have the knowledge.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Phase Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Process"
            title="How SMS onboarding actually works"
            subtitle="Five phases, parallel execution, crew-led knowledge capture."
          />

          <div className="space-y-12">
            <PhaseCard
              number={1}
              icon={Layout}
              title="Company Setup"
              time="Admin — 20 minutes"
              description="The admin enters the activation code, sets up company profile and branding, and defines the organisational structure. Your 60-day free onboarding period starts here — no charge until your vessels go operational."
              steps={[
                'Enter activation code from SMS',
                'Company profile and branding (logo, colours)',
                'Define locations — vessels, shore bases, offices',
                'Set up department structure using maritime templates',
                'Define areas within each location (engine room, bridge, deck)',
              ]}
              highlight="60 days free. Each vessel has its own independent onboarding window — no charge until it goes operational."
            />

            <PhaseCard
              number={2}
              icon={UserPlus}
              title="Distributed Task Delegation"
              time="Admin 30 min, then parallel"
              description="The admin delegates onboarding sections to department leads. Everyone works in parallel — no single bottleneck."
              steps={[
                'Admin sees all sections as cards on a dashboard',
                'Each section delegated to a department lead',
                'Everyone works in parallel — HSE, engineering, purchasing simultaneously',
                'Real-time progress tracking across all assignees',
                'Built-in chat for feedback and change requests',
                'Review flow: submit, review, approve or request changes',
              ]}
              highlight="The key insight: everyone works in parallel. No single bottleneck."
            />

            <PhaseCard
              number={3}
              icon={Hammer}
              title="Technician Equipment Walkthrough"
              time="1-2 weeks, parallel across locations"
              description="This is where SMS is fundamentally different from every competitor. Technicians physically walk each location documenting equipment — not importing from a spreadsheet."
              steps={[
                'Department heads claim existing equipment or add new items',
                'Technicians walk each location, area by area',
                'Real-time quality scoring (0-100) enforces completeness',
                'Two-pass system: technicians record needs, store personnel count stock',
                'Fuzzy duplicate detection catches equipment added under different names',
                'Multiple technicians work different areas simultaneously',
              ]}
              highlight="Quality scoring won't let you move on with a score of 30. Every item gets thorough documentation."
            />

            <PhaseCard
              number={4}
              icon={FileCheck}
              title="Register Review"
              time="2-3 days"
              description="Managers review the equipment register, checking quality scores, photos, parts lists, and documentation."
              steps={[
                'Quality score breakdown per equipment item',
                'Approve items or request specific changes with feedback',
                'Photo galleries, parts lists, technical docs reviewable in one screen',
                'Dashboard: total equipment, department claims, unclaimed items, duplicates',
                'Low quality items flagged for improvement',
                'Confirm register to transition to production',
              ]}
            />

            <PhaseCard
              number={5}
              icon={Zap}
              title="Go Live"
              time="Immediate"
              description="System transitions from onboarding to operational mode. Billing starts per vessel only when the first department goes operational — or at 60 days, whichever comes first. Your AI has already been learning from the data you loaded during setup."
              steps={[
                'Billing triggers per vessel when first operational action is taken',
                'All modules active based on subscription tier',
                'Department scoping active — each team sees their world',
                'AI intelligence layer already learning patterns',
                '30-day guided support during initial operations',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-surface-1/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The result: better data, faster."
          />

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-text-muted"></th>
                    <th className="text-center py-4 px-4">
                      <div className="text-sm font-semibold text-status-error">Traditional CMMS</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="text-sm font-semibold text-brand-primary">SMS</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Timeline', '3-18 months', '2-4 weeks'],
                    ['Who loads the data', 'Consultants / contractors', 'Your crew who know the equipment'],
                    ['Implementation cost', '£5,000-£50,000+', 'Included in subscription'],
                    ['Data quality', '40-60% completeness', 'Quality-scored completeness'],
                    ['Knowledge captured', 'Serial numbers & nameplate data', 'Operational knowledge, failure history, critical parts'],
                    ['Training required', '3-5 day classroom training', 'Self-guided, built into workflow'],
                    ['Who benefits', 'The vendor (consulting fees)', 'Your crew (learn by using)'],
                  ].map(([label, trad, sms]) => (
                    <tr key={label} className="hover:bg-surface-2/30 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-text-primary">{label}</td>
                      <td className="py-3 px-4 text-sm text-text-secondary text-center">{trad}</td>
                      <td className="py-3 px-4 text-sm text-status-success text-center font-medium">{sms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 rounded-xl bg-surface-1 border border-brand-primary/20 px-6 py-4">
                <Star className="w-5 h-5 text-brand-primary" />
                <span className="text-base text-text-primary">
                  <span className="font-bold">Quality scoring</span> enforces significantly higher data completeness than industry average
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What you get on day one */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What you get on day one" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Complete equipment database — quality-verified',
              'Department-scoped views for every team',
              'Maintenance scheduling & work orders',
              'HSE module with permit-to-work',
              'Purchasing workflow end-to-end',
              'Operations reporting & crew rotations',
              'AI intelligence already learning patterns',
              'Real-time team communication',
              'Audit-ready documentation',
            ].map((item) => (
              <ScrollReveal key={item}>
                <div className="flex items-center gap-3 rounded-lg bg-surface-1 border border-white/5 px-4 py-3">
                  <CheckCircle2 className="w-4 h-4 text-status-success shrink-0" />
                  <span className="text-sm text-text-secondary">{item}</span>
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
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Ready to go live in weeks?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              No consultants. No spreadsheet imports. No six-figure setup fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:info@smsystems.uk" className="btn-primary text-base px-8 py-4">
                Book a Demo <ChevronRight className="w-5 h-5" />
              </a>
              <Link to="/pricing" className="btn-secondary text-base px-8 py-4">
                View Pricing
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
