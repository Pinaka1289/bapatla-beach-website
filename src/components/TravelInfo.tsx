'use client';

import { useState } from 'react';
import { TravelInfo as TravelData } from '@/lib/types';
import { Train, Clock, MapPin, Car } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Props {
  data: TravelData;
}

/* ── Train Vector Illustration ── */
function TrainIllustration() {
  return (
    <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto opacity-85" aria-hidden="true">
      {/* Tracks */}
      <line x1="0" y1="90" x2="400" y2="90" stroke="#7d5f2c" strokeWidth="3" />
      <line x1="0" y1="98" x2="400" y2="98" stroke="#a28246" strokeWidth="2" />
      {/* Cross ties */}
      {[20, 60, 100, 140, 180, 220, 260, 300, 340, 380].map(x => (
        <rect key={x} x={x} y="88" width="6" height="14" rx="1" fill="#5a411a" />
      ))}
      {/* Engine */}
      <rect x="160" y="30" width="90" height="60" rx="6" fill="#e8923f" stroke="#c77428" strokeWidth="2" />
      <rect x="170" y="40" width="30" height="20" rx="3" fill="#fdfaf5" opacity="0.8" />
      <rect x="210" y="40" width="25" height="20" rx="3" fill="#fdfaf5" opacity="0.8" />
      {/* Engine roof */}
      <rect x="175" y="18" width="40" height="14" rx="4" fill="#c77428" />
      {/* Wheels engine */}
      <circle cx="185" cy="90" r="14" fill="#1a1a2e" stroke="#4a5568" strokeWidth="2" />
      <circle cx="185" cy="90" r="4" fill="#718096" />
      <circle cx="235" cy="90" r="14" fill="#1a1a2e" stroke="#4a5568" strokeWidth="2" />
      <circle cx="235" cy="90" r="4" fill="#718096" />
      {/* Coach 1 */}
      <rect x="255" y="32" width="70" height="58" rx="6" fill="#0d8aaf" stroke="#0a6e8c" strokeWidth="2" />
      {[262, 280, 298].map(x => (
        <rect key={x} x={x} y="42" width="12" height="18" rx="2" fill="#e6f3f7" opacity="0.7" />
      ))}
      <circle cx="275" cy="90" r="14" fill="#1a1a2e" stroke="#4a5568" strokeWidth="2" />
      <circle cx="275" cy="90" r="4" fill="#718096" />
      <circle cx="310" cy="90" r="14" fill="#1a1a2e" stroke="#4a5568" strokeWidth="2" />
      <circle cx="310" cy="90" r="4" fill="#718096" />
      {/* Connector */}
      <rect x="250" y="58" width="5" height="8" rx="2" fill="#4a5568" />
      {/* Smoke puffs */}
      <circle cx="180" cy="10" r="8" fill="#e2e8f0" opacity="0.4" />
      <circle cx="168" cy="1" r="6" fill="#e2e8f0" opacity="0.3" />
      <circle cx="190" cy="-2" r="7" fill="#e2e8f0" opacity="0.25" />
    </svg>
  );
}

/* ── Distance Map Illustration ── */
function RoadIllustration() {
  return (
    <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto opacity-85" aria-hidden="true">
      {/* Winding road */}
      <path d="M0 80 Q60 80 80 60 Q100 20 160 40 Q220 60 240 30 Q260 0 320 20 Q360 30 400 40" stroke="#e8923f" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M0 80 Q60 80 80 60 Q100 20 160 40 Q220 60 240 30 Q260 0 320 20 Q360 30 400 40" stroke="#f5af69" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" fill="none" />
      {/* Pin markers */}
      <circle cx="0" cy="80" r="10" fill="#0d8aaf" stroke="#ffffff" strokeWidth="2" />
      <text x="0" y="84" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">A</text>
      <circle cx="400" cy="40" r="10" fill="#e8923f" stroke="#ffffff" strokeWidth="2" />
      <text x="400" y="44" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">B</text>
      {/* Trees */}
      <circle cx="60" cy="50" r="10" fill="#0d8aaf" opacity="0.4" />
      <rect x="58" y="55" width="4" height="12" rx="2" fill="#7d5f2c" opacity="0.4" />
      <circle cx="300" cy="10" r="8" fill="#0d8aaf" opacity="0.35" />
      <rect x="298" y="14" width="4" height="10" rx="2" fill="#7d5f2c" opacity="0.35" />
    </svg>
  );
}

