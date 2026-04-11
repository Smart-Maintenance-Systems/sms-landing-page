import { useState } from 'react';

interface ScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
  aspect?: 'video' | 'phone' | 'square';
  contain?: boolean;
  className?: string;
}

export default function Screenshot({
  src,
  alt,
  caption,
  aspect = 'video',
  contain = false,
  className = '',
}: ScreenshotProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const aspectClass = {
    video: 'aspect-[16/9]',
    phone: 'aspect-[9/16] max-w-[280px]',
    square: 'aspect-square',
  }[aspect];

  return (
    <>
      <div className={className}>
        <div
          className={`relative ${aspectClass} rounded-xl overflow-hidden border border-white/10 cursor-pointer group`}
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={src}
            alt={alt}
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
              contain ? 'object-contain bg-surface-1' : 'object-cover object-top'
            }`}
            loading="lazy"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-surface-0/80 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm text-text-primary font-medium">Click to enlarge</p>
            </div>
          </div>

          {/* Browser chrome */}
          {aspect === 'video' && (
            <div className="absolute top-0 left-0 right-0 h-8 bg-surface-3/80 backdrop-blur flex items-center px-3 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-status-error/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-status-warning/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-status-success/60" />
              <div className="ml-4 flex-1 h-4 bg-surface-2 rounded-md max-w-[200px]" />
            </div>
          )}
        </div>

        {/* Caption */}
        {caption && (
          <p className="mt-3 text-center text-sm text-text-secondary">{caption}</p>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer p-4 md:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
          />
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors text-2xl font-light"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
