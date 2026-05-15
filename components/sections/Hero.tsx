import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { HeroSearch } from '@/components/sections/HeroSearch'
import type { CTAConfig } from '@/types'

interface HeroProps {
  title: string
  subtitle: string
  primaryCTA: CTAConfig
  secondaryCTA?: CTAConfig
  badges?: string[]
  showSearch?: boolean
}

const defaultBadges = [
  'Free Guides',
  'Step-by-Step',
  'All Major Brands',
  'No Account Needed',
]

export function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  badges = defaultBadges,
  showSearch = false,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-surface border-b border-brand-border overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] hero-dot-grid" aria-hidden="true" />

      <Container className="relative">
        <div className="py-16 md:py-24 lg:py-28 text-center max-w-4xl mx-auto">
          {/* Trust pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-dark text-sm font-semibold mb-6">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Independent Printer Support Resource
          </div>

          <h1 className="heading-display mb-5">{title}</h1>

          <p className="body-lg text-xl max-w-2xl mx-auto mb-8 text-brand-muted">{subtitle}</p>

          {/* Search bar */}
          {showSearch && <HeroSearch />}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button href={primaryCTA.href} variant="primary" size="lg">
              {primaryCTA.text}
            </Button>
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="outline" size="lg">
                {secondaryCTA.text}
              </Button>
            )}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-brand-muted">
                <svg
                  className="w-4 h-4 text-brand-success flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
