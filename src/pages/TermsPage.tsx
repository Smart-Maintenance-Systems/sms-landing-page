import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { ROUTE_SEO } from '../lib/routeSeo';

/**
 * Terms of service — plain-English, product-accurate STARTING POINT. 🟥 Before public launch the founder
 * must (1) fill the bracketed specifics [company registration, registered address, payment provider], confirm
 * the pricing clause matches the live plans, and (2) have a solicitor sanity-check the liability + billing
 * terms for their setup. The "what this is / isn't" clause is load-bearing and matches the product's honesty
 * line (a tool, never a guarantee of passing survey) — keep it.
 */
export default function TermsPage() {
  useSeo(ROUTE_SEO['/terms']);
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Terms</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">Terms of service</h1>
        <p className="mt-3 text-sm text-text-muted">Last updated: 22 July 2026</p>

        <div className="mt-8 space-y-8 text-text-secondary leading-relaxed">
          <p>
            These terms are the agreement between you and Smart Maintenance Systems (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;) for the use of SMS Workboat. By creating an account or using the service, you
            agree to them. We&rsquo;ve kept them in plain English.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">What SMS Workboat is &mdash; and isn&rsquo;t</h2>
            <p className="mt-3">
              SMS Workboat is a tool to help you <strong className="text-text-primary">build and maintain your
              Safety Management System</strong> and keep your records ready for inspection. It is
              <strong className="text-text-primary"> not</strong> a guarantee of compliance, and it does not
              decide whether you pass a survey. Nova retrieves and cites the Workboat Code; it never rules a
              verdict. Responsibility for your vessel&rsquo;s safety and compliance remains yours as the
              operator, and whether you meet the Code is a matter for your surveyor, Designated Person, and the
              MCA &mdash; not for us. You must always exercise your own professional judgement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Your account</h2>
            <p className="mt-3">
              You&rsquo;re responsible for the information you enter, for keeping your login secure, and for the
              activity under your account. Keep your details accurate. You must have a proper basis for any
              personal data you record about your crew, and you&rsquo;re responsible for that data as its
              controller (see our <Link to="/privacy" className="text-brand-primary hover:underline">Privacy policy</Link>).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Subscription and billing</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Paid plans are billed per boat. The current price is shown on our <Link to="/pricing" className="text-brand-primary hover:underline">pricing page</Link>; that page prevails if anything here differs.</li>
              <li>Any free trial runs for the stated period; you won&rsquo;t be charged unless you choose to continue on a paid plan.</li>
              <li>Subscriptions renew automatically until you cancel. You can cancel at any time, effective at the end of your current billing period.</li>
              <li>Payments are handled securely by our payment provider. We may change our prices with reasonable notice; changes never apply to a period you&rsquo;ve already paid for.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Acceptable use</h2>
            <p className="mt-3">
              Use the service lawfully and as intended. Don&rsquo;t attempt to break, overload, or gain
              unauthorised access to it, don&rsquo;t upload unlawful content, and don&rsquo;t use it to
              misrepresent your compliance to a third party. We may suspend accounts that put the service or
              other users at risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Your content</h2>
            <p className="mt-3">
              Your records are yours. You grant us only the permission we need to host and process them so the
              service works. You can export your data at any time, and you can delete it by closing your
              account. We don&rsquo;t claim ownership of your content and we don&rsquo;t sell it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Availability</h2>
            <p className="mt-3">
              We work hard to keep the service available and reliable, but it&rsquo;s provided &ldquo;as
              is&rdquo;. There may be occasional downtime for maintenance or reasons beyond our control. Keep
              your own copies of anything critical &mdash; the export is there for exactly that.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Liability</h2>
            <p className="mt-3">
              Nothing in these terms limits liability that can&rsquo;t be limited by law (such as for death or
              personal injury caused by negligence, or for fraud). Subject to that, we&rsquo;re not liable for
              indirect or consequential loss, or for any outcome of a survey, inspection, or enforcement
              action &mdash; those depend on your operation and the assessor&rsquo;s judgement, not on the
              software. Our total liability to you is limited to the fees you paid us in the 12 months before
              the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Ending the agreement</h2>
            <p className="mt-3">
              You can stop using the service and close your account at any time. We may suspend or end access
              if these terms are seriously or repeatedly broken. On closure, you can export your data first,
              after which we&rsquo;ll delete or anonymise it as described in the Privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Changes and governing law</h2>
            <p className="mt-3">
              We may update these terms; we&rsquo;ll post the new version here with an updated date and, for
              material changes, let you know. These terms are governed by the law of England and Wales, and
              the courts of England and Wales have jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">Contact</h2>
            <p className="mt-3">
              Questions? Email <span className="text-text-primary">hello@smsworkboat.co.uk</span>. SMS Workboat
              is operated by Smart Maintenance Systems, [registered address], company number [company number].
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
