import type { Metadata } from 'next'
import { TroubleshootingPageTemplate } from '@/components/templates/TroubleshootingPageTemplate'
import { buildTroubleshootingMetadata } from '@/lib/seo'
import { TROUBLESHOOTING_MAP } from '@/lib/content/troubleshooting'

const issue = TROUBLESHOOTING_MAP['printer-driver-unavailable']!

export const metadata: Metadata = buildTroubleshootingMetadata(issue)

export default function PrinterDriverUnavailablePage() {
  return <TroubleshootingPageTemplate issue={issue} />
}
