import { clsx } from 'clsx'

interface GlobeLightGlowProps {
  size?: number
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
}

/**
 * Soft warm amber radial glow — references the globe pendant lights
 * seen throughout the restaurant interior.
 * Used behind headings and as decorative accent on dark sections.
 */
export function GlobeLightGlow({
  size = 500,
  className,
  intensity = 'medium',
}: GlobeLightGlowProps) {
  const opacityMap = {
    subtle: 0.07,
    medium: 0.12,
    strong: 0.18,
  }

  const opacity = opacityMap[intensity]

  return (
    <div
      className={clsx('absolute rounded-full pointer-events-none', className)}
      style={{
        width: size,
        height: size / 2,
        background: `radial-gradient(ellipse, rgba(212, 146, 26, ${opacity}) 0%, transparent 70%)`,
      }}
      aria-hidden="true"
    />
  )
}
