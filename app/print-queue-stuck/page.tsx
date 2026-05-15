import type { Metadata } from 'next'
import { TroubleshootingPageTemplate } from '@/components/templates/TroubleshootingPageTemplate'
import { buildTroubleshootingMetadata } from '@/lib/seo'
import { TROUBLESHOOTING_MAP } from '@/lib/content/troubleshooting'

const issue = TROUBLESHOOTING_MAP['print-queue-stuck']!

export const metadata: Metadata = buildTroubleshootingMetadata(issue)

export default function PrintQueueStuckPage() {
  return <TroubleshootingPageTemplate issue={issue} />
}
