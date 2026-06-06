'use client';

import { useState } from 'react';

interface Props {
  src: string | null | undefined;
  alt: string;
  className?: string;
  fallbackClassName?: string;
}

export default function SafeImage({ src, alt, className = '', fallbackClassName = '' }: Props) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-ocean-200 via-ocean-300 to-ocean-500 dark:from-ocean-800 dark:via-ocean-700 dark:to-ocean-950 ${fallbackClassName}`}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-ocean-400/60 dark:text-ocean-500/60">
          <path d="M4 36L16 24L24 32L34 20L44 28V40C44 42.2 42.2 44 40 44H8C5.8 44 4 42.2 4 40V36Z" fill="currentColor" opacity="0.4"/>
          <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.6"/>
          <path d="M4 8C4 5.8 5.8 4 8 4H40C42.2 4 44 5.8 44 8V32L34 20L24 32L16 24L4 36V8Z" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}
