'use client';

import { Promotions as PromotionsData } from '@/lib/types';
import { Megaphone, ArrowRight, Mail, Phone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Props {
  data: PromotionsData;
}

/* Megaphone illustration */
function PromoIllustration() {
  return (
    <svg viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto opacity-85" aria-hidden="true">
      {/* Megaphone */}
      <g transform="translate(80, 18)">
        <path d="M60 10 L130 0 L130 58 L60 48 Z" fill="#e8923f" stroke="#c77428" strokeWidth="2" />
        <path d="M0 14 Q80 20 60 40 Q80 50 0 44 Z" fill="#f5af69" stroke="#c77428" strokeWidth="2" />
        {/* Sound waves */}
        <path d="M140 14 Q155 29 140 44" stroke="#0d8aaf" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M148 8 Q168 29 148 50" stroke="#0d8aaf" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M156 2 Q181 29 156 56" stroke="#0d8aaf" strokeWidth="2" fill="none" opacity="0.2" />
      </g>
      {/* Sparkle */}
      <g transform="translate(310, 14)">
        <text fontSize="28" fill="#f5af69">✨</text>
      </g>
      <g transform="translate(340, 45)">
        <text fontSize="24" fill="#0d8aaf">💡</text>
      </g>
    </svg>
  );
}

export default function Promotions({ data }: Props) {
  const hasOffers = data.offers && data.offers.length > 0;

  return (
    <section id="promotions" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-[0.03]">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-sunset-500 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-ocean-500 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <PromoIllustration />
            <span className="inline-block px-4 py-1.5 bg-coral-100 dark:bg-coral-900/20 text-coral-700 dark:text-coral-300 rounded-full text-sm font-medium mb-4 mt-4">
              Promotions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              {data.heading}
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>
        </ScrollReveal>

        {hasOffers ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {data.offers.map((offer, idx) => (
              <ScrollReveal key={idx} delay={idx} direction="up">
                <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] p-5 sm:p-6 hover:shadow-lg hover:border-sunset-300 dark:hover:border-sunset-700 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-sunset-50 dark:bg-sunset-900/30 text-sunset-600 dark:text-sunset-400 flex items-center justify-center mb-4">
                    <Megaphone size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{offer.name}</h3>
                  <span className="text-xs font-medium text-sunset-600 dark:text-sunset-400 bg-sunset-50 dark:bg-sunset-900/20 px-2 py-0.5 rounded-full">
                    {offer.type}
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] mt-3 mb-2">{offer.description}</p>
                  {offer.valid_until && (
                    <p className="text-xs text-[var(--text-muted)]">
                      Valid until: {offer.valid_until}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal>
            <div className="max-w-xl mx-auto text-center">
              <div className="bg-[var(--bg-card)] rounded-2xl border border-dashed border-ocean-300 dark:border-ocean-700 p-8 sm:p-10">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-coral-50 dark:bg-coral-900/20 text-coral-500 dark:text-coral-400 flex items-center justify-center mb-5">
                  <Megaphone size={32} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  Promotions Managed by Admin
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-coral-600 hover:bg-coral-700 text-white rounded-xl font-medium text-sm transition-colors"
                >
                  {data.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Quick contact info for promotions */}
        <ScrollReveal delay={1}>
          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--text-muted)]">
              Reach admin directly:{' '}
              <span className="text-ocean-600 dark:text-ocean-400 font-medium">pinaka1289@gmail.com</span>
              {' • '}
              <span className="text-ocean-600 dark:text-ocean-400 font-medium">824-743-7284</span>
              {' • '}
              <a
                href="https://wa.me/18608306791"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 font-medium hover:underline"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
