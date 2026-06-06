'use client';

import { useState } from 'react';
import { PlacesToStay as PlacesData } from '@/lib/types';
import {
  Star, MapPin, Wifi, Car, Waves, UtensilsCrossed,
  Snowflake, Baby, ChevronDown, ExternalLink
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import HotelCardImage from './HotelCardImage';
import TiltCard from './TiltCard';

interface Props {
  data: PlacesData;
}

const categoryKeys = [
  'beachfront_resorts_suryalanka',
  'mid_range_hotels_bapatla_town',
  'luxury_resorts_chirala',
  'budget_stays',
];

const amenityIcons: Record<string, React.ReactNode> = {
  'Wi-Fi': <Wifi size={14} />,
  'Free Wi-Fi': <Wifi size={14} />,
  'Free Parking': <Car size={14} />,
  'Beachfront': <Waves size={14} />,
  'Beach Access': <Waves size={14} />,
  'Beach View': <Waves size={14} />,
  'Restaurant': <UtensilsCrossed size={14} />,
  'AC Rooms': <Snowflake size={14} />,
  'AC': <Snowflake size={14} />,
  'Kid-friendly': <Baby size={14} />,
  'Pet-friendly': <Baby size={14} />,
};

function getAmenityIcon(amenity: string): React.ReactNode {
  for (const [key, icon] of Object.entries(amenityIcons)) {
    if (amenity.includes(key)) return icon;
  }
  return null;
}

/* ── Hotel Vector Illustration ── */
function HotelIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto opacity-80" aria-hidden="true">
      {/* Palm tree left */}
      <g transform="translate(30, 20)">
        <rect x="6" y="60" width="6" height="80" rx="3" fill="#7d5f2c" />
        <ellipse cx="0" cy="30" rx="45" ry="12" fill="#0d8aaf" transform="rotate(-20, 0, 30)" opacity="0.8" />
        <ellipse cx="14" cy="25" rx="38" ry="10" fill="#339fbf" transform="rotate(10, 14, 25)" opacity="0.8" />
        <ellipse cx="-10" cy="35" rx="32" ry="9" fill="#0a6e8c" transform="rotate(-35, -10, 35)" opacity="0.7" />
      </g>
      {/* Building */}
      <rect x="110" y="60" width="180" height="100" rx="8" fill="#fdfaf5" stroke="#0d8aaf" strokeWidth="2" />
      <rect x="130" y="85" width="30" height="30" rx="4" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1.5" />
      <rect x="175" y="85" width="30" height="30" rx="4" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1.5" />
      <rect x="220" y="85" width="30" height="30" rx="4" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1.5" />
      <rect x="130" y="125" width="30" height="22" rx="4" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1.5" />
      <rect x="175" y="125" width="30" height="22" rx="4" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1.5" />
      <rect x="220" y="125" width="30" height="22" rx="4" fill="#e6f3f7" stroke="#0d8aaf" strokeWidth="1.5" />
      <rect x="170" y="55" width="60" height="12" rx="3" fill="#e8923f" />
      {/* Door */}
      <rect x="185" y="138" width="30" height="22" rx="4" fill="#e8923f" />
      {/* Palm right */}
      <g transform="translate(314, 20)">
        <rect x="6" y="60" width="6" height="80" rx="3" fill="#7d5f2c" />
        <ellipse cx="26" cy="30" rx="45" ry="12" fill="#0d8aaf" transform="rotate(20, 26, 30)" opacity="0.8" />
        <ellipse cx="12" cy="25" rx="38" ry="10" fill="#339fbf" transform="rotate(-10, 12, 25)" opacity="0.8" />
      </g>
      {/* Ground */}
      <path d="M0 165 Q100 155 200 160 Q300 165 400 158 L400 200 L0 200Z" fill="#f5ebd7" opacity="0.5" />
    </svg>
  );
}

export default function PlacesToStay({ data }: Props) {
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0]);
  const [expandedAmenities, setExpandedAmenities] = useState<Set<string>>(new Set());

  const toggleAmenities = (key: string) => {
    setExpandedAmenities(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const categories = categoryKeys
    .filter(k => data.categories[k])
    .map(k => ({ key: k, ...data.categories[k] }));

  const current = data.categories[activeCategory];
  if (!current) return null;

  return (
    <section id="stay" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <HotelIllustration />
            <span className="inline-block px-4 py-1.5 bg-sunset-100 dark:bg-sunset-900/30 text-sunset-700 dark:text-sunset-300 rounded-full text-sm font-medium mb-4 mt-4">
              Accommodation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Places to Stay
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-ocean-600 text-white shadow-lg shadow-ocean-500/25'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-ocean-300 dark:hover:border-ocean-600'
              }`}
            >
              {cat.label}
              <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                activeCategory === cat.key
                  ? 'bg-white/20'
                  : 'bg-ocean-100 dark:bg-ocean-900/50 text-ocean-700 dark:text-ocean-300'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Property Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {current.properties.map((property, idx) => {
            const amenityKey = `${activeCategory}-${idx}`;
            const isExpanded = expandedAmenities.has(amenityKey);
            const hasMore = property.amenities.length > 5;

            return (
              <ScrollReveal key={amenityKey} delay={idx} direction="up">
                <TiltCard className="group bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-xl hover:border-ocean-300 dark:hover:border-ocean-600 transition-all duration-300 flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <HotelCardImage index={idx} name={property.name} className="group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 dark:bg-ocean-950/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold">
                      <Star size={12} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-[var(--text-primary)]">{property.rating}</span>
                      <span className="text-[var(--text-muted)]">({property.reviews_count.toLocaleString()})</span>
                    </div>
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/95 dark:bg-ocean-950/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium">
                      <MapPin size={12} className="text-sunset-500" />
                      <span className="text-[var(--text-primary)]">{property.distance_from_beach}</span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <div className="mb-1">
                      <span className="text-xs font-medium text-ocean-600 dark:text-ocean-400 bg-ocean-50 dark:bg-ocean-900/40 px-2 py-0.5 rounded">
                        {property.type}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-2 line-clamp-2">
                      {property.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mb-3 flex items-center gap-1">
                      <MapPin size={12} />
                      {property.address}
                    </p>

                    {/* Amenities — expandable */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {(isExpanded ? property.amenities : property.amenities.slice(0, 5)).map((amenity, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-sand-100 dark:bg-sand-800/30 text-sand-700 dark:text-sand-300 rounded text-xs"
                        >
                          {getAmenityIcon(amenity)}
                          {amenity}
                        </span>
                      ))}
                      {hasMore && (
                        <button
                          onClick={() => toggleAmenities(amenityKey)}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-ocean-50 dark:bg-ocean-900/40 text-ocean-600 dark:text-ocean-400 hover:bg-ocean-100 dark:hover:bg-ocean-900/60 rounded text-xs font-medium transition-colors cursor-pointer"
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? 'Show less' : `+${property.amenities.length - 5} more`}
                          <ChevronDown size={12} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Price */}
                    <div className="mt-auto pt-3 border-t border-[var(--border)] flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-sunset-600 dark:text-sunset-400">
                          {property.price_range_night}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]"> / night</span>
                      </div>
                      {property.google_maps && (
                        <a
                          href={property.google_maps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-ocean-600 dark:text-ocean-400 hover:underline"
                        >
                          <ExternalLink size={12} /> View on Maps
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
