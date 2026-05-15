# PRODUCTION READINESS CHECKLIST

Gate check before going live. All items in REQUIRED section must pass.

---

## REQUIRED — Must Pass Before Launch

### Pages
- [x] Homepage (`/`) — live, all 8 sections working
- [x] HP Printer Setup (`/hp-printer-setup/`) — full brand template
- [x] Canon Printer Setup (`/canon-printer-setup/`) — full brand template
- [x] Epson Printer Setup (`/epson-printer-setup/`) — full brand template
- [x] Brother Printer Setup (`/brother-printer-setup/`) — full brand template
- [x] Printer Setup Hub (`/printer-setup/`) — guide template
- [x] Printer Offline (`/printer-offline/`) — troubleshooting template
- [x] Printer Not Printing (`/printer-not-printing/`) — troubleshooting template
- [x] Printer WiFi Issues (`/printer-wifi-issues/`) — troubleshooting template
- [x] Driver Unavailable (`/printer-driver-unavailable/`) — troubleshooting template
- [x] Scanner Not Working (`/scanner-not-working/`) — troubleshooting template
- [x] Print Queue Stuck (`/print-queue-stuck/`) — troubleshooting template
- [ ] **Contact page (`/contact/`) — MISSING, blocks header CTA**
- [ ] **Privacy Policy (`/privacy-policy/`) — MISSING, footer link broken**
- [ ] **Terms of Service (`/terms-of-service/`) — MISSING, footer link broken**
- [ ] **Disclaimer (`/disclaimer/`) — MISSING, footer link broken**

### Assets
- [ ] **OG image: `public/images/og-default.jpg`** — MISSING → broken social sharing
- [ ] **Logo: `public/images/logo.png`** — MISSING → broken Organization schema
- [ ] Favicon: `public/favicon.ico` — verify exists

### Technical
- [x] Build: 0 TypeScript errors
- [x] `robots.txt` generated via `app/robots.ts`
- [x] `sitemap.xml` generated via `app/sitemap.ts`
- [x] Per-page canonical URLs (no homepage override)
- [x] No duplicate FAQPage schemas
- [x] Breadcrumb structured data correct
- [x] `SITE_META.baseUrl` used everywhere (no hardcoded URLs)
- [ ] Domain configured in `lib/metadata.ts` SITE_META.baseUrl
- [ ] Phone/email updated in SITE_META if placeholder values

### Content
- [x] Disclaimer text in footer (independent service, not affiliated)
- [ ] Privacy policy content reviewed for legal compliance
- [ ] Terms of service content reviewed for legal compliance
- [ ] Phone number is a real support number or removed
- [ ] All content uses educational-first language (no fake urgency, no brand impersonation)

---

## RECOMMENDED — Before or Shortly After Launch

### Missing Pages
- [ ] Lexmark Printer Setup (`/lexmark-printer-setup/`) — homepage brands link broken
- [ ] Samsung Printer Setup (`/samsung-printer-setup/`) — homepage brands link broken
- [ ] Wireless Printer Setup (`/wireless-printer-setup/`) — nav + footer link broken
- [ ] Driver Installation (`/printer-driver-installation/`) — nav + footer link broken
- [ ] Printer Troubleshooting hub (`/printer-troubleshooting/`) — nav + footer link broken

### SEO
- [ ] Google Search Console account set up
- [ ] Sitemap submitted to GSC
- [ ] Google Analytics or Plausible added (optional but recommended)
- [ ] Verify all pages appear in Google index after 2-4 weeks

### Compliance (Google Ads if applicable)
- [ ] Privacy policy is live before running ads
- [ ] Disclaimer visible in footer (already done)
- [ ] No misleading "official support" wording anywhere
- [ ] Contact page shows real contact method

---

## LAUNCH BLOCKERS SUMMARY

| Blocker | Severity | Fix |
|---------|----------|-----|
| OG image missing | High | Create `public/images/og-default.jpg` |
| Logo image missing | Medium | Create `public/images/logo.png` |
| Contact page missing | High | Create `app/contact/page.tsx` |
| Privacy Policy missing | High | Create `app/privacy-policy/page.tsx` |
| Terms of Service missing | Medium | Create `app/terms-of-service/page.tsx` |
| Disclaimer page missing | Medium | Create `app/disclaimer/page.tsx` |
| Lexmark/Samsung pages missing | Medium | Create brand pages (content in BRAND_MAP) |
| Wireless/Driver/Troubleshooting hub missing | Medium | Create guide pages (content in GUIDE_MAP) |
