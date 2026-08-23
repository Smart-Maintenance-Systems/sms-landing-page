import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GA4_MEASUREMENT_ID, CLARITY_PROJECT_ID } from '../config';

// Consent-gated analytics (task #344). Nothing loads and no analytics cookie is set until the visitor
// clicks Accept — the UK GDPR/PECR line. The choice persists in localStorage so the banner shows once.
// SSR/prerender-safe: renders null on the server and on the first client paint (mounted=false), then the
// effect decides — so there's no hydration mismatch.

const CONSENT_KEY = 'sms-analytics-consent';

/** Inject GA4 (and Clarity, if configured) exactly once. Idempotent via a window guard. */
function loadAnalytics() {
  if (typeof window === 'undefined') return;
  const w = window as unknown as {
    __smsAnalyticsLoaded?: boolean;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[] };
  };
  if (w.__smsAnalyticsLoaded) return;
  w.__smsAnalyticsLoaded = true;

  // --- GA4 (gtag.js) ---
  if (GA4_MEASUREMENT_ID) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(s);
    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag() {
      // GA reads the arguments object as pushed, exactly like the official snippet.
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    w.gtag('js', new Date());
    w.gtag('config', GA4_MEASUREMENT_ID, { anonymize_ip: true });
  }

  // --- Microsoft Clarity (only when a project id is set) ---
  if (CLARITY_PROJECT_ID) {
    w.clarity =
      w.clarity ||
      function () {
        // eslint-disable-next-line prefer-rest-params
        (w.clarity!.q = w.clarity!.q || []).push(arguments);
      };
    const t = document.createElement('script');
    t.async = true;
    t.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
    document.head.appendChild(t);
  }
}

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [decision, setDecision] = useState<'pending' | 'granted' | 'denied'>('pending');

  useEffect(() => {
    setMounted(true);
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_KEY);
    } catch {
      /* private mode / storage blocked — treat as no choice yet */
    }
    if (stored === 'granted') {
      setDecision('granted');
      loadAnalytics();
    } else if (stored === 'denied') {
      setDecision('denied');
    }
  }, []);

  function choose(v: 'granted' | 'denied') {
    try {
      localStorage.setItem(CONSENT_KEY, v);
    } catch {
      /* ignore — the session still respects the choice below */
    }
    setDecision(v);
    if (v === 'granted') loadAnalytics();
  }

  if (!mounted || decision !== 'pending') return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-brand-primary bg-surface-1 px-4 py-4 shadow-[0_-4px_24px_rgba(0,0,0,0.18)] sm:px-6"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-text-secondary">
          We use analytics cookies to see how the site is used and make it better. Nothing loads until you
          choose. See our{' '}
          <Link to="/privacy" className="text-brand-primary underline">
            privacy notice
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="rounded-lg border border-border-default px-5 py-2.5 text-sm font-medium text-text-secondary transition hover:opacity-80"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
