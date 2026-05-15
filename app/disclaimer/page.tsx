import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { buildMetadata } from '@/lib/seo'
import { SITE_META } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: `Disclaimer | ${SITE_META.siteName}`,
  description:
    'GuidingPrinter is an independent third-party printer assistance service, not affiliated with HP, Canon, Epson, Brother, or any printer manufacturer.',
  canonical: '/disclaimer/',
  noIndex: false,
})

export default function DisclaimerPage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary-50 to-surface border-b border-brand-border">
        <Container>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Disclaimer' }]} />
          <div className="pb-12 md:pb-16 max-w-3xl">
            <h1 className="heading-1 mb-4">Disclaimer</h1>
            <p className="body-lg text-brand-muted">Last updated: May 2025</p>
          </div>
        </Container>
      </div>

      <Section spacing="md" className="bg-white">
        <Container size="sm">
          <div className="prose prose-slate max-w-none">

            <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
              <h2 className="text-amber-900 font-bold text-base mb-2">Important Disclosure</h2>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>GuidingPrinter (guidingprinter.com)</strong> is an independent third-party printer assistance service.
                We are <strong>NOT affiliated with, authorized by, endorsed by, or sponsored by</strong> HP, Canon, Epson, Brother,
                or any printer manufacturer. Brand names and trademarks are used only for identification purposes.
              </p>
              <p className="text-amber-800 text-sm leading-relaxed mt-2">
                All brand logos shown are the property of their respective owners and are displayed for identification purposes only.
                We do not claim any official association.
              </p>
            </div>

            <h2>Independent Third-Party Service</h2>
            <p>
              {SITE_META.siteName} is an independent printer support and assistance service. We are not affiliated with,
              authorized by, endorsed by, or in any way officially connected with HP Inc., Canon Inc., Seiko Epson Corporation,
              Brother Industries, Lexmark International, Samsung Electronics, or any other printer manufacturer.
            </p>
            <p>
              All brand names, product names, and trademarks are the property of their respective owners. References to brand
              names are made solely for informational purposes to identify compatible products and services.
            </p>

            <h2>Services We Provide</h2>
            <p>We provide independent third-party technical assistance for:</p>
            <ul>
              <li>Printer Offline Issues</li>
              <li>WiFi &amp; Network Connectivity Problems</li>
              <li>Driver Installation &amp; Updates</li>
              <li>Paper Jams &amp; Printing Errors</li>
              <li>Slow or Stuck Print Jobs and others</li>
            </ul>
            <p>
              All services offered are <strong>optional, paid, third-party assistance services</strong>. Users are not obligated
              to use our paid services and may resolve issues independently or by contacting their manufacturer directly.
            </p>

            <h2>Policies &amp; Compliance</h2>
            <p>
              We follow Google Ads and regional compliance policies to ensure responsible service promotion. Our advertising
              practices are designed to be transparent, accurate, and non-deceptive.
            </p>

            <h2>Informational Content</h2>
            <p>
              Printer setup guides, troubleshooting instructions, and technical information on this site are provided for
              general informational and educational purposes only. They are based on publicly available information and
              general technical knowledge.
            </p>
            <p>
              Printer models, software interfaces, and operating procedures change over time. Always verify current
              instructions against your printer&apos;s official manual or the manufacturer&apos;s official support website.
            </p>

            <h2>Driver Downloads</h2>
            <p>
              We recommend downloading printer drivers only from the official manufacturer websites. {SITE_META.siteName} does
              not host or distribute printer drivers. Any links to driver downloads point to official manufacturer support pages.
            </p>

            <h2>No Professional Advice</h2>
            <p>
              The information on this site does not constitute professional technical support. For warranty repairs, hardware
              failures, or complex technical issues, contact your printer manufacturer&apos;s official support channels directly.
            </p>

            <h2>Accuracy of Information</h2>
            <p>
              While we strive to provide accurate and up-to-date information, we make no representations or warranties
              regarding the completeness, accuracy, or reliability of any content on this site. Printer setup procedures
              may vary by model, firmware version, and operating system.
            </p>

            <h2>Affiliate Disclosure</h2>
            <p>
              This site may contain affiliate links. We may earn a commission if you purchase products through these links,
              at no additional cost to you. This does not influence our content or recommendations.
            </p>

            <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-5 mt-6">
              <h3 className="text-slate-800 font-bold text-sm mb-2">Summary of Disclaimers</h3>
              <ul className="text-sm text-slate-700 space-y-1.5 list-none p-0">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  We are an independent third-party service provider and are not affiliated with, authorized by, or endorsed by any printer manufacturer.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  All services offered are optional, paid, third-party assistance services.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  We follow Google Ads and regional compliance policies to ensure responsible service promotion.
                </li>
              </ul>
            </div>

            <h2>Contact</h2>
            <p>
              Questions about this disclaimer? Contact us at{' '}
              <a href={`mailto:${SITE_META.email}`}>{SITE_META.email}</a>.
            </p>
          </div>
        </Container>
      </Section>
    </PageLayout>
  )
}
