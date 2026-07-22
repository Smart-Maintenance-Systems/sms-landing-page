import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { TRIAL_HREF, FOUNDING_MODE, DEMO_ENABLED, DEMO_URL } from '../config';
import ApplyCta from './ApplyCta';

const NAV_ITEMS = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'The Code', href: '/code' },
  { label: 'Why us', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-surface-0/90 backdrop-blur-xl border-b border-border-subtle' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-border-subtle">
                <img src="/sms-workboat-mark.jpg" alt="SMS Workboat" className="h-9 w-9 object-contain" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-text-primary tracking-wide">SMS Workboat</span>
                {/* Company name in full - lands the triple pun (SMS = Smart Maintenance Systems). */}
                <span className="hidden sm:inline text-[11px] text-text-muted">by Smart Maintenance Systems</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-brand-primary bg-brand-primary/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Persistent demo entry (§2c) — always one click away, reinforcing "no demo to book". Opens in
                  a new tab so the site stays put. Gated on DEMO_ENABLED so it vanishes if the demo is retired. */}
              {DEMO_ENABLED && (
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2"
                >
                  Try demo
                </a>
              )}
              {FOUNDING_MODE ? (
                <ApplyCta className="btn-primary text-sm py-2" />
              ) : (
                <Link to={TRIAL_HREF} className="btn-primary text-sm py-2">
                  Start free trial
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              className="lg:hidden p-2 text-text-secondary hover:text-text-primary min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <div className="absolute top-16 left-0 right-0 bg-surface-1 border-b border-border-subtle p-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-3 rounded-lg text-base font-medium min-h-[48px] flex items-center ${
                    location.pathname === item.href
                      ? 'text-brand-primary bg-brand-primary/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border-subtle space-y-2">
                {DEMO_ENABLED && (
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-center text-sm"
                  >
                    Try the demo - no sign-up
                  </a>
                )}
                {FOUNDING_MODE ? (
                  <ApplyCta className="btn-primary w-full justify-center text-sm" chevron={false} />
                ) : (
                  <Link to={TRIAL_HREF} className="btn-primary w-full justify-center text-sm">
                    Start free trial
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
