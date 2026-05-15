import type { Metadata } from 'next'
import { GuidePageTemplate } from '@/components/templates/GuidePageTemplate'
import { DriverDownloadFlow } from '@/components/sections/DriverDownloadFlow'
import { buildGuideMetadata } from '@/lib/seo'
import { GUIDE_MAP } from '@/lib/content/guides'

const guide = GUIDE_MAP['printer-driver-installation']!

export const metadata: Metadata = buildGuideMetadata(guide)

function DriverFlowSection() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-surface border-y border-brand-border py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          Driver Detection Tool
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-3">
          Find &amp; Install Your Printer Driver
        </h2>
        <p className="text-brand-muted text-base max-w-xl mx-auto">
          Select your brand and enter your printer model to automatically locate the correct driver.
          Independent support — not affiliated with any manufacturer.
        </p>
      </div>
      <DriverDownloadFlow />
    </div>
  )
}

export default function PrinterDriverInstallationPage() {
  return <GuidePageTemplate guide={guide} topContent={<DriverFlowSection />} />
}
