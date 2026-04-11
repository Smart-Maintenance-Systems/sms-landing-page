import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Ship, Wrench, FileCheck, Bell, QrCode, FileText, Brain,
  Camera, CheckCircle2, ArrowRight, ChevronRight, Smartphone,
  Clock, Shield, AlertTriangle, Star, Anchor, Zap,
  TrendingUp, Package, Search, Calendar, ClipboardCheck,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';

export default function LightPage() {
  return (
    <>
      {/* Hero — warmer, more approachable */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-status-success/5 to-surface-0" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-status-success/10 border border-status-success/20 rounded-full text-sm text-status-success mb-6">
                <Ship className="w-4 h-4" />
                SMS Light — From £10/month
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                Your boat deserves better than a notebook.
              </h1>

              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                Track maintenance, log faults, manage certificates, and never miss a service again.
                Professional-grade vessel management for the price of a coffee a week.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a href="mailto:info@smsystems.uk?subject=SMS%20Light%20Interest" className="btn-light text-base px-8 py-4">
                  Register Interest
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#how" className="btn-secondary border-status-success/30 text-status-success hover:bg-status-success/10 text-base px-8 py-4">
                  See How It Works
                </a>
              </div>

              <p className="text-sm text-text-muted">
                30-day free trial. No credit card required. Your data carries over.
              </p>
            </motion.div>

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative aspect-[9/16] max-w-[280px] w-full rounded-xl overflow-hidden border border-status-success/20 bg-gradient-to-br from-surface-2 to-surface-1">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-surface-0 rounded-b-xl" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-status-success/20 flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 text-status-success" />
                  </div>
                  <p className="text-sm font-semibold text-text-primary mb-1">SMS Light</p>
                  <p className="text-xs text-text-secondary">Coming Soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why You Need This */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Three questions every boat owner dreads"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                question: '"When did I last service the engine?"',
                answer:
                  'SMS Light tracks every service, reminds you before it\'s due, and builds a complete history you can hand to a surveyor.',
              },
              {
                icon: Search,
                question: '"Where did I put that manual?"',
                answer:
                  'Attach manuals, wiring diagrams, and service records to each piece of equipment. Scan a QR code to find them instantly.',
              },
              {
                icon: Shield,
                question: '"Is my fire extinguisher still in date?"',
                answer:
                  'Certificate expiry warnings at 90, 60, and 30 days. Never get caught out by an expired safety cert again.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.question} delay={i * 0.15}>
                <div className="h-full rounded-xl bg-surface-1 border border-white/5 p-6 card-glow">
                  <div className="p-2.5 rounded-lg bg-status-success/10 w-fit mb-4">
                    <item.icon className="w-5 h-5 text-status-success" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-3 italic">
                    {item.question}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Minutes to Get Started */}
      <section id="how" className="py-24 md:py-32 bg-surface-1/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Setup"
            title="5 minutes to get started"
            subtitle="No departments. No role assignments. No delegation workflows. Just you and your boat."
          />

          <div className="space-y-6">
            {[
              {
                step: 1,
                icon: Smartphone,
                title: 'Create your account',
                time: '30 seconds',
                desc: 'Name, email, password. That\'s it.',
              },
              {
                step: 2,
                icon: Ship,
                title: 'Add your vessel',
                time: '60 seconds',
                desc: 'Vessel name, type (fishing, yacht, workboat), and optional details like home port and year built.',
              },
              {
                step: 3,
                icon: CheckCircle2,
                title: 'Tick your equipment',
                time: '120 seconds',
                desc: 'Based on your vessel type, we show a checklist of common equipment. Tick what you have — we create the records.',
              },
              {
                step: 4,
                icon: Camera,
                title: 'Take a photo',
                time: '60 seconds',
                desc: 'Walk to your engine room. Photograph the nameplate. We\'ll fill in manufacturer, model, and serial number.',
              },
              {
                step: 5,
                icon: Zap,
                title: 'You\'re in',
                time: 'Immediate',
                desc: 'Your dashboard shows your vessel, equipment count, quality scores, and upcoming maintenance. Start tracking.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-status-success text-white font-bold font-mono shrink-0">
                      {item.step}
                    </div>
                    {item.step < 5 && (
                      <div className="w-px h-full bg-status-success/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What you get" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Wrench, label: 'Equipment register', desc: 'Unlimited items' },
              { icon: Bell, label: 'Maintenance scheduling', desc: 'With reminders' },
              { icon: AlertTriangle, label: 'Fault tracking', desc: 'With photos' },
              { icon: FileCheck, label: 'Certificate management', desc: 'Expiry warnings' },
              { icon: QrCode, label: 'QR codes', desc: 'Print and stick' },
              { icon: FileText, label: 'PDF reports', desc: 'Equipment & maintenance' },
              { icon: Brain, label: 'AI suggestions', desc: 'Based on your equipment' },
              { icon: Camera, label: 'Photo documentation', desc: '1GB storage' },
              { icon: TrendingUp, label: 'Quality scores', desc: 'Track completeness' },
              { icon: Package, label: 'Inventory tracking', desc: 'Spare parts onboard' },
              { icon: Star, label: 'Improve Score flow', desc: 'Guided data completion' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.05}>
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

      {/* Insurance & Documentation */}
      <section className="py-24 md:py-32 bg-surface-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Your maintenance record is your best defence"
            subtitle="When something goes wrong, your insurer asks for documentation. SMS Light builds it automatically."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Faster claims, fewer arguments',
                body: 'Incomplete maintenance records are one of the most common causes of insurance claim delays and denials. SMS Light builds a timestamped, photographic record of every service, every inspection, and every certificate — automatically, just by using it. When you need to prove maintenance history, it\'s already there.',
              },
              {
                icon: ClipboardCheck,
                title: 'Survey-ready in 30 seconds',
                body: 'When your insurer or surveyor asks for vessel condition evidence, SMS Light generates a PDF report showing every piece of equipment, its full maintenance history, certificate status, and photos. What normally takes a weekend of digging through paperwork takes one tap.',
              },
              {
                icon: Calendar,
                title: 'Never miss an expiry',
                body: 'Certificate expiry warnings at 90, 60, and 30 days. Safety equipment, vessel certificates, insurance renewal — all tracked with colour-coded alerts. A lapsed certificate can void your insurance coverage. SMS Light makes sure that never happens.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="h-full rounded-xl bg-surface-2/50 border border-white/5 p-6">
                  <div className="p-2.5 rounded-lg bg-accent-cyan/10 w-fit mb-4">
                    <item.icon className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <p className="mt-10 text-center text-xs text-text-muted max-w-3xl mx-auto leading-relaxed">
              The UK Financial Ombudsman confirms insurers check whether servicing and maintenance
              were done according to manufacturer and industry recommendations. Digital records
              carry more weight than a shoebox full of receipts.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="py-24 md:py-32 bg-surface-1/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Simple pricing" />

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left py-3 px-4 text-sm text-text-muted"></th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-status-success">Light</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-status-success">Light Plus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Price', '£10/mo', '£20/mo'],
                    ['Free trial', '30 days', '30 days'],
                    ['Vessels', '1', 'Up to 3'],
                    ['Equipment items', 'Unlimited', 'Unlimited'],
                    ['QR codes', 'Yes', 'Yes'],
                    ['PDF reports', 'Yes', 'Yes'],
                    ['AI suggestions', 'Yes', 'Priority'],
                    ['Storage', '1GB', '5GB'],
                    ['Data export', 'No', 'Yes'],
                  ].map(([label, ...values]) => (
                    <tr key={label} className="hover:bg-surface-2/30">
                      <td className="py-2.5 px-4 text-sm font-medium text-text-primary">{label}</td>
                      {values.map((v, i) => (
                        <td key={i} className={`py-2.5 px-4 text-sm text-center ${
                          v === 'No' ? 'text-text-muted' : 'text-text-secondary'
                        }`}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 text-center">
              <p className="text-sm text-text-secondary mb-1">
                Growing beyond 3 vessels?
              </p>
              <Link to="/pricing" className="text-sm text-brand-primary hover:underline inline-flex items-center gap-1">
                Upgrade to SMS Professional — your data comes with you
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What users do */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="What happens after you start"
            subtitle="SMS Light grows with you. The more you document, the smarter it gets."
          />

          <ScrollReveal>
            <div className="space-y-4 text-left">
              {[
                {
                  icon: Camera,
                  text: 'You photograph equipment nameplates. SMS builds your register.',
                },
                {
                  icon: Bell,
                  text: 'You set service intervals. SMS reminds you before they\'re due.',
                },
                {
                  icon: AlertTriangle,
                  text: 'You log a fault with a photo. SMS tracks it to resolution.',
                },
                {
                  icon: Brain,
                  text: 'SMS learns your equipment. "Other Yanmar 6LY owners replace impellers at 500 hours."',
                },
                {
                  icon: TrendingUp,
                  text: 'Your quality score rises. Your vessel\'s documentation becomes survey-ready.',
                },
                {
                  icon: Shield,
                  text: 'Your certificates are tracked. No more expired fire extinguishers.',
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-4 rounded-lg bg-surface-1 border border-white/5 p-4 card-glow">
                    <div className="p-2 rounded-lg bg-status-success/10 shrink-0">
                      <item.icon className="w-4 h-4 text-status-success" />
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-status-success/5 to-surface-0 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Anchor className="w-10 h-10 text-status-success mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Less than a coffee a week to protect your biggest investment.
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Register your interest and we&apos;ll let you know when SMS Light is available.
            </p>
            <a href="mailto:info@smsystems.uk?subject=SMS%20Light%20Interest" className="btn-light text-base px-10 py-4">
              Register Interest
              <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
