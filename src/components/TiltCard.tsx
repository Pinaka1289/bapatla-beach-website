'use client';

import { useCallback } from 'react';

/**
 * Wraps children in a card that tilts toward the cursor on hover.
 * ±5deg max rotation. Must be used inside a 'use client' component.
 */
export default function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2, cy = rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${((y - cy) / cy) * -5}deg) rotateY(${((x - cx) / cx) * 5}deg)`;
  }, []);
  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  }, []);

  return (
    <div className={`tilt-card ${className}`} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
}
