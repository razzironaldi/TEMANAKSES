import { cn } from '../lib/cn'

interface ProgressBarProps {
  value: number
  max?: number
  size?: 'sm' | 'md'
  className?: string
  label?: string
}

export function ProgressBar({ value, max = 100, size = 'md', className, label }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div className={cn('w-full', className)} role="progressbar" aria-valuenow={value} aria-valuemax={max} aria-label={label}>
      <div className={cn('w-full bg-surface-muted rounded-full overflow-hidden', size === 'sm' ? 'h-1.5' : 'h-2.5')}>
        <div
          className="h-full bg-primary-500 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
