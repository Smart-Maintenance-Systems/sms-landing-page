import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APPLY_HREF, FOUNDING_CTA_LABEL } from '../config';

/**
 * W6 - the Founding Skipper apply CTA. Audit #12: now routes to the in-app `/apply` FORM (a real form that
 * POSTs to the founding-apply endpoint) instead of a pre-filled mailto that silently no-ops on a phone
 * with no mail client. The /apply page keeps the mailto as an explicit "prefer email?" fallback. Rendered
 * ONLY in the FOUNDING_MODE-on branch at each CTA site; a launch-day flag flip restores today's trial CTA.
 * `chevron` matches the trailing icon the trial buttons carry; drop it for the plain footer/text-link variant.
 */
export default function ApplyCta({ className = '', chevron = true }: { className?: string; chevron?: boolean }) {
  return (
    <Link to={APPLY_HREF} className={className}>
      {FOUNDING_CTA_LABEL}{chevron ? <> <ChevronRight className="w-4 h-4" /></> : null}
    </Link>
  );
}
