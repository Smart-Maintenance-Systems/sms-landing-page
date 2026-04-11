import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight, Wrench, Shield, ShoppingCart, BarChart3, Brain, Monitor,
  AlertTriangle, FileSpreadsheet, Smartphone, Anchor, Award, Ship,
  Zap, Users, Clock, TrendingUp, CheckCircle2, ArrowRight,
  Cpu, GitBranch, Eye, BookOpen, Target, Compass,
  FileCheck, Scale, ShieldCheck, Building2, Mail,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import AnimatedCounter from '../components/AnimatedCounter';
import Screenshot from '../components/Screenshot';

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/5 rounded-full blur-[128px]" />
      </div>

      {/* Data flow lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="data-line absolute w-full top-[20%]" style={{ animationDelay: '0s' }} />
        <div className="data-line absolute w-full top-[45%]" style={{ animationDelay: '3s' }} />
        <div className="data-line absolute w-full top-[70%]" style={{ animationDelay: '6s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-8"
        >
          <img
            src="/sms-logo.png"
            alt="Smart Maintenance Systems"
            className="h-36 md:h-48 lg:h-56 w-auto mx-auto logo-glow"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-text-primary">The operating system for</span>
          <br />
          <span className="gradient-text">maritime operations.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Maintenance. Safety. Purchasing. Operations. AI Intelligence.
          Self-service onboarding that goes live in weeks. Built by offshore
          operators with 20+ years of experience.
        </motion.p>

        {/* Value props */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {[
            { icon: Brain, label: 'AI Intelligence Layer' },
            { icon: Users, label: 'Unlimited Users' },
            { icon: Zap, label: '12 Integrated Modules' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-text-secondary">
              <Icon className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <a href="mailto:info@smsystems.uk?subject=SMS%20Demo%20Request" className="btn-primary text-base px-8 py-4">
            Book a Demo
            <ChevronRight className="w-5 h-5" />
          </a>
          <Link to="/platform" className="btn-secondary text-base px-8 py-4">
            Explore the Platform
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <Link
            to="/light"
            className="inline-flex items-center gap-2 text-sm text-status-success hover:text-green-400 transition-colors"
          >
            <Ship className="w-4 h-4" />
            Solo vessel owner? Try SMS Light — from £10/month
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Key stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { value: '2-4', suffix: ' weeks', label: 'To go live' },
            { value: '12', suffix: '', label: 'Integrated modules' },
            { value: '2,660', suffix: '+', label: 'Automated tests' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-mono text-brand-primary tabular-nums">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-5 h-8 border-2 border-brand-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-2.5 bg-brand-primary/60 rounded-full mt-1.5 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROBLEM SECTION — "The Industry's Three Bad Options"
   ═══════════════════════════════════════════════════════════ */
function ProblemSection() {
  const problems = [
    {
      icon: Building2,
      title: 'Enterprise CMMS',
      color: 'text-status-error',
      borderColor: 'border-status-error/20 hover:border-status-error/40',
      items: [
        '£50,000+ implementation before you log a single fault',
        '12-18 month rollouts with consultants who\'ve never worked your vessels',
        'Designed for factories, forced onto vessels',
        'Three days training to log a fault',
        'Data sits in silos — maintenance can\'t talk to purchasing',
      ],
    },
    {
      icon: FileSpreadsheet,
      title: 'Spreadsheets & Email',
      color: 'text-status-warning',
      borderColor: 'border-status-warning/20 hover:border-status-warning/40',
      items: [
        'Different versions floating around every vessel',
        'Equipment photos stored... somewhere',
        'Handover notes lost when crew rotates',
        'No audit trail for class surveys',
        'Budget tracking in someone\'s inbox',
      ],
    },
    {
      icon: Smartphone,
      title: 'Generic Maintenance Apps',
      color: 'text-accent-violet',
      borderColor: 'border-accent-violet/20 hover:border-accent-violet/40',
      items: [
        'Built by software companies who\'ve never worked a rotation',
        'Maintenance only — HSE, purchasing, operations still on paper',
        'No concept of shift handovers or crew rotations',
        'Assumes everyone has WiFi and a laptop',
        'Can\'t handle SIMOPS or permit-to-work complexity',
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 circuit-bg" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="The Problem"
          title="The industry's three bad options"
          subtitle="None provide cross-department intelligence. Data stays in silos. And all three share the same fatal flaw: getting started requires months of implementation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem.title} delay={i * 0.15}>
              <div
                className={`h-full rounded-xl bg-surface-1 border ${problem.borderColor} p-6 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg bg-surface-2 ${problem.color}`}>
                    <problem.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">{problem.title}</h3>
                </div>
                <ul className="space-y-3">
                  {problem.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                      <AlertTriangle className={`w-3.5 h-3.5 ${problem.color} shrink-0 mt-0.5`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The biggest barrier to better vessel management isn't the software —{' '}
              <span className="text-text-primary font-semibold">it's the setup.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PLATFORM OVERVIEW — 6 Module Cards
   ═══════════════════════════════════════════════════════════ */
function PlatformSection() {
  const modules = [
    {
      icon: Wrench,
      title: 'Maintenance & Equipment',
      color: 'from-blue-500/20 to-blue-600/5',
      accent: 'bg-blue-500',
      features: [
        'Equipment lifecycle management',
        'Fault reporting with AI diagnostics',
        '10-status work order workflow',
        'Planned maintenance scheduling',
        'Real-time quality scoring (0-100)',
        'QR code scanning',
        'Department-scoped equipment views',
      ],
    },
    {
      icon: Shield,
      title: 'HSE & Safety',
      color: 'from-green-500/20 to-green-600/5',
      accent: 'bg-green-500',
      features: [
        'Permit-to-work (6 types)',
        'SIMOPS conflict detection',
        'Incident reporting & RCA',
        'Drill management (SOLAS)',
        'Certificate tracking (90/60/30 day)',
        'Toolbox talks & safety obs',
        'Compliance report generation',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'Purchasing & Supply',
      color: 'from-amber-500/20 to-amber-600/5',
      accent: 'bg-amber-500',
      features: [
        'Requisition to invoice lifecycle',
        'Multi-level approval chains',
        'Budget tracking by cost code',
        'Emergency purchasing workflow',
        '3-way invoice matching',
        'Supplier management',
        'Parts availability alerts',
      ],
    },
    {
      icon: BarChart3,
      title: 'Operations & DPR',
      color: 'from-cyan-500/20 to-cyan-600/5',
      accent: 'bg-cyan-500',
      features: [
        'Daily Performance Reports',
        '10-tab DPR layout',
        'Shift reports with activity codes',
        'Crew rotation + countdown timers',
        '3-step handover workflow',
        'POB tracking',
        'Billable vs non-billable tracking',
      ],
    },
    {
      icon: Brain,
      title: 'AI Intelligence',
      color: 'from-violet-500/20 to-violet-600/5',
      accent: 'bg-violet-500',
      features: [
        'Cross-department correlation engine',
        'Failure pattern recognition',
        'AI diagnostic suggestions',
        'Equipment health scoring',
        'Fleet-wide anomaly detection',
        'Trend alerts & recommendations',
        'Knowledge transfer engine',
      ],
    },
    {
      icon: Monitor,
      title: 'Portal Command Centre',
      color: 'from-purple-500/20 to-purple-600/5',
      accent: 'bg-purple-500',
      features: [
        'Multi-company fleet overview',
        'Company health grid & KPIs',
        'Feature management per company',
        'Subscription control',
        'System configuration',
        'Separate auth (violet accent)',
        'Shore management interface',
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-surface-1/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="The Platform"
          title="One platform. Twelve modules. Complete visibility."
          subtitle="Every department connected by one AI intelligence layer. Data flows between modules automatically."
          gradient
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <ScrollReveal key={mod.title} delay={i * 0.1}>
              <div className="group h-full rounded-xl bg-surface-1 border border-white/5 overflow-hidden card-glow">
                {/* Accent bar */}
                <div className={`h-1 ${mod.accent}`} />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${mod.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />

                <div className="relative p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-surface-2">
                      <mod.icon className="w-5 h-5 text-text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-text-primary">{mod.title}</h3>
                  </div>

                  <ul className="space-y-2">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-status-success shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-12 text-center">
            <Link
              to="/platform"
              className="btn-secondary"
            >
              Explore the full platform
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   KEY NUMBERS SECTION
   ═══════════════════════════════════════════════════════════ */
function KeyNumbersSection() {
  const stats = [
    { value: 2660, suffix: '+', label: 'Automated Tests', sublabel: 'Zero failures' },
    { value: 149, suffix: '', label: 'Database Tables', sublabel: 'Full referential integrity' },
    { value: 12, suffix: '', label: 'Integrated Modules', sublabel: 'Connected by AI' },
    { value: 20, suffix: '+', label: 'Years Offshore', sublabel: 'Built into every workflow' },
    { value: 226, suffix: '', label: 'Test Files', sublabel: 'Full stack coverage' },
    { value: 60, suffix: ' days', label: 'Free Onboarding', sublabel: 'Pay when operational' },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      {/* Glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="By the Numbers"
          title="Built for the operators everyone else ignores."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center p-6 rounded-xl bg-surface-1 border border-white/5 card-glow">
                <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-text-primary">{stat.label}</div>
                <div className="text-xs text-text-muted mt-0.5">{stat.sublabel}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   DIFFERENTIATORS SECTION
   ═══════════════════════════════════════════════════════════ */
function DifferentiatorsSection() {
  const diffs = [
    {
      icon: Compass,
      title: 'Self-Service Onboarding That Replaces Consultants',
      description:
        'Admin delegates sections to department leads who work in parallel. Technicians physically walk each location documenting equipment, scored in real-time for completeness. Go live in weeks with better data quality than a consultant-led implementation. No vendor team. No £50k setup fee. And with 60 days of free onboarding per vessel, there\'s no pressure to rush.',
    },
    {
      icon: GitBranch,
      title: 'Department-Scoped Operations',
      description:
        'A generator isn\'t just a generator. The electrical team sees AVR and relays. The mechanical team sees engine and cooling. SMS gives each department its own world while maintaining one source of truth. One QR code, one record, multiple perspectives. No other maritime CMMS does this.',
    },
    {
      icon: Cpu,
      title: 'Cross-Department Intelligence',
      description:
        'SMS connects maintenance to purchasing to HSE to operations. When a fault is reported, the system knows: parts in stock, what\'s on order, whether a permit is needed, who\'s qualified, and what similar faults looked like on other vessels.',
    },
    {
      icon: Anchor,
      title: 'Built by Operators, Not Consultants',
      description:
        'The founder spent 20 years working offshore rotations — on crane barges, vessels, rigs. SMS wasn\'t designed in a WeWork. It was designed in engine rooms, on night shifts, during crew changeovers. Every workflow exists because someone actually needed it.',
    },
    {
      icon: Brain,
      title: 'AI That Learns Your Fleet',
      description:
        'A cross-module AI correlation engine built into the data model from day one — 7 AI database tables, 23 endpoints, and 6 correlation rules. Connects fault patterns to supplier batches, links downtime to rotation patterns. Every vessel on the platform contributes to the collective intelligence.',
    },
    {
      icon: BookOpen,
      title: 'The Data Becomes Yours',
      description:
        'Every record builds your institutional knowledge base. When crew rotate, knowledge stays. When equipment transfers between vessels, history follows. Your data works for you, not the software vendor.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-surface-1/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Why SMS"
          title="Not another maintenance app."
          subtitle="Six things we do that nobody else does."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diffs.map((diff, i) => (
            <ScrollReveal key={diff.title} delay={i * 0.1}>
              <div className="h-full rounded-xl bg-surface-1 border border-white/5 p-6 card-glow">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-brand-primary/10 shrink-0">
                    <diff.icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PERSONA SECTION — "Who It's For"
   ═══════════════════════════════════════════════════════════ */
function PersonaSection() {
  const personas = [
    {
      icon: Ship,
      role: 'Solo Vessel Owner',
      quote: 'I need to stop tracking maintenance in my head.',
      features: 'Equipment register, maintenance reminders, certificate expiry warnings',
      cta: { label: 'SMS Light — £10/month', href: '/light', color: 'text-status-success' },
    },
    {
      icon: Eye,
      role: 'Fleet Superintendent',
      quote: 'I need to see what\'s happening across all my vessels without chasing emails.',
      features: 'Fleet health dashboard, compliance status, budget tracking, AI trend alerts',
    },
    {
      icon: Wrench,
      role: 'Chief Engineer',
      quote: 'I need maintenance compliance and planned maintenance that actually works.',
      features: 'Equipment lifecycle, PM scheduling, fault analysis, parts availability',
    },
    {
      icon: Shield,
      role: 'HSE Manager / DPA',
      quote: 'I need permit control, drill compliance, and audit-ready records.',
      features: 'PTW system, SIMOPS detection, certificate expiry, compliance reports',
    },
    {
      icon: ShoppingCart,
      role: 'Purchasing Manager',
      quote: 'I need to track what\'s ordered, arrived, and what it\'s costing.',
      features: 'Requisition workflow, PO tracking, budget monitoring, supplier performance',
    },
    {
      icon: Target,
      role: 'Technician / Engineer',
      quote: 'I need something that doesn\'t slow me down when I\'m fixing things.',
      features: 'Quick fault reporting, AI diagnostics, equipment history, QR scanning',
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who It's For"
          title="From a single fishing vessel to a fleet of fifty."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <ScrollReveal key={p.role} delay={i * 0.1}>
              <div className="h-full rounded-xl bg-surface-1 border border-white/5 p-6 card-glow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-surface-2">
                    <p.icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary">{p.role}</h3>
                </div>
                <blockquote className="text-base text-text-primary italic mb-3">
                  "{p.quote}"
                </blockquote>
                <p className="text-sm text-text-secondary">{p.features}</p>
                {p.cta && (
                  <Link
                    to={p.cta.href}
                    className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium ${p.cta.color} hover:underline`}
                  >
                    {p.cta.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPLIANCE SECTION
   ═══════════════════════════════════════════════════════════ */
function ComplianceSection() {
  const regulations = [
    { label: 'ISM Code', desc: 'Safety management documentation, non-conformity tracking' },
    { label: 'SOLAS', desc: 'Drill frequency tracking, safety equipment records' },
    { label: 'MLC', desc: 'Crew certification, work/rest hour compliance' },
    { label: 'Classification', desc: 'Equipment maintenance records, condition monitoring' },
    { label: 'Flag State', desc: 'Statutory certificate tracking (90/60/30 day warnings)' },
    { label: 'Port State Control', desc: 'Audit-ready documentation, PDF export' },
  ];

  return (
    <section className="py-24 md:py-32 bg-surface-1/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="text-sm font-semibold text-status-success uppercase tracking-wider mb-3">
                Regulatory Compliance
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Audit-ready. Always.
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Maritime operators don't buy software for features. They buy it because the MCA is
                coming, the class survey is next month, and the last superintendent's records are on
                a USB stick nobody can find.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                Every record in SMS has a timestamp, a user, and an audit trail. When the surveyor
                arrives, you don't scramble — you hand them a tablet.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {regulations.map((reg) => (
                <div
                  key={reg.label}
                  className="rounded-lg bg-surface-1 border border-white/5 p-4 card-glow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-status-success" />
                    <span className="text-sm font-semibold text-text-primary">{reg.label}</span>
                  </div>
                  <p className="text-xs text-text-secondary">{reg.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCREENSHOT SECTION
   ═══════════════════════════════════════════════════════════ */
function ScreenshotSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="See It In Action"
          title="Dark mode as default. Built for engine rooms."
          subtitle="Every screen designed for maritime operations — gloved hands, low light, high stakes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal delay={0}>
            <Screenshot
              src="/screenshots/manager-dashboard.png"
              alt="Manager Dashboard — Fleet Overview"
              caption="Manager Dashboard — real-time fleet KPIs, fault tracking, and team status"
              aspect="video"
              contain
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Screenshot
              src="/screenshots/equipment.png"
              alt="Equipment Detail"
              caption="Equipment Detail — photo documentation, specs, and maintenance history"
              aspect="video"
              contain
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Screenshot
              src="/screenshots/fault.png"
              alt="Fault Report"
              caption="Fault Reporting — photo evidence, status timeline, and assignment tracking"
              aspect="video"
              contain
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Screenshot
              src="/screenshots/group-chat.png"
              alt="Built-in Chat"
              caption="Built-in Messaging — department channels, direct messages, and discussions"
              aspect="video"
              contain
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CREDIBILITY SECTION
   ═══════════════════════════════════════════════════════════ */
function CredibilitySection() {
  return (
    <section className="py-24 md:py-32 bg-surface-1/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Backed By"
          title="Backed by Innovate UK. Built for the future of maritime."
        />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl bg-surface-1 border border-white/5 p-8 text-center">
              <Award className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <p className="text-lg text-text-primary font-medium mb-4">
                Innovate UK Smart Grant Recipient
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                Awarded through the New Innovators in Marine and Maritime programme, Great South West
                — in partnership with Cornwall Council. Selected through competitive review for
                technology solving real industry challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="px-4 py-2 bg-surface-2 rounded-lg text-text-secondary">
                  Smart Grant Recipient
                </div>
                <div className="px-4 py-2 bg-surface-2 rounded-lg text-text-secondary">
                  20+ Years Offshore
                </div>
                <div className="px-4 py-2 bg-surface-2 rounded-lg text-text-secondary">
                  Cornwall, UK
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   LIGHT TEASER SECTION
   ═══════════════════════════════════════════════════════════ */
function LightTeaserSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-status-success/10 to-surface-1 border border-status-success/20 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-sm font-semibold text-status-success uppercase tracking-wider mb-3">
                  SMS Light
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Own a boat? Start at £10/month.
                </h2>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  You don't need departments, approval chains, and fleet management. You need to
                  know when your engine service is due, when your fire extinguishers expire, and
                  what spare parts are onboard.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    'Unlimited equipment tracking',
                    'Maintenance scheduling with reminders',
                    'Certificate expiry warnings',
                    'QR codes, PDF reports, photos',
                    'AI suggestions for your equipment',
                    '5 minutes to set up',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-status-success shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/light" className="btn-light">
                    Try SMS Light — 30 Days Free
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/light" className="btn-secondary border-status-success/30 text-status-success hover:bg-status-success/10">
                    Learn More
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex items-center justify-center">
                <div className="rounded-xl border border-status-success/20 bg-surface-1/50 p-8 text-center">
                  <Smartphone className="w-10 h-10 text-status-success mx-auto mb-4" />
                  <p className="text-lg font-semibold text-text-primary mb-2">Coming Soon</p>
                  <p className="text-sm text-text-secondary">Mobile-first vessel management for solo operators and small crews.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FINAL CTA SECTION
   ═══════════════════════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <section id="demo" className="py-24 md:py-32 bg-surface-1/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            See it for yourself.
          </h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            Book a 30-minute demo with someone who's actually worked offshore. We'll show you the
            platform, answer your questions, and discuss your specific operation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="mailto:info@smsystems.uk" className="btn-primary text-base px-8 py-4">
              <Mail className="w-5 h-5" />
              Book a Demo
            </a>
            <Link to="/light" className="btn-light text-base px-8 py-4">
              <Ship className="w-5 h-5" />
              Try Light Free
            </Link>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   HOME PAGE ASSEMBLY
   ═══════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <PlatformSection />
      <KeyNumbersSection />
      <ScreenshotSection />
      <DifferentiatorsSection />
      <PersonaSection />
      <ComplianceSection />
      <LightTeaserSection />
      <CredibilitySection />
      <FinalCTASection />
    </>
  );
}
