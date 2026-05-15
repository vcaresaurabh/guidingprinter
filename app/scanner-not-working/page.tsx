import type { Metadata } from 'next'
import { TroubleshootingPageTemplate } from '@/components/templates/TroubleshootingPageTemplate'
import { buildTroubleshootingMetadata } from '@/lib/seo'
import { TROUBLESHOOTING_MAP } from '@/lib/content/troubleshooting'

const issue = TROUBLESHOOTING_MAP['scanner-not-working']!

export const metadata: Metadata = buildTroubleshootingMetadata(issue)

export default function ScannerNotWorkingPage() {
  return <TroubleshootingPageTemplate issue={issue} />
}
