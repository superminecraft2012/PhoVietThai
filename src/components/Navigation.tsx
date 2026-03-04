'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'

const navLinks = [
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/order', label: 'Order Online' },
]

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-warmIvory/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        )}
      >
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          {/* Logo — restaurant name */}
          <Link
            href="/"
            className="font-display text-lg md:text-xl text-lacquerRed font-semibold tracking-tight hover:opacity-80 transition-opacity"
            aria-label="Pho Viet Thai — Home"
          >
            Pho Viet Thai
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'nav-link',
                  pathname === href || (href !== '/' && pathname.startsWith(href))
                    ? 'active'
                    : ''
                )}
              >
                {label}
              </Link>
            ))}

          <a
            href="https://phovietthai.orderfood.express/?menus=menu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-5 py-2.5 ml-2"
          >
            Order Now
          </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[60]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.span
              className="block w-6 h-0.5 bg-lacquerRed origin-center"
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-lacquerRed"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-lacquerRed origin-center"
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu — full-screen deep jade overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] mobile-menu-overlay texture-woven flex flex-col justify-center px-8"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            aria-modal="true"
            role="dialog"
            aria-label="Mobile navigation"
          >
            {/* Tropical leaf corner bleed — top right */}
            <LeafBleed corner="topRight" />
            {/* Tropical leaf corner bleed — bottom left */}
            <LeafBleed corner="bottomLeft" />

            {/* Globe glow */}
            <div
              className="absolute top-1/3 right-1/4 w-96 h-48 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(212, 146, 26, 0.08) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <nav aria-label="Mobile navigation links">
              <motion.ul
                className="flex flex-col gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                }}
              >
                {[{ href: '/', label: 'Home' }, ...navLinks].map(({ href, label }) => (
                  <motion.li
                    key={href}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <Link
                      href={href}
                      className={clsx(
                        'block font-display text-4xl font-medium leading-none',
                        pathname === href
                          ? 'text-turmericGold'
                          : 'text-warmIvory hover:text-turmericGold transition-colors duration-200'
                      )}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Contact info at bottom */}
            <motion.div
              className="mt-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="pattern-strip-gold mb-4" />
              <p className="font-body text-sm text-warmIvory/50">
                (253) 267-1637 · Open Daily 11AM–11PM
              </p>
              <p className="font-body text-xs text-warmIvory/30 mt-1">
                3615 Steilacoom Blvd SW, Lakewood, WA
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* Tropical leaf silhouette for mobile menu corners */
function LeafBleed({ corner }: { corner: 'topRight' | 'bottomLeft' }) {
  const isTopRight = corner === 'topRight'

  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        'absolute w-48 h-64 pointer-events-none opacity-[0.07]',
        isTopRight ? 'top-0 right-0' : 'bottom-0 left-0 rotate-180'
      )}
      aria-hidden="true"
    >
      {/* Large tropical leaf */}
      <path
        d="M180 20 C180 20 100 40 60 120 C30 180 40 260 80 280 C80 280 120 200 140 140 C160 80 180 20 180 20Z"
        fill="#FAF5E8"
      />
      <path
        d="M180 20 C180 20 100 40 60 120"
        stroke="#FAF5E8"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Secondary leaf */}
      <path
        d="M160 10 C160 10 140 60 120 100 C100 140 80 170 60 200"
        stroke="#FAF5E8"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      {/* Veins */}
      <path
        d="M80 280 C80 280 100 220 130 160 C155 110 180 20 180 20"
        stroke="#FAF5E8"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}
