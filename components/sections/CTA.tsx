import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

interface CTAProps {
  headline: string
  subtext?: string
  primaryButton: { text: string; href: string }
  secondaryButton?: { text: string; href: string }
  id?: string
}

export function CTA({ headline, subtext, primaryButton, secondaryButton, id }: CTAProps) {
  return (
    <section id={id} className="bg-primary py-14 md:py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            {headline}
          </h2>
          {subtext && (
            <p className="text-base md:text-lg text-primary-100 mb-8 leading-relaxed">{subtext}</p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryButton.href} variant="secondary" size="lg">
              {primaryButton.text}
            </Button>
            {secondaryButton && (
              <Button href={secondaryButton.href} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
