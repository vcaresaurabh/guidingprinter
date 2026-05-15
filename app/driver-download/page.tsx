import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { DriverDownloadFlow } from '@/components/sections/DriverDownloadFlow'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Printer Driver Download — Find & Install Your Printer Driver',
  description:
    'Find and download the correct printer driver for your model and operating system. Free driver detection for HP, Canon, Epson, Brother, Lexmark, and Samsung printers. Independent third-party support.',
  canonical: '/driver-download/',
})

export default function DriverDownloadPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary-50 to-white border-b border-brand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-dark text-xs font-semibold mb-5 uppercase tracking-wide">
            Free Driver Detection Tool
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-3">
            Find &amp; Install Your Printer Driver
          </h1>
          <p className="text-brand-muted text-base max-w-xl mx-auto mb-6">
            Enter your printer brand and model to locate the correct driver for your operating system.
            Independent third-party support — not affiliated with any printer manufacturer.
          </p>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-brand-muted">
            {[
              { icon: '🔒', label: 'Secure' },
              { icon: '✓', label: 'Free Tool' },
              { icon: '⚡', label: 'Instant Results' },
              { icon: '🖨️', label: 'All Major Brands' },
            ].map(item => (
              <span key={item.label} className="flex items-center gap-1.5">
                <span>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Flow */}
      <div className="py-12 md:py-16 bg-surface">
        <DriverDownloadFlow />
      </div>

      {/* Disclaimer section */}
      <div className="bg-white border-t border-brand-border py-10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-xs text-brand-muted leading-relaxed">
            <strong>Disclaimer:</strong> GuidingPrinter (guidingprinter.com) is an independent third-party technical support service provider.
            We are not affiliated with, authorized by, or endorsed by HP, Canon, Epson, Brother, Lexmark, Samsung, or any other
            printer manufacturer. All brand names and trademarks are the property of their respective owners. Our service
            provides independent setup assistance and technical support. Fees may apply for advanced remote support services.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
