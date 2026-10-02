import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:scale-[0.98] shadow-soft',
  secondary:
    'bg-surface-elevated text-text-primary hover:bg-surface-hover active:scale-[0.98] border border-border',
  ghost:
    'text-text-secondary hover:text-text-primary hover:bg-surface-muted active:scale-[0.98]',
  outline:
    'border border-border-strong text-text-primary hover:border-primary-400 hover:text-primary-700 active:scale-[0.98]',
}

const sizes: Record<Size, string> = {
  sm: 'text-sm px-3.5 py-2 gap-1.5',
  md: 'text-sm px-5 py-2.5 gap-2',
  lg: 'text-base px-6 py-3 gap-2',
}

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
  ariaLabel?: string
  fullWidth?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  onClick,
  type = 'button',
  className,
  disabled,
  ariaLabel,
  fullWidth,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  )

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
