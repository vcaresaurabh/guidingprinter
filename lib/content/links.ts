import { BRANDS, BRAND_MAP } from './brands'
import { GUIDES, GUIDE_MAP } from './guides'
import type { RelatedLink } from '@/types'

// ─── Brand link lists ─────────────────────────────────────────────────────────

export function getAllBrandLinks(): RelatedLink[] {
  return BRANDS.map((brand) => ({
    label: `${brand.name} Printer Setup`,
    href: `/${brand.pageSlug}/`,
    description: `Setup and troubleshooting guides for ${brand.name} printers`,
  }))
}

export function getRelatedBrandLinks(currentSlug: string): RelatedLink[] {
  const brand = BRAND_MAP[currentSlug]
  if (!brand) return []
  return brand.relatedBrands
    .map((slug) => BRAND_MAP[slug])
    .filter(Boolean)
    .map((b) => ({
      label: `${b.name} Printer Setup`,
      href: `/${b.pageSlug}/`,
      description: `Guides for ${b.name} printers`,
    }))
}

// ─── Guide link lists ─────────────────────────────────────────────────────────

export function getAllGuideLinks(): RelatedLink[] {
  return GUIDES.map((guide) => ({
    label: guide.name,
    href: `/${guide.slug}/`,
    description: guide.metaDescription.slice(0, 80) + '…',
  }))
}

export function getRelatedGuideLinks(currentSlug: string): RelatedLink[] {
  const guide = GUIDE_MAP[currentSlug]
  if (!guide) return []
  return guide.relatedGuides
    .map((slug) => GUIDE_MAP[slug])
    .filter(Boolean)
    .map((g) => ({
      label: g.name,
      href: `/${g.slug}/`,
      description: g.intro.slice(0, 80) + '…',
    }))
}

// ─── Cross-linking helpers ────────────────────────────────────────────────────

export function getBrandGuideLinks(brandSlug: string): RelatedLink[] {
  const brand = BRAND_MAP[brandSlug]
  if (!brand) return []
  return brand.guides.map((g) => ({
    label: g.title,
    href: g.href,
    description: g.description,
  }))
}

export function getGuideBrandLinks(guideSlug: string): RelatedLink[] {
  const guide = GUIDE_MAP[guideSlug]
  if (!guide) return []
  return guide.relatedBrands
    .map((slug) => BRAND_MAP[slug])
    .filter(Boolean)
    .map((b) => ({
      label: `${b.name} ${guide.name}`,
      href: `/${b.pageSlug}/`,
      description: `${guide.name} instructions for ${b.name} printers`,
    }))
}

// ─── Nav link arrays (for header/footer) ─────────────────────────────────────

export const NAV_GUIDE_LINKS = [
  { label: 'Printer Setup', href: '/printer-setup/' },
  { label: 'Wireless Setup', href: '/wireless-printer-setup/' },
  { label: 'Driver Install', href: '/printer-driver-installation/' },
  { label: 'Printer Offline', href: '/printer-offline/' },
  { label: 'Troubleshooting', href: '/printer-troubleshooting/' },
]

export const NAV_BRAND_LINKS = BRANDS.map((b) => ({
  label: `${b.name} Printer Setup`,
  href: `/${b.pageSlug}/`,
}))

export const FOOTER_GUIDE_LINKS = NAV_GUIDE_LINKS

export const FOOTER_BRAND_LINKS = NAV_BRAND_LINKS
