import { RestaurantsData } from '@/lib/types';
import { Clock, MapPin, UtensilsCrossed, Star, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

interface Props {
  data: RestaurantsData;
}

const priceColor: Record<string, string> = {
  '₹': 'text-green-600 dark:text-green-400',
  '₹₹': 'text-ocean-600 dark:text-ocean-400',
  '₹₹₹': 'text-sunset-600 dark:text-sunset-400',
};

function getPriceColor(price: string): string {
  for (const [key, color] of Object.entries(priceColor)) {
    if (price.startsWith(key)) return color;
  }
  return 'text-[var(--text-muted)]';
}

export default function Restaurants({ data }: Props) {
  return (
    <section id="eat" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 bg-coral-100 dark:bg-coral-900/30 text-coral-700 dark:text-coral-300 rounded-full text-sm font-medium mb-4">
              Food & Drink
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Eat & Drink
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Restaurant Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {data.restaurants.map((restaurant, idx) => (
            <ScrollReveal key={idx} delay={idx} direction={idx % 2 === 0 ? 'left' : 'right'}>
              <TiltCard
                className="group bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] p-5 sm:p-6 hover:shadow-lg hover:border-coral-300 dark:hover:border-coral-700 transition-all duration-300"
              >
                {/* Type Badge */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-coral-600 dark:text-coral-400 bg-coral-50 dark:bg-coral-900/30 px-2.5 py-1 rounded-full">
                    {restaurant.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{restaurant.rating}</span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {restaurant.name}
                </h3>

                {/* Location */}
                <p className="text-sm text-[var(--text-muted)] flex items-start gap-1.5 mb-3">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                  {restaurant.location}
                </p>

                {/* Specialty */}
                <div className="flex items-start gap-1.5 mb-3">
                  <UtensilsCrossed size={14} className="mt-0.5 text-sunset-500 flex-shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">{restaurant.specialty}</p>
                </div>

                {/* Timings */}
                <div className="flex items-center gap-1.5 mb-3">
                  <Clock size={14} className="text-ocean-500 flex-shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">{restaurant.timings}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                  <span className={`text-sm font-semibold ${getPriceColor(restaurant.price_range)}`}>
                    {restaurant.price_range}
                  </span>
                  {restaurant.google_maps && (
                    <a
                      href={restaurant.google_maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-ocean-600 dark:text-ocean-400 hover:underline"
                    >
                      <ExternalLink size={12} /> Directions
                    </a>
                  )}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
