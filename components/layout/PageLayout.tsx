import { Header } from './Header'
import { Footer } from './Footer'
import { DisclaimerBanner } from './DisclaimerBanner'

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <DisclaimerBanner />
      <Footer />
    </>
  )
}
