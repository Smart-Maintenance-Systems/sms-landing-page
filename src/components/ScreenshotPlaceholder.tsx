import { Monitor, Smartphone, Film } from 'lucide-react';

interface ScreenshotPlaceholderProps {
  label: string;
  aspect?: 'video' | 'phone' | 'square';
  /** A clip shows a film icon + "clip to be filmed"; a screenshot shows a screen icon. */
  kind?: 'screenshot' | 'clip';
  /** An honest caption below the frame (e.g. "Clip: the inspector link opening — to be filmed"). */
  caption?: string;
  className?: string;
}

/**
 * W1 — an HONEST placeholder frame. 🟥 Never a mockup, never stock, never animation-instead-of-product:
 * it says plainly "screenshot placeholder" / "clip to be filmed" so a founder-review reader (and later a
 * visitor, if any slip through) is never shown a fabricated product image. Real shots use <Screenshot/>.
 */
export default function ScreenshotPlaceholder({
  label,
  aspect = 'video',
  kind = 'screenshot',
  caption,
  className = '',
}: ScreenshotPlaceholderProps) {
  const aspectClass = {
    video: 'aspect-[16/9]',
    phone: 'aspect-[9/16] max-w-[280px]',
    square: 'aspect-square',
  }[aspect];

  const Icon = kind === 'clip' ? Film : aspect === 'phone' ? Smartphone : Monitor;

  return (
    <div className={className}>
      <div className={`relative ${aspectClass} rounded-xl overflow-hidden border border-dashed border-border-default bg-gradient-to-br from-surface-2 to-surface-1`}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <Icon className="w-8 h-8 text-text-muted mb-3" />
          <p className="text-sm text-text-secondary font-medium">{label}</p>
          <p className="text-xs text-text-muted/70 mt-1">{kind === 'clip' ? 'Clip to be filmed' : 'Screenshot placeholder'}</p>
        </div>
      </div>
      {caption && <p className="mt-3 text-center text-sm text-text-muted italic">{caption}</p>}
    </div>
  );
}
