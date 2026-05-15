import type { Metadata } from 'next'
import { GuidePageTemplate } from '@/components/templates/GuidePageTemplate'
import { buildGuideMetadata } from '@/lib/seo'
import { GUIDE_MAP } from '@/lib/content/guides'

const guide = GUIDE_MAP['printer-setup']!

export const metadata: Metadata = buildGuideMetadata(guide)

export default function PrinterSetupPage() {
  return <GuidePageTemplate guide={guide} />
}
