import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { buildMetadata } from '@/lib/seo'
import { SITE_META } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: `Terms of Service | ${SITE_META.siteName}`,
  description: 'Terms of Service for GuidingPrinter — the rules governing use of our free printer support guides.',
  canonical: '/terms-of-service/',
  noIndex: false,
})

export default function TermsOfServicePage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary-50 to-surface border-b border-brand-border">
        <Container>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} />
          <div className="pb-12 md:pb-16 max-w-3xl">
            <h1 className="heading-1 mb-4">Terms of Service</h1>
            <p className="body-lg text-brand-muted">Last updated: January 2025</p>
          </div>
        </Container>
      </div>

      <Section spacing="md" className="bg-white">
        <Container size="sm">
          <div className="prose prose-slate max-w-none">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using {SITE_META.siteName} (&quot;the Site&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.
            </p>

            <h2>Nature of the Service</h2>
            <p>
              {SITE_META.siteName} provides free, independent printer setup and troubleshooting guides. We are not affiliated with, endorsed by, or connected to any printer manufacturer including HP, Canon, Epson, Brother, Lexmark, or Samsung.
            </p>
            <p>
              Our guides are provided for informational and educational purposes only. Results may vary based on your specific printer model, operating system version, and network configuration.
            </p>

            <h2>Use of Content</h2>
            <p>You may use the guides on this site for personal, non-commercial purposes. You may not:</p>
            <ul>
              <li>Copy, reproduce, or republish our content without permission</li>
              <li>Use our content for commercial purposes without written consent</li>
              <li>Misrepresent the source of information from this site</li>
            </ul>

            <h2>No Warranty</h2>
            <p>
              All guides are provided &quot;as is&quot; without warranty of any kind. We make no guarantees that our instructions will resolve your specific printer issue, as printer configurations vary widely.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              {SITE_META.siteName} shall not be liable for any damages arising from your use of the information on this site, including but not limited to hardware damage, data loss, or lost productivity.
            </p>

            <h2>External Links</h2>
            <p>
              We link to manufacturer support websites for driver downloads and official support. We are not responsible for the content or availability of external websites.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms? Contact us at{' '}
              <a href={`mailto:${SITE_META.email}`}>{SITE_META.email}</a>.
            </p>
          </div>
        </Container>
      </Section>
    </PageLayout>
  )
}
