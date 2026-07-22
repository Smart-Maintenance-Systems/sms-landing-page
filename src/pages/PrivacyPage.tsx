import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { ROUTE_SEO } from '../lib/routeSeo';

/**
 * Privacy policy — plain-English, product-accurate STARTING POINT (matches the honesty brand: no
 * boilerplate we can't stand behind). 🟥 Before public launch the founder must (1) fill the bracketed
 * legal specifics [company registration, registered address, ICO number, contact address, payment
 * provider], and (2) have a solicitor / the ICO's SME resources sanity-check it for their exact setup.
 * Content is accurate to what the product does today; the brackets are the only unknowns.
 */
export default function PrivacyPage() {
  useSeo(ROUTE_SEO['/privacy']);
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Privacy</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">Privacy policy</h1>
        <p className="mt-3 text-sm text-text-muted">Last updated: 22 July 2026</p>

        <div className="mt-8 space-y-8 text-text-secondary leading-relaxed">
          <p>
            SMS Workboat is a product of Smart Maintenance Systems (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This
            policy explains what personal data we hold, why, and the rights you have over it. We&rsquo;ve
            written it in plain English rather than boilerplate. It&rsquo;s written for UK law &mdash; the UK
            GDPR and the Data Protection Act 2018.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Who is responsible for your data</h2>
            <p className="mt-3">
              For your own <strong className="text-text-primary">account and billing details</strong>, we are
              the data controller. For the <strong className="text-text-primary">operational data you put into
              the system</strong> &mdash; your vessels, certificates, drills, maintenance, incidents, and any
              crew details you enter &mdash; you are the controller and we are your processor: we hold and
              process that information on your instructions, to run the service for you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">What we collect</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li><strong className="text-text-primary">Account details</strong> — your name, email, and password (stored only as a secure hash).</li>
              <li><strong className="text-text-primary">Your SMS content</strong> — vessel details, certificates and their scans, risk assessments, drills, maintenance records, incidents, policies, and photos you upload.</li>
              <li><strong className="text-text-primary">Crew details you enter</strong> — names, roles and any certificates you record against your crew. You&rsquo;re responsible for having a basis to enter this; we process it to provide the service to you.</li>
              <li><strong className="text-text-primary">Billing</strong> — if you take a paid plan, your card details are handled by our payment provider and are never stored on our systems.</li>
              <li><strong className="text-text-primary">Technical data</strong> — basic logs needed to run and secure the service (e.g. IP address, timestamps, error diagnostics).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Why we use it (our legal bases)</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li><strong className="text-text-primary">To provide the service</strong> you&rsquo;ve signed up for (performance of a contract).</li>
              <li><strong className="text-text-primary">To keep it secure and working</strong>, and to improve it (our legitimate interests, balanced against your rights).</li>
              <li><strong className="text-text-primary">To meet our own legal obligations</strong> (for example, tax and accounting records).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Nova (our AI) and your data</h2>
            <p className="mt-3">
              Nova retrieves and cites the Workboat Code and helps you organise your records. It never makes a
              compliance decision &mdash; that stays with you and your surveyor. When Nova answers a question,
              the relevant text is sent to our AI provider to generate the reply. We do not sell your data, and
              your content is <strong className="text-text-primary">not used to train third-party AI models</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Who we share it with</h2>
            <p className="mt-3">
              We don&rsquo;t sell your data or share it for advertising. We use a small number of trusted
              suppliers (sub-processors) purely to run the service, each under a data-processing agreement:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Cloud hosting and file storage (to run the app and store your uploads).</li>
              <li>Email delivery (for account and notification emails).</li>
              <li>Our AI provider (to power Nova, as above).</li>
              <li>A payment provider (only if you&rsquo;re on a paid plan).</li>
            </ul>
            <p className="mt-3">
              We may also disclose data if the law requires it. If we ever change who processes your data,
              we&rsquo;ll keep this page up to date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Where it&rsquo;s kept, and for how long</h2>
            <p className="mt-3">
              Your data is stored on secure servers, protected by encryption in transit and access controls.
              We keep your data for as long as your account is active. If you close your account, we delete or
              anonymise your data within a reasonable period, except where we must keep certain records to meet
              a legal obligation. You can export your records at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Your rights</h2>
            <p className="mt-3">
              Under UK data protection law you can ask to access, correct, delete, or receive a copy of your
              personal data, and you can object to or restrict certain processing. To exercise any of these,
              contact us (below). You also have the right to complain to the Information Commissioner&rsquo;s
              Office (ICO) at <span className="text-text-primary">ico.org.uk</span> &mdash; though we&rsquo;d
              appreciate the chance to put things right first.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Cookies</h2>
            <p className="mt-3">
              We keep cookies to a minimum &mdash; the ones we use are essential to sign you in and keep the
              service working. We don&rsquo;t use advertising or cross-site tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Contact us</h2>
            <p className="mt-3">
              Questions about your data, or want to exercise a right? Email
              {' '}<span className="text-text-primary">privacy@smsworkboat.co.uk</span>.
              SMS Workboat is operated by Smart Maintenance Systems, [registered address], company number
              [company number].
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
