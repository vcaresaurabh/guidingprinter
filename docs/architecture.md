# ARCHITECTURE

## STRUCTURE

- Root-level Next.js App Router (no src/ directory — Windows compatibility)
- Modular, reusable, scalable components
- SEO-first page structure
- Static export for Hostinger

## FOLDER TREE

```
site_1/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage (/)
│   ├── globals.css             # Global styles
│   └── [future-routes]/        # Content pages
│       └── page.tsx
├── components/
│   ├── ui/                     # Atoms — no page logic
│   │   ├── Button.tsx
│   │   └── OptimizedImage.tsx
│   ├── layout/                 # Page frame
│   │   ├── Container.tsx       # Width constraint
│   │   ├── Section.tsx         # Vertical spacing
│   │   ├── Header.tsx          # Site header (sticky)
│   │   ├── Footer.tsx          # Site footer
│   │   └── PageLayout.tsx      # Header + main + Footer
│   └── sections/               # Reusable page sections
│       ├── Hero.tsx            # Homepage hero (uses HeroSearch)
│       ├── HeroSearch.tsx      # 'use client' — model search → /driver-download/
│       ├── Brands.tsx          # Brand cards → /driver-download/?brand=X
│       ├── SetupWizard.tsx     # 'use client' — interactive wizard
│       ├── DriverDownloadFlow.tsx # 'use client' — 4-step mock driver flow
│       ├── Steps.tsx
│       ├── FAQ.tsx             # Zero-JS accordion + schema
│       └── CTA.tsx
├── lib/                        # Utilities (no UI)
│   ├── metadata.ts             # SITE_META constants
│   ├── seo.ts                  # buildMetadata()
│   └── schema.ts               # JSON-LD generators
├── types/
│   └── index.ts                # Shared types
├── public/
│   └── images/                 # Static assets
├── docs/                       # Dev documentation
└── out/                        # Build output (deploy)
```

## ROUTING

- App Router (Next.js 15 App Router)
- Static export: all pages pre-rendered to HTML
- URL structure: `/category/slug/` (trailingSlash: true)
- Clean semantic URLs

### Live Route Map (27 routes — all static)
```
/                              → Homepage (Hero search + Brands + SetupWizard)
/driver-download/              → PRIMARY CONVERSION PAGE — 4-step driver flow
/printer-setup/                → Setup guide hub
/wireless-printer-setup/       → Wireless setup guide
/printer-driver-installation/  → Driver guide + embedded DriverDownloadFlow
/printer-troubleshooting/      → Troubleshooting guide
/printer-offline/              → Offline fix guide
/printer-not-printing/         → Troubleshooting page
/printer-wifi-issues/          → Troubleshooting page
/printer-driver-unavailable/   → Troubleshooting page
/scanner-not-working/          → Troubleshooting page
/print-queue-stuck/            → Troubleshooting page
/hp-printer-setup/             → HP brand page
/canon-printer-setup/          → Canon brand page
/epson-printer-setup/          → Epson brand page
/brother-printer-setup/        → Brother brand page
/lexmark-printer-setup/        → Lexmark brand page
/samsung-printer-setup/        → Samsung brand page
/contact/                      → Contact page
/privacy-policy/               → Privacy policy
/terms-of-service/             → Terms of service
/disclaimer/                   → Disclaimer (third-party independence)
```

### Conversion Flow (Homepage → Driver Download)
```
Hero Search bar   ──→ /driver-download/?brand=X&model=Y  (brand+model pre-filled)
Brand card click  ──→ /driver-download/?brand=X           (brand pre-selected)
SetupWizard driver task → /driver-download/?brand=X      (brand pre-selected)
Brand page button ──→ /driver-download/
```

All routes to `/driver-download/` pre-fill DriverDownloadFlow Step 1 via URL params.

## IMPORT ALIAS

`@/` maps to project root (e.g., `@/components/ui/Button`, `@/lib/seo`)

## PERFORMANCE

- Static export: all pages pre-rendered (no server runtime)
- CSS-only mobile menu (no JS toggle)
- Zero-JS FAQ accordion (HTML details/summary)
- Inter font via next/font/google (self-hosted, display: swap)
- Images: unoptimized true (required for static export)
- Tailwind CSS tree-shaking (only used classes in bundle)

## DEPLOYMENT

- `npm run build` → generates `/out` directory
- Upload `/out` contents to Hostinger public_html
- CDN-ready (all assets use content hashes)
