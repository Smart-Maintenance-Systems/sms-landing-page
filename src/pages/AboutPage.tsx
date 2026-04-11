import { Link } from 'react-router-dom';
import {
  Anchor, Award, MapPin, Clock, Wrench, Ship,
  Brain, TrendingUp, Users, ChevronRight, ArrowRight,
  Zap, Globe, Database, ShieldCheck, Cpu,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import AnimatedCounter from '../components/AnimatedCounter';

export default function AboutPage() {
  return (
    <>
      {/* Hero — Story */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-primary/3 rounded-full blur-[150px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-4 text-center">
              Our Story
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 text-center leading-tight">
              SMS was born in an engine room.
            </h1>
          </ScrollReveal>

          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <ScrollReveal delay={0.2}>
              <p>
                SMS was founded by two maritime professionals with over 40 years of combined
                offshore experience — on vessels, crane barges, rigs, and marine construction
                projects. Running electrical departments. Managing complex marine operations.
                Watching knowledge walk off the vessel every time the crew changed.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p>
                The problems were always the same: equipment records scattered across spreadsheets.
                Handover notes lost in email. Purchasing disconnected from maintenance. HSE paperwork
                that existed for audits, not for safety. And every 12 months, a new crew would arrive
                and start from scratch.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-text-primary font-medium italic">
                SMS was designed in the spaces between — on night shifts, during crew changeovers,
                between offshore rotations. One founder brings 20 years of hands-on electrical
                engineering and the technical vision behind every workflow. The other brings
                operational leadership at the highest level — Barge Master, Marine Superintendent,
                and current Operations Director delivering complex marine projects.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <p>
                It was built for one reason: because the people doing the work deserve tools that
                actually work the way operations work.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <p>
                Today, SMS is a complete vessel operations management platform — maintenance, safety,
                purchasing, operations, and AI intelligence — built from the ground up with 20 years
                of operational reality embedded in every workflow. And with SMS Light, that same
                technology is accessible to every boat owner, not just commercial fleets.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline milestones */}
      <section className="py-16 md:py-24 bg-surface-1/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="The journey" />

          <div className="space-y-8">
            {[
              {
                icon: Wrench,
                year: '2004-2024',
                title: '20 Years Offshore',
                desc: 'Vessels, crane barges, rigs, marine construction. Running electrical departments across offshore rotations worldwide.',
              },
              {
                icon: Zap,
                year: '2024',
                title: 'The Idea Takes Shape',
                desc: 'After decades of watching the same problems repeat — lost records, failed handovers, disconnected departments — SMS begins as a design on night shifts.',
              },
              {
                icon: Award,
                year: '2025',
                title: 'Innovate UK Smart Grant',
                desc: 'Awarded through the New Innovators in Marine and Maritime programme. Independent validation of the technology and market need.',
              },
              {
                icon: Cpu,
                year: '2025-2026',
                title: 'Platform Build',
                desc: '2,660+ automated tests. 149 database tables. 12 integrated modules. AI intelligence layer. Department-scoped operations. Self-service onboarding.',
              },
              {
                icon: Ship,
                year: '2026',
                title: 'Trial Launch',
                desc: 'First trial clients onboarding. Proving the platform with real operators, real vessels, real operational data.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="p-2.5 rounded-lg bg-brand-primary/10">
                      <item.icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    {i < 4 && <div className="w-px flex-1 bg-brand-primary/10 mt-3" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-xs font-mono text-brand-primary font-semibold">{item.year}</span>
                    <h3 className="text-base font-semibold text-text-primary mt-1 mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-xl bg-surface-1 border border-accent-violet/20 p-8 md:p-10">
              <Brain className="w-10 h-10 text-accent-violet mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">The Vision</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  SMS isn't just a software platform. It's the foundation for a new kind of maritime
                  intelligence.
                </p>
                <p>
                  Every maintenance record, fault report, safety observation, and operational log
                  captured in SMS builds a dataset that doesn't exist anywhere else. Over time, that
                  data enables: equipment manufacturer insights, insurance risk scoring, classification
                  society partnerships, predictive supply chain intelligence, and fleet-wide
                  benchmarking.
                </p>
                <p>
                  With SMS Light bringing thousands of small vessel owners onto the platform, the
                  equipment model intelligence compounds faster than any competitor can replicate.
                  When the 10,000th user documents their Yanmar 6LY, the AI knows that engine's
                  failure modes, service intervals, and critical parts — from real operational data,
                  not manufacturer guesswork.
                </p>
                <p className="text-text-primary font-semibold text-lg">
                  The platform is where it starts. The data is where it goes.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-24 bg-surface-1/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Backing & Credentials" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Award,
                label: 'Innovate UK Smart Grant',
                value: 'Awarded',
                desc: 'New Innovators in Marine & Maritime',
              },
              {
                icon: Clock,
                label: 'Offshore Experience',
                value: '40+ years',
                desc: 'Combined — electrical engineering, marine ops, barge mastering',
              },
              {
                icon: Wrench,
                label: 'Active Industry Roles',
                value: 'Founders',
                desc: 'Marine electrical, operations directorship, IJUBOA committee',
              },
              {
                icon: Database,
                label: 'Platform Scale',
                value: '2,660+ tests',
                desc: 'Zero failures across full stack',
              },
              {
                icon: MapPin,
                label: 'Based In',
                value: 'Cornwall, UK',
                desc: 'Great South West maritime cluster',
              },
              {
                icon: Users,
                label: 'Trial Status',
                value: '2 clients',
                desc: 'Confirmed and onboarding',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="rounded-lg bg-surface-1 border border-white/5 p-5 card-glow">
                  <item.icon className="w-5 h-5 text-brand-primary mb-3" />
                  <div className="text-lg font-bold text-text-primary font-mono">{item.value}</div>
                  <div className="text-sm font-medium text-text-primary mt-1">{item.label}</div>
                  <div className="text-xs text-text-muted mt-0.5">{item.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platform stats */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What we've built"
            subtitle="Not promises. Not mockups. Production code with 2,660+ automated tests."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: 2660, suffix: '+', label: 'Automated Tests' },
              { value: 226, suffix: '', label: 'Test Files' },
              { value: 149, suffix: '', label: 'DB Tables' },
              { value: 12, suffix: '', label: 'Modules' },
              { value: 86, suffix: '', label: 'Equipment Categories' },
              { value: 336, suffix: '', label: 'Maritime Defaults' },
              { value: 0, suffix: '', label: 'TS Errors', prefix: '' },
              { value: 0, suffix: '', label: 'Test Failures', prefix: '' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.05}>
                <div className="text-center p-4 rounded-lg bg-surface-1 border border-white/5">
                  <div className="text-2xl font-bold text-brand-primary font-mono">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
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
            <Anchor className="w-10 h-10 text-brand-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Built offshore. Built different.
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              See the platform that 20 years of offshore experience built.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:info@smsystems.uk" className="btn-primary text-base px-8 py-4">
                Book a Demo <ChevronRight className="w-5 h-5" />
              </a>
              <Link to="/platform" className="btn-secondary text-base px-8 py-4">
                Explore the Platform
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
