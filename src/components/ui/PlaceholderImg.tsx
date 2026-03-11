'use client'

import { clsx } from 'clsx'

interface PlaceholderImgProps {
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  label?: string
  aspectRatio?: string
}

/**
 * Template placeholder for image slots.
 *
 * PRODUCTION SWAP: Replace this component with Next.js <Image> from 'next/image'.
 * Each usage in the codebase has a comment above it specifying:
 *  - The real filename target (e.g. hero-banner.jpg)
 *  - Dimensions
 *  - Content description for the photographer/art director
 *
 * Example replacement:
 *   import Image from 'next/image'
 *   <Image src="/images/hero-banner.webp" alt="..." fill className="object-cover" />
 */
export function PlaceholderImg({
  alt,
  width,
  height,
  fill = false,
  className,
  label,
  aspectRatio,
}: PlaceholderImgProps) {
  const computedAspect =
    aspectRatio ?? (width && height ? `${width}/${height}` : '16/9')

  return (
    <div
      className={clsx(
        'relative overflow-hidden',
        fill ? 'absolute inset-0' : '',
        className
      )}
      style={!fill ? { aspectRatio: computedAspect } : undefined}
      role="img"
      aria-label={alt}
    >
      {/* Warm gradient placeholder background */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        style={{
          background:
            'linear-gradient(135deg, #EDE5CC 0%, #FAF5E8 40%, #D4921A11 100%)',
        }}
      >
        {/* Subtle diamond pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 4 L36 20 L20 36 L4 20 Z' fill='none' stroke='%231A4A3A' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Camera icon */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1A4A3A"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-25 mb-3 relative z-10"
          aria-hidden="true"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>

        <p className="relative z-10 font-body text-xs text-deepJade/50 max-w-[220px] leading-snug">
          {label || alt}
        </p>

        {width && height && (
          <p className="relative z-10 font-mono text-[10px] text-deepJade/30 mt-1.5">
            {width} × {height}px
          </p>
        )}
      </div>
    </div>
  )
}
