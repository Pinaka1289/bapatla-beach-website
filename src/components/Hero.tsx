'use client';

import { useMemo, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/* Static particle config — deterministic seeds for no hydration mismatch */
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  type: (['bubble', 'bubble', 'light', 'coral'] as const)[i % 4],
  size: 4 + (i * 7) % 16,
  left: `${(i * 17 + 3) % 100}%`,
  bottom: `${-5 - (i * 11) % 30}%`,
  animDuration: `${8 + (i * 3) % 12}s`,
  animDelay: `${(i * 1.7) % 10}s`,
  animName: i % 3 === 0 ? 'float-up-slow' : i % 3 === 1 ? 'float-diagonal' : 'float-up',
}));

/**
 * Returns translateY / scale based on scroll — no hook needed inside the component.
 * Direct rAF reading gives 60fps smooth parallax.
 */
function useParallaxValue(speed: number, initialOffset = 0) {
  const [value, setValue] = useState(initialOffset);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setValue(initialOffset + window.scrollY * speed);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [speed, initialOffset]);

  return value;
}

export default function Hero() {
  // Strong parallax: video drifts slower than scroll (classic depth effect)
  const videoY = useParallaxValue(0.45, 0);
  // Content layers drift UP as user scrolls down — creates foreground depth
  const logoY   = useParallaxValue(-0.55, 0);
  const headingY = useParallaxValue(-0.7, 0);
  const subtitleY = useParallaxValue(-0.5, 0);
  const ctaY     = useParallaxValue(-0.35, 0);

  const particles = useMemo(() => PARTICLES, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-ocean-950">
      {/* Background Video — parallax depth layer (moves slower than scroll) */}
      <div
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{
          transform: `translateY(${videoY}px)`,
          top: '-15%',
          bottom: '-15%',
          height: '130%',
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className={`particle particle--${p.type}`}
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              bottom: p.bottom,
              animation: `${p.animName} ${p.animDuration} ${p.animDelay} infinite ease-out`,
            }}
          />
        ))}
      </div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-ocean-950/70 via-ocean-950/40 to-ocean-950/80 pointer-events-none" />

      {/* Hero Content — foreground parallax layers (drift UP on scroll) */}
      <div className="relative z-[3] flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl">
          {/* Logo */}
          <div
            className="mb-6 will-change-transform"
            style={{ transform: `translateY(${logoY}px)` }}
          >
            <img
              src="/images/logo.svg"
              alt="Bapatla Beach"
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full border-4 border-white/30 shadow-2xl"
            />
          </div>

          {/* Heading — fastest parallax for maximum depth */}
          <div className="will-change-transform" style={{ transform: `translateY(${headingY}px)` }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
              Discover{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-400 to-coral-400">
                Bapatla Beach
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="will-change-transform" style={{ transform: `translateY(${subtitleY}px)` }}>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-2 max-w-2xl mx-auto font-light">
              Andhra&apos;s Hidden Coastal Gem
            </p>
            <p className="text-sm sm:text-base text-white/60 mb-8 max-w-xl mx-auto">
              Golden sands, gentle waves, and serene sunrises await at Suryalanka Beach
            </p>
          </div>

          {/* CTA Buttons — slowest parallax */}
          <div className="will-change-transform" style={{ transform: `translateY(${ctaY}px)` }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-sunset-500 hover:bg-sunset-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-sunset-500/25 hover:shadow-sunset-500/40 hover:scale-105"
              >
                Explore the Beach
              </a>
              <a
                href="#stay"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#stay')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all duration-300 hover:scale-105"
              >
                Find Places to Stay
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[4] animate-bounce">
        <ChevronDown className="text-white/50" size={32} />
      </div>

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[4]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[80px] md:h-[100px]">
          <path d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z" fill="#fdfaf5" />
        </svg>
      </div>
    </section>
  );
}
