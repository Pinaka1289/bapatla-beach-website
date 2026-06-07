'use client';

import { MapPin, Phone, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ocean-950 text-white relative">
      {/* Animated Parallax Wave top */}
      <div className="wave-parallax w-full overflow-hidden leading-none">
        <svg viewBox="0 0 2880 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-[200%] h-[50px] sm:h-[70px]">
          <path d="M0 50C240 80 480 0 720 50C960 100 1200 0 1440 50C1680 100 1920 0 2160 50C2400 100 2640 0 2880 50V100H0V50Z" fill="#ffffff" />
        </svg>
        <svg viewBox="0 0 2880 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-[200%] h-[30px] sm:h-[40px] -mt-[1px] opacity-30" style={{ animation: 'wave-parallax 14s ease-in-out infinite reverse' }}>
          <path d="M0 60C240 30 480 90 720 60C960 30 1200 90 1440 60C1680 30 1920 90 2160 60C2400 30 2640 90 2880 60V100H0V60Z" fill="#0d8aaf" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.svg"
                alt="Bapatla Suryalanka Beach — Coastal Travel Guide"
                className="w-10 h-10 rounded-full border-2 border-ocean-400"
              />
              <span className="font-bold text-xl">
                Bapatla<span className="text-sunset-400">Suryalanka</span>Beach
              </span>
            </div>
            <p className="text-ocean-200 text-sm leading-relaxed mb-4">
              Your complete guide to Bapatla Suryalanka Beach — Andhra Pradesh&apos;s
              hidden coastal gem. Discover golden sands, gentle waves, and unforgettable sunrises along the Bay of Bengal.
            </p>
            <p className="text-ocean-300 text-xs">
              Made with <Heart size={12} className="inline text-coral-500 fill-coral-500" /> for Bapatla
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About the Beach', href: '#about' },
                { label: 'Places to Stay', href: '#stay' },
                { label: 'Restaurants', href: '#eat' },
                { label: 'Travel Info', href: '#travel' },
                { label: 'Nearby Attractions', href: '#attractions' },
                { label: 'Real Estate', href: '#realestate' },
                { label: 'Promotions', href: '#promotions' },
                { label: 'How to Reach', href: '#reach' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-ocean-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Travel Info</h4>
            <ul className="space-y-2 text-sm text-ocean-200">
              <li className="flex items-start gap-2">
                <TrainIcon />
                <span>Bapatla Railway Station (BPP) — 12 km from beach</span>
              </li>
              <li className="flex items-start gap-2">
                <CarIcon />
                <span>NH16 highway — well-connected by road</span>
              </li>
              <li className="flex items-start gap-2">
                <PlaneIcon />
                <span>Vijayawada Airport (Gannavaram) — 120 km</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-sunset-400" />
                <span>15.8345°N, 80.5051°E</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-ocean-200">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-ocean-400" />
                <a href="tel:8247437284" className="hover:text-white transition-colors">
                  824-743-7284
                </a>
              </li>
              <li>
                <a
                  href="mailto:pinaka1289@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <ExternalLink size={14} className="text-ocean-400" />
                  <span>pinaka1289@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/18608306791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <WhatsAppIcon />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Suryalanka+Beach+Bapatla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MapPin size={14} className="text-ocean-400" />
                  <span>View on Google Maps</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-ocean-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ocean-400 text-xs">
            &copy; {new Date().getFullYear()} SuryalankaBeach.com — All information is best-effort from public sources.
            Verify before travel.
          </p>
          <p className="text-ocean-500 text-xs">
            Data last updated: May 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

function TrainIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ocean-400 mt-0.5 flex-shrink-0">
      <rect x="4" y="3" width="16" height="16" rx="2" />
      <path d="M4 11h16" />
      <path d="M12 3v8" />
      <circle cx="8" cy="21" r="2" />
      <circle cx="16" cy="21" r="2" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ocean-400 mt-0.5 flex-shrink-0">
      <path d="M5 17h14" />
      <path d="M5 11h14" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M3 11l2-6h14l2 6" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ocean-400 mt-0.5 flex-shrink-0">
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
