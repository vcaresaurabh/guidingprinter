import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { RelatedLinks } from '@/components/ui/RelatedLinks'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { getRelatedBrandLinks } from '@/lib/content/links'
import type { BrandData } from '@/types'

interface BrandPageTemplateProps {
  brand: BrandData
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-brand-success flex-shrink-0 mt-0.5"
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
  )
}

function WifiIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  )
}

function DriverIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  )
}

export function BrandPageTemplate({ brand }: BrandPageTemplateProps) {
  const relatedBrandLinks = getRelatedBrandLinks(brand.slug)

  const guideLinks = brand.guides.map((g) => ({
    label: g.title,
    href: g.href,
    description: g.description,
  }))

  return (
    <PageLayout>
      {/* Breadcrumb + Page header */}
      <div className="bg-gradient-to-b from-primary-50 to-surface border-b border-brand-border">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: `${brand.name} Printer Setup` },
            ]}
          />

          <div className="pb-12 md:pb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-dark text-xs font-semibold mb-5 uppercase tracking-wide">
              {brand.name} Printer Support
            </div>

            <h1 className="heading-1 mb-4">{brand.headline}</h1>
            <p className="body-lg text-brand-muted mb-8 max-w-2xl">{brand.intro}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href={brand.guides[0]?.href ?? '/printer-setup/'} variant="primary" size="lg">
                Setup {brand.name} Printer
              </Button>
              <Button href="/printer-troubleshooting/" variant="outline" size="lg">
                Troubleshoot {brand.name}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Popular models */}
      <Section spacing="sm" className="bg-white border-b border-brand-border">
        <Container>
          <h2 className="heading-3 mb-6">Popular {brand.name} Printer Models</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {brand.popularModels.map((model) => (
              <li
                key={model}
                className="flex items-start gap-2.5 p-3.5 bg-surface rounded-lg border border-brand-border"
              >
                <CheckIcon />
                <span className="text-sm font-medium text-brand-text">{model}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Wireless setup steps */}
      {brand.wirelessSetupSteps && brand.wirelessSetupSteps.length > 0 && (
        <Section id="wireless-setup" spacing="md" className="bg-surface">
          <Container size="md">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                <WifiIcon />
              </div>
              <h2 className="heading-2">How to Connect {brand.name} Printer to Wi-Fi</h2>
            </div>
            <p className="body-base text-brand-muted mb-8 max-w-2xl">
              Follow these steps to connect your {brand.name} printer to your wireless network.
            </p>

            <ol className="space-y-4">
              {brand.wirelessSetupSteps.map((step, index) => (
                <li
                  key={index}
                  className="flex gap-5 p-5 bg-white rounded-xl border border-brand-border"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-1.5">{step.name}</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6">
              <Button href="/wireless-printer-setup/" variant="outline" size="md">
                Full Wireless Setup Guide →
              </Button>
            </div>
          </Container>
        </Section>
      )}

      {/* Driver installation steps */}
      {brand.driverInstallSteps && brand.driverInstallSteps.length > 0 && (
        <Section id="driver-installation" spacing="md" className="bg-white border-y border-brand-border">
          <Container size="md">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                <DriverIcon />
              </div>
              <h2 className="heading-2">{brand.name} Printer Driver Installation</h2>
            </div>
            <p className="body-base text-brand-muted mb-8 max-w-2xl">
              Download and install the correct {brand.name} driver for your operating system.
            </p>

            <ol className="space-y-4">
              {brand.driverInstallSteps.map((step, index) => (
                <li
                  key={index}
                  className="flex gap-5 p-5 bg-surface rounded-xl border border-brand-border"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-1.5">{step.name}</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button href="/driver-download/" variant="primary" size="md">
                Download Driver →
              </Button>
              <Button href="/printer-driver-installation/" variant="outline" size="md">
                Driver Installation Guide
              </Button>
            </div>
          </Container>
        </Section>
      )}

      {/* Common issues */}
      {brand.commonIssues && brand.commonIssues.length > 0 && (
        <Section id="common-issues" spacing="md" className="bg-surface">
          <Container>
            <h2 className="heading-2 mb-2">Common {brand.name} Printer Issues & Fixes</h2>
            <p className="body-base text-brand-muted mb-8 max-w-2xl">
              Quick solutions for the most frequently reported {brand.name} printer problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {brand.commonIssues.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-xl border border-brand-border"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 text-amber-500 mt-0.5">
                      <AlertIcon />
                    </div>
                    <h3 className="font-semibold text-brand-text">{item.issue}</h3>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed pl-8">{item.solution}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button href="/printer-troubleshooting/" variant="outline" size="md">
                Full Troubleshooting Guide →
              </Button>
            </div>
          </Container>
        </Section>
      )}

      {/* Setup guides for this brand */}
      <Section spacing="md" className="bg-white border-t border-brand-border">
        <Container>
          <div className="mb-8">
            <h2 className="heading-2 mb-2">{brand.name} Printer Setup Guides</h2>
            <p className="body-base max-w-2xl">
              Step-by-step guides to help you set up, connect, and troubleshoot your {brand.name} printer.
            </p>
          </div>
          <RelatedLinks links={guideLinks} columns={2} variant="card" />
        </Container>
      </Section>

      {/* FAQ for this brand */}
      <FAQ
        id={`${brand.slug}-faq`}
        title={`${brand.name} Printer — Frequently Asked Questions`}
        subtitle={`Common questions about setting up and troubleshooting ${brand.name} printers.`}
        faqs={brand.faqs}
      />

      {/* Related brands */}
      {relatedBrandLinks.length > 0 && (
        <Section spacing="sm" className="bg-white border-t border-brand-border">
          <Container>
            <RelatedLinks
              title="Setup Guides for Other Brands"
              links={relatedBrandLinks}
              columns={3}
              variant="card"
            />
          </Container>
        </Section>
      )}

      <CTA
        headline={`Need Help With Your ${brand.name} Printer?`}
        subtext={`Browse all ${brand.name} setup guides and troubleshooting resources.`}
        primaryButton={{ text: 'All Setup Guides', href: '/printer-setup/' }}
        secondaryButton={{ text: 'Troubleshooting Help', href: '/printer-troubleshooting/' }}
      />
    </PageLayout>
  )
}