export default function TravelInfo({ data }: Props) {
  const [activeTab, setActiveTab] = useState<'trains-hyd' | 'trains-vja' | 'distances'>('trains-hyd');

  return (
    <section id="travel" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            {activeTab === 'distances' ? <RoadIllustration /> : <TrainIllustration />}
            <span className="inline-block px-4 py-1.5 bg-ocean-100 dark:bg-ocean-900/50 text-ocean-700 dark:text-ocean-300 rounded-full text-sm font-medium mb-4 mt-4">
              Getting Here
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Travel Information
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Plan your journey to Suryalanka Beach with detailed train schedules and distance information
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8">
          {[
            { key: 'trains-hyd', label: 'Trains from Hyderabad', count: data.trains_from_hyderabad.total_trains },
            { key: 'trains-vja', label: 'Trains from Vijayawada', count: data.trains_from_vijayawada.total_trains },
            { key: 'distances', label: 'Distances', count: data.distances_to_suryalanka_beach.routes.length },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`px-3 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-ocean-600 text-white shadow-lg shadow-ocean-500/25'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-ocean-300'
              }`}
            >
              {tab.label}
              <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                activeTab === tab.key ? 'bg-white/20' : 'bg-ocean-100 dark:bg-ocean-900/50'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <ScrollReveal direction="up">
          <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] overflow-hidden">
            {/* Trains from Hyderabad */}
            {activeTab === 'trains-hyd' && (
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  <Train size={20} className="inline mr-2 text-ocean-500" />
                  Trains from Hyderabad to Bapatla
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-6">
                  {data.trains_from_hyderabad.description}
                </p>

                {data.trains_from_hyderabad.recommended_trains && (
                  <div className="grid sm:grid-cols-3 gap-3 mb-6">
                    {data.trains_from_hyderabad.recommended_trains.map((rec, i) => (
                      <div key={i} className="p-3 bg-ocean-50 dark:bg-ocean-900/30 rounded-xl border border-ocean-200 dark:border-ocean-800">
                        <span className="text-xs font-semibold text-ocean-600 dark:text-ocean-400">{rec.reason}</span>
                        <p className="text-sm text-[var(--text-primary)] mt-1">{rec.train}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Train</th>
                        <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">From</th>
                        <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Departure</th>
                        <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Arrival</th>
                        <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Duration</th>
                        <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Type</th>
                        <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.trains_from_hyderabad.trains.map((train, i) => (
                        <tr key={i} className="border-b border-[var(--border)] hover:bg-ocean-50/50 dark:hover:bg-ocean-900/20 transition-colors">
                          <td className="py-3 px-3">
                            <span className="font-medium text-[var(--text-primary)]">{train.train_no}</span>
                            <br />
                            <span className="text-xs text-[var(--text-muted)]">{train.name}</span>
                          </td>
                          <td className="py-3 px-3 text-[var(--text-secondary)]">{train.from_station}</td>
                          <td className="py-3 px-3 font-mono text-[var(--text-primary)]">{train.departure}</td>
                          <td className="py-3 px-3 font-mono text-[var(--text-primary)]">{train.arrival}</td>
                          <td className="py-3 px-3">
                            <span className="inline-flex items-center gap-1 text-ocean-600 dark:text-ocean-400">
                              <Clock size={12} /> {train.duration}
                            </span>
                          </td>
                          <td className="py-3 px-3">
                            <span className="text-xs px-2 py-0.5 bg-sand-100 dark:bg-sand-800/30 text-sand-700 dark:text-sand-300 rounded-full">
                              {train.type}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-xs text-[var(--text-muted)]">{train.frequency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Trains from Vijayawada */}
            {activeTab === 'trains-vja' && (
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  <Train size={20} className="inline mr-2 text-ocean-500" />
                  Trains from Vijayawada to Bapatla
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">
                  {data.trains_from_vijayawada.recommended}
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Train</th>
                        <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Departure</th>
                        <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Arrival</th>
                        <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Duration</th>
                        <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.trains_from_vijayawada.trains.map((train, i) => (
                        <tr key={i} className="border-b border-[var(--border)] hover:bg-ocean-50/50 dark:hover:bg-ocean-900/20 transition-colors">
                          <td className="py-3 px-3">
                            <span className="font-medium text-[var(--text-primary)]">{train.train_no}</span>
                            <br />
                            <span className="text-xs text-[var(--text-muted)]">{train.name}</span>
                          </td>
                          <td className="py-3 px-3 font-mono text-[var(--text-primary)]">{train.departure}</td>
                          <td className="py-3 px-3 font-mono text-[var(--text-primary)]">{train.arrival}</td>
                          <td className="py-3 px-3">
                            <span className="inline-flex items-center gap-1 text-ocean-600 dark:text-ocean-400">
                              <Clock size={12} /> {train.duration}
                            </span>
                          </td>
                          <td className="py-3 px-3">
                            <span className="text-xs px-2 py-0.5 bg-sand-100 dark:bg-sand-800/30 text-sand-700 dark:text-sand-300 rounded-full">
                              {train.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Distances */}
            {activeTab === 'distances' && (
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  <Car size={20} className="inline mr-2 text-sunset-500" />
                  Distances to Suryalanka Beach
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-6">
                  {data.distances_to_suryalanka_beach.description}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.distances_to_suryalanka_beach.routes.map((route, i) => (
                    <div key={i} className="p-4 sm:p-5 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3">From {route.from}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[var(--text-muted)]">Road Distance</span>
                          <span className="font-semibold text-[var(--text-primary)]">{route.distance_km_road} km</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[var(--text-muted)]">Travel Time</span>
                          <span className="font-semibold text-ocean-600 dark:text-ocean-400">{route.travel_time_car}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[var(--text-muted)]">Best Mode</span>
                          <span className="font-semibold text-sunset-600 dark:text-sunset-400">{route.best_mode}</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border)]">{route.route_description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
