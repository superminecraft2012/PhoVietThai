import { clsx } from 'clsx'

interface PatternBorderProps {
  variant?: 'red' | 'gold'
  className?: string
  position?: 'top' | 'bottom' | 'both'
}

/**
 * Decorative geometric pattern strip — diamond lattice motif.
 * Used as section dividers and transition accents.
 */
export function PatternBorder({
  variant = 'red',
  className,
  position = 'bottom',
}: PatternBorderProps) {
  const cls = variant === 'gold' ? 'pattern-strip-gold' : 'pattern-strip'

  if (position === 'both') {
    return (
      <>
        <div className={clsx(cls, 'w-full', className)} aria-hidden="true" />
        <div className={clsx(cls, 'w-full', className)} aria-hidden="true" />
      </>
    )
  }

  return <div className={clsx(cls, 'w-full', className)} aria-hidden="true" />
}
