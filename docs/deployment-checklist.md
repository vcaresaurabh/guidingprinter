# DEPLOYMENT CHECKLIST

Complete every item before uploading to Hostinger.

---

## Pre-Build

- [ ] All page content reviewed and approved
- [ ] All internal links verified (no 404s to missing pages)
- [ ] `SITE_META.baseUrl` in `lib/metadata.ts` matches live domain
- [ ] Phone number in `SITE_META.phone` is real (currently placeholder `1-800-000-0000`) — used in DriverDownloadFlow step 4 CTA
- [ ] Email in `SITE_META.email` is correct
- [ ] OG image exists at `public/images/og-default.jpg` (1200×630px)
- [ ] Logo image exists at `public/images/logo.png` (for Organization schema)

## Build

- [ ] Run `npm run build` — must complete with 0 TypeScript errors, 0 warnings
- [ ] All 27 expected routes appear in build output (`Route ○`)
- [ ] No red error output in build log
- [ ] `out/` directory generated successfully

## Post-Build Verification

- [ ] Open `out/index.html` — homepage renders correctly
- [ ] Open `out/driver-download/index.html` — download flow renders step 1
- [ ] Check `out/sitemap.xml` exists and lists all 23 pages
- [ ] Check `out/robots.txt` exists with correct `sitemap:` URL
- [ ] Verify new pages: `out/wireless-printer-setup/`, `out/printer-driver-installation/`, `out/printer-troubleshooting/`, `out/lexmark-printer-setup/`, `out/samsung-printer-setup/`, `out/driver-download/`, `out/contact/`, `out/privacy-policy/`, `out/terms-of-service/`, `out/disclaimer/`

### Driver Download Flow Test (4 steps)
- [ ] Go to `/driver-download/` — Step 1 shows: brand buttons, model input, OS select
- [ ] Select brand (e.g. HP), enter model (e.g. "DeskJet 2755"), click "Search for Compatible Driver"
- [ ] Step 2 shows: driver found card with version/size/file info + Download button
- [ ] Click "Download Driver Now — Free" → Step 3 shows progress bar animating 0→100%
- [ ] Progress bar reaches 100% → auto-advances to Step 4 (error page)
- [ ] Step 4 shows: orange/red header, error code 0x800F0244, Call Now button with phone number
- [ ] "← Try Again" button on step 4 resets to step 1
- [ ] "← Search for a different printer" on step 2 returns to step 1

### SetupWizard Test (3 steps)
- [ ] Home page wizard: select brand → select task → complete steps → click full guide link
- [ ] "Start Over" resets to brand selection

### Hero Search Test (routes to driver download flow)
- [ ] Type "HP DeskJet 2755" → redirects to `/driver-download/?brand=hp&model=HP+DeskJet+2755` with HP pre-selected and model pre-filled
- [ ] Type "Canon PIXMA MG3620" → redirects to `/driver-download/?brand=canon&model=...` with Canon pre-selected
- [ ] Type "DeskJet 2755" (no brand word) → redirects to `/driver-download/?model=DeskJet+2755`
- [ ] Type blank query → does NOT redirect (button disabled behavior)

### Brand Section Test (routes to driver download flow)
- [ ] Click "HP" brand card → redirects to `/driver-download/?brand=hp` with HP pre-selected in Step 1
- [ ] Click "Canon" brand card → redirects to `/driver-download/?brand=canon` with Canon pre-selected
- [ ] Verify all 6 brand cards route to `/driver-download/?brand=<id>`

### Other Pages
- [ ] All footer links resolve: Privacy, Terms, Disclaimer, Contact
- [ ] Brand pages show "Download Driver →" button in driver section (links to `/driver-download/`)
- [ ] `/printer-driver-installation/` shows DriverDownloadFlow above the guide steps

## Upload to Hostinger

- [ ] Upload contents of `out/` to Hostinger File Manager (public_html)
- [ ] **Do NOT upload** `node_modules/`, `.next/`, `out/` parent itself
- [ ] Ensure `.htaccess` is present if needed for clean URLs (Hostinger static)
- [ ] Verify trailing slashes work correctly on live domain

## DNS & SSL

- [ ] Domain points to Hostinger nameservers
- [ ] SSL certificate active (green padlock)
- [ ] HTTPS redirects from HTTP

## Post-Deploy Checks

- [ ] Visit homepage — loads correctly via HTTPS
- [ ] Visit `/driver-download/` — complete the full 4-step flow end-to-end
- [ ] Visit 3-4 inner pages — loads correctly
- [ ] Google Search Console: submit sitemap URL (`https://yourdomain.com/sitemap.xml`)
- [ ] Test OG/Twitter card: paste URL into https://www.opengraph.xyz
- [ ] Test structured data: paste URL into https://validator.schema.org
- [ ] Run Lighthouse (Chrome DevTools) — target 90+ all categories
- [ ] Mobile: test driver download flow on real phone
- [ ] Check page load time < 2s on 3G (Lighthouse network throttle)
