import { Link } from 'react-router-dom';
import { Anchor, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';
import { TRIAL_HREF, FOUNDING_MODE } from '../config';
import ApplyCta from '../components/ApplyCta';
import { useSeo } from '../lib/seo';
import { ROUTE_SEO } from '../lib/routeSeo';

/**
 * Why us (design §3). The founders' voice - built from inside the industry, not a software shop. 🟥
 * W5 Task 1: PLURAL throughout ("the founders" / "we"), co-founder UNNAMED, no company names, no year
 * counts, no individual credit lines (founder-signed). Publishable-now facts only (guardrail 7): no invented
 * numbers, no testimonials, no logos. (The #193 "serving industry reviewers" placeholder was REMOVED
 * 2026-07-21 — we don't claim an industry endorsement we haven't secured; add a real quote only once given.)
 */
export default function AboutPage() {
  useSeo(ROUTE_SEO['/about']);
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Why us</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">Built from inside the industry - not a software shop.</h1>

        <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
          <p>
            SMS Workboat was built by its founders between jobs at sea. The compliance headaches it fixes are
            ones we live with - not ones a product manager guessed at.
          </p>
          <p>
            The law changed: the Workboat Code Edition 3 now requires a Safety Management System on every
            small commercial workboat. Most owners are one or two boats, run from a phone at a berth - not a
            compliance department. So the whole thing is built for that person: from nothing to a working
            SMS in an afternoon, the depth kept under the hood.
          </p>
          <p>
            And it&rsquo;s built to be trusted. Its AI, Nova, retrieves and cites the Code - it never rules
            a verdict, because that&rsquo;s the surveyor&rsquo;s call. There&rsquo;s no demo to book and no
            hidden pricing - the whole product is here to see.
          </p>
        </div>

        {/* W5d/W5e (founder-signed) - the credibility CARDS, promoted up the page ("it's our
            credibility"). 🟥 COMPANY-level claims only; honesty-checked wording; away from Code content. */}
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col items-center text-center rounded-xl border border-border-default bg-surface-1 p-8">
            <img src="/innovate-uk-ukri.png" alt="UKRI - Innovate UK" className="h-24 md:h-28 w-full max-w-[320px] object-contain" />
            <p className="mt-5 text-base font-bold text-text-primary">Government backed</p>
            <p className="mt-1 text-sm text-text-secondary">Smart Maintenance Systems is supported by Innovate UK - the UK government&rsquo;s innovation agency.</p>
          </div>
          <div className="flex flex-col items-center text-center rounded-xl border border-border-default bg-surface-1 p-8">
            <img src="/nvidia-inception-badge.jpg" alt="NVIDIA Inception Program" className="h-24 md:h-28 w-full max-w-[320px] object-contain rounded" />
            <p className="mt-5 text-base font-bold text-text-primary">AI recognised</p>
            <p className="mt-1 text-sm text-text-secondary">Our AI vision is part of NVIDIA&rsquo;s Inception program for AI startups.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Anchor, t: 'Built at sea', d: 'By people who work on the water - not from an office' },
            { icon: ShieldCheck, t: 'Honest by design', d: 'Shows what you’ve recorded, never a fake compliance score' },
            { icon: Sparkles, t: 'AI you can trust', d: 'Cited answers, never a verdict' },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border-default bg-surface-1 p-5">
              <c.icon className="w-6 h-6 text-brand-primary" />
              <p className="mt-3 text-sm font-semibold text-text-primary">{c.t}</p>
              <p className="mt-1 text-xs text-text-muted">{c.d}</p>
            </div>
          ))}
        </div>

        <blockquote className="mt-10 border-l-2 border-accent-cyan/40 pl-4 text-lg text-text-primary italic">
          &ldquo;Nova handles the compliance, you handle the boat.&rdquo;
        </blockquote>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          {FOUNDING_MODE ? <ApplyCta className="btn-primary justify-center" /> : <Link to={TRIAL_HREF} className="btn-primary justify-center">Start free trial <ChevronRight className="w-4 h-4" /></Link>}
          <Link to="/how-it-works" className="btn-secondary justify-center">See how it works</Link>
        </div>
      </div>
    </div>
  );
}
