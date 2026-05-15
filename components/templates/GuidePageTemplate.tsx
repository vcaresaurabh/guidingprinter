import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedLinks } from '@/components/ui/RelatedLinks'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { getRelatedGuideLinks, getGuideBrandLinks } from '@/lib/content/links'
import { buildHowToSchema, buildTechArticleSchema } from '@/lib/schema'
import type { GuideData } from '@/types'

interface GuidePageTemplateProps {
  guide: GuideData
  topContent?: React.ReactNode
}

const CATEGORY_COLORS: Record<string, string> = {
  'Setup': 'bg-blue-100 text-blue-800',
  'Wireless Setup': 'bg-indigo-100 text-indigo-800',
  'Driver Installation': 'bg-purple-100 text-purple-800',
  'Troubleshooting': 'bg-amber-100 text-amber-800',
}

export function GuidePageTemplate({ guide, topContent }: GuidePageTemplateProps) {
  const relatedGuideLinks = getRelatedGuideLinks(guide.slug)
  const brandLinks = getGuideBrandLinks(guide.slug)

  const howToSchema = buildHowToSchema({
    name: guide.headline,
    description: guide.metaDescription,
    steps: guide.steps,
  })

  const articleSchema = buildTechArticleSchema({
    headline: guide.headline,
    description: guide.metaDescription,
    slug: guide.slug,
    datePublished: guide.lastUpdated,
    dateModified: guide.lastUpdated,
  })

  const categoryColor = CATEGORY_COLORS[guide.category] ?? 'bg-primary-100 text-primary-dark'

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Page header */}
      <div className="bg-gradient-to-b from-primary-50 to-surface border-b border-brand-border">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: guide.name },
            ]}
          />

          <div className="pb-12 md:pb-16 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${categoryColor}`}>
                {guide.category}
              </span>
              <span className="text-sm text-brand-muted">{guide.readTime}</span>
              <time
                className="text-sm text-brand-muted"
                dateTime={guide.lastUpdated}
              >
                Updated {new Date(guide.lastUpdated).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </time>
            </div>

            <h1 className="heading-1 mb-4">{guide.headline}</h1>
            <p className="body-lg text-brand-muted mb-8 max-w-2xl">{guide.intro}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="#steps" variant="primary" size="lg">
                View Step-by-Step Guide
              </Button>
              <Button href="#faq" variant="outline" size="lg">
                Jump to FAQ
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Optional injected content (e.g. DriverDownloadFlow on driver page) */}
      {topContent}

      {/* Steps */}
      <Section id="steps" spacing="md" className="bg-white">
        <Container size="md">
          <h2 className="heading-2 mb-2">Step-by-Step Instructions</h2>
          <p className="body-base mb-10">
            Follow each step in order for the best results.
          </p>

          <ol className="space-y-6">
            {guide.steps.map((step, index) => (
              <li
                key={index}
                className="flex gap-5 p-6 bg-surface rounded-xl border border-brand-border"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text mb-2">{step.name}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Brand-specific links */}
      {brandLinks.length > 0 && (
        <Section spacing="sm" className="bg-surface border-y border-brand-border">
          <Container>
            <RelatedLinks
              title="Brand-Specific Guides"
              links={brandLinks}
              columns={2}
              variant="card"
            />
          </Container>
        </Section>
      )}

      {/* FAQ */}
      {guide.faqs.length > 0 && (
        <FAQ
          id="faq"
          title="Frequently Asked Questions"
          subtitle={`Common questions about ${guide.name.toLowerCase()}.`}
          faqs={guide.faqs}
        />
      )}

      {/* Related guides */}
      {relatedGuideLinks.length > 0 && (
        <Section spacing="sm" className="bg-white border-t border-brand-border">
          <Container>
            <RelatedLinks
              title="Related Setup Guides"
              links={relatedGuideLinks}
              columns={3}
              variant="card"
            />
          </Container>
        </Section>
      )}

      <CTA
        headline="Need More Help?"
        subtext="Browse our complete library of free printer setup guides and troubleshooting articles."
        primaryButton={{ text: 'All Printer Guides', href: '/printer-setup/' }}
        secondaryButton={{ text: 'Contact Support', href: '/contact/' }}
      />
    </PageLayout>
  )
}
