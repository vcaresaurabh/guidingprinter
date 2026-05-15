import type { Metadata } from 'next'
import { GuidePageTemplate } from '@/components/templates/GuidePageTemplate'
import { buildGuideMetadata } from '@/lib/seo'
import { GUIDE_MAP } from '@/lib/content/guides'

const guide = GUIDE_MAP['printer-troubleshooting']!

export const metadata: Metadata = buildGuideMetadata(guide)

export default function PrinterTroubleshootingPage() {
  return <GuidePageTemplate guide={guide} />
}
