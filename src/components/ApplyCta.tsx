import { ChevronRight } from 'lucide-react';
import { FOUNDING_APPLY_HREF, FOUNDING_CTA_LABEL } from '../config';

/**
 * W6 - the Founding Skipper apply CTA (a pre-filled mailto). Rendered ONLY in the FOUNDING_MODE-on branch
 * at each CTA site; the flag-off branch keeps today's trial CTA untouched, so a launch-day flip restores
 * the site byte-identically. `chevron` matches the trailing icon the trial buttons carry; drop it for the
 * plain footer/text-link variant.
 */
export default function ApplyCta({ className = '', chevron = true }: { className?: string; chevron?: boolean }) {
  return (
    <a href={FOUNDING_APPLY_HREF} className={className}>
      {FOUNDING_CTA_LABEL}{chevron ? <> <ChevronRight className="w-4 h-4" /></> : null}
    </a>
  );
}
