'use client';

import { Introduction as IntroData } from '@/lib/types';
import { Waves, Sun, Sparkles, MapPin, Star, Clock, Shield, Camera, Utensils } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ParallaxBg from './ParallaxBg';
import TiltCard from './TiltCard';

interface Props {
  data: IntroData;
}

const iconMap: Record<string, React.ReactNode> = {
  Clean: <Sparkles size={20} />,
  Shallow: <Shield size={20} />,
  Sunrise: <Sun size={20} />,
  Resort: <Waves size={20} />,
  Festival: <Star size={20} />,
  Temple: <MapPin size={20} />,
  Getaway: <Camera size={20} />,
  Seafood: <Utensils size={20} />,
};

function getIcon(text: string): React.ReactNode {
  if (text.includes('Clean')) return iconMap.Clean;
  if (text.includes('Shallow') || text.includes('safe')) return iconMap.Shallow;
  if (text.includes('Sunrise')) return iconMap.Sunrise;
  if (text.includes('Resort') || text.includes('APTDC')) return iconMap.Resort;
  if (text.includes('Festival')) return iconMap.Festival;
  if (text.includes('Temple') || text.includes('historic')) return iconMap.Temple;
  if (text.includes('Getaway') || text.includes('Hyderabad')) return iconMap.Getaway;
  if (text.includes('Seafood') || text.includes('cuisine')) return iconMap.Seafood;
  return <Star size={20} />;
}

export default function Introduction({ data }: Props) {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-[var(--bg-primary)] overflow-hidden">
      {/* Parallax floating ocean shapes */}
      <ParallaxBg speed={0.15}>
        <span className="parallax-shape" style={{
          width: 300, height: 300, top: '10%', left: '-5%',
          background: 'radial-gradient(circle, rgba(13,138,175,0.06), transparent)' }}
        />
        <span className="parallax-shape" style={{
          width: 200, height: 200, top: '60%', right: '-3%',
          background: 'radial-gradient(circle, rgba(232,146,63,0.05), transparent)' }}
        />
        <span className="parallax-shape" style={{
          width: 250, height: 250, top: '30%', left: '60%',
          background: 'radial-gradient(circle, rgba(13,138,175,0.04), transparent)' }}
        />
      </ParallaxBg>

      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-ocean-100 dark:bg-ocean-900/50 text-ocean-700 dark:text-ocean-300 rounded-full text-sm font-medium mb-4">
              Welcome to Paradise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              {data.heading}
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              {data.short_description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {data.why_famous.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx} direction={idx % 2 === 0 ? 'left' : 'right'}>
              <TiltCard className="p-5 sm:p-6 bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] hover:border-ocean-300 dark:hover:border-ocean-600 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-ocean-50 dark:bg-ocean-900/40 text-ocean-600 dark:text-ocean-400 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-sunset-100 dark:group-hover:bg-sunset-900/30 group-hover:text-sunset-600 dark:group-hover:text-sunset-400 transition-colors">
                  {getIcon(item)}
                </div>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">{item}</p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <ScrollReveal direction="left">
            <TiltCard className="p-6 sm:p-8 bg-[var(--bg-card)] rounded-2xl border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-sunset-100 dark:bg-sunset-900/30 text-sunset-600 dark:text-sunset-400 flex items-center justify-center">
                  <Sun size={20} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Best Time to Visit</h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {data.best_time_to_visit}
              </p>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="p-6 sm:p-8 bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-ocean-100 dark:bg-ocean-900/30 text-ocean-600 dark:text-ocean-400 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Location</h3>
              </div>
              <p className="text-[var(--text-secondary)] mb-3">
                <strong>Coordinates:</strong> {data.coordinates.latitude}°N, {data.coordinates.longitude}°E
              </p>
              <p className="text-[var(--text-secondary)] mb-4">
                Just 9 km from Bapatla town, nestled along the Bay of Bengal in Andhra Pradesh.
              </p>
              <div className="flex-1 min-h-[200px] rounded-xl overflow-hidden border border-[var(--border)]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.9782868403617!2d${data.coordinates.longitude}!3d${data.coordinates.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzA0LjIiTiA4MMKwMzAnMTguNCJF!5e0!3m2!1sen!2sin!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '200px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bapatla Suryalanka Beach Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
