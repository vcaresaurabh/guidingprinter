import { Container } from './Container'
import { Button } from '@/components/ui/Button'
import { SITE_META } from '@/lib/metadata'
import { NAV_GUIDE_LINKS } from '@/lib/content/links'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border shadow-header">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
            <svg
              className="w-7 h-7"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
            >
              <rect width="28" height="28" rx="6" fill="#2563EB" />
              <path
                d="M7 10h14M7 14h10M7 18h7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="hidden sm:block">{SITE_META.siteName}</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {NAV_GUIDE_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button href="/contact/" variant="primary" size="sm">
              Get Help
            </Button>

            {/* Mobile menu toggle — CSS-driven */}
            <label htmlFor="mobile-menu" className="lg:hidden cursor-pointer p-1" aria-label="Toggle menu">
              <svg className="w-6 h-6 text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
        </div>
      </Container>

      {/* Mobile nav — CSS-only checkbox trick */}
      <input type="checkbox" id="mobile-menu" className="hidden peer" aria-hidden="true" tabIndex={-1} />
      <div className="hidden peer-checked:block lg:hidden border-t border-brand-border bg-white">
        <Container>
          <nav className="py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_GUIDE_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-sm font-medium text-brand-text hover:bg-slate-50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  )
}
