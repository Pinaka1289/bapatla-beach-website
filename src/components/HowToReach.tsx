import { HowToReachSummary } from '@/lib/types';
import { Train, Car, Plane, Bus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

interface Props {
  data: HowToReachSummary;
}

const modes = [
  { key: 'by_train' as const, label: 'By Train', icon: <Train size={24} />, color: 'border-ocean-400 dark:border-ocean-600' },
  { key: 'by_road' as const, label: 'By Road', icon: <Car size={24} />, color: 'border-sunset-400 dark:border-sunset-600' },
  { key: 'by_air' as const, label: 'By Air', icon: <Plane size={24} />, color: 'border-coral-400 dark:border-coral-600' },
  { key: 'by_bus' as const, label: 'By Bus', icon: <Bus size={24} />, color: 'border-green-400 dark:border-green-600' },
];

/* ── Transport Illustration ── */
function TransportIllustration() {
  return (
    <svg viewBox="0 0 400 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto opacity-85" aria-hidden="true">
      {/* Road */}
      <rect x="0" y="72" width="400" height="4" rx="2" fill="#7d5f2c" opacity="0.5" />
      <rect x="0" y="78" width="400" height="2" fill="#a28246" opacity="0.3" />

      {/* Bus */}
      <g transform="translate(20, 28)">
        <rect x="0" y="0" width="130" height="44" rx="8" fill="#0d8aaf" stroke="#085369" strokeWidth="2" />
        <rect x="5" y="5" width="60" height="26" rx="3" fill="#e6f3f7" opacity="0.8" />
        <rect x="68" y="5" width="26" height="12" rx="2" fill="#e6f3f7" opacity="0.8" />
        <rect x="68" y="19" width="26" height="12" rx="2" fill="#e6f3f7" opacity="0.8" />
        <rect x="97" y="5" width="26" height="12" rx="2" fill="#e6f3f7" opacity="0.8" />
        <rect x="97" y="19" width="26" height="12" rx="2" fill="#e6f3f7" opacity="0.8" />
        {/* Wheels */}
        <circle cx="25" cy="48" r="12" fill="#1a1a2e" stroke="#4a5568" strokeWidth="1.5" />
        <circle cx="25" cy="48" r="4" fill="#718096" />
        <circle cx="110" cy="48" r="12" fill="#1a1a2e" stroke="#4a5568" strokeWidth="1.5" />
        <circle cx="110" cy="48" r="4" fill="#718096" />
      </g>

      {/* Plane in sky */}
      <g transform="translate(230, 8)">
        <path d="M60 12 L52 20 L8 22 L4 18 L20 20 Z" fill="#e8923f" />
        <path d="M0 14 L8 22 L52 24 L60 16 Z" fill="#c77428" />
        <path d="M10 18 L48 21" stroke="#fdfaf5" strokeWidth="1.5" opacity="0.5" />
      </g>

      {/* Car on road */}
      <g transform="translate(240, 46)">
        <rect x="0" y="0" width="70" height="26" rx="6" fill="#339fbf" stroke="#0a6e8c" strokeWidth="1.5" />
        <rect x="4" y="2" width="28" height="14" rx="3" fill="#e6f3f7" opacity="0.7" />
        <rect x="36" y="2" width="28" height="14" rx="3" fill="#e6f3f7" opacity="0.7" />
        <circle cx="16" cy="30" r="10" fill="#1a1a2e" stroke="#4a5568" strokeWidth="1.5" />
        <circle cx="16" cy="30" r="3.5" fill="#718096" />
        <circle cx="54" cy="30" r="10" fill="#1a1a2e" stroke="#4a5568" strokeWidth="1.5" />
        <circle cx="54" cy="30" r="3.5" fill="#718096" />
      </g>

      {/* Train at right */}
      <g transform="translate(332, 34)">
        <rect x="0" y="0" width="40" height="38" rx="5" fill="#e8923f" stroke="#c77428" strokeWidth="1.5" />
        <rect x="5" y="6" width="12" height="10" rx="2" fill="#fdfaf5" opacity="0.7" />
        <rect x="20" y="6" width="12" height="10" rx="2" fill="#fdfaf5" opacity="0.7" />
        <circle cx="10" cy="42" r="9" fill="#1a1a2e" stroke="#4a5568" strokeWidth="1.5" />
        <circle cx="10" cy="42" r="3" fill="#718096" />
        <circle cx="32" cy="42" r="9" fill="#1a1a2e" stroke="#4a5568" strokeWidth="1.5" />
        <circle cx="32" cy="42" r="3" fill="#718096" />
      </g>

      {/* Sun */}
      <circle cx="370" cy="20" r="16" fill="#f5af69" opacity="0.3" />
      <circle cx="370" cy="20" r="10" fill="#f5af69" opacity="0.5" />
    </svg>
  );
}

export default function HowToReach({ data }: Props) {
  return (
    <section id="reach" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <TransportIllustration />
            <span className="inline-block px-4 py-1.5 bg-sunset-100 dark:bg-sunset-900/30 text-sunset-700 dark:text-sunset-300 rounded-full text-sm font-medium mb-4 mt-4">
              Transportation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              How to Reach
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Bapatla Suryalanka Beach is well-connected by rail, road, and air
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {modes.map((mode, idx) => (
            <ScrollReveal key={mode.key} delay={idx} direction={idx % 2 === 0 ? 'left' : 'right'}>
              <TiltCard
                className={`bg-[var(--bg-card)] rounded-2xl border-t-4 ${mode.color} border border-[var(--border)] p-5 sm:p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-ocean-50 dark:bg-ocean-900/40 text-ocean-600 dark:text-ocean-400 flex items-center justify-center mb-4">
                  {mode.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{mode.label}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {data[mode.key]}
                </p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
