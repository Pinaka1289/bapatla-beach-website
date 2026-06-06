'use client';

import React, { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = 'scroll-reveal';
  const dirClass = `${baseClass}-${direction}`;
  const stateClass = visible ? `${baseClass}--visible` : '';
  const delayStyle = delay > 0 ? { transitionDelay: `${delay * 120}ms` } : undefined;

  return React.createElement(
    Tag,
    {
      ref: ref as React.Ref<HTMLDivElement>,
      className: `${baseClass} ${dirClass} ${stateClass} ${className}`,
      style: delayStyle,
    },
    children
  );
}
