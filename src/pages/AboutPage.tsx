import { Link } from 'react-router-dom';
import { Anchor, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';
import { TRIAL_HREF } from '../config';

/**
 * Why us (design §3). The insider story — built from inside the industry, not a software shop. 🟥
 * Publishable-now facts only (guardrail 7): no invented numbers, no testimonials, no logos. The ex-MCA
 * wording is the placeholder "built with serving industry reviewers" until written permission (#193).
 */
export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Why us</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">Built from inside the industry — not a software shop.</h1>

        <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
          <p>
            SMS Workboat was built by a marine engineer with 20 years offshore — on vessels and marine
            construction work with the likes of Geoquip and Fugro. The compliance headaches this fixes are
            ones he lived, not ones a product manager guessed at.
          </p>
          <p>
            The law changed: the Workboat Code Edition 3 now requires a Safety Management System on every
            small commercial workboat. Most owners are one or two boats, run from a phone at a berth — not a
            compliance department. So the whole thing is built for that person: from nothing to a working
            SMS in an afternoon, the depth kept under the hood.
          </p>
          <p>
            And it&rsquo;s built to be trusted. Its AI, Nova, retrieves and cites the Code — it never rules
            a verdict, because that&rsquo;s the surveyor&rsquo;s call. We show you everything: the product,
            the price, Nova&rsquo;s sources, even your own gaps.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Anchor, t: '20 years offshore', d: 'Geoquip · Fugro · marine construction' },
            { icon: ShieldCheck, t: 'Reviewed by industry', d: 'Built with serving industry reviewers' },
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
          <Link to={TRIAL_HREF} className="btn-primary justify-center">Start free trial <ChevronRight className="w-4 h-4" /></Link>
          <Link to="/how-it-works" className="btn-secondary justify-center">See how it works</Link>
        </div>
      </div>
    </div>
  );
}
