import { Link } from 'react-router-dom';
import { Scale, ChevronRight } from 'lucide-react';
import { TRIAL_HREF } from '../config';
import { useSeo } from '../lib/seo';
import { ROUTE_SEO, FAQS } from '../lib/routeSeo';

/**
 * FAQ (W3 Task 4). The Q&A corpus + FAQPage schema now live in `routeSeo.ts` (single source shared with the
 * prerender); this page just renders it. 🟥 Every Code-fact answer carries its section citation; every
 * product answer is TRUE to WB3-CAPABILITY-MAP.md; NO compliance verdict ever appears.
 */
export default function FaqPage() {
  useSeo(ROUTE_SEO['/faq']);

  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary">Frequently asked questions</h1>
        <p className="mt-4 text-text-secondary">Honest answers about the Workboat Code, the product, and getting set up. Where we state what the Code requires, we cite the section — and we never tell you whether you&rsquo;ll pass. That&rsquo;s your surveyor&rsquo;s call.</p>

        <div className="mt-10 space-y-4">
          {FAQS.map((f) => (
            <div key={f.q} className="wb-card p-5">
              <h2 className="text-base font-semibold text-text-primary">{f.q}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{f.a}</p>
              {f.cite ? (
                <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-text-muted">
                  <Scale className="w-3.5 h-3.5 shrink-0" /> {f.cite}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-3">
          <Link to={TRIAL_HREF} className="btn-primary justify-center">Start free trial <ChevronRight className="w-4 h-4" /></Link>
          <Link to="/code" className="btn-secondary justify-center">Read the Code, explained</Link>
        </div>
      </div>
    </div>
  );
}
