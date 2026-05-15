import type { Metadata } from 'next'
import { BrandPageTemplate } from '@/components/templates/BrandPageTemplate'
import { buildBrandMetadata } from '@/lib/seo'
import { buildOrganizationSchema, buildServiceSchema } from '@/lib/schema'
import { BRAND_MAP } from '@/lib/content/brands'
import { SITE_META } from '@/lib/metadata'

const brand = BRAND_MAP['epson']!

export const metadata: Metadata = buildBrandMetadata(brand)

export default function EpsonPrinterSetupPage() {
  const orgSchema = buildOrganizationSchema()
  const serviceSchema = buildServiceSchema({
    name: brand.headline,
    description: brand.metaDescription,
    url: `${SITE_META.baseUrl}/${brand.pageSlug}/`,
    serviceType: 'Printer Setup Support',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BrandPageTemplate brand={brand} />
    </>
  )
}
