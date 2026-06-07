import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://suryalankabeach.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-06-06'),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/`,
        },
      },
    },
  ];
}
