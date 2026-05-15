import type { Metadata } from 'next'
import { SITE_META } from './metadata'
import type { BrandData, GuideData, TroubleshootingData } from '@/types'

interface MetadataConfig {
  title: string
  description: string
  canonical: string
  ogImage?: string
  noIndex?: boolean
  type?: 'website' | 'article'
  datePublished?: string
  dateModified?: string
}

// ─── Base metadata builder ────────────────────────────────────────────────────

export function buildMetadata(config: MetadataConfig): Metadata {
  const { title, description, canonical, ogImage, noIndex, type = 'website' } = config
  const image = ogImage ?? SITE_META.defaultOgImage
  const url = canonical.startsWith('http')
    ? canonical
    : `${SITE_META.baseUrl}${canonical.startsWith('/') ? '' : '/'}${canonical}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: SITE_META.siteName,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  }
}

// ─── Brand page metadata ──────────────────────────────────────────────────────

export function buildBrandMetadata(brand: BrandData): Metadata {
  return buildMetadata({
    title: brand.metaTitle,
    description: brand.metaDescription,
    canonical: `/${brand.pageSlug}/`,
  })
}

// ─── Guide/hub page metadata ──────────────────────────────────────────────────

export function buildGuideMetadata(guide: GuideData): Metadata {
  return buildMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    canonical: `/${guide.slug}/`,
    type: 'article',
    datePublished: guide.lastUpdated,
    dateModified: guide.lastUpdated,
  })
}

// ─── Article metadata ─────────────────────────────────────────────────────────

export function buildArticleMetadata(config: {
  title: string
  description: string
  slug: string
  ogImage?: string
}): Metadata {
  return buildMetadata({
    title: config.title,
    description: config.description,
    canonical: `/${config.slug}/`,
    ogImage: config.ogImage,
    type: 'article',
  })
}

// ─── Troubleshooting page metadata ───────────────────────────────────────────

export function buildTroubleshootingMetadata(issue: TroubleshootingData): Metadata {
  return buildMetadata({
    title: issue.metaTitle,
    description: issue.metaDescription,
    canonical: `/${issue.slug}/`,
    type: 'article',
    datePublished: issue.lastUpdated,
    dateModified: issue.lastUpdated,
  })
}

// ─── Legal / utility page metadata ───────────────────────────────────────────

export function buildLegalMetadata(config: { title: string; slug: string }): Metadata {
  return buildMetadata({
    title: `${config.title} | ${SITE_META.siteName}`,
    description: `${config.title} for ${SITE_META.siteName}. Please read carefully.`,
    canonical: `/${config.slug}/`,
    noIndex: true,
  })
}
