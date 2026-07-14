import { Link } from 'react-router-dom';
import { Scale, ChevronRight } from 'lucide-react';
import { TRIAL_HREF, FOUNDING_MODE } from '../config';
import ApplyCta from '../components/ApplyCta';
import { useSeo } from '../lib/seo';
import { ROUTE_SEO } from '../lib/routeSeo';

/**
 * "The Code, explained" (design §2 + rule 2). 🟥 Every Code statement carries its SECTION REF and is
 * quoted VERBATIM from the on-file Workboat Code Edition 3 (BUILD_STAGES/WB3-CODE-PDFS), taken from the
 * product's own PDF-verified clause registry (code-clauses.ts) - no paraphrase, no invented claim, no
 * verdict. A claim we cannot cite is not on this page.
 */

// The ten SMS elements - verbatim, Appendix 8 §1.1.
const ELEMENTS = [
  'Safety and Environmental Protection Policy',
  'Risk Assessment for Safe Working',
  'Health and Safety Protection Policy',
  'responsibilities of the Master and Personnel',
  'training of Personnel',
  'procedures to ensure safe operation of a vessel',
  'emergencies',
  'reporting of accidents',
  'maintenance of the vessel and equipment',
  'review',
];

// Verbatim clause cards (citation + exact text from the registry).
const CLAUSES: { citation: string; text: string }[] = [
  {
    citation: 'Workboat Code Edition 3, Appendix 8, section 6',
    text:
      'The vessel owner/operator shall, in relation to each vessel owned by it or for which it has operational responsibility, designate a person ashore who shall be responsible for monitoring the safe operation of the vessel and, so far as it may affect safety, the efficient operation of the vessel.',
  },
  {
    citation: 'Workboat Code Edition 3, Appendix 8, section 7',
    text:
      'All personnel shall receive training appropriate to the tasks they undertake. Prior to the first occasion of working on the vessel, each worker must receive appropriate familiarisation training and proper instruction in on board procedures.',
  },
  {
    citation: 'Workboat Code Edition 3, Appendix 8, section 10',
    text:
      'Exercises shall be carried out in the handling of the identified emergency situations and evacuation from the vessel. The exercises shall be recorded. The names of those who participated shall also be recorded.',
  },
  {
    citation: 'Workboat Code Edition 3, Appendix 8, section 12',
    text:
      'The vessel owner/operator shall develop documented procedures for a more detailed inspection and maintenance program for the vessel and its equipment. The frequency of the required inspection and maintenance shall be determined by the vessel owner/operator. All inspections and maintenance activities shall be recorded.',
  },
];

export default function CodePage() {
  useSeo(ROUTE_SEO['/code']);
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-border-default bg-surface-1 px-3 py-1 text-xs font-medium text-text-secondary">
          <Scale className="w-3.5 h-3.5 text-brand-primary" /> Workboat Code Edition 3 · MGN 710 (M)
        </span>
        <h1 className="mt-5 text-3xl md:text-4xl font-bold text-text-primary">What Edition 3 actually requires of you</h1>
        <p className="mt-4 text-text-secondary leading-relaxed">
          The Workboat Code Edition 3 came into force on 13 December 2023. Under it, every small commercial
          workboat needs a Safety Management System. Everything below is quoted from the Code itself - with
          its section reference - never paraphrased, never a verdict.
        </p>

        {/* The ten required elements - verbatim §1.1 */}
        <div className="mt-10 rounded-2xl border border-border-default bg-surface-1 p-6">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-text-primary">
            <Scale className="w-4 h-4 text-text-muted" /> Workboat Code Edition 3, Appendix 8, section 1.1
          </p>
          <p className="mt-2 text-sm text-text-secondary">&ldquo;A Safety Management System shall include the following:&rdquo;</p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-2">
            {ELEMENTS.map((e, i) => (
              <li key={e} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-[11px] font-semibold text-brand-primary">{i + 1}</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-text-muted">Quoted verbatim from the Workboat Code.</p>
        </div>

        <p className="mt-10 text-text-secondary">SMS Workboat gives you a home for each of these - and the record to prove it. A closer look at four:</p>

        <div className="mt-6 space-y-5">
          {CLAUSES.map((c) => (
            <div key={c.citation} className="rounded-xl border border-border-default bg-surface-1 p-5">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-text-primary">
                <Scale className="w-3.5 h-3.5 shrink-0 text-text-muted" /> {c.citation}
              </p>
              <blockquote className="mt-2 border-l-2 border-border-default pl-4 text-sm leading-relaxed text-text-secondary">{c.text}</blockquote>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-text-muted">
          Source: the on-file Workboat Code Edition 3 and MGN 710 (M). Nova quotes these same clauses when
          you ask it - it cites the section and never rules whether you comply. That&rsquo;s your surveyor&rsquo;s
          call.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          {FOUNDING_MODE ? <ApplyCta className="btn-primary justify-center" /> : <Link to={TRIAL_HREF} className="btn-primary justify-center">Start free trial <ChevronRight className="w-4 h-4" /></Link>}
          <Link to="/how-it-works" className="btn-secondary justify-center">See how it works</Link>
        </div>
      </div>
    </div>
  );
}
