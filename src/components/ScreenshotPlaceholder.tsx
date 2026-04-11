import { Monitor, Smartphone } from 'lucide-react';

interface ScreenshotPlaceholderProps {
  label: string;
  aspect?: 'video' | 'phone' | 'square';
  className?: string;
}

export default function ScreenshotPlaceholder({
  label,
  aspect = 'video',
  className = '',
}: ScreenshotPlaceholderProps) {
  const aspectClass = {
    video: 'aspect-[16/9]',
    phone: 'aspect-[9/16] max-w-[280px]',
    square: 'aspect-square',
  }[aspect];

  return (
    <div
      className={`relative ${aspectClass} rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-surface-2 to-surface-1 ${className}`}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        {aspect === 'phone' ? (
          <Smartphone className="w-8 h-8 text-text-muted mb-3" />
        ) : (
          <Monitor className="w-8 h-8 text-text-muted mb-3" />
        )}
        <p className="text-sm text-text-muted font-medium">{label}</p>
        <p className="text-xs text-text-muted/60 mt-1">Screenshot placeholder</p>
      </div>

      {/* Browser chrome for desktop */}
      {aspect === 'video' && (
        <div className="absolute top-0 left-0 right-0 h-8 bg-surface-3/80 backdrop-blur flex items-center px-3 gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-status-error/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-status-warning/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-status-success/60" />
          <div className="ml-4 flex-1 h-4 bg-surface-2 rounded-md max-w-[200px]" />
        </div>
      )}

      {/* Phone notch for mobile */}
      {aspect === 'phone' && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-surface-0 rounded-b-xl" />
      )}
    </div>
  );
}
