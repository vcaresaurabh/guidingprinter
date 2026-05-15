import { Container } from './Container'
import { SITE_META } from '@/lib/metadata'
import { FOOTER_GUIDE_LINKS, FOOTER_BRAND_LINKS } from '@/lib/content/links'

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Service', href: '/terms-of-service/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
  { label: 'Contact Us', href: '/contact/' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <svg className="w-6 h-6" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="#3B82F6" />
                <path d="M7 10h14M7 14h10M7 18h7" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {SITE_META.siteName}
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Independent printer support guides for home and office users. We are not affiliated with any printer manufacturer.
            </p>
            <a href={`mailto:${SITE_META.email}`} className="text-sm font-semibold text-primary-light hover:text-white transition-colors">
              {SITE_META.email}
            </a>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Setup Guides</h3>
            <ul className="space-y-2">
              {FOOTER_GUIDE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">By Brand</h3>
            <ul className="space-y-2">
              {FOOTER_BRAND_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} {SITE_META.siteName}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 text-center sm:text-right max-w-md">
            Disclaimer: We are an independent support service. All brand names are trademarks of their respective owners.
          </p>
        </div>
      </Container>
    </footer>
  )
}
