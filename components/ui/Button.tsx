import type { ButtonVariant, ButtonSize } from '@/types'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow active:scale-[0.98]',
  secondary:
    'bg-primary-100 text-primary-dark hover:bg-primary-50 border border-primary-100',
  outline:
    'bg-transparent text-primary border border-primary hover:bg-primary-50 active:scale-[0.98]',
  ghost:
    'bg-transparent text-brand-muted hover:text-brand-text hover:bg-slate-100',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm font-medium rounded',
  md: 'px-6 py-3 text-base font-semibold rounded-lg',
  lg: 'px-8 py-4 text-lg font-semibold rounded-xl',
}

const base = 'inline-flex items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
