import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

function FreeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function BrandsIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}

function TrustIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function UpdateIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
}

const features: Feature[] = [
  {
    icon: <FreeIcon />,
    title: 'Completely Free Guides',
    description:
      'Every guide is 100% free. No subscription, no account required. Just clear, actionable instructions that work.',
  },
  {
    icon: <BrandsIcon />,
    title: 'All Major Brands Covered',
    description:
      'Guides for HP, Canon, Epson, Brother, Lexmark, and more. Find the right help for your exact printer model.',
  },
  {
    icon: <TrustIcon />,
    title: 'Independent & Unbiased',
    description:
      'We are not affiliated with any printer manufacturer. Our advice is objective, accurate, and fully transparent.',
  },
  {
    icon: <UpdateIcon />,
    title: 'Regularly Updated',
    description:
      'Guides are updated to stay current with the latest driver versions, OS updates, and firmware changes.',
  },
]

export function WhyChooseUs() {
  return (
    <Section spacing="md" className="bg-primary-50 border-y border-primary-100">
      <Container>
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Us</p>
          <h2 className="heading-2 mb-3">Why Thousands Use Our Guides</h2>
          <p className="body-base max-w-xl mx-auto">
            Reliable, clear, and independent printer support resources you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-brand-border shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-brand-text mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
