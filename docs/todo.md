# TODO

## DONE (Session 1)
- [x] Initialize Next.js 15.5.18, Tailwind CSS, TypeScript
- [x] Layout system (Container, Section, Header, Footer, PageLayout)
- [x] Section components (Hero, Steps, FAQ, CTA)
- [x] SEO foundation (lib/metadata.ts, lib/seo.ts, lib/schema.ts)
- [x] Static export verified

## DONE (Session 2)
- [x] Full homepage with 8 sections (Hero+search, Brands, Services, Steps, FeaturedGuides, WhyChooseUs, FAQ, CTA)

## DONE (Session 3)
- [x] Enhanced types (BrandData, GuideData, ModelData, ArticleData, BreadcrumbItem, RelatedLink)
- [x] Enhanced lib/schema.ts (Article, Service, TechArticle, WebSite schemas)
- [x] Enhanced lib/seo.ts (buildBrandMetadata, buildGuideMetadata, buildArticleMetadata, buildLegalMetadata)
- [x] lib/content/brands.ts (6 brands with full SEO, FAQs, models, guides)
- [x] lib/content/guides.ts (5 guide hubs with full step-by-step content)
- [x] lib/content/links.ts (internal linking utilities)
- [x] components/ui/Breadcrumb.tsx (semantic nav + BreadcrumbList JSON-LD)
- [x] components/ui/RelatedLinks.tsx (card + list variants)
- [x] components/templates/BrandPageTemplate.tsx
- [x] components/templates/GuidePageTemplate.tsx
- [x] app/hp-printer-setup/page.tsx (HP brand page, live)
- [x] app/printer-setup/page.tsx (printer setup hub, live)

## DONE (Session 4)
- [x] BrandData type extended: wirelessSetupSteps, driverInstallSteps, commonIssues
- [x] BrandPageTemplate enhanced with 3 new sections
- [x] HP, Canon, Epson, Brother brand content (6 steps wireless, 6 steps driver, 4 issues each)
- [x] app/canon-printer-setup/page.tsx
- [x] app/epson-printer-setup/page.tsx
- [x] app/brother-printer-setup/page.tsx
- [x] Build verified: 7 routes, 0 TypeScript errors

## DONE (Session 5)
- [x] TroubleshootingData type added to types/index.ts
- [x] buildTroubleshootingMetadata added to lib/seo.ts
- [x] lib/content/troubleshooting.ts — 6 issues with full content, TROUBLESHOOTING_MAP, helpers
- [x] components/templates/TroubleshootingPageTemplate.tsx — 9-section template
  - Amber hero (gradient from amber-50)
  - Symptoms checklist (amber panel)
  - Quick Fix banner (emerald callout)
  - Numbered fix steps
  - Advanced steps section (conditional)
  - FAQ (FAQPage schema injected)
  - Related troubleshooting pages (RelatedLinks cards)
  - Brand-specific guide links (RelatedLinks cards)
  - CTA
  - Schemas: HowTo + FAQPage + TechArticle (all injected in template)
- [x] app/printer-offline/page.tsx
- [x] app/printer-not-printing/page.tsx
- [x] app/printer-wifi-issues/page.tsx
- [x] app/printer-driver-unavailable/page.tsx
- [x] app/scanner-not-working/page.tsx
- [x] app/print-queue-stuck/page.tsx
- [x] Build verified: 13 routes, 0 TypeScript errors

## DONE (Session 6)
- [x] next.config.js: poweredByHeader: false, reactStrictMode: true
- [x] app/layout.tsx: viewport export (device-width, initialScale: 1)
- [x] app/layout.tsx: removed wrong root alternates.canonical (was pointing all pages to homepage)
- [x] app/layout.tsx: added max-snippet: -1 to robots.googleBot
- [x] app/layout.tsx: skip-to-main-content link (sr-only, visible on focus)
- [x] app/globals.css: scroll-behavior wrapped in prefers-reduced-motion media query
- [x] app/globals.css: hero-dot-grid CSS utility class (extracted from Hero inline style)
- [x] components/sections/Hero.tsx: removed inline style, uses hero-dot-grid class
- [x] components/layout/PageLayout.tsx: id="main-content" on main element
- [x] Build verified: 13 routes, 0 TypeScript errors

## DONE (Session 7 — Production Audit)
- [x] Fixed duplicate FAQPage schema in TroubleshootingPageTemplate
- [x] Fixed Breadcrumb schema last-item URL fallback bug (was → homepage, now → omitted per spec)
- [x] Fixed md:h-18 invalid Tailwind class in Header → md:h-20
- [x] Fixed mobile menu checkbox accessibility (aria-hidden, tabIndex=-1)
- [x] Fixed GuidePageTemplate breadcrumb circular middle item
- [x] Header: switched to NAV_GUIDE_LINKS from links.ts (centralized, adds Printer Offline link)
- [x] Footer: switched to FOOTER_GUIDE_LINKS / FOOTER_BRAND_LINKS from links.ts (all 6 brands)
- [x] Brand page files: replaced hardcoded baseUrl with SITE_META.baseUrl
- [x] app/robots.ts — generates robots.txt at build
- [x] app/sitemap.ts — generates sitemap.xml at build (all 13 routes)
- [x] docs/deployment-checklist.md created
- [x] docs/optimization-checklist.md created
- [x] docs/production-readiness.md created (launch blockers listed)
- [x] Build verified: 0 TypeScript errors

## HIGH PRIORITY (Next)
- [ ] lexmark-printer-setup page (uses BrandPageTemplate + BRAND_MAP['lexmark'])
- [ ] samsung-printer-setup page (uses BrandPageTemplate + BRAND_MAP['samsung'])
- [ ] wireless-printer-setup page (uses GuidePageTemplate + GUIDE_MAP['wireless-printer-setup'])
- [ ] printer-driver-installation page (uses GuidePageTemplate + GUIDE_MAP['printer-driver-installation'])
- [ ] printer-troubleshooting page (uses GuidePageTemplate + GUIDE_MAP['printer-troubleshooting'])

## MEDIUM PRIORITY
- [ ] Contact page (/contact/)
- [ ] Legal pages (Privacy, Terms, Disclaimer) — use buildLegalMetadata
- [ ] Sitemap (sitemap.xml)
- [ ] Robots.txt
- [ ] Model sub-pages (e.g. /hp-printer-setup/hp-deskjet-4155e-setup/)
- [ ] Update Header/Footer to use NAV_GUIDE_LINKS and NAV_BRAND_LINKS from links.ts
- [ ] Add troubleshooting links to links.ts for internal linking from brand/guide pages

## LOW PRIORITY
- [ ] Blog/article system (uses buildArticleMetadata + buildArticleSchema)
- [ ] Search results page
- [ ] Dark mode
