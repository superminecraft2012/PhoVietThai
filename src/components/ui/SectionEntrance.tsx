'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { clsx } from 'clsx'

interface SectionEntranceProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

/**
 * Scroll-triggered section entrance animation.
 * opacity: 0 → 1, translateY: 20px → 0, 600ms ease-out.
 * Uses IntersectionObserver via Framer Motion's useInView.
 */
export function SectionEntrance({
  children,
  className,
  delay = 0,
  y = 20,
  once = true,
}: SectionEntranceProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      className={clsx(className)}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Staggered container — children animate in with sequential delay.
 */
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      className={clsx(className)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Individual stagger child item — used inside StaggerContainer.
 */
interface StaggerItemProps {
  children: React.ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      className={clsx(className)}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.97 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
