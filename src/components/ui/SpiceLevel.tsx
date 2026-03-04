'use client'

import { useState } from 'react'
import { clsx } from 'clsx'

interface SpiceLevelProps {
  level?: number
  max?: number
  interactive?: boolean
  className?: string
}

/**
 * Spice level indicator — 1–5 chili icons filling left to right.
 * Filled chilies are lacquer red; empty are a muted cream.
 * Animates fill on hover over dish cards when interactive.
 */
export function SpiceLevel({
  level = 1,
  max = 5,
  interactive = false,
  className,
}: SpiceLevelProps) {
  const [hovered, setHovered] = useState<number | null>(null)
  const displayLevel = hovered !== null ? hovered + 1 : level

  return (
    <div
      className={clsx('flex items-center gap-1', className)}
      aria-label={`Spice level ${level} of ${max}`}
      role="img"
    >
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < displayLevel
        return (
          <button
            key={i}
            type="button"
            onMouseEnter={() => interactive && setHovered(i)}
            onMouseLeave={() => interactive && setHovered(null)}
            onClick={() => {}}
            className={clsx(
              'w-3.5 h-3.5 transition-all duration-150',
              interactive && 'cursor-pointer hover:scale-110',
              !interactive && 'cursor-default'
            )}
            tabIndex={interactive ? 0 : -1}
            aria-hidden={!interactive}
          >
            {/* Chili pepper SVG */}
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Stem */}
              <path
                d="M8 3 C8 3 9 1.5 10.5 1"
                stroke={filled ? '#B5231A' : '#C8B99A'}
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              {/* Chili body */}
              <path
                d="M8 4 C8 4 6.5 4.5 6 7 C5.5 9.5 6.5 12 8.5 13 C10.5 14 12 12 12 10 C12 7.5 10.5 5 8 4Z"
                fill={filled ? '#B5231A' : '#E8D9C4'}
                stroke={filled ? '#9E1C14' : '#C8B99A'}
                strokeWidth="0.6"
              />
            </svg>
          </button>
        )
      })}

      <span className="ml-1 font-body text-xs text-richCharcoal/50">
        {level}/{max}
      </span>
    </div>
  )
}
