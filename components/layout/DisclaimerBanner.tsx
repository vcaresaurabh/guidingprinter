import { Container } from './Container'

export function DisclaimerBanner() {
  return (
    <section className="bg-amber-50 border-t border-amber-200 py-6" aria-label="Important disclosure">
      <Container size="md">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center mt-0.5">
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-amber-900 mb-1 uppercase tracking-wide">Important Disclosure</p>
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>GuidingPrinter (guidingprinter.com)</strong> is an independent third-party printer assistance service.
              We are <strong>NOT affiliated with, authorized by, endorsed by, or sponsored by</strong> HP, Canon, Epson, Brother,
              or any printer manufacturer. All brand names and logos are property of their respective owners and are used
              for identification purposes only. All services offered are optional, paid, third-party assistance services.{' '}
              <a href="/disclaimer/" className="underline hover:text-amber-900 font-medium">Full Disclaimer</a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
