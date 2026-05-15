import type { RelatedLink } from '@/types'

interface RelatedLinksProps {
  title?: string
  links: RelatedLink[]
  columns?: 1 | 2 | 3
  variant?: 'card' | 'list'
}

const colMap: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
}

export function RelatedLinks({
  title,
  links,
  columns = 2,
  variant = 'card',
}: RelatedLinksProps) {
  if (links.length === 0) return null

  return (
    <div>
      {title && (
        <h3 className="font-semibold text-brand-text text-lg mb-4">{title}</h3>
      )}

      {variant === 'card' ? (
        <div className={`grid ${colMap[columns]} gap-3`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-brand-border hover:border-primary hover:shadow-card-hover transition-all duration-200"
            >
              <svg
                className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <div className="min-w-0">
                <p className="font-medium text-brand-text text-sm group-hover:text-primary transition-colors leading-snug">
                  {link.label}
                </p>
                {link.description && (
                  <p className="text-xs text-brand-muted mt-0.5 leading-relaxed line-clamp-2">
                    {link.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      ) : (
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group flex items-center gap-2 text-sm text-brand-muted hover:text-primary transition-colors py-1"
              >
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
