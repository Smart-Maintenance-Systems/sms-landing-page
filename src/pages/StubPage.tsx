import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { TRIAL_HREF } from '../config';

/**
 * W1 - an HONEST stub for a page whose content isn't signed yet (design §3 remainder). It says plainly
 * that it's being written - never fabricated copy - and always offers the real next step. Not a dead end.
 */
export default function StubPage({ title, blurb }: { title: string; blurb: string }) {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary">{title}</h1>
        <p className="mt-4 text-text-secondary">{blurb}</p>
        <p className="mt-2 text-sm text-text-muted">This page is being written - the content lands with the site&rsquo;s next slice.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to={TRIAL_HREF} className="btn-primary justify-center">Start free trial</Link>
          <Link to="/" className="btn-secondary justify-center"><ChevronLeft className="w-4 h-4" /> Back to home</Link>
        </div>
      </div>
    </div>
  );
}
