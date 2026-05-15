import type { MetadataRoute } from 'next'
import { SITE_META } from '@/lib/metadata'

export const dynamic = 'force-static'

const base = SITE_META.baseUrl
const lastMod = new Date().toISOString()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    { url: `${base}/`, lastModified: lastMod, changeFrequency: 'weekly', priority: 1.0 },

    // Brand pages
    { url: `${base}/hp-printer-setup/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/canon-printer-setup/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/epson-printer-setup/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/brother-printer-setup/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/lexmark-printer-setup/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/samsung-printer-setup/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },

    // Guide pages
    { url: `${base}/printer-setup/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/wireless-printer-setup/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/printer-driver-installation/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/printer-troubleshooting/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/driver-download/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },

    // Troubleshooting pages
    { url: `${base}/printer-offline/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/printer-not-printing/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/printer-wifi-issues/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/printer-driver-unavailable/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/scanner-not-working/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/print-queue-stuck/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },

    // Support & legal
    { url: `${base}/contact/`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/privacy-policy/`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/terms-of-service/`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/disclaimer/`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.4 },
  ]
}
