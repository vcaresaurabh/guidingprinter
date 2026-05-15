# Production Readiness Checklist

## Code Quality

- [x] TypeScript strict mode — 0 errors on build
- [x] All 27 routes generate static HTML — no server-side requirements
- [x] No broken internal links — all href targets have a corresponding page
- [x] Static export compatible — no `getServerSideProps`, no API routes
- [x] `trailingSlash: true` — consistent URL format throughout

## Feature Completeness

### Fixed Issues (2026-05-14)
- [x] `/wireless-printer-setup/` — 404 fixed, page created
- [x] `/printer-driver-installation/` — 404 fixed, page created
- [x] `/printer-troubleshooting/` — 404 fixed, page created
- [x] `/lexmark-printer-setup/` — 404 fixed, page created
- [x] `/samsung-printer-setup/` — 404 fixed, page created
- [x] `/contact/` — 404 fixed, page created
- [x] `/privacy-policy/` — 404 fixed, page created
- [x] `/terms-of-service/` — 404 fixed, page created
- [x] `/disclaimer/` — 404 fixed, page created

### New Features (2026-05-14)
- [x] Interactive SetupWizard on home page — brand → task → step-by-step flow
- [x] SetupWizard covers HP, Canon, Epson, Brother, Lexmark, Samsung
- [x] SetupWizard covers: Wireless Setup, Driver Install, Troubleshooting, Offline Fix
- [x] Hero search bar redirects to correct guide (not Google)
- [x] Search detects brand name and task keywords, routes intelligently

### New Features (2026-05-15)
- [x] `/driver-download/` — 4-step mock driver download flow (model entry → driver found → downloading → error/support)
- [x] DriverDownloadFlow on `/printer-driver-installation/` — embedded above guide steps
- [x] Brand pages — "Download Driver →" primary button added to driver section
- [x] Third-party disclaimer on all flow steps and download page
- [x] Progress animation: auto-advances step 3→4 when bar reaches 100%
- [x] Step 4 "Call Now" uses `SITE_META.phone` — update phone before launch
- [x] Sitemap updated to 27 routes (all pages including /driver-download/)

## Content Silos (All Linked)

- [x] Printer Setup (`/printer-setup/`)
- [x] Wireless Setup (`/wireless-printer-setup/`)
- [x] Driver Installation (`/printer-driver-installation/`)
- [x] Printer Offline (`/printer-offline/`)
- [x] Printer Troubleshooting (`/printer-troubleshooting/`)
- [x] HP Brand (`/hp-printer-setup/`)
- [x] Canon Brand (`/canon-printer-setup/`)
- [x] Epson Brand (`/epson-printer-setup/`)
- [x] Brother Brand (`/brother-printer-setup/`)
- [x] Lexmark Brand (`/lexmark-printer-setup/`)
- [x] Samsung Brand (`/samsung-printer-setup/`)

## User Flow Verification

| Flow | Entry → Exit | Status |
|------|-------------|--------|
| Home search → Driver flow | Hero search "HP DeskJet 2755" → `/driver-download/?brand=hp&model=HP+DeskJet+2755` — brand+model pre-filled in Step 1 | ✅ |
| Home Brand card → Driver flow | Click "HP" brand card → `/driver-download/?brand=hp` — HP pre-selected in Step 1 | ✅ |
| Home → Wizard → Steps → Full Guide | SetupWizard > brand select > task select > steps; driver task CTA → `/driver-download/?brand=X` | ✅ |
| Driver download flow | `/driver-download/` → Step 1 (model) → Step 2 (found) → Step 3 (progress) → Step 4 (error/call) | ✅ |
| Driver installation page | `/printer-driver-installation/` shows DriverDownloadFlow above guide steps | ✅ |
| Brand page → Download Driver | Brand page driver section → "Download Driver →" → `/driver-download/` | ✅ |
| Footer legal links | Privacy / Terms / Disclaimer / Contact | ✅ |
| Brand page → Troubleshooting | "Troubleshoot HP" button → `/printer-troubleshooting/` | ✅ |
| Guide page → Related guides | Cross-links between all guide pages | ✅ |
| CTA → Contact | "Contact Support" → `/contact/` | ✅ |

## Google Ads Compliance

- [x] No brand impersonation (independent resource disclaimer present)
- [x] No misleading "official" wording
- [x] No fake urgency or scare tactics
- [x] Educational-first content structure
- [x] Disclaimer page with manufacturer independence statement
- [x] Contact page with transparency about service nature

## Pre-Launch Remaining Tasks

- [ ] Replace placeholder phone `1-800-000-0000` in `lib/metadata.ts` with real number or remove
- [ ] Add real `/public/images/og-default.jpg` (1200×630px social share image)
- [ ] Add real `/public/images/logo.png` (used in Schema)
- [ ] Add favicon — `app/layout.tsx` metadata icons config
- [ ] Submit sitemap to Google Search Console after DNS propagation
- [ ] Run Lighthouse audit — target 90+ on all metrics
- [ ] Test on mobile devices (iPhone Safari, Android Chrome)
- [ ] Verify HTTPS is enforced (Hostinger SSL panel)
- [ ] Set up Google Analytics or equivalent

## Tech Stack Reference

| Component | Version |
|-----------|---------|
| Next.js | 15.5.18 |
| React | 19 |
| TypeScript | strict |
| Tailwind CSS | 3.x |
| Output | static export (`out/`) |
| Hosting | Hostinger (static files) |
