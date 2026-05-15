import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { buildMetadata } from '@/lib/seo'
import { SITE_META } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Contact & Support Resources | GuidingPrinter',
  description:
    'Get printer setup help, driver installation guidance, and troubleshooting support. Browse our free guides or contact us directly.',
  canonical: '/contact/',
})

const supportLinks = [
  {
    title: 'Printer Setup Guide',
    description: 'Complete step-by-step setup for any printer brand',
    href: '/printer-setup/',
    icon: '🖨️',
  },
  {
    title: 'Wireless Setup Help',
    description: 'Connect your printer to Wi-Fi on any device',
    href: '/wireless-printer-setup/',
    icon: '📶',
  },
  {
    title: 'Driver Installation',
    description: 'Download and install the correct driver for your printer',
    href: '/printer-driver-installation/',
    icon: '⬇️',
  },
  {
    title: 'Printer Offline Fix',
    description: 'Resolve printer offline errors on Windows and Mac',
    href: '/printer-offline/',
    icon: '🔌',
  },
  {
    title: 'Printer Troubleshooting',
    description: 'Fix paper jams, blank pages, print quality issues',
    href: '/printer-troubleshooting/',
    icon: '🔧',
  },
]

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary-50 to-surface border-b border-brand-border">
        <Container>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
          <div className="pb-12 md:pb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-dark text-xs font-semibold mb-5 uppercase tracking-wide">
              Free Support Resource
            </div>
            <h1 className="heading-1 mb-4">Contact &amp; Support Resources</h1>
            <p className="body-lg text-brand-muted max-w-2xl">
              GuidingPrinter provides free, independent printer support guides. Browse our step-by-step resources below, or reach out via email for additional help.
            </p>
          </div>
        </Container>
      </div>

      {/* Quick access guides */}
      <Section spacing="md" className="bg-white">
        <Container>
          <h2 className="heading-2 mb-2">Find Your Answer Quickly</h2>
          <p className="body-base text-brand-muted mb-8 max-w-2xl">
            Most printer issues can be resolved using one of our free guides below.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="group flex flex-col gap-3 p-5 bg-surface rounded-xl border border-brand-border hover:border-primary hover:shadow-card-hover transition-all duration-200"
              >
                <div className="text-2xl">{link.icon}</div>
                <div>
                  <h3 className="font-semibold text-brand-text group-hover:text-primary transition-colors mb-1">
                    {link.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{link.description}</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-primary mt-auto">
                  View Guide
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact info */}
      <Section spacing="md" className="bg-surface border-t border-brand-border">
        <Container size="md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="p-6 bg-white rounded-xl border border-brand-border">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-text mb-2">Email Support</h3>
              <p className="text-sm text-brand-muted mb-4">
                Send us your printer question and we will respond within 24 hours on business days.
              </p>
              <a
                href={`mailto:${SITE_META.email}`}
                className="text-primary font-medium hover:underline text-sm"
              >
                {SITE_META.email}
              </a>
            </div>

            {/* Disclaimer */}
            <div className="p-6 bg-white rounded-xl border border-brand-border">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-text mb-2">Independent Resource</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                GuidingPrinter is an independent support resource and is not affiliated with HP, Canon, Epson, Brother, or any printer manufacturer. For manufacturer warranty support, contact the brand directly.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button href="/printer-setup/" variant="primary" size="lg">
              Browse All Free Guides
            </Button>
          </div>
        </Container>
      </Section>
    </PageLayout>
  )
}
