import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Platform', href: '/platform' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'SMS Light', href: '/light' },
  { label: 'About', href: '/about' },
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
          scrolled
            ? 'bg-surface-0/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-4 shrink-0">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="/sms-logo-small.png"
                  alt="SMS"
                  className="h-10 w-auto logo-glow"
                />
                <div className="hidden sm:block">
                  <span className="text-lg font-bold text-text-primary tracking-wide">
                    SMS
                  </span>
                  <span className="hidden md:inline text-xs text-text-muted ml-2">
                    Smart Maintenance Systems
                  </span>
                </div>
              </Link>
              <div className="hidden sm:flex items-center gap-3">
                <div className="w-px h-8 bg-white/10" />
                <img src="/innovate-uk-logo.png" alt="UKRI Innovate UK" className="h-8 w-auto opacity-80" />
              </div>
            </div>

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

            {/* CTA buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/light" className="btn-light text-sm py-2">
                SMS Light
              </Link>
              <a href="mailto:info@smsystems.uk?subject=SMS%20Demo%20Request" className="btn-primary text-sm py-2">
                Book a Demo
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
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
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute top-16 left-0 right-0 bg-surface-1 border-b border-white/5 p-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium min-h-[48px] flex items-center ${
                    location.pathname === item.href
                      ? 'text-brand-primary bg-brand-primary/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/5 space-y-2">
                <Link to="/light" className="btn-light w-full justify-center text-sm">
                  SMS Light
                </Link>
                <a href="mailto:info@smsystems.uk?subject=SMS%20Demo%20Request" className="btn-primary w-full justify-center text-sm">
                  Book a Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
