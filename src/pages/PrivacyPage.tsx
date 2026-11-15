import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { ROUTE_SEO } from '../lib/routeSeo';

/**
 * Privacy notice, version 1 (15 November 2026). Text = GDPR-2 D1 (founder-approved draft 13 Nov 2026), blanks
 * filled per the founder's decisions of 15 Nov (contact info@smsystems.uk; emergency-contact basis "the operator's
 * legitimate interests"; version 1 dated the go-live day). `{build NN}` markers use the "today" wording.
 * 🟥 Every sentence must stay true of the product today. When a build ships (export, closure, log clean-up),
 * the matching sentence changes the same day. The AI line uses the founder's 12 Nov wording (row 6(a)), checked at
 * source: no file that calls the AI layer reads the private medical or emergency-contact tables.
 */

const strong = 'text-text-primary';
const h2 = 'text-xl font-semibold text-text-primary';

export default function PrivacyPage() {
  useSeo(ROUTE_SEO['/privacy']);
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Privacy</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">Privacy notice</h1>
        <p className="mt-3 text-sm text-text-muted">Version 1 &middot; 15 November 2026</p>

        <div className="mt-8 space-y-8 text-text-secondary leading-relaxed">
          <p>
            This notice explains what personal data SMS Workboat holds, why, who else receives it, and the rights
            you have. It is written for UK data protection law (the UK GDPR and the Data Protection Act 2018).
          </p>

          <section>
            <h2 className={h2}>Who we are</h2>
            <p className="mt-3">
              SMS Workboat is run by Smart Maintenance Systems Ltd, company number 16459454, Unit 2b Nancegollan
              Industrial Estate, Helston, TR13 0BN. We are registered with the Information Commissioner&rsquo;s
              Office, registration ZC237328. For data questions, requests and complaints, email
              {' '}<span className={strong}>info@smsystems.uk</span>.
            </p>
          </section>

          <section>
            <h2 className={h2}>Two kinds of data, two roles</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>
                <strong className={strong}>Your company&rsquo;s safety records</strong> (boats, crew, certificates,
                drills, maintenance, photos, signatures). Your employer or boat operator decides what is recorded
                and why. They are the controller. We store and process it for them, on their instructions.
              </li>
              <li>
                <strong className={strong}>Your account with us</strong> (your sign-in, our security logs, how the
                product is used). We decide that. We are the controller.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>What we hold</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li><strong className={strong}>Account:</strong> name, email, password (stored scrambled, never readable), phone and job title if you add them.</li>
              <li><strong className={strong}>Crew records your operator keeps:</strong> name, role, certificates and their scans, drill and toolbox-talk attendance, familiarisation, signatures you draw or type, photos you take.</li>
              <li><strong className={strong}>Private, only if you choose:</strong> an emergency contact. This is optional. Only you and authorised account owners within your company can see your emergency contact details. You can delete it at any time.</li>
              <li><strong className={strong}>Medical notes are not currently being collected.</strong></li>
              <li><strong className={strong}>Security logs:</strong> when you sign in, from which internet address and device.</li>
              <li><strong className={strong}>Usage:</strong> which features are used and how long the assistant takes. We do not store what you ask the assistant or what it answers.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>If you are someone&rsquo;s emergency contact</h2>
            <p className="mt-3">
              A crew member gave your name and phone number so their operator can reach you in an emergency. Only
              that crew member and authorised account owners within their company can see it. To have it removed,
              ask the crew member, or write to us.
            </p>
          </section>

          <section>
            <h2 className={h2}>Why we use it, and on what basis</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-border-default text-text-primary">
                    <th className="py-2 pr-3 font-semibold">What</th>
                    <th className="py-2 pr-3 font-semibold">Why</th>
                    <th className="py-2 font-semibold">Lawful basis</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-b border-border-subtle"><td className="py-2 pr-3">Your account</td><td className="py-2 pr-3">to give you the service</td><td className="py-2">contract</td></tr>
                  <tr className="border-b border-border-subtle"><td className="py-2 pr-3">Security logs</td><td className="py-2 pr-3">to keep accounts safe</td><td className="py-2">legitimate interests</td></tr>
                  <tr className="border-b border-border-subtle"><td className="py-2 pr-3">Usage counts</td><td className="py-2 pr-3">to fix and improve the product</td><td className="py-2">legitimate interests</td></tr>
                  <tr className="border-b border-border-subtle"><td className="py-2 pr-3">Crew safety records</td><td className="py-2 pr-3">your operator&rsquo;s reasons</td><td className="py-2">your operator decides and tells you</td></tr>
                  <tr><td className="py-2 pr-3">Emergency contact</td><td className="py-2 pr-3">so your operator can reach someone for you in an emergency</td><td className="py-2">the operator&rsquo;s legitimate interests</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className={h2}>Who else receives it</h2>
            <ul className="mt-3 list-disc pl-5 space-y-3">
              <li>
                <strong className={strong}>Railway</strong> (hosting, database and file storage): everything, as
                our host, including photos, scans and signatures. Kept in the Netherlands (EU).
              </li>
              <li>
                <strong className={strong}>Twilio SendGrid</strong> (email): your email address and the emails we
                send you. Kept in the United States.
              </li>
              <li>
                <strong className={strong}>Anthropic</strong> (the AI assistant): questions typed to the
                assistant; certificate details with crew names; certificate scans you choose to scan; and the
                titles and dates of maintenance, drill, incident and certificate records when an AI review summary
                is requested. Kept in the United States. Private medical notes and emergency contacts stored in
                crew profiles are not sent to it. Documents submitted for AI scanning, including medical fitness
                certificates, are processed by it. Please do not enter sensitive medical information into the AI
                assistant. Its terms do not allow it to train its models on this content.
              </li>
              <li>
                <strong className={strong}>A marine examiner</strong>, when your operator gives them a time-limited
                link: names, roles, certificates and signed records. They can keep a copy.
              </li>
            </ul>
            <p className="mt-3">
              We do not sell data or share it for advertising. Where a provider keeps or handles data outside the
              UK, our agreement with it includes the UK&rsquo;s standard transfer terms (Railway: the UK Addendum,
              signed 12 November 2026; Twilio SendGrid: the UK International Data Transfer Agreement; Anthropic:
              the UK Addendum). We update this list the day a provider changes.
            </p>
          </section>

          <section>
            <h2 className={h2}>How long we keep it</h2>
            <p className="mt-3">
              Safety records are kept for as long as your operator&rsquo;s account is open. After the account
              closes, personal data will normally be deleted within 90 days, unless a longer retention period is
              required by law, for example following a reportable accident. For sign-in logs, we are building
              automatic clean-up; until then we delete them on request. Backups roll off within 89 days.
            </p>
          </section>

          <section>
            <h2 className={h2}>On your phone</h2>
            <p className="mt-3">
              To work at sea the app keeps on your device: your sign-in, a copy of your boats for up to 30 days,
              and any work not yet sent. Logging out removes the sign-in and the copy. Unsent work stays until it
              is sent. We use no advertising or tracking storage in the app. The demo site and this website load
              analytics only if you accept.
            </p>
          </section>

          <section>
            <h2 className={h2}>On this website</h2>
            <p className="mt-3">
              If you accept the cookie banner, this website loads two analytics tools to understand how the site
              is used: <strong className={strong}>Google Analytics&nbsp;4</strong> (pages viewed, where visitors
              came from, broad device type) and <strong className={strong}>Microsoft Clarity</strong> (session
              recordings and heatmaps; Clarity masks text and form inputs by default). Nothing analytics-related
              loads until you choose, and the site works the same if you decline. To change your mind, clear this
              site&rsquo;s cookies in your browser and you will be asked again. Neither tool is used for
              advertising.
            </p>
          </section>

          <section>
            <h2 className={h2}>Your rights</h2>
            <p className="mt-3">
              You can ask for a copy of your data, to have it corrected or deleted, or to object to how it is used.
              For records your operator keeps, ask them first; we will help them answer. For your account, ask us.
              We reply within one month. Some safety records may have to be kept by your operator; if so we will
              tell you why.
            </p>
          </section>

          <section>
            <h2 className={h2}>Complaints</h2>
            <p className="mt-3">
              Write to <span className={strong}>info@smsystems.uk</span>. We acknowledge within 30 days and answer
              without undue delay. You can also complain to the Information Commissioner&rsquo;s Office at
              {' '}<a href="https://ico.org.uk/make-a-complaint/" className="text-brand-primary hover:underline" rel="noopener noreferrer" target="_blank">ico.org.uk/make-a-complaint</a>.
            </p>
          </section>

          <section>
            <h2 className={h2}>Changes</h2>
            <p className="mt-3">
              We will tell you in the app before we use your data in a new way. Version 1, 15 November 2026.
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
