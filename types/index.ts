// ─── UI primitives ───────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Step {
  number: number
  title: string
  description: string
}

export interface CTAConfig {
  text: string
  href: string
}

export interface PageMeta {
  title: string
  description: string
  canonical: string
  ogImage?: string
}

export interface RelatedLink {
  label: string
  href: string
  description?: string
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ContainerSize = 'sm' | 'md' | 'lg' | 'full'
export type SectionSpacing = 'sm' | 'md' | 'lg'

// ─── Content types ────────────────────────────────────────────────────────────

export interface GuideLink {
  title: string
  href: string
  description: string
}

export interface CommonIssue {
  issue: string
  solution: string
}

export interface BrandData {
  slug: string
  name: string
  fullName: string
  pageSlug: string
  color: string
  headline: string
  metaTitle: string
  metaDescription: string
  intro: string
  popularModels: string[]
  guides: GuideLink[]
  faqs: FAQItem[]
  relatedBrands: string[]
  wirelessSetupSteps?: Array<{ name: string; text: string }>
  driverInstallSteps?: Array<{ name: string; text: string }>
  commonIssues?: CommonIssue[]
}

export interface GuideData {
  slug: string
  category: string
  name: string
  headline: string
  metaTitle: string
  metaDescription: string
  intro: string
  lastUpdated: string
  readTime: string
  steps: Array<{ name: string; text: string }>
  faqs: FAQItem[]
  relatedGuides: string[]
  relatedBrands: string[]
}

export interface ModelData {
  slug: string
  brand: string
  modelName: string
  modelNumber: string
  headline: string
  metaTitle: string
  metaDescription: string
  intro: string
  steps: Array<{ name: string; text: string }>
  faqs: FAQItem[]
}

export interface ArticleData {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  description: string
  author: string
  datePublished: string
  dateModified: string
  category: string
  readTime: string
}

export interface TroubleshootingData {
  slug: string
  name: string
  headline: string
  metaTitle: string
  metaDescription: string
  intro: string
  lastUpdated: string
  readTime: string
  symptoms: string[]
  quickFix: string
  steps: Array<{ name: string; text: string }>
  advancedSteps?: Array<{ name: string; text: string }>
  faqs: FAQItem[]
  relatedIssues: string[]
  relatedBrands: string[]
}
