'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

/**
 * Page transition: warm ivory curtain with lacquer red top edge
 * wipes across on navigate-out, clears on navigate-in. 300ms.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Entry sweep */}
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            background: 'var(--warm-ivory)',
            borderTop: '3px solid var(--lacquer-red)',
          }}
          initial={{ scaleX: 1, transformOrigin: 'left' }}
          animate={{ scaleX: 0, transformOrigin: 'right' }}
          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
