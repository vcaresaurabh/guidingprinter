import type { ContainerSize } from '@/types'

interface ContainerProps {
  size?: ContainerSize
  className?: string
  children: React.ReactNode
}

const sizeMap: Record<ContainerSize, string> = {
  sm: 'max-w-container-sm',
  md: 'max-w-container-md',
  lg: 'max-w-container',
  full: 'max-w-full',
}

export function Container({ size = 'lg', className = '', children }: ContainerProps) {
  return (
    <div className={`${sizeMap[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
