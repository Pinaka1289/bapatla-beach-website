'use client';

import { useEffect } from 'react';

interface AdSlotProps {
  /** Google AdSense ad unit slot ID (e.g. '1234567890'). Required when publisherId is set. */
  dataAdSlot?: string;
  /** Google AdSense publisher ID (e.g. 'ca-pub-XXXXXXXXXXXXXXXX'). Leave empty to show placeholder. */
  publisherId?: string;
  /** Ad format: 'auto' (responsive), 'horizontal', 'rectangle', 'vertical' */
  format?: 'auto' | 'horizontal' | 'rectangle' | 'vertical';
  /** Optional className for the wrapper */
  className?: string;
}

const formatConfig: Record<string, { desktop: { minHeight: number; maxWidth?: number }; tablet: { minHeight: number; maxWidth?: number }; mobile: { minHeight: number; maxWidth?: number } }> = {
  auto: { desktop: { minHeight: 90 }, tablet: { minHeight: 90 }, mobile: { minHeight: 100 } },
  horizontal: { desktop: { minHeight: 90, maxWidth: 728 }, tablet: { minHeight: 60, maxWidth: 468 }, mobile: { minHeight: 100, maxWidth: 320 } },
  rectangle: { desktop: { minHeight: 250, maxWidth: 300 }, tablet: { minHeight: 250, maxWidth: 300 }, mobile: { minHeight: 250, maxWidth: 336 } },
  vertical: { desktop: { minHeight: 600, maxWidth: 160 }, tablet: { minHeight: 600, maxWidth: 160 }, mobile: { minHeight: 280, maxWidth: 336 } },
};

export default function AdSlot({ dataAdSlot, publisherId, format = 'auto', className = '' }: AdSlotProps) {
  const isActive = !!(publisherId && dataAdSlot);

  useEffect(() => {
    if (isActive && typeof window !== 'undefined') {
      try {
        // Push the ad unit to AdSense
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      } catch {
        // AdSense not loaded yet — will retry on script load
      }
    }
  }, [isActive]);

  const cfg = formatConfig[format];

  return (
    <div className={`w-full flex justify-center py-6 sm:py-8 ${className}`}>
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          minHeight: `${cfg.desktop.minHeight}px`,
          maxWidth: cfg.desktop.maxWidth ? `${cfg.desktop.maxWidth}px` : '100%',
        }}
      >
        {isActive ? (
          /* Live AdSense unit */
          <ins
            className="adsbygoogle block w-full"
            style={{ display: 'block', minHeight: `${cfg.desktop.minHeight}px` }}
            data-ad-client={publisherId}
            data-ad-slot={dataAdSlot}
            data-ad-format={format === 'auto' ? 'auto' : undefined}
            data-full-width-responsive="true"
          />
        ) : (
          /* Placeholder — reserves space for future ad, prevents CLS */
          <div
            className="w-full rounded-xl border-2 border-dashed border-ocean-200 dark:border-ocean-800 bg-ocean-50/50 dark:bg-ocean-950/30 flex items-center justify-center transition-colors"
            style={{ minHeight: `${cfg.desktop.minHeight}px`, maxWidth: cfg.desktop.maxWidth ? `${cfg.desktop.maxWidth}px` : '100%' }}
          >
            <span className="text-xs text-ocean-300 dark:text-ocean-700 font-medium tracking-wide uppercase select-none">
              Advertisement
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
