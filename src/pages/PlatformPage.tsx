import { Link } from 'react-router-dom';
import {
  Wrench, Shield, ShoppingCart, BarChart3, Brain, Monitor,
  CheckCircle2, ArrowRight, Zap, GitBranch, Database,
  AlertTriangle, FileCheck, Clock, TrendingUp, Users,
  Package, Receipt, Truck, DollarSign,
  ClipboardList, Timer, Radio, UserCheck,
  Cpu, Search, Activity, BookOpen, LineChart,
  Building2, Settings, ToggleRight, LayoutDashboard,
  Target, ChevronRight,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import Screenshot from '../components/Screenshot';

interface ModuleDetailProps {
  icon: React.ElementType;
  title: string;
  accent: string;
  problem: string[];
  features: { icon: React.ElementType; label: string }[];
  unique: { title: string; desc: string }[];
  connects: string[];
  screenshotLabel: string;
  screenshotSrc?: string;
  reverse?: boolean;
}

function ModuleDetail({
  icon: Icon,
  title,
  accent,
  problem,
  features,
  unique,
  connects,
  screenshotLabel,
  screenshotSrc,
  reverse = false,
}: ModuleDetailProps) {
  return (
    <section className="py-16 md:py-24 border-b border-white/5 last:border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <ScrollReveal direction={reverse ? 'right' : 'left'}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-lg ${accent}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{title}</h2>
              </div>

              {/* The Problem */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-status-error uppercase tracking-wider mb-3">
                  The Problem
                </h3>
                <ul className="space-y-2">
                  {problem.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-text-secondary">
                      <AlertTriangle className="w-3.5 h-3.5 text-status-error shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What SMS Does */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-status-success uppercase tracking-wider mb-3">
                  What SMS Does
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map(({ icon: FIcon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-sm text-text-secondary">
                      <FIcon className="w-3.5 h-3.5 text-status-success shrink-0" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unique to SMS */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-3">
                  Unique to SMS
                </h3>
                <div className="space-y-3">
                  {unique.map((u) => (
                    <div key={u.title} className="rounded-lg bg-surface-2/50 border border-white/5 p-3">
                      <p className="text-sm font-semibold text-text-primary mb-1">{u.title}</p>
                      <p className="text-xs text-text-secondary">{u.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connects to */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-text-muted">Connects to:</span>
                {connects.map((c) => (
                  <span key={c} className="text-xs px-2 py-0.5 bg-surface-2 rounded text-text-secondary">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Screenshot */}
          <ScrollReveal direction={reverse ? 'left' : 'right'} className={reverse ? 'lg:order-first' : ''}>
            <div className="sticky top-24">
              <Screenshot src={screenshotSrc!} alt={screenshotLabel} caption={screenshotLabel} aspect="video" contain />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Coming-soon status — SMS Main (the full fleet platform) is not yet available to buy */}
          <ScrollReveal>
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-sm font-medium text-accent-violet">
                <Clock className="w-4 h-4" />
                SMS Main · Coming soon
              </span>
            </div>
          </ScrollReveal>

          <SectionHeading
            eyebrow="The Platform"
            title="Twelve modules connected by one intelligence layer."
            subtitle="The full fleet & operations platform — maintenance, safety, purchasing, operations, and an AI intelligence layer across every vessel. In build now, with our first trial operators. Register your interest and we'll bring you in as it opens up."
            gradient
          />

          <ScrollReveal>
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <a
                href="mailto:info@smsystems.uk?subject=SMS%20for%20fleets"
                className="btn-primary text-base px-8 py-4"
              >
                Register interest — SMS for fleets
                <ChevronRight className="w-5 h-5" />
              </a>
              <p className="mt-4 text-sm text-text-muted">
                Running commercial workboats under 24m today?{' '}
                <a href="https://smsworkboat.co.uk" target="_blank" rel="noopener noreferrer" className="text-status-success hover:underline">
                  SMS Workboat is live now →
                </a>
              </p>
            </div>
          </ScrollReveal>

          {/* Visual hub */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Wrench, label: 'Maintenance', color: 'bg-blue-500' },
                { icon: Shield, label: 'HSE & Safety', color: 'bg-green-500' },
                { icon: ShoppingCart, label: 'Purchasing', color: 'bg-amber-500' },
                { icon: BarChart3, label: 'Operations', color: 'bg-cyan-500' },
                { icon: Brain, label: 'AI Intelligence', color: 'bg-violet-500' },
                { icon: Monitor, label: 'Portal', color: 'bg-purple-500' },
              ].map(({ icon: MIcon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg bg-surface-1 border border-white/5 p-4 card-glow"
                >
                  <div className={`p-2 rounded-lg ${color}`}>
                    <MIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">{label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Module Details */}
      <ModuleDetail
        icon={Wrench}
        title="Maintenance & Equipment"
        accent="bg-blue-500"
        problem={[
          'Equipment records scattered across spreadsheets, paper files, and people\'s heads',
          'Maintenance history walks off the vessel when crew rotates',
          'No connection between planned maintenance, parts availability, and budget',
          'Electrical and mechanical departments see the same equipment completely differently',
        ]}
        features={[
          { icon: Database, label: 'Complete equipment lifecycle' },
          { icon: Zap, label: 'Fault reporting with AI diagnostics' },
          { icon: ClipboardList, label: '10-status work order workflow' },
          { icon: Clock, label: 'PM scheduling with auto-generation' },
          { icon: TrendingUp, label: 'Real-time quality scoring (0-100)' },
          { icon: Search, label: 'QR code scanning' },
          { icon: GitBranch, label: 'Department-scoped equipment views' },
          { icon: Package, label: 'Smart stock take with guided counts' },
        ]}
        unique={[
          {
            title: 'Quality Scoring (0-100)',
            desc: 'Five categories scored in real-time. Basic info, photos, spare parts, critical parts, technical docs — 20 points each. Quality scoring drives completeness across your entire fleet.',
          },
          {
            title: 'Two-Pass Documentation',
            desc: 'Technicians record what\'s needed (knowledge). Store personnel record what\'s available (counts). Separates expertise from counting — each pass captures different knowledge.',
          },
          {
            title: 'Department-Scoped Equipment',
            desc: 'One generator, one QR code, but electrical sees AVR/relays while mechanical sees engine/cooling. Faults, WOs, and spares all scoped by department.',
          },
        ]}
        connects={['Purchasing', 'HSE', 'Operations', 'AI Intelligence']}
        screenshotLabel="Equipment Detail — Quality Score & Department View"
        screenshotSrc="/screenshots/equipment.png"
      />

      <ModuleDetail
        icon={Shield}
        title="HSE & Safety"
        accent="bg-green-500"
        reverse
        problem={[
          'Permit-to-work managed on paper — no real-time visibility',
          'No automatic SIMOPS detection — dangerous overlaps caught by luck',
          'Certificate expiry tracked in spreadsheets — renewals missed',
          'Drill records kept for audits but never analysed for patterns',
        ]}
        features={[
          { icon: FileCheck, label: 'Full permit-to-work lifecycle' },
          { icon: AlertTriangle, label: 'SIMOPS conflict detection' },
          { icon: Clock, label: 'Certificate tracking (90/60/30 day)' },
          { icon: Users, label: 'Crew compliance matrix' },
          { icon: ClipboardList, label: 'Drill management (SOLAS)' },
          { icon: Activity, label: 'Incident reporting & RCA' },
          { icon: BookOpen, label: 'Toolbox talks & attendance' },
          { icon: LineChart, label: 'Safety observation trends' },
        ]}
        unique={[
          {
            title: 'SIMOPS Detection',
            desc: 'Automated conflict checking when permits are created. The system prevents dangerous concurrent operations that paper systems miss.',
          },
          {
            title: 'Cross-Department Safety Intelligence',
            desc: 'HSE connects to maintenance data. Recurring equipment faults are flagged as safety risks, not just maintenance issues.',
          },
        ]}
        connects={['Maintenance', 'Operations', 'Purchasing', 'AI Intelligence']}
        screenshotLabel="HSE Dashboard — Permit Status & Drill Compliance"
        screenshotSrc="/screenshots/hse.png"
      />

      <ModuleDetail
        icon={ShoppingCart}
        title="Purchasing & Supply Chain"
        accent="bg-amber-500"
        problem={[
          'Requisitions via email — no audit trail, no approval workflow',
          'Budget tracking in spreadsheets that are always out of date',
          'No connection between what maintenance needs and what purchasing ordered',
          'Parts arrive with no goods receipt — invoice matching done manually',
        ]}
        features={[
          { icon: Receipt, label: 'Full requisition lifecycle' },
          { icon: Users, label: 'Multi-level approval chains' },
          { icon: DollarSign, label: 'Budget tracking by cost code' },
          { icon: Zap, label: 'Emergency purchasing workflow' },
          { icon: Truck, label: '3-way invoice matching' },
          { icon: Building2, label: 'Supplier management' },
          { icon: Package, label: 'Parts availability alerts' },
          { icon: Settings, label: '86 maritime cost code categories' },
        ]}
        unique={[
          {
            title: 'Maintenance-Linked Purchasing',
            desc: 'When PM generates a work order, the system checks parts availability and triggers requisitions automatically. No more discovering you don\'t have the filter kit on service day.',
          },
          {
            title: 'Budget Visibility',
            desc: 'Real-time spend tracking connected to operational data. See not just what was spent, but why — linked to faults, maintenance schedules, and operational demands.',
          },
        ]}
        connects={['Maintenance', 'Operations', 'AI Intelligence']}
        screenshotLabel="Purchasing — Requisition Workflow & Budget Tracking"
        screenshotSrc="/screenshots/purchasing.png"
      />

      <ModuleDetail
        icon={BarChart3}
        title="Operations & DPR"
        accent="bg-cyan-500"
        reverse
        problem={[
          'Daily Performance Reports assembled manually from fragmented sources',
          'Shift handovers rely on email, memory, or desk notes',
          'No structured activity tracking — billable vs non-billable is a guess',
          'Crew rotations managed in spreadsheets',
        ]}
        features={[
          { icon: ClipboardList, label: 'DPR with plan-vs-actual' },
          { icon: LayoutDashboard, label: '10-tab DPR layout' },
          { icon: Timer, label: 'Shift reports + activity codes' },
          { icon: Clock, label: 'Crew rotation countdown timers' },
          { icon: UserCheck, label: '3-step handover workflow' },
          { icon: Radio, label: 'POB tracking' },
          { icon: DollarSign, label: 'Billable vs non-billable' },
          { icon: TrendingUp, label: 'Operational analytics' },
        ]}
        unique={[
          {
            title: 'Rotation Countdown & Handover Gate',
            desc: 'Every crew member sees their rotation timer. Disembarkation blocked until handover submitted and approved. Knowledge transfer is enforced, not hoped for.',
          },
          {
            title: 'Connected Reporting',
            desc: 'DPR auto-enriched from other modules — maintenance hours, HSE permits, purchasing deliveries. The report assembles itself from reality.',
          },
        ]}
        connects={['Maintenance', 'HSE', 'Purchasing', 'AI Intelligence']}
        screenshotLabel="DPR — Daily Performance Report (10-tab layout)"
        screenshotSrc="/screenshots/dpr.png"
      />

      <ModuleDetail
        icon={Brain}
        title="AI Intelligence"
        accent="bg-violet-500"
        problem={[
          'Data exists in silos — maintenance knows nothing about purchasing',
          'Pattern recognition depends on crew who eventually rotate off',
          'Equipment failures repeat — lessons learned aren\'t connected',
          'Fleet-wide visibility requires manual aggregation',
        ]}
        features={[
          { icon: Cpu, label: 'Suggestion engine' },
          { icon: TrendingUp, label: 'Trend alert engine' },
          { icon: GitBranch, label: 'Correlation engine' },
          { icon: BookOpen, label: 'Knowledge transfer engine' },
          { icon: Target, label: 'Effectiveness tracker' },
          { icon: Activity, label: 'Equipment health scoring' },
          { icon: Search, label: 'Fleet-wide anomaly detection' },
          { icon: LineChart, label: 'Predictive insights' },
        ]}
        unique={[
          {
            title: 'AI-Native Architecture',
            desc: '7 AI database tables, 23 endpoints, and 6 cross-module correlation rules built into the foundation. Most competitors bolt AI onto legacy systems. SMS was built with AI in the data model from day one.',
          },
          {
            title: 'Cross-Tier Intelligence',
            desc: 'Every vessel on the platform — from a single workboat to a 50-vessel fleet — contributes equipment model data. A Yanmar 6LY is a Yanmar 6LY regardless of who owns it.',
          },
        ]}
        connects={['All Modules']}
        screenshotLabel="AI Intelligence — Cross-Department Correlation Graph"
        screenshotSrc="/screenshots/ai.png"
      />

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to see the platform?</h2>
            <p className="text-lg text-text-secondary mb-8">
              Book a 30-minute demo with someone who's actually worked offshore.
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
