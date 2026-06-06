import { NearbyAttractions as AttractionsData } from '@/lib/types';
import { MapPin, Waves, Landmark } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

interface Props {
  data: AttractionsData;
}

function getAttractionIcon(type: string) {
  if (type.includes('Beach')) return <Waves size={24} />;
  if (type.includes('Temple') || type.includes('Archaeological')) return <Landmark size={24} />;
  if (type.includes('Buddhist') || type.includes('Caves')) return <Landmark size={24} />;
  return <MapPin size={24} />;
}

/* ── Temple / Landmark Illustration ── */
function LandmarkIllustration() {
  return (
    <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto opacity-85" aria-hidden="true">
      {/* Temple spire */}
      <polygon points="200,4 170,50 230,50" fill="#e8923f" stroke="#c77428" strokeWidth="1.5" />
      <polygon points="200,10 178,48 222,48" fill="#f5af69" />
      {/* Kalasha on top */}
      <line x1="200" y1="4" x2="200" y2="-2" stroke="#e8923f" strokeWidth="2" />
      <circle cx="200" cy="-4" r="4" fill="#e8923f" />
      {/* Main temple body */}
      <rect x="155" y="50" width="90" height="65" rx="4" fill="#fdfaf5" stroke="#0d8aaf" strokeWidth="2" />
      {/* Steps */}
      <rect x="165" y="100" width="70" height="8" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="175" y="108" width="50" height="7" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      {/* Door */}
      <rect x="190" y="75" width="20" height="30" rx="3" fill="#085369" />
      <circle cx="200" cy="90" r="2" fill="#f5af69" />
      {/* Side pillars */}
      <rect x="155" y="50" width="8" height="60" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      <rect x="237" y="50" width="8" height="60" rx="2" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1" />
      {/* Decorative arches */}
      <path d="M160 58 Q200 42 240 58" fill="#0d8aaf" opacity="0.3" />
      {/* Palm tree left */}
      <rect x="100" y="66" width="5" height="50" rx="2" fill="#7d5f2c" />
      <circle cx="102" cy="42" r="22" fill="#0d8aaf" opacity="0.6" />
      <circle cx="90" cy="48" r="16" fill="#339fbf" opacity="0.5" />
      <circle cx="114" cy="50" r="14" fill="#0a6e8c" opacity="0.5" />
      {/* Palm tree right */}
      <rect x="295" y="66" width="5" height="50" rx="2" fill="#7d5f2c" />
      <circle cx="297" cy="42" r="22" fill="#0d8aaf" opacity="0.6" />
      <circle cx="310" cy="48" r="16" fill="#339fbf" opacity="0.5" />
      <circle cx="284" cy="50" r="14" fill="#0a6e8c" opacity="0.5" />
      {/* Ground */}
      <path d="M0 120 Q100 112 200 118 Q300 124 400 115 L400 140 L0 140Z" fill="#f5ebd7" opacity="0.4" />
      {/* Small water waves at bottom */}
      <path d="M60 132 Q80 127 100 132 Q120 137 140 132" stroke="#0d8aaf" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M260 132 Q280 127 300 132 Q320 137 340 132" stroke="#0d8aaf" strokeWidth="1.5" fill="none" opacity="0.3" />
    </svg>
  );
}

export default function Attractions({ data }: Props) {
  return (
    <section id="attractions" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <LandmarkIllustration />
            <span className="inline-block px-4 py-1.5 bg-ocean-100 dark:bg-ocean-900/50 text-ocean-700 dark:text-ocean-300 rounded-full text-sm font-medium mb-4 mt-4">
              Explore More
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Nearby Attractions
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {data.attractions.map((attraction, idx) => (
            <ScrollReveal key={idx} delay={idx} direction="up">
              <TiltCard
                className="group bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] p-5 sm:p-6 hover:shadow-lg hover:border-sunset-300 dark:hover:border-sunset-700 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-ocean-50 dark:bg-ocean-900/40 text-ocean-600 dark:text-ocean-400 flex items-center justify-center mb-4 group-hover:bg-sunset-100 dark:group-hover:bg-sunset-900/30 group-hover:text-sunset-600 dark:group-hover:text-sunset-400 transition-colors">
                  {getAttractionIcon(attraction.type)}
                </div>

                <span className="text-xs font-medium text-sunset-600 dark:text-sunset-400 bg-sunset-50 dark:bg-sunset-900/20 px-2 py-0.5 rounded-full">
                  {attraction.type}
                </span>

                <h3 className="text-lg font-bold text-[var(--text-primary)] mt-2 mb-1">
                  {attraction.name}
                </h3>

                <div className="flex items-center gap-1 text-sm text-[var(--text-muted)] mb-3">
                  <MapPin size={14} />
                  {attraction.location}
                  <span className="mx-1">•</span>
                  <span>{attraction.distance_from_beach}</span>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {attraction.description}
                </p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
