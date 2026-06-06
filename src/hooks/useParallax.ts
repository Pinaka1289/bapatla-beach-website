'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface ParallaxOptions {
  /** Speed multiplier: 0 = fixed, 0.5 = half scroll speed, 1 = natural, -0.3 = opposite direction */
  speed?: number;
  /** Initial Y offset in pixels */
  initialOffset?: number;
  /** Disable on mobile for performance */
  disabled?: boolean;
}

/**
 * Returns a CSS transform string (translateY) that responds to scroll position.
 * Use with style={{ transform: parallax }} on the element you want to shift.
 * Speed 0 = fixed, 0.3-0.7 = subtle depth, 1 = tracks scroll exactly.
 */
export function useParallax({
  speed = 0.4,
  initialOffset = 0,
  disabled = false,
}: ParallaxOptions = {}) {
  const [offset, setOffset] = useState(initialOffset);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      setOffset(initialOffset + window.scrollY * speed);
      ticking.current = false;
    });
  }, [speed, initialOffset]);

  useEffect(() => {
    if (disabled) {
      setOffset(initialOffset);
      return;
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, disabled, initialOffset]);

  return `translateY(${offset}px)`;
}
