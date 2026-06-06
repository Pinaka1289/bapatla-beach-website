'use client';

import { RealEstate as RealEstateData } from '@/lib/types';
import { Building2, MapPin, ArrowRight, Home } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Props {
  data: RealEstateData;
}

/* Real Estate illustration */
function RealEstateIllustration() {
  return (
    <svg viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto opacity-85" aria-hidden="true">
      {/* Modern house */}
      <rect x="160" y="30" width="80" height="55" rx="4" fill="#fdfaf5" stroke="#0d8aaf" strokeWidth="2" />
      <polygon points="160,30 200,6 240,30" fill="#e8923f" stroke="#c77428" strokeWidth="1.5" />
      {/* Door */}
      <rect x="188" y="52" width="24" height="33" rx="3" fill="#085369" />
      <circle cx="206" cy="70" r="2" fill="#f5af69" />
      {/* Windows */}
      <rect x="168" y="42" width="14" height="12" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="218" y="42" width="14" height="12" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      {/* Sold sign */}
      <rect x="295" y="10" width="60" height="28" rx="4" fill="#0d8aaf" />
      <text x="325" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">COMING</text>
      <text x="325" y="41" textAnchor="middle" fill="#f5af69" fontSize="7" fontWeight="bold" fontFamily="sans-serif">SOON</text>
      {/* Sun */}
      <circle cx="50" cy="22" r="18" fill="#f5af69" opacity="0.4" />
      <circle cx="50" cy="22" r="11" fill="#f5af69" opacity="0.6" />
      {/* Ground */}
      <path d="M0 90 Q100 80 200 88 Q300 96 400 85 L400 100 L0 100Z" fill="#f5ebd7" opacity="0.4" />
    </svg>
  );
}

export default function RealEstate({ data }: Props) {
  const hasProperties = data.properties && data.properties.length > 0;

  return (
    <section id="realestate" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <RealEstateIllustration />
            <span className="inline-block px-4 py-1.5 bg-sunset-100 dark:bg-sunset-900/30 text-sunset-700 dark:text-sunset-300 rounded-full text-sm font-medium mb-4 mt-4">
              Real Estate
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              {data.heading}
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>
        </ScrollReveal>

        {hasProperties ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {data.properties.map((property, idx) => (
              <ScrollReveal key={idx} delay={idx} direction="up">
                <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] p-5 sm:p-6 hover:shadow-lg hover:border-sunset-300 dark:hover:border-sunset-700 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-ocean-50 dark:bg-ocean-900/40 text-ocean-600 dark:text-ocean-400 flex items-center justify-center mb-4">
                    <Home size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{property.name}</h3>
                  <span className="text-xs font-medium text-sunset-600 dark:text-sunset-400 bg-sunset-50 dark:bg-sunset-900/20 px-2 py-0.5 rounded-full">
                    {property.type}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-[var(--text-muted)] mt-3 mb-2">
                    <MapPin size={14} />
                    {property.location}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{property.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal>
            <div className="max-w-lg mx-auto text-center">
              <div className="bg-[var(--bg-card)] rounded-2xl border border-dashed border-ocean-300 dark:border-ocean-700 p-8 sm:p-10">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-ocean-50 dark:bg-ocean-900/40 text-ocean-500 dark:text-ocean-400 flex items-center justify-center mb-5">
                  <Building2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  Listings Coming Soon
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                  {data.note}
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl font-medium text-sm transition-colors"
                >
                  {data.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
