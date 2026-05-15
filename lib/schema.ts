import { SITE_META } from './metadata'
import type { FAQItem, ArticleData } from '@/types'

export type { FAQItem }
export type BreadcrumbItem = { name: string; url?: string }

// ─── Core schemas ─────────────────────────────────────────────────────────────

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_META.siteName,
    url: SITE_META.baseUrl,
    logo: `${SITE_META.baseUrl}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_META.email,
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  }
}

export function buildWebPageSchema(config: { title: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.title,
    description: config.description,
    url: config.url,
    publisher: {
      '@type': 'Organization',
      name: SITE_META.siteName,
      url: SITE_META.baseUrl,
    },
  }
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_META.siteName,
    url: SITE_META.baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://www.google.com/search?sitesearch=${new URL(SITE_META.baseUrl).hostname}&q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// ─── FAQ schema ───────────────────────────────────────────────────────────────

export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ─── Breadcrumb schema ────────────────────────────────────────────────────────

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  }
}

// ─── HowTo schema ─────────────────────────────────────────────────────────────

export function buildHowToSchema(config: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: config.name,
    description: config.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_META.siteName,
    },
    step: config.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

// ─── Article schema ───────────────────────────────────────────────────────────

export function buildArticleSchema(article: ArticleData) {
  const url = `${SITE_META.baseUrl}/${article.slug}/`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Organization',
      name: SITE_META.siteName,
      url: SITE_META.baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_META.siteName,
      url: SITE_META.baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_META.baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

// ─── Service schema ───────────────────────────────────────────────────────────

export function buildServiceSchema(config: {
  name: string
  description: string
  url: string
  serviceType?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.name,
    description: config.description,
    url: config.url,
    serviceType: config.serviceType ?? 'Technical Support',
    provider: {
      '@type': 'Organization',
      name: SITE_META.siteName,
      url: SITE_META.baseUrl,
    },
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: config.url,
    },
  }
}

// ─── TechArticle schema (for guide/how-to pages) ─────────────────────────────

export function buildTechArticleSchema(config: {
  headline: string
  description: string
  slug: string
  datePublished: string
  dateModified: string
}) {
  const url = `${SITE_META.baseUrl}/${config.slug}/`
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: config.headline,
    description: config.description,
    url,
    datePublished: config.datePublished,
    dateModified: config.dateModified,
    author: {
      '@type': 'Organization',
      name: SITE_META.siteName,
      url: SITE_META.baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_META.siteName,
      url: SITE_META.baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_META.baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}
