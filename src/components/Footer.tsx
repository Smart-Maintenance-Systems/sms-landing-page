import { Link } from 'react-router-dom';
import { Anchor, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-1 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/sms-logo-small.png" alt="SMS" className="h-10 w-auto logo-glow" />
              <div>
                <div className="text-lg font-bold text-text-primary">SMS</div>
                <div className="text-xs text-text-muted">Smart Maintenance Systems</div>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              The AI-powered operating system for maritime vessel operations. Built by offshore
              operators with 20+ years of experience.
            </p>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Anchor className="w-3 h-3" />
              <span>Built Offshore. Built Different.</span>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Maintenance & Equipment', href: '/platform' },
                { label: 'HSE & Safety', href: '/platform' },
                { label: 'Purchasing & Supply', href: '/platform' },
                { label: 'Operations & DPR', href: '/platform' },
                { label: 'AI Intelligence', href: '/platform' },
                { label: 'Portal Command Centre', href: '/platform' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Platform', href: '/platform' },
                { label: 'About', href: '/about' },
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Register interest', href: 'mailto:info@smsystems.uk?subject=SMS%20for%20fleets', external: true },
                { label: 'SMS Workboat ↗', href: 'https://smsworkboat.co.uk', external: true },
              ].map((item) =>
                'external' in item && item.external ? (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-sm text-text-secondary hover:text-brand-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-sm text-text-secondary hover:text-brand-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <Mail className="w-4 h-4 text-text-muted shrink-0" />
                <a href="mailto:info@smsystems.uk" className="hover:text-brand-primary transition-colors">
                  info@smsystems.uk
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <MapPin className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                <span>Cornwall, United Kingdom</span>
              </li>
            </ul>

            {/* Badges */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-xs text-text-muted mb-3">Backed by</p>
              <div className="flex items-center gap-3">
                <img src="/innovate-uk-logo.png" alt="UKRI Innovate UK" className="h-8 w-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Smart Maintenance Systems Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-text-muted">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
