import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedLinks } from '@/components/ui/RelatedLinks'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import {
  getRelatedTroubleshootingLinks,
  getTroubleshootingBrandLinks,
} from '@/lib/content/troubleshooting'
import { buildHowToSchema, buildTechArticleSchema } from '@/lib/schema'
import type { TroubleshootingData } from '@/types'

interface TroubleshootingPageTemplateProps {
  issue: TroubleshootingData
}

function SymptomIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  )
}

function LightbulbIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

export function TroubleshootingPageTemplate({ issue }: TroubleshootingPageTemplateProps) {
  const relatedLinks = getRelatedTroubleshootingLinks(issue.slug)
  const brandLinks = getTroubleshootingBrandLinks(issue.slug)

  const howToSchema = buildHowToSchema({
    name: issue.headline,
    description: issue.metaDescription,
    steps: issue.steps,
  })

  const articleSchema = buildTechArticleSchema({
    headline: issue.headline,
    description: issue.metaDescription,
    slug: issue.slug,
    datePublished: issue.lastUpdated,
    dateModified: issue.lastUpdated,
  })

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
      <div className="bg-gradient-to-b from-amber-50 to-surface border-b border-brand-border">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Printer Troubleshooting', href: '/printer-troubleshooting/' },
              { label: issue.name },
            ]}
          />

          <div className="pb-12 md:pb-16 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-amber-100 text-amber-800">
                Troubleshooting
              </span>
              <span className="text-sm text-brand-muted">{issue.readTime}</span>
              <time className="text-sm text-brand-muted" dateTime={issue.lastUpdated}>
                Updated {new Date(issue.lastUpdated).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </time>
            </div>

            <h1 className="heading-1 mb-4">{issue.headline}</h1>
            <p className="body-lg text-brand-muted mb-8 max-w-2xl">{issue.intro}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="#steps" variant="primary" size="lg">
                View Fix Steps
              </Button>
              <Button href="#faq" variant="outline" size="lg">
                Jump to FAQ
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Symptoms checklist */}
      <Section spacing="sm" className="bg-white border-b border-brand-border">
        <Container size="md">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-base font-semibold text-amber-900 mb-4">
              Does this describe your problem?
            </h2>
            <ul className="space-y-2.5">
              {issue.symptoms.map((symptom, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-amber-800">
                  <span className="text-amber-600 mt-0.5">
                    <SymptomIcon />
                  </span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Quick Fix banner */}
      <Section spacing="sm" className="bg-surface border-b border-brand-border">
        <Container size="md">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 flex gap-4">
            <div className="flex-shrink-0 text-emerald-600 mt-0.5">
              <LightbulbIcon />
            </div>
            <div>
              <p className="text-sm font-semibold text-emerald-900 mb-1">Try this first</p>
              <p className="text-sm text-emerald-800 leading-relaxed">{issue.quickFix}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Fix steps */}
      <Section id="steps" spacing="md" className="bg-white">
        <Container size="md">
          <h2 className="heading-2 mb-2">Step-by-Step Fix</h2>
          <p className="body-base text-brand-muted mb-8">
            Follow each step in order. Most issues are resolved within the first three steps.
          </p>

          <ol className="space-y-4">
            {issue.steps.map((step, index) => (
              <li
                key={index}
                className="flex gap-5 p-5 bg-surface rounded-xl border border-brand-border"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text mb-1.5">{step.name}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed whitespace-pre-line">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Advanced steps (conditional) */}
      {issue.advancedSteps && issue.advancedSteps.length > 0 && (
        <Section spacing="md" className="bg-surface border-y border-brand-border">
          <Container size="md">
            <h2 className="heading-3 mb-2">Advanced Troubleshooting</h2>
            <p className="body-base text-brand-muted mb-8">
              If the steps above did not resolve the issue, try these advanced fixes.
            </p>

            <ol className="space-y-4">
              {issue.advancedSteps.map((step, index) => (
                <li
                  key={index}
                  className="flex gap-5 p-5 bg-white rounded-xl border border-brand-border"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary-dark text-white flex items-center justify-center font-bold text-sm">
                    {issue.steps.length + index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-1.5">{step.name}</h3>
                    <p className="text-sm text-brand-muted leading-relaxed whitespace-pre-line">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      {issue.faqs.length > 0 && (
        <FAQ
          id="faq"
          title="Frequently Asked Questions"
          subtitle={`Common questions about ${issue.name.toLowerCase()}.`}
          faqs={issue.faqs}
        />
      )}

      {/* Related troubleshooting issues */}
      {relatedLinks.length > 0 && (
        <Section spacing="sm" className="bg-white border-t border-brand-border">
          <Container>
            <RelatedLinks
              title="Related Troubleshooting Guides"
              links={relatedLinks}
              columns={3}
              variant="card"
            />
          </Container>
        </Section>
      )}

      {/* Brand-specific guides */}
      {brandLinks.length > 0 && (
        <Section spacing="sm" className="bg-surface border-y border-brand-border">
          <Container>
            <RelatedLinks
              title="Brand-Specific Setup Guides"
              links={brandLinks}
              columns={2}
              variant="card"
            />
          </Container>
        </Section>
      )}

      <CTA
        headline="Still Having Trouble?"
        subtext="Browse our full troubleshooting library for step-by-step fixes covering all printer brands and issues."
        primaryButton={{ text: 'All Troubleshooting Guides', href: '/printer-troubleshooting/' }}
        secondaryButton={{ text: 'Browse Setup Guides', href: '/printer-setup/' }}
      />
    </PageLayout>
  )
}
