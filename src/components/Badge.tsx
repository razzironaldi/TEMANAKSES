import { cn } from '../lib/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'accent' | 'neutral' | 'success'
  size?: 'sm' | 'md'
}

const variants = {
  primary: 'bg-primary-100 text-primary-800',
  accent: 'bg-accent-100 text-accent-800',
  neutral: 'bg-surface-muted text-text-secondary',
  success: 'bg-green-100 text-green-800',
}

export function Badge({ children, variant = 'primary', size = 'sm' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variants[variant],
        size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-sm px-3 py-1'
      )}
    >
      {children}
    </span>
  )
}
