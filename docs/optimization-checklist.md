# FINAL OPTIMIZATION CHECKLIST

Track all Lighthouse / Core Web Vitals optimizations.

---

## Performance

- [x] Minimal client JavaScript — `SetupWizard`, `HeroSearch`, and `DriverDownloadFlow` are `'use client'`; all other components are server components
- [x] Inter font: Latin subset only, `display: 'swap'`, CSS variable pattern
- [x] Tailwind JIT — unused classes purged at build time
- [x] `poweredByHeader: false` — removes X-Powered-By header
- [x] `reactStrictMode: true` — catches render bugs in dev
- [x] `images.unoptimized: true` — required for static export (Hostinger)
- [x] CSS-only mobile menu (checkbox peer trick — zero JS)
- [x] `<details>/<summary>` FAQ accordion — zero JS
- [x] No inline `style={}` props except progress bar width (required for animated fill)
- [x] `viewport` export in layout.tsx — fixes Lighthouse mobile score
- [x] `DriverDownloadFlow` uses `useRef` for interval cleanup — no memory leaks
- [ ] OG image optimized (1200×630px, <200 KB JPEG) — **MANUAL TASK**
- [ ] Logo PNG optimized (<10 KB) — **MANUAL TASK**
- [ ] Verify build total JS ≤ 110 kB (currently: 103 kB shared ✓)

## SEO

- [x] Per-page canonical via `alternates.canonical` in `buildMetadata()`
- [x] Root layout canonical removed (was overriding per-page canonicals)
- [x] `max-snippet: -1` in robots — enables full Google rich snippets
- [x] `max-image-preview: large` in robots
- [x] JSON-LD schemas: Organization, WebPage, HowTo, TechArticle, FAQPage, BreadcrumbList, Service
- [x] Per-page meta title (50-60 chars), description (140-160 chars)
- [x] Open Graph + Twitter Card on every page
- [x] `robots.txt` via `app/robots.ts` — disallows `/_next/`, `/api/`
- [x] `sitemap.xml` via `app/sitemap.ts` — all 27 live routes (updated 2026-05-15)
- [x] Breadcrumb structured data (BreadcrumbList schema)
- [x] `trailingSlash: true` — consistent URL structure for canonicals
- [x] `/driver-download/` added to sitemap with priority 0.9
- [ ] Submit sitemap to Google Search Console — **POST-DEPLOY**
- [ ] Verify rich results in Google Rich Results Test — **POST-DEPLOY**

## Accessibility

- [x] Skip-to-main-content link (visible on keyboard focus)
- [x] `id="main-content"` on `<main>` element
- [x] `lang="en"` on `<html>`
- [x] `aria-hidden="true"` on all decorative SVGs
- [x] `aria-label` on nav elements, search form, mobile menu toggle
- [x] `aria-current="page"` on breadcrumb current item
- [x] `focus-visible` ring styles via CSS
- [x] `prefers-reduced-motion` media query wraps scroll-behavior
- [x] Mobile menu checkbox: `aria-hidden="true"`, `tabIndex={-1}`
- [x] `role="search"` on search form
- [x] DriverDownloadFlow all SVGs have `aria-hidden="true"`
- [ ] Run axe DevTools accessibility scan — **POST-DEPLOY**
- [ ] Keyboard-navigate entire driver download flow — **MANUAL TEST**

## Mobile

- [x] Mobile-first Tailwind classes throughout (sm: md: lg: breakpoints)
- [x] Responsive header with CSS mobile menu
- [x] Responsive grids: 1→2→3/4 column layouts
- [x] Touch-target sizes ≥ 44px for all interactive elements
- [x] `viewport` meta export (device-width, initialScale: 1)
- [x] Text readable without zoom at 320px viewport width
- [x] DriverDownloadFlow brand buttons grid: 3-col on mobile, 6-col on sm+
- [ ] Test driver download flow on real iOS Safari and Android Chrome — **MANUAL TEST**

## Core Web Vitals Targets

| Metric | Target | Status |
|--------|--------|--------|
| LCP | < 2.5s | Static HTML, should pass |
| FID/INP | < 200ms | Minimal JS client components |
| CLS | < 0.1 | Progress bar uses `style={{ width }}` — no layout shift |
| FCP | < 1.8s | Static, minimal CSS |
| TTFB | < 800ms | Hostinger static CDN |
