import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

function WifiIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

function PrinterIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
  )
}

function WrenchIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
}

function ScanIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7V4h3M17 4h3v3M20 17v3h-3M7 20H4v-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
    </svg>
  )
}

const services: ServiceItem[] = [
  {
    icon: <WifiIcon />,
    title: 'Wireless Printer Setup',
    description:
      'Connect your printer to Wi-Fi on Windows, Mac, iPhone, or Android with step-by-step guidance.',
    href: '/wireless-printer-setup/',
  },
  {
    icon: <DownloadIcon />,
    title: 'Driver Installation',
    description:
      'Download and install the correct printer driver for your model and operating system version.',
    href: '/printer-driver-installation/',
  },
  {
    icon: <PrinterIcon />,
    title: 'Printer Offline Fix',
    description:
      'Fix printer showing offline errors and restore the connection between your computer and printer.',
    href: '/printer-offline/',
  },
  {
    icon: <WrenchIcon />,
    title: 'Printer Troubleshooting',
    description:
      'Diagnose and resolve common printer issues including paper jams, print quality, and connectivity.',
    href: '/printer-troubleshooting/',
  },
  {
    icon: <PhoneIcon />,
    title: 'Mobile Printing Setup',
    description:
      'Print wirelessly from your iPhone, iPad, or Android device using AirPrint or Mopria standards.',
    href: '/wireless-printer-setup/',
  },
  {
    icon: <ScanIcon />,
    title: 'Scanner Setup',
    description:
      'Set up and configure the scanner on your all-in-one printer for home or office use.',
    href: '/printer-setup/',
  },
]

export function Services() {
  return (
    <Section spacing="md" className="bg-surface">
      <Container>
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Support Services
          </p>
          <h2 className="heading-2 mb-3">Everything You Need for Your Printer</h2>
          <p className="body-base max-w-xl mx-auto">
            Comprehensive guides covering every aspect of printer setup and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group flex flex-col gap-4 p-6 bg-white rounded-xl border border-brand-border hover:border-primary hover:shadow-card-hover transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-brand-text mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">{service.description}</p>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                View Guide
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
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  )
}
