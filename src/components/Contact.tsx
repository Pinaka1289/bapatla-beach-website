'use client';

import { ContactInfo } from '@/lib/types';
import { Mail, Phone, MapPin, Send, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

interface Props {
  data: ContactInfo;
}

/* WhatsApp SVG icon */
function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* Contact illustration */
function ContactIllustration() {
  return (
    <svg viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto opacity-85" aria-hidden="true">
      {/* Envelope */}
      <g transform="translate(30, 10)">
        <rect x="0" y="14" width="80" height="48" rx="6" fill="#fdfaf5" stroke="#0d8aaf" strokeWidth="2" />
        <path d="M0 14 L40 38 L80 14" stroke="#0d8aaf" strokeWidth="2" fill="none" />
        <circle cx="40" cy="26" r="3.5" fill="#e8923f" />
      </g>
      {/* Phone */}
      <g transform="translate(150, 28)">
        <rect x="0" y="0" width="20" height="34" rx="5" fill="#0d8aaf" />
        <rect x="2" y="6" width="16" height="18" rx="2" fill="#e6f3f7" />
        <circle cx="10" cy="30" r="2" fill="#fdfaf5" />
        <path d="M26 12 Q32 18 26 24" stroke="#e8923f" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M30 8 Q38 18 30 28" stroke="#e8923f" strokeWidth="1.5" fill="none" opacity="0.4" />
      </g>
      {/* WhatsApp */}
      <g transform="translate(230, 28)">
        <circle cx="16" cy="16" r="18" fill="#25D366" opacity="0.85" />
        <path d="M16 6c-5.52 0-10 4.48-10 10 0 1.76.46 3.44 1.33 4.93l-.14.48-1.46.38.38-1.43-.09-.15A9.95 9.95 0 016 16c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" fill="white" />
        <path d="M11.5 13.5c-.15-.07-.88-.43-1.02-.48-.14-.05-.24-.07-.33.07-.1.15-.38.48-.47.58-.09.1-.17.11-.32.04-.15-.07-.63-.23-1.2-.74-.44-.39-.74-.88-.83-1.03-.09-.15-.01-.23.07-.3.07-.07.15-.17.22-.26.07-.09.1-.15.15-.25s.03-.19-.01-.26c-.04-.07-.33-.81-.46-1.1-.12-.29-.24-.25-.33-.25l-.29-.01-.29.04c-.1.02-.2.07-.27.15-.14.15-.52.51-.52 1.24 0 .73.53 1.44.61 1.54.07.1 1.05 1.6 2.54 2.24.35.15.63.24.85.31.36.11.68.1.94.06.29-.04.88-.36 1-.71.12-.35.12-.64.09-.71-.04-.06-.14-.1-.29-.17" fill="white" />
      </g>
      {/* Hearts */}
      <g transform="translate(320, 6)">
        <text fontSize="12" fill="#ff6b42">♥</text>
      </g>
      <g transform="translate(340, 18)">
        <text fontSize="10" fill="#0d8aaf">♥</text>
      </g>
    </svg>
  );
}

export default function Contact({ data }: Props) {
  const whatsappClean = data.whatsapp.replace(/[\s+\-()]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappClean}?text=Hello%2C%20I%20found%20you%20on%20SuryalankaBeach.com`;

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-ocean-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-48 h-48 rounded-full bg-sunset-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <ContactIllustration />
            <span className="inline-block px-4 py-1.5 bg-ocean-100 dark:bg-ocean-900/50 text-ocean-700 dark:text-ocean-300 rounded-full text-sm font-medium mb-4 mt-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              {data.heading}
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {/* Email Card */}
              <TiltCard className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] p-6 text-center hover:shadow-lg hover:border-ocean-300 dark:hover:border-ocean-700 transition-all duration-300 group">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-ocean-50 dark:bg-ocean-900/40 text-ocean-500 dark:text-ocean-400 flex items-center justify-center mb-4 group-hover:bg-ocean-100 dark:group-hover:bg-ocean-900/60 group-hover:text-ocean-600 dark:group-hover:text-ocean-300 transition-colors">
                  <Mail size={28} />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">Email Us</h3>
                <a
                  href={`mailto:${data.email}`}
                  className="text-ocean-600 dark:text-ocean-400 hover:text-ocean-700 dark:hover:text-ocean-300 text-sm sm:text-base break-all transition-colors font-medium"
                >
                  {data.email}
                </a>
              </TiltCard>

              {/* Phone Card */}
              <TiltCard className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] p-6 text-center hover:shadow-lg hover:border-sunset-300 dark:hover:border-sunset-700 transition-all duration-300 group">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-sunset-50 dark:bg-sunset-900/20 text-sunset-500 dark:text-sunset-400 flex items-center justify-center mb-4 group-hover:bg-sunset-100 dark:group-hover:bg-sunset-900/40 group-hover:text-sunset-600 dark:group-hover:text-sunset-300 transition-colors">
                  <Phone size={28} />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">Call Us</h3>
                <a
                  href={`tel:${data.phone.replace(/-/g, '')}`}
                  className="text-sunset-600 dark:text-sunset-400 hover:text-sunset-700 dark:hover:text-sunset-300 text-sm sm:text-base transition-colors font-medium"
                >
                  {data.phone}
                </a>
              </TiltCard>

              {/* WhatsApp Card */}
              <TiltCard className="sm:col-span-2 lg:col-span-1 bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] p-6 text-center hover:shadow-lg hover:border-green-400 dark:hover:border-green-600 transition-all duration-300 group">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-green-50 dark:bg-green-900/20 text-green-500 dark:text-green-400 flex items-center justify-center mb-4 group-hover:bg-green-100 dark:group-hover:bg-green-900/40 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors">
                  <WhatsAppIcon size={28} />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">WhatsApp</h3>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl text-sm font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                >
                  <WhatsAppIcon size={18} />
                  Chat on WhatsApp
                </a>
              </TiltCard>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1} direction="up">
            <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center gap-2 text-[var(--text-muted)] mb-4">
                <MapPin size={18} className="text-ocean-500" />
                <span className="text-sm">{data.address}</span>
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <p className="text-[var(--text-secondary)] text-sm mb-5">
                  Want to list your hotel, restaurant, or business? Have a question about the beach?
                  Reach us on WhatsApp for the quickest response, or drop us an email.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`mailto:${data.email}?subject=Inquiry%20from%20SuryalankaBeach.com`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-600 hover:bg-ocean-700 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
                  >
                    <Send size={18} />
                    Send Email
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
                  >
                    <WhatsAppIcon size={18} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="text-center text-xs text-[var(--text-muted)] mt-6 flex items-center justify-center gap-1">
              We <Heart size={12} className="text-coral-500 fill-coral-500" /> hearing from you
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
