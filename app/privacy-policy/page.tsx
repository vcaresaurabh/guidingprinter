import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { buildMetadata } from '@/lib/seo'
import { SITE_META } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: `Privacy Policy | ${SITE_META.siteName}`,
  description: 'Privacy Policy for GuidingPrinter — how we collect, use, and protect your information.',
  canonical: '/privacy-policy/',
  noIndex: false,
})

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary-50 to-surface border-b border-brand-border">
        <Container>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
          <div className="pb-12 md:pb-16 max-w-3xl">
            <h1 className="heading-1 mb-4">Privacy Policy</h1>
            <p className="body-lg text-brand-muted">Last updated: January 2025</p>
          </div>
        </Container>
      </div>

      <Section spacing="md" className="bg-white">
        <Container size="sm">
          <div className="prose prose-slate max-w-none">
            <h2>Information We Collect</h2>
            <p>
              {SITE_META.siteName} is an informational website providing free printer setup guides. We collect limited
              information to operate and improve our services:
            </p>
            <ul>
              <li><strong>Usage Data:</strong> Pages visited, time spent, referring pages — collected via analytics tools.</li>
              <li><strong>Contact Information:</strong> Email address if you contact us directly. We do not sell or share this information.</li>
              <li><strong>Cookies:</strong> We use cookies for analytics and to improve user experience. You can disable cookies in your browser settings.</li>
            </ul>

            <h2>How We Use Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Understand which guides are most useful to visitors</li>
              <li>Improve site content and navigation</li>
              <li>Respond to support inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party analytics services (such as Google Analytics) that collect usage data independently. These services have their own privacy policies.
            </p>
            <p>
              We are not affiliated with HP, Canon, Epson, Brother, or any other printer manufacturer. Links to manufacturer websites are provided for informational purposes only.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain analytics data for up to 26 months. Contact form submissions are retained only as long as necessary to respond to your inquiry.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal data we hold about you. Contact us at{' '}
              <a href={`mailto:${SITE_META.email}`}>{SITE_META.email}</a> for any privacy-related requests.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated date.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy-related questions, contact us at{' '}
              <a href={`mailto:${SITE_META.email}`}>{SITE_META.email}</a>.
            </p>
          </div>
        </Container>
      </Section>
    </PageLayout>
  )
}
