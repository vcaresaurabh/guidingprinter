import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

interface GuideCard {
  category: string
  title: string
  excerpt: string
  href: string
  readTime: string
}

const guides: GuideCard[] = [
  {
    category: 'Wireless Setup',
    title: 'How to Connect Your Printer to Wi-Fi: Complete Guide',
    excerpt:
      'Set up wireless printing on Windows, macOS, iPhone, and Android. Works with HP, Canon, Epson, Brother, and all major brands.',
    href: '/wireless-printer-setup/',
    readTime: '8 min read',
  },
  {
    category: 'Driver Installation',
    title: 'How to Download and Install Printer Drivers (2025)',
    excerpt:
      'Find, download, and install the correct printer driver for your model. Covers Windows 10, Windows 11, and macOS.',
    href: '/printer-driver-installation/',
    readTime: '6 min read',
  },
  {
    category: 'Troubleshooting',
    title: 'Printer Showing Offline? Here\'s How to Fix It Fast',
    excerpt:
      'Step-by-step instructions to bring your printer back online and prevent it from going offline again.',
    href: '/printer-offline/',
    readTime: '5 min read',
  },
]

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

export function FeaturedGuides() {
  return (
    <Section spacing="md" className="bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Popular Guides
            </p>
            <h2 className="heading-2">Top Printer Setup Guides</h2>
          </div>
          <a
            href="/printer-setup/"
            className="group flex-shrink-0 flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            Browse all guides
            <ArrowIcon />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <article
              key={guide.href}
              className="group flex flex-col bg-surface rounded-xl border border-brand-border hover:border-primary hover:shadow-card-hover transition-all duration-200 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-dark">
                    {guide.category}
                  </span>
                  <span className="text-xs text-brand-muted whitespace-nowrap">{guide.readTime}</span>
                </div>
                <h3 className="font-semibold text-brand-text text-base leading-snug group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed flex-1">{guide.excerpt}</p>
              </div>
              <div className="px-6 pb-5">
                <a
                  href={guide.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  Read guide
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
