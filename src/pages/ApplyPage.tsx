import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, Anchor } from 'lucide-react';
import { API_BASE, FOUNDING_APPLY_HREF, CONTACT_EMAIL } from '../config';
import { useSeo } from '../lib/seo';
import { ROUTE_SEO } from '../lib/routeSeo';

/**
 * Founding-Skipper application form (audit #12). Replaces the fragile pre-filled mailto — which silently
 * no-ops on a phone with no configured mail client — with a real form that POSTs to the in-house
 * `POST {API_BASE}/api/public/founding-apply` endpoint. The mailto is kept as an explicit fallback link.
 *
 * 🟥 Field mapping (the endpoint takes name/email/boatName/message + a `company` HONEYPOT):
 *   - name  → name (required)          - email → email (required)
 *   - the visible "Company / operation" answer maps to MESSAGE, never to the `company` param
 *     (that param is the honeypot — a real value there makes the server SILENTLY drop the application).
 *   - everything else is composed into `message`; boatName carries the boat line for a readable inbox.
 */

const SMS_TODAY = ['Nothing yet', 'Paper', 'Spreadsheet', 'Another system'] as const;

type Status = 'idle' | 'submitting' | 'ok' | 'error';

export default function ApplyPage() {
  useSeo(ROUTE_SEO['/apply']);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [operation, setOperation] = useState('');
  const [boats, setBoats] = useState('');
  const [area, setArea] = useState('');
  const [smsToday, setSmsToday] = useState('');
  const [headache, setHeadache] = useState('');
  const [anythingElse, setAnythingElse] = useState('');
  const [company, setCompany] = useState(''); // 🍯 honeypot — real users never see or fill this
  const [status, setStatus] = useState<Status>('idle');

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const canSubmit = name.trim().length > 0 && emailValid && status !== 'submitting';

  function composeMessage(): string {
    const lines: string[] = [];
    if (operation.trim()) lines.push(`Company / operation: ${operation.trim()}`);
    if (boats.trim()) lines.push(`Boat(s): ${boats.trim()}`);
    if (area.trim()) lines.push(`Operating area: ${area.trim()}`);
    if (smsToday.trim()) lines.push(`Manages SMS today: ${smsToday.trim()}`);
    if (headache.trim()) lines.push(`Biggest headache: ${headache.trim()}`);
    if (phone.trim()) lines.push(`Phone: ${phone.trim()}`);
    if (anythingElse.trim()) lines.push(`Anything else: ${anythingElse.trim()}`);
    return lines.join('\n').slice(0, 2000); // endpoint caps message at 2000
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus('submitting');
    try {
      const res = await fetch(`${API_BASE}/api/public/founding-apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          boatName: boats.trim().slice(0, 120),
          message: composeMessage(),
          company, // honeypot — empty for a real applicant
        }),
      });
      const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (res.ok && data?.success) setStatus('ok');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  const inputCls =
    'w-full rounded-lg border border-border-default bg-white px-4 py-3 text-text-primary ' +
    'placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/40 min-h-[48px]';
  const labelCls = 'block text-sm font-medium text-text-primary mb-1.5';

  if (status === 'ok') {
    return (
      <div className="pt-24 md:pt-32 pb-24">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-status-success/10">
            <Check className="h-7 w-7 text-status-success" />
          </div>
          <h1 className="mt-5 text-3xl font-bold text-text-primary">Thanks — that's with us.</h1>
          <p className="mt-3 text-text-secondary">
            We read every Founding Skipper application by hand and we'll be in touch. If it's urgent you can
            always email us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-primary hover:text-brand-hover">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <Link to="/" className="btn-secondary mt-8 justify-center">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
            <Anchor className="w-4 h-4" /> Founding Skippers · 10 boats
          </div>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">Apply to be a Founding Skipper</h1>
          <p className="mt-3 text-text-secondary">
            A few quick things so we can see how we can help. No wrong answers — only <strong>your name</strong>{' '}
            and <strong>email</strong> are required.
          </p>
        </div>

        <form onSubmit={onSubmit} className="wb-card mt-8 p-6 md:p-8 space-y-5" noValidate>
          <div>
            <label className={labelCls} htmlFor="fa-name">Your name *</label>
            <input id="fa-name" className={inputCls} value={name} onChange={(e) => setName(e.target.value)}
              maxLength={120} autoComplete="name" required />
          </div>
          <div>
            <label className={labelCls} htmlFor="fa-email">Best email *</label>
            <input id="fa-email" type="email" className={inputCls} value={email} onChange={(e) => setEmail(e.target.value)}
              maxLength={200} autoComplete="email" required />
            {email.length > 0 && !emailValid ? (
              <p className="mt-1 text-sm text-status-error">Please enter a valid email so we can reply.</p>
            ) : null}
          </div>
          <div>
            <label className={labelCls} htmlFor="fa-phone">Best phone number</label>
            <input id="fa-phone" type="tel" className={inputCls} value={phone} onChange={(e) => setPhone(e.target.value)}
              maxLength={40} autoComplete="tel" />
          </div>
          <div>
            <label className={labelCls} htmlFor="fa-operation">Company / operation</label>
            <input id="fa-operation" className={inputCls} value={operation} onChange={(e) => setOperation(e.target.value)}
              maxLength={200} />
          </div>
          <div>
            <label className={labelCls} htmlFor="fa-boats">Boat(s) — name, type, and what they do</label>
            <textarea id="fa-boats" className={inputCls} value={boats} onChange={(e) => setBoats(e.target.value)}
              maxLength={500} rows={2} />
          </div>
          <div>
            <label className={labelCls} htmlFor="fa-area">Where you operate (ports / area)</label>
            <input id="fa-area" className={inputCls} value={area} onChange={(e) => setArea(e.target.value)}
              maxLength={200} />
          </div>
          <div>
            <label className={labelCls} htmlFor="fa-sms">How do you manage your SMS today?</label>
            <select id="fa-sms" className={inputCls} value={smsToday} onChange={(e) => setSmsToday(e.target.value)}>
              <option value="">Select…</option>
              {SMS_TODAY.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="fa-headache">Biggest compliance or paperwork headache right now</label>
            <textarea id="fa-headache" className={inputCls} value={headache} onChange={(e) => setHeadache(e.target.value)}
              maxLength={500} rows={2} />
          </div>
          <div>
            <label className={labelCls} htmlFor="fa-else">Anything else you want us to know</label>
            <textarea id="fa-else" className={inputCls} value={anythingElse} onChange={(e) => setAnythingElse(e.target.value)}
              maxLength={500} rows={2} />
          </div>

          {/* 🍯 Honeypot — visually hidden, off-screen, not tabbable. A bot fills it; the server then
              silently drops the submission. Real users never see it. */}
          <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="fa-company">Company (leave blank)</label>
            <input id="fa-company" tabIndex={-1} autoComplete="off" value={company}
              onChange={(e) => setCompany(e.target.value)} />
          </div>

          {status === 'error' ? (
            <p className="text-sm text-status-error">
              Something went wrong sending that. Please try again, or email us directly at{' '}
              <a href={FOUNDING_APPLY_HREF} className="text-brand-primary hover:text-brand-hover underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          ) : null}

          <button type="submit" className="btn-primary w-full justify-center" disabled={!canSubmit}>
            {status === 'submitting' ? 'Sending…' : <>Send my application <ChevronRight className="w-4 h-4" /></>}
          </button>

          <p className="text-center text-sm text-text-muted">
            Prefer email?{' '}
            <a href={FOUNDING_APPLY_HREF} className="text-brand-primary hover:text-brand-hover">Send it to us directly.</a>
          </p>
        </form>
      </div>
    </div>
  );
}
