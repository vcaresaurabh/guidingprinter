import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { buildFAQSchema } from '@/lib/schema'
import type { FAQItem } from '@/types'

interface FAQProps {
  title?: string
  subtitle?: string
  faqs: FAQItem[]
  id?: string
}

export function FAQ({ title = 'Frequently Asked Questions', subtitle, faqs, id = 'faq' }: FAQProps) {
  const schema = buildFAQSchema(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Section id={id} spacing="md" className="bg-surface">
        <Container size="md">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-3">{title}</h2>
            {subtitle && <p className="body-base max-w-xl mx-auto">{subtitle}</p>}
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-brand-border rounded-xl overflow-hidden shadow-card"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none select-none hover:bg-slate-50 transition-colors">
                  <span className="font-semibold text-brand-text text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-brand-muted transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-sm md:text-base text-brand-muted leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
