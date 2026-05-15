# PROJECT CONTEXT

Project Name: site_1
Project Type: Independent printer setup and troubleshooting platform

Primary Goals:
- SEO traffic growth
- Google Ads compliance
- High trust UI
- Fast loading
- Conversion optimization

Target Users:
- Home printer users
- Office printer users
- Wireless printer users
- Driver installation users

Main Content Categories:
- Printer setup
- Wireless setup
- Driver installation
- Printer offline fixes
- Printer troubleshooting
- Setup guides
- Brand pages (HP, Canon, Epson, Brother)
- Model pages

Design Style:
- Modern SaaS
- Enterprise support platform
- Premium clean UI
- Inter font, professional blue palette

Tech Stack:
- Next.js 15.5.18 (App Router, static export)
- React 19
- TypeScript (strict)
- Tailwind CSS 3.x + @tailwindcss/typography

Hosting:
- Hostinger Shared Hosting (static export via `output: 'export'`)

Performance Targets:
- Lighthouse 90+
- Minimal JS
- Optimized images (unoptimized: true for static export)
- Static rendering (all pages are SSG)

## PRIMARY CONVERSION FLOW (Updated 2026-05-15)

The primary CTA funnel is the **Driver Download Flow** (`/driver-download/`).
All homepage entry points route visitors into this flow:

| Entry Point | Route |
|------------|-------|
| Hero search bar (model number) | `/driver-download/?brand=X&model=Y` |
| Brand card click (Brands section) | `/driver-download/?brand=X` |
| SetupWizard → "Driver Installation" task | `/driver-download/?brand=X` |
| Brand page "Download Driver" button | `/driver-download/` |
| Driver installation guide page | Embeds DriverDownloadFlow inline |

**DriverDownloadFlow** (`components/sections/DriverDownloadFlow.tsx`):
- `'use client'` component — 4 interactive steps
- Step 1: Brand select + model input + OS select
- Step 2: Fake "driver found" card with Download button
- Step 3: Animated progress bar (auto-advances to Step 4 at 100%)
- Step 4: Error page → "Call Now" CTA using `SITE_META.phone`
- Reads `?brand=` and `?model=` from URL params on mount (pre-fills form)
- Third-party disclaimer present — NOT affiliated with any brand

**⚠️ Replace `SITE_META.phone` in `lib/metadata.ts` before launch.**

## Important Notes

### Directory Structure (Windows issue)
- Next.js 15.5.18 on Windows does NOT detect `src/app/` directory
- All source files are at ROOT level (not inside `src/`)
- tsconfig paths: `@/*` → `./` (root)
- Tailwind content: `./app/**/*.{ts,tsx}`, `./components/**/*.{ts,tsx}`

### Folder Map
```
site_1/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Inter font, metadata)
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global CSS + Tailwind
├── components/
│   ├── ui/                 # Base atoms (Button, OptimizedImage)
│   ├── layout/             # Layout shells (Container, Section, Header, Footer, PageLayout)
│   └── sections/           # Page sections (Hero, Steps, FAQ, CTA)
├── lib/
│   ├── metadata.ts         # SITE_META constants
│   ├── seo.ts              # buildMetadata() factory
│   └── schema.ts           # JSON-LD schema generators
├── types/
│   └── index.ts            # Shared TS types
├── docs/                   # Project documentation
├── out/                    # Static export output (deploy this)
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

### Available Schema Generators (lib/schema.ts)
- buildOrganizationSchema()
- buildWebPageSchema({ title, description, url })
- buildFAQSchema(faqs[])
- buildBreadcrumbSchema(items[])
- buildHowToSchema({ name, description, steps[] })

### Reusable Components
- Button: variants (primary/secondary/outline/ghost), sizes (sm/md/lg), href support
- Container: size variants (sm/md/lg/full)
- Section: spacing variants (sm/md/lg), custom tag support
- FAQ: HTML details/summary (zero JS), auto FAQPage schema injection
- Steps: numbered step grid (responsive)
- Hero: badges, dual CTAs
- CTA: full-width band, dual CTAs
- PageLayout: Header + main + Footer wrapper
