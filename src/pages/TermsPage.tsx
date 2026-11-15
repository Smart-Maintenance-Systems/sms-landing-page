import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { ROUTE_SEO } from '../lib/routeSeo';

/**
 * Terms, version 1 (15 November 2026). Text = GDPR-2 D2 (founder-approved draft 13 Nov 2026), blanks filled per
 * the founder's decisions of 15 Nov. 🟥 No promise the product does not keep today:
 *  - section 4: no payment wording until a payment provider exists (D2's own instruction);
 *  - section 6: account closure uses the founder-approved row 2a sentence (27, 12 Nov). The fuller closure steps
 *    in D2 wait for build B9 ("B9 must be implemented and tested before we publish the full account-closure
 *    promise", founder 13 Nov);
 *  - section 8: the liability wording is the previous website wording, kept until a solicitor reviews it.
 * The "not a guarantee of compliance" clause is load-bearing; keep it.
 */

const strong = 'text-text-primary';
const h2 = 'text-xl font-semibold text-text-primary';

export default function TermsPage() {
  useSeo(ROUTE_SEO['/terms']);
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Terms</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">Terms of service</h1>
        <p className="mt-3 text-sm text-text-muted">Version 1 &middot; 15 November 2026</p>

        <div className="mt-8 space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className={h2}>1. What this is</h2>
            <p className="mt-3">
              These terms are the agreement between you (the operator) and Smart Maintenance Systems Ltd, company
              number 16459454, for SMS Workboat: a tool to build and keep a Safety Management System and its
              records.
            </p>
          </section>

          <section>
            <h2 className={h2}>2. Not a guarantee of compliance</h2>
            <p className="mt-3">
              SMS Workboat helps you record and check. It <strong className={strong}>does not decide whether you
              comply or pass an examination</strong>. You remain responsible as the operator.
            </p>
          </section>

          <section>
            <h2 className={h2}>3. Your account</h2>
            <p className="mt-3">
              Keep your sign-in safe. You are responsible for what is entered under your account and for who you
              invite. You decide who you give an examiner&rsquo;s link to.
            </p>
          </section>

          <section>
            <h2 className={h2}>4. Trial and payment</h2>
            <p className="mt-3">The trial is free. We will tell you before any charge.</p>
          </section>

          <section>
            <h2 className={h2}>5. Your records are yours</h2>
            <p className="mt-3">We do not own or sell them.</p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li><strong className={strong}>A copy:</strong> ask us and we will send your records within 30 days.</li>
              <li><strong className={strong}>Keep your own copies of anything critical.</strong></li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>6. Closing your account</h2>
            <p className="mt-3">
              To close your account, contact us and we will explain the steps. After the account closes, personal
              data will normally be deleted within 90 days, unless a longer retention period is required by law,
              for example following a reportable accident. Backups roll off within 89 days.
            </p>
          </section>

          <section>
            <h2 className={h2}>7. Data processing</h2>
            <p className="mt-3">
              For the records you keep about your crew, you are the controller and we are your processor.
            </p>
            <ol className="mt-3 list-decimal pl-5 space-y-2">
              <li><strong className={strong}>What and how long:</strong> storing and processing your safety records, for as long as your account is open.</li>
              <li><strong className={strong}>Kind of data and people:</strong> names, roles, certificates, attendance, signatures, photos; optional emergency contacts; about your crew and their contacts. Medical notes are not currently being collected.</li>
              <li><strong className={strong}>Your instructions only:</strong> we use this data to provide the service to you and for nothing else, unless the law requires it. Separately, we count how the product is used so we can improve it; that is described in our <Link to="/privacy" className="text-brand-primary hover:underline">privacy notice</Link>.</li>
              <li><strong className={strong}>Confidence:</strong> anyone of ours who can reach your data is bound to keep it confidential.</li>
              <li><strong className={strong}>Security:</strong> we keep it secure in the ways described in the privacy notice.</li>
              <li><strong className={strong}>Others we use:</strong> the providers named in the privacy notice. We tell you before adding one. If you object and we cannot agree, you may close your account.</li>
              <li><strong className={strong}>Helping you:</strong> we help you answer your crew&rsquo;s data requests, and with security, breaches and risk assessments.</li>
              <li><strong className={strong}>Breaches:</strong> if your data is affected we tell you without undue delay after becoming aware.</li>
              <li><strong className={strong}>At the end:</strong> we delete or return your data as in section 6.</li>
              <li><strong className={strong}>Checking us:</strong> we give you the information you reasonably need to check we keep these terms.</li>
            </ol>
            <p className="mt-3">
              Your side: you tell your crew what you record about them and why, and you only put in data you are
              entitled to.
            </p>
          </section>

          <section>
            <h2 className={h2}>8. Availability and liability</h2>
            <p className="mt-3">
              We work hard to keep the service available and reliable, but it is provided &ldquo;as is&rdquo;.
              There may be occasional downtime for maintenance or reasons beyond our control.
            </p>
            <p className="mt-3">
              Nothing in these terms limits liability that cannot be limited by law (such as for death or personal
              injury caused by negligence, or for fraud). Subject to that, we are not liable for indirect or
              consequential loss, or for any outcome of a survey, inspection, or enforcement action
              &mdash; those depend on your operation and the assessor&rsquo;s judgement, not on the software. Our
              total liability to you is limited to the fees you paid us in the 12 months before the claim.
            </p>
          </section>

          <section>
            <h2 className={h2}>9. Fair use</h2>
            <p className="mt-3">
              Lawful use only. Do not try to break in, overload the service, or misrepresent your compliance to
              anyone using our documents.
            </p>
          </section>

          <section>
            <h2 className={h2}>10. Changes, ending, law</h2>
            <p className="mt-3">
              We tell you before a material change. You can leave at any time (section 6). We may suspend an
              account that puts the service or others at risk. English and Welsh law; courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className={h2}>Contact</h2>
            <p className="mt-3">
              Email <span className={strong}>info@smsystems.uk</span>. Smart Maintenance Systems Ltd, Unit 2b
              Nancegollan Industrial Estate, Helston, TR13 0BN, company number 16459454. Version 1, 15 November
              2026.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="btn-secondary justify-center inline-flex"><ChevronLeft className="w-4 h-4" /> Back to home</Link>
        </div>
      </div>
    </div>
  );
}
