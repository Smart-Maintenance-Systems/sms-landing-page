import { Link } from 'react-router-dom';
import { Anchor, Mail, ChevronRight } from 'lucide-react';
import { MAIN_CONTACT, CONTACT_EMAIL, TRIAL_HREF, FOUNDING_MODE } from '../config';
import ApplyCta from './ApplyCta';

const PRODUCT_LINKS = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'The Code, explained', href: '/code' },
  { label: 'FAQ', href: '/faq' },
];
const COMPANY_LINKS = [
  { label: 'Why us', href: '/about' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-surface-1 border-t border-border-subtle">
      {/* The quiet SMS-Main cross-sell (design §3) - structural, never a competitor mention. */}
      <div className="border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-text-secondary">
            Running more than workboats?{' '}
            <span className="text-text-primary font-medium">SMS for fleets and shore operations.</span>
          </p>
          <a href={MAIN_CONTACT} className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-brand-hover">
            Talk to us <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-border-subtle">
                <img src="/sms-workboat-mark.jpg" alt="SMS Workboat" className="h-8 w-8 object-contain" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-text-primary">SMS Workboat</span>
                <span className="text-xs text-text-muted">Workboat Code 3 SMS</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md">
              The simplest way to have the safety management system UK law now requires on every small
              commercial workboat. Built with serving industry reviewers.
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs text-text-muted">
              <Anchor className="w-3.5 h-3.5" /> Nova handles the compliance, you handle the boat.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-text-secondary hover:text-brand-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-text-secondary hover:text-brand-primary transition-colors">{l.label}</Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-brand-primary transition-colors">
                  <Mail className="w-3.5 h-3.5" /> {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-text-muted">© {new Date().getFullYear()} SMS Workboat - built by Smart Maintenance Systems. All rights reserved.</p>
          {FOUNDING_MODE ? <ApplyCta className="text-xs text-text-secondary hover:text-brand-primary" chevron={false} /> : <Link to={TRIAL_HREF} className="text-xs text-text-secondary hover:text-brand-primary">Start your 14-day free trial →</Link>}
        </div>
      </div>
    </footer>
  );
}
