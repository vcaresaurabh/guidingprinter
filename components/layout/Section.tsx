import type { SectionSpacing } from '@/types'

interface SectionProps {
  id?: string
  spacing?: SectionSpacing
  className?: string
  children: React.ReactNode
  as?: 'section' | 'div' | 'article'
}

const spacingMap: Record<SectionSpacing, string> = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-20',
  lg: 'py-16 md:py-28',
}

export function Section({ id, spacing = 'md', className = '', children, as: Tag = 'section' }: SectionProps) {
  return (
    <Tag id={id} className={`${spacingMap[spacing]} ${className}`}>
      {children}
    </Tag>
  )
}
