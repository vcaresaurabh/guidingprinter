import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import type { Step } from '@/types'

interface StepsProps {
  title: string
  subtitle?: string
  steps: Step[]
  id?: string
}

export function Steps({ title, subtitle, steps, id }: StepsProps) {
  return (
    <Section id={id} spacing="md" className="bg-white">
      <Container>
        <div className="text-center mb-10 md:mb-14">
          <h2 className="heading-2 mb-3">{title}</h2>
          {subtitle && <p className="body-lg max-w-xl mx-auto">{subtitle}</p>}
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="relative flex gap-4 p-6 bg-surface rounded-xl border border-brand-border shadow-card"
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-brand-text mb-1.5">{step.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line for lg screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-11 -right-4 w-8 border-t-2 border-dashed border-brand-border z-10" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
