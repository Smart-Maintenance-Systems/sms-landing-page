import { Link } from 'react-router-dom';
import { Scale, ChevronRight } from 'lucide-react';
import { TRIAL_HREF } from '../config';
import { useSeo } from '../lib/seo';

/**
 * FAQ (W3 Task 4). 🟥 Every Code-fact answer carries its section citation (same registry the Code page
 * uses); every product answer is TRUE to WB3-CAPABILITY-MAP.md; NO compliance verdict ever appears — the
 * FAQ inherits Nova's leash in written form ("your surveyor decides"). These entries also seed the future
 * Website-Nova corpus (K1). FAQPage JSON-LD is generated from the same entries — schema = visible copy.
 */
interface Faq { q: string; a: string; cite?: string }

const FAQS: Faq[] = [
  {
    q: 'Do I legally need a safety management system on my workboat?',
    a: 'Yes. The Workboat Code Edition 3 came into force on 13 December 2023, and under it every small commercial workboat needs a safety management system. What that SMS must contain is set out in the Code itself.',
    cite: 'Workboat Code Edition 3, Appendix 8, section 1.1',
  },
  {
    q: 'What must my SMS actually include?',
    a: 'The Code lists ten elements: a Safety and Environmental Protection Policy; a Risk Assessment for Safe Working; a Health and Safety Protection Policy; responsibilities of the Master and Personnel; training of Personnel; procedures for safe operation; emergencies; reporting of accidents; maintenance of the vessel and equipment; and review. SMS Workboat gives each one a home and the record to prove it.',
    cite: 'Workboat Code Edition 3, Appendix 8, section 1.1',
  },
  {
    q: 'What is a Designated Person Ashore?',
    a: 'The Code requires you to designate a person ashore responsible for monitoring the safe operation of the vessel, with sufficient authority, knowledge and resources to fulfil the role. SMS Workboat has a Person Ashore surface where you record who that is.',
    cite: 'Workboat Code Edition 3, Appendix 8, section 6',
  },
  {
    q: 'Do my crew need any training or familiarisation?',
    a: 'Yes — before the first occasion of working on the vessel, each worker must receive appropriate familiarisation training and instruction in on-board procedures. SMS Workboat keeps a per-crew familiarisation register, and a login-holding crew member can countersign their own record.',
    cite: 'Workboat Code Edition 3, Appendix 8, section 7',
  },
  {
    q: 'Do I have to record drills?',
    a: 'Yes. Exercises in the identified emergency situations must be carried out and recorded, including the names of those who took part. SMS Workboat records each drill (with a photo if you want one) against those names.',
    cite: 'Workboat Code Edition 3, Appendix 8, section 10',
  },
  {
    q: 'What about maintenance records?',
    a: 'The Code asks you to develop documented inspection and maintenance procedures — you set the frequency — and to record all inspections and maintenance. SMS Workboat is a maintenance log that derives its own due dates and keeps an append-only record of what was done.',
    cite: 'Workboat Code Edition 3, Appendix 8, section 12',
  },
  {
    q: 'What happens at an inspection or survey?',
    a: 'A surveyor reviews your SMS and its records. SMS Workboat gives you an inspection pack that is ready any day, and a read-only inspector link — four hours, one boat, no app — that notifies you the moment it opens and can be revoked when they leave. Whether you comply is your surveyor’s or Designated Person’s decision, not ours.',
  },
  {
    q: 'How long does it take to set up?',
    a: 'From nothing to a working SMS in an afternoon, on your phone. You photograph certificates you already have and Nova reads the details off the picture so you just confirm them; your documents start from Workboat-Code templates rather than a blank page.',
  },
  {
    q: 'What does it cost?',
    a: '£29 a month per boat, everything included — no tiers, no fleet discount, no per-user charges, nothing gated behind a “Pro” plan. There is a 14-day free trial and no card is required to start.',
  },
  {
    q: 'Does it work offline, out on the water?',
    a: 'Within a loaded session, yes: record drills, snap evidence and sign crew on with no signal. It saves on board and syncs itself when you are back in range — a photo you take offline reads “On board”, not “Saved”, until the server confirms it. (It is reliable within a session you have already opened; it is not a fully offline app.)',
  },
  {
    q: 'How does crew sign onto a boat?',
    a: 'A crew member scans the wheelhouse QR sticker with their own phone — no app, no account — signs onto the boat, and can put their signature on the risk assessment or documents they need to acknowledge. Crew can read and self-sign; they don’t change your records.',
  },
  {
    q: 'I only have one boat — is this overkill?',
    a: 'No. With one boat there is zero fleet clutter — just your boat. The fleet office (overview, the what’s-needed-where feed, the switcher, crew, per-boat QR and inspector links) only appears when you add a second boat.',
  },
  {
    q: 'What if I run a fleet?',
    a: 'Add a second boat and the fleet office appears automatically. The price stays flat at £29 per boat — the features that arrive as you grow are already included, which is the fleet discount.',
  },
  {
    q: 'Can I get my documents out — do I own my data?',
    a: 'You can download your whole SMS as a PDF document pack any time, and the inspection pack is assembled and ready any day of the year. Your records are yours.',
  },
];

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.cite ? `${f.a} (${f.cite}.)` : f.a },
  })),
};

export default function FaqPage() {
  useSeo({
    title: 'SMS Workboat FAQ — the Workboat Code, setup, crew, pricing',
    description:
      'Honest answers to what workboat owners actually ask: do I need an SMS, what is a Person Ashore, what happens at a survey, how long setup takes, what it costs, offline, crew, fleet. Code facts cited; never a compliance verdict.',
    path: '/faq',
    jsonLd: FAQ_JSONLD,
  });

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
