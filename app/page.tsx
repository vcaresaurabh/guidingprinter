import type { Metadata } from 'next'
import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { Brands } from '@/components/sections/Brands'
import { Services } from '@/components/sections/Services'
import { Steps } from '@/components/sections/Steps'
import { FeaturedGuides } from '@/components/sections/FeaturedGuides'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { buildMetadata } from '@/lib/seo'
import { buildOrganizationSchema, buildWebPageSchema } from '@/lib/schema'
import { SITE_META } from '@/lib/metadata'
import { SetupWizard } from '@/components/sections/SetupWizard'

export const metadata: Metadata = buildMetadata({
  title: 'Printer Setup & Troubleshooting Help — Free Step-by-Step Guides',
  description:
    'Free printer setup guides, wireless setup, driver installation & troubleshooting for HP, Canon, Epson, Brother, and more. Expert help for home and office users.',
  canonical: '/',
})

const howItWorksSteps = [
  {
    number: 1,
    title: 'Choose Your Printer Brand',
    description:
      'Select your printer brand from our comprehensive list of supported manufacturers including HP, Canon, Epson, and Brother.',
  },
  {
    number: 2,
    title: 'Find Your Model',
    description:
      'Search for your specific printer model to get the most accurate, model-specific setup instructions.',
  },
  {
    number: 3,
    title: 'Follow the Guide',
    description:
      'Follow our clear, step-by-step guide to complete setup, driver installation, or troubleshooting in minutes.',
  },
  {
    number: 4,
    title: 'Get Printing',
    description:
      'Test your printer with a test page and enjoy reliable printing from any device in your home or office.',
  },
]

const faqs = [
  {
    question: 'How do I set up a wireless printer?',
    answer:
      'To set up a wireless printer, ensure your printer is within range of your Wi-Fi router. Access the printer control panel, navigate to Network Settings or Wireless Setup Wizard, select your Wi-Fi network, and enter the password. Then install the printer software on your computer, add the printer, and print a test page to confirm the connection.',
  },
  {
    question: 'Why is my printer showing as offline?',
    answer:
      'A printer showing offline is typically caused by a communication issue between your computer and printer. Try restarting both your printer and computer first. Then check that the printer is connected to the same Wi-Fi network as your computer, and ensure no print jobs are stuck in the queue. Reinstalling the printer driver usually resolves persistent offline errors.',
  },
  {
    question: 'How do I install printer drivers?',
    answer:
      "To install printer drivers, visit the printer manufacturer's official website and download the correct driver for your printer model and operating system. Run the installer, follow the on-screen instructions, and connect your printer when prompted. Alternatively, use Windows Update or macOS System Preferences to automatically find and install compatible drivers.",
  },
  {
    question: 'How do I connect my printer to a new Wi-Fi network?',
    answer:
      "To connect your printer to a new Wi-Fi network, access the printer's control panel and navigate to Network Settings or Wireless Setup Wizard. Select your new network name (SSID), enter the Wi-Fi password, and confirm the connection. You may need to remove and re-add the printer on your computer afterward to update the connection settings.",
  },
  {
    question: 'Can I print from my phone or tablet?',
    answer:
      'Yes. Most modern printers support mobile printing. Apple devices use AirPrint — just tap the share icon and select Print. Android devices use Mopria Print Service or the manufacturer\'s app. You can also use Google Cloud Print alternatives or the printer manufacturer\'s own mobile app for wireless printing from any smartphone or tablet.',
  },
  {
    question: 'What should I do if my printer is not printing?',
    answer:
      "If your printer is not printing, first check that it has paper and ink or toner. Confirm it is powered on and connected via USB or Wi-Fi. Check the print queue on your computer for any stuck jobs and cancel them. Try printing a test page directly from the printer's control panel. If still not working, restart the print spooler service on Windows or delete and re-add the printer on your Mac.",
  },
]

export default function HomePage() {
  const orgSchema = buildOrganizationSchema()
  const pageSchema = buildWebPageSchema({
    title: 'Printer Setup & Troubleshooting Help',
    description:
      'Free step-by-step printer setup guides, wireless setup, driver installation, and troubleshooting resources.',
    url: SITE_META.baseUrl,
  })

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* 1. Hero */}
      <Hero
        title="Printer Setup & Troubleshooting Made Easy"
        subtitle="Free step-by-step guides for wireless setup, driver installation, and fixing common printer problems. Works with HP, Canon, Epson, Brother, and all major brands."
        primaryCTA={{ text: 'Browse Setup Guides', href: '/printer-setup/' }}
        secondaryCTA={{ text: 'Fix My Printer', href: '/printer-troubleshooting/' }}
        showSearch
      />

      {/* 2. Supported Brands */}
      <Brands />

      {/* 3. Interactive Setup Wizard */}
      <SetupWizard />

      {/* 4. Services Grid */}
      <Services />

      {/* 4. How It Works */}
      <Steps
        id="how-it-works"
        title="How to Get Your Printer Working"
        subtitle="Follow our simple four-step process to set up or troubleshoot your printer in minutes."
        steps={howItWorksSteps}
      />

      {/* 5. Featured Guides */}
      <FeaturedGuides />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. FAQ */}
      <FAQ
        id="faq"
        title="Common Printer Questions"
        subtitle="Answers to the most frequently asked printer setup and troubleshooting questions."
        faqs={faqs}
      />

      {/* 8. CTA Banner */}
      <CTA
        headline="Ready to Get Your Printer Working?"
        subtext="Browse our complete library of free printer setup guides, driver installation help, and troubleshooting articles."
        primaryButton={{ text: 'Browse All Guides', href: '/printer-setup/' }}
        secondaryButton={{ text: 'Contact Support', href: '/contact/' }}
      />
    </PageLayout>
  )
}
