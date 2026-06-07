import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GA_MEASUREMENT_ID } from '@/lib/constants';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bapatla Suryalanka Beach — Andhra\'s Hidden Coastal Gem | Complete Travel Guide 2026',
  description: 'Discover Bapatla Suryalanka Beach — pristine golden sands, gentle waves & stunning sunrises on the Bay of Bengal. Complete guide with 22 hotels, 12 restaurants, train schedules from Hyderabad & Vijayawada, nearby attractions, and real estate. Plan your perfect beach getaway near Bapatla, Andhra Pradesh.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: [
    // Primary — branded and location
    'Bapatla Suryalanka Beach',
    'Suryalanka Beach Bapatla',
    'Bapatla Beach Andhra Pradesh',
    'Suryalanka Beach Andhra Pradesh',
    // Tourism and travel
    'Bapatla tourism',
    'Bapatla travel guide',
    'Suryalanka Beach guide',
    'Bapatla tourist places',
    'things to do in Bapatla',
    'places to visit near Bapatla',
    // Beaches
    'Andhra Pradesh beaches',
    'best beaches in Andhra Pradesh',
    'Bay of Bengal beaches',
    'beach resorts Andhra',
    'beaches near Guntur',
    'beaches near Vijayawada',
    'beaches near Hyderabad',
    // Hotels & stays
    'Bapatla beach hotels',
    'Suryalanka hotels',
    'Suryalanka Beach hotels',
    'Bapatla beach resorts',
    'Suryalanka beach resorts',
    'Suryalanka Beach Resort',
    'APTDC Haritha Beach Resort',
    'Bapatla resorts',
    'hotels near Suryalanka Beach',
    'resorts near Suryalanka Beach',
    'budget hotels Bapatla',
    // Travel & transport
    'Bapatla railway station',
    'Bapatla to Hyderabad trains',
    'trains to Bapatla',
    'trains to Suryalanka Beach',
    'Bapatla train schedule',
    'Hyderabad to Bapatla distance',
    'Hyderabad to Suryalanka Beach',
    'Vijayawada to Bapatla',
    'Vijayawada to Suryalanka Beach',
    'Guntur to Bapatla',
    'how to reach Bapatla Beach',
    'how to reach Suryalanka Beach',
    'Bapatla Beach distance',
    'Suryalanka Beach distance',
    // Food & restaurants
    'Bapatla restaurants',
    'Bapatla seafood',
    'Suryalanka Beach restaurants',
    'restaurants near Suryalanka Beach',
    'Andhra coastal cuisine',
    // Weekend getaways
    'weekend getaways from Hyderabad',
    'weekend trips from Vijayawada',
    'one day trip near Guntur',
    'family beach trips Andhra',
    // Other
    'Bapatla real estate',
    'Suryalanka beach photos',
    'Bapatla beach video',
    'Chirala Beach',
    'Vodarevu Beach',
    'Bapatla beach festival',
  ],
  authors: [{ name: 'SuryalankaBeach.com' }],
  creator: 'SuryalankaBeach.com',
  publisher: 'SuryalankaBeach.com',
  openGraph: {
    title: 'Bapatla Suryalanka Beach — Andhra\'s Hidden Coastal Gem | Complete Travel Guide 2026',
    description: 'Golden sands, gentle waves, stunning sunrises. Your complete guide to Bapatla Suryalanka Beach — 22 hotels, 12 restaurants, train schedules, attractions & more.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'SuryalankaBeach.com',
    images: [
      {
        url: 'https://suryalankabeach.com/images/logo.png',
        width: 400,
        height: 400,
        alt: 'Bapatla Suryalanka Beach Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bapatla Suryalanka Beach — Andhra\'s Hidden Coastal Gem',
    description: 'Golden sands, gentle waves, stunning sunrises. Complete guide to Bapatla Suryalanka Beach — hotels, restaurants, train schedules & attractions.',
    images: ['https://suryalankabeach.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://suryalankabeach.com',
    languages: {
      'en-IN': 'https://suryalankabeach.com',
    },
  },
  other: {
    'og:see_also': 'https://bapatlabeach.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsensePublisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        {adsensePublisherId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePublisherId}`}
            crossOrigin="anonymous"
          />
        )}
        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                `,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TouristDestination',
              name: 'Bapatla Suryalanka Beach',
              description:
                'Suryalanka Beach, also known as Bapatla Beach, is a pristine shoreline along the Bay of Bengal in Andhra Pradesh, famous for golden sands, gentle waves, and family-friendly atmosphere.',
              touristType: ['Families', 'Couples', 'Solo Travelers', 'Beach Lovers'],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bapatla',
                addressRegion: 'Andhra Pradesh',
                addressCountry: 'IN',
                postalCode: '522101',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '15.8345',
                longitude: '80.5051',
              },
              containedInPlace: {
                '@type': 'Place',
                name: 'Bapatla District',
                containedInPlace: {
                  '@type': 'Place',
                  name: 'Andhra Pradesh',
                  containedInPlace: {
                    '@type': 'Country',
                    name: 'India',
                  },
                },
              },
            }),
          }}
        />

        {/* Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'SuryalankaBeach.com',
              alternateName: ['Bapatla Beach Guide', 'Suryalanka Beach Guide', 'BapatlaBeach.com', 'BapatlaBeach.org'],
              url: 'https://suryalankabeach.com',
              sameAs: [
                'https://suryalankabeach.com',
                'https://bapatlabeach.com',
                'https://bapatlabeach.org',
              ],
              description:
                'Complete travel guide for Bapatla Suryalanka Beach — hotels, restaurants, train schedules, nearby attractions, and real estate information.',
              inLanguage: 'en-IN',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://suryalankabeach.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is the best time to visit Bapatla Suryalanka Beach?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'October to March is the best time to visit with pleasant weather (20°C–30°C). Avoid May–June (peak summer, 35°C–42°C) and monsoon months (July–September).',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How to reach Bapatla Beach from Hyderabad?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '11 direct trains run from Hyderabad/Secunderabad/Charlapalli to Bapatla (BPP) station, taking 5.5–8.5 hours. The beach is 12 km (15 min by auto) from Bapatla station. By road, it is 386 km via NH65 and NH16 (7–8 hours).',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are there hotels near Suryalanka Beach?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! There are 22 hotels and resorts. APTDC Haritha Beach Resort is directly on the beach. Other options include Golden Sands Resort, Lalitha Karunya Resorts, and budget stays starting from ₹300/night. Premium resorts are available in nearby Chirala (15 km).',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Bapatla Beach safe for swimming?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Suryalanka Beach is considered one of the safest swimming beaches in Andhra Pradesh due to its shallow waters and gentle slope. However, always exercise caution during monsoon season when the sea can be rough.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are the nearby attractions to Bapatla Beach?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Nearby attractions include Bhavanarayana Swamy Temple (9 km), Chirala Beach (15 km), Vodarevu Beach (20 km), Undavalli Caves (95 km), and Amaravati Stupa (117 km).',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are there good restaurants at Bapatla Suryalanka Beach?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! There are 12+ restaurants including Dolphin Restaurant (fresh seafood), Haritha Beach Resort Restaurant (multi-cuisine), and Hotel Swagath (Andhra meals). Options range from pure vegetarian (Hotel Venkateswara Bhavan, Sri Anjaneya Vilas) to seafood and multi-cuisine. Budget meals start from ₹100 and premium dining is available at beachfront restaurants.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Bapatla Suryalanka Beach good for real estate investment?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Bapatla Beach area is an emerging real estate destination with growing interest in beach plots, resort properties, and residential layouts. With its proximity to Bapatla town (9 km), railway station, and NH16 highway, the area is seeing appreciation. Several layout projects are available near Suryalanka Beach Road with prices starting from ₹5 lakhs per plot.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
