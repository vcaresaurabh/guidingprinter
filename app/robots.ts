import type { MetadataRoute } from 'next'
import { SITE_META } from '@/lib/metadata'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/', '/api/'],
    },
    sitemap: `${SITE_META.baseUrl}/sitemap.xml`,
  }
}
