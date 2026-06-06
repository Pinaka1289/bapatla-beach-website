'use client';

import { useEffect, useState, type ReactNode } from 'react';

interface Props {
  /** Speed multiplier relative to scroll (0.1–0.5 typical) */
  speed?: number;
  /** Children are the decorative background elements */
  children: ReactNode;
  className?: string;
}

/**
 * Moves its children at a different speed relative to page scroll,
 * creating a parallax depth effect behind section content.
 */
export default function ParallaxBg({ speed = 0.2, children, className = '' }: Props) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [speed]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none will-change-transform ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
