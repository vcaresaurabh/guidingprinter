import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

const brands = [
  { name: 'HP', initial: 'HP', bgClass: 'bg-blue-600', href: '/driver-download/?brand=hp' },
  { name: 'Canon', initial: 'Ca', bgClass: 'bg-red-600', href: '/driver-download/?brand=canon' },
  { name: 'Epson', initial: 'Ep', bgClass: 'bg-indigo-600', href: '/driver-download/?brand=epson' },
  { name: 'Brother', initial: 'Br', bgClass: 'bg-emerald-600', href: '/driver-download/?brand=brother' },
  { name: 'Lexmark', initial: 'Lx', bgClass: 'bg-amber-600', href: '/driver-download/?brand=lexmark' },
  { name: 'Samsung', initial: 'Sa', bgClass: 'bg-slate-700', href: '/driver-download/?brand=samsung' },
]

export function Brands() {
  return (
    <Section spacing="sm" className="bg-white border-b border-brand-border">
      <Container>
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-3">
            Compatible Brands
          </p>
          <h2 className="heading-2 mb-3">Setup Guides for All Major Brands</h2>
          <p className="body-base max-w-xl mx-auto">
            Find detailed setup and troubleshooting guides for every major printer manufacturer.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              className="group flex flex-col items-center gap-3 p-5 bg-surface hover:bg-white rounded-xl border border-brand-border hover:border-primary hover:shadow-card-hover transition-all duration-200 text-center"
            >
              <div
                className={`w-12 h-12 rounded-full ${brand.bgClass} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
              >
                {brand.initial}
              </div>
              <div>
                <p className="font-semibold text-brand-text text-sm group-hover:text-primary transition-colors">
                  {brand.name}
                </p>
                <p className="text-xs text-brand-muted mt-0.5">Find Driver</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  )
}
