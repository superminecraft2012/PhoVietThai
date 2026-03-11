'use client'

import { useState, useEffect, useRef } from 'react'
import { clsx } from 'clsx'
import { PatternBorder } from '@/components/ui/PatternBorder'
import { SpiceLevel } from '@/components/ui/SpiceLevel'
import { SectionEntrance, StaggerContainer, StaggerItem } from '@/components/ui/SectionEntrance'
import {
  appetizers,
  pho,
  phoNote,
  vietnamese,
  thaiNoodles,
  thaiCurry,
  thaiStirFry,
  kidsMenu,
  extras,
  refreshers,
  softDrinks,
  softDrinkPrice,
  soyMilkPrice,
  drinks,
  formatPrice,
  type MenuItem,
  type MenuBadge,
} from '@/data/menu'

const categories = [
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'pho', label: 'Pho' },
  { id: 'vietnamese', label: 'Vietnamese' },
  { id: 'thai-noodles', label: 'Thai Noodles' },
  { id: 'thai-curry', label: 'Thai Curry' },
  { id: 'thai-stirfry', label: 'Thai Stir-Fry' },
  { id: 'kids', label: 'Kids' },
  { id: 'extras', label: 'Extras' },
  { id: 'drinks', label: 'Drinks' },
]

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('appetizers')
  const tabBarRef = useRef<HTMLDivElement>(null)

  // Scroll spy — update active tab based on scroll position
  useEffect(() => {
    const sections = categories.map(({ id }) => document.getElementById(id))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Scroll active tab into view in the tab bar
  useEffect(() => {
    const bar = tabBarRef.current
    const activeEl = bar?.querySelector(`[data-cat="${activeTab}"]`) as HTMLElement
    if (bar && activeEl) {
      const barCenter = bar.offsetWidth / 2
      bar.scrollTo({ left: activeEl.offsetLeft - barCenter + activeEl.offsetWidth / 2, behavior: 'smooth' })
    }
  }, [activeTab])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const headerOffset = 130
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-12 bg-warmIvory relative overflow-hidden" aria-label="Menu page hero">
        <div className="container-site relative z-10">
          <SectionEntrance>
            <p className="font-body text-xs font-semibold tracking-widest text-lacquerRed/60 uppercase mb-4">
              Pho Viet Thai
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-lacquerRed font-semibold leading-tight mb-4">
              Our Menu
            </h1>
            <span className="block w-12 h-0.5 bg-turmericGold mb-5" />
            <p className="font-body text-richCharcoal/65 text-base max-w-lg leading-relaxed">
              Vietnamese and Thai cuisine, made fresh daily. Open every day, 11 AM to 11 PM.
            </p>
          </SectionEntrance>
        </div>
        <PatternBorder className="absolute bottom-0 left-0 right-0" />
      </section>

      {/* STICKY CATEGORY TAB BAR */}
      <div
        className="sticky top-16 md:top-20 z-40 bg-warmIvory border-b border-softCream shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
        aria-label="Menu categories"
      >
        <div
          ref={tabBarRef}
          className="flex overflow-x-auto scrollbar-hide container-site gap-0"
          style={{ scrollbarWidth: 'none' }}
          role="tablist"
        >
          {categories.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              data-cat={id}
              onClick={() => scrollToSection(id)}
              className={clsx('category-tab', activeTab === id && 'active')}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* MENU SECTIONS */}
      <div className="bg-warmIvory">
        {/* APPETIZERS */}
        <MenuSection
          id="appetizers"
          title="Appetizers"
          icon={<SpringRollIcon />}
        >
          {/* MENU DATA: Verified from client-provided menu — Appetizers */}
          <MenuGrid items={appetizers} />
        </MenuSection>

        {/* PHO */}
        <MenuSection
          id="pho"
          title="Pho"
          icon={<PhoIcon />}
          description={phoNote}
          alt
        >
          {/* MENU DATA: Verified from client-provided menu — Pho */}
          <MenuGrid items={pho} />
        </MenuSection>

        {/* VIETNAMESE */}
        <MenuSection
          id="vietnamese"
          title="Vietnamese"
          icon={<RiceIcon />}
        >
          {/* MENU DATA: Verified from client-provided menu — Vietnamese */}
          <MenuGrid items={vietnamese} />
        </MenuSection>

        {/* THAI NOODLES */}
        <MenuSection
          id="thai-noodles"
          title="Thai Noodles"
          icon={<NoodleIcon />}
          description="Choice of protein: Chicken, Pork, Beef, Shrimp, Tofu, or Mixed Vegetables."
          alt
        >
          {/* MENU DATA: Verified from client-provided menu — Thai Noodles */}
          <MenuGrid items={thaiNoodles} />
        </MenuSection>

        {/* THAI CURRY */}
        <MenuSection
          id="thai-curry"
          title="Thai Curry"
          icon={<ChiliIcon />}
          description="Served over steamed jasmine rice. Spice level 0–5. Ask your server."
        >
          {/* MENU DATA: Verified from client-provided menu — Thai Curry */}
          <MenuGrid items={thaiCurry} />
        </MenuSection>

        {/* THAI STIR-FRY */}
        <MenuSection
          id="thai-stirfry"
          title="Thai Stir-Fry"
          icon={<WokIcon />}
          description="Served over steamed jasmine rice. Spice level 0–5 available."
          alt
        >
          {/* MENU DATA: Verified from client-provided menu — Thai Stir-Fry */}
          <MenuGrid items={thaiStirFry} />
        </MenuSection>

        {/* KIDS MENU */}
        <MenuSection
          id="kids"
          title="Kids Menu"
          icon={<KidIcon />}
        >
          {/* MENU DATA: Verified from client-provided menu — Kids Menu */}
          <MenuGrid items={kidsMenu} />
        </MenuSection>

        {/* EXTRAS */}
        <MenuSection
          id="extras"
          title="Extras & Add-Ons"
          icon={<PlusIcon />}
          alt
        >
          {/* MENU DATA: Verified from client-provided menu — Extras */}
          <ExtrasGrid />
        </MenuSection>

        {/* DRINKS */}
        <MenuSection
          id="drinks"
          title="Drinks"
          icon={<BubbleTeaIcon />}
        >
          {/* MENU DATA: Verified from client-provided menu — Drinks */}
          <DrinksSection />
        </MenuSection>
      </div>

      {/* Order CTA */}
      <div className="bg-softCream py-16 text-center">
        <p className="font-display text-2xl md:text-3xl text-richCharcoal mb-2">
          Ready to order?
        </p>
        <p className="font-body text-richCharcoal/60 text-sm mb-8">
          Order online for pickup or delivery, or call us at{' '}
          <a href="tel:+12532671637" className="text-lacquerRed hover:underline">
            (253) 267-1637
          </a>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://phovietthai.orderfood.express/?menus=menu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3.5 text-sm"
          >
            Order Now
          </a>
          <a
            href="https://phovietthai.orderfood.express/?menus=menu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-8 py-3.5 text-sm"
          >
            Order Online
          </a>
        </div>
      </div>
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   MENU SECTION WRAPPER
   ───────────────────────────────────────────────────────────────────────────── */
interface MenuSectionProps {
  id: string
  title: string
  icon: React.ReactNode
  description?: string
  alt?: boolean
  children: React.ReactNode
}

function MenuSection({ id, title, icon, description, alt, children }: MenuSectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'py-16 scroll-mt-[130px]',
        alt ? 'bg-softCream' : 'bg-warmIvory'
      )}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container-site">
        <SectionEntrance>
          <div className="flex items-start gap-4 mb-6">
            <div className="text-turmericGold mt-1 shrink-0">{icon}</div>
            <div>
              <h2
                id={`${id}-heading`}
                className="font-display text-3xl sm:text-4xl text-richCharcoal"
              >
                {title}
              </h2>
              <span className="block w-10 h-0.5 bg-turmericGold mt-3 mb-4" />
              {description && (
                <p className="font-body text-sm text-richCharcoal/60 leading-relaxed max-w-2xl">
                  {description}
                </p>
              )}
            </div>
          </div>
        </SectionEntrance>

        {children}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   MENU GRID — two-column desktop, single column mobile
   ───────────────────────────────────────────────────────────────────────────── */
function MenuGrid({ items }: { items: MenuItem[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
      {items.map((item, i) => (
        <StaggerItem key={`${item.code ?? ''}-${item.name}-${i}`}>
          <MenuItemRow item={item} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   MENU ITEM ROW
   ───────────────────────────────────────────────────────────────────────────── */
function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="menu-item-card">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            {item.code && (
              <span className="font-body text-xs text-richCharcoal/30 font-mono">
                {item.code}
              </span>
            )}
            <h3 className="font-display text-base text-richCharcoal leading-snug">
              {item.name}
            </h3>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 mb-1.5">
            {item.badges?.map((badge) => (
              <BadgeChip key={badge} badge={badge} />
            ))}
          </div>

          {item.description && (
            <p className="font-body text-xs text-richCharcoal/55 leading-relaxed">
              {item.description}
            </p>
          )}

          {item.spiceLevel && (
            <div className="mt-2">
              <SpiceLevel level={2} />
            </div>
          )}
        </div>

        <span className="font-body font-semibold text-turmericGold text-sm shrink-0 pt-0.5">
          {formatPrice(item.price)}
        </span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   BADGE CHIP
   ───────────────────────────────────────────────────────────────────────────── */
function BadgeChip({ badge }: { badge: MenuBadge }) {
  const config: Record<string, { label: string; className: string }> = {
    houseSpecial: { label: '★ House Special', className: 'badge-house-special' },
    houseSignature: { label: '★ House Signature', className: 'badge-house-special' },
    rawMeat: { label: '⚠ Contains Raw Meat', className: 'badge-raw-meat' },
    promoDeal: { label: '✦ Promo Deal', className: 'badge-promo' },
    vegan: { label: '♥ Vegan', className: 'badge-vegan' },
    vegetarian: { label: '♥ Vegetarian', className: 'badge-vegan' },
    large: { label: 'Large Only', className: 'badge-house-special' },
  }

  const { label, className } = config[badge] ?? { label: badge, className: 'badge-house-special' }

  return <span className={className}>{label}</span>
}

/* ─────────────────────────────────────────────────────────────────────────────
   EXTRAS — Compact two-column price list
   ───────────────────────────────────────────────────────────────────────────── */
function ExtrasGrid() {
  return (
    <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2 mt-4">
      {extras.map(({ name, price }) => (
        <StaggerItem key={name}>
          <div className="flex justify-between items-baseline py-2 border-b border-richCharcoal/[0.06]">
            <span className="font-body text-sm text-richCharcoal/80">{name}</span>
            <span className="font-body text-sm font-semibold text-turmericGold ml-3 shrink-0">
              {formatPrice(price)}
            </span>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   DRINKS SECTION — Drinks + Refreshers + Soft Drinks
   ───────────────────────────────────────────────────────────────────────────── */
function DrinksSection() {
  return (
    <div className="space-y-10">
      {/* Boba, Milk Tea, Coffee */}
      <div>
        <h3 className="font-body text-xs font-semibold tracking-widest text-richCharcoal/40 uppercase mb-4">
          Boba, Milk Tea & Coffee
        </h3>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
          {drinks.map((item, i) => (
            <StaggerItem key={i}>
              <MenuItemRow item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Refreshers */}
      <div>
        <h3 className="font-body text-xs font-semibold tracking-widest text-richCharcoal/40 uppercase mb-4">
          Refreshers
        </h3>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
          {refreshers.map((item, i) => (
            <StaggerItem key={i}>
              <MenuItemRow item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Soft Drinks */}
      <div>
        <div className="flex items-baseline gap-3 mb-4">
          <h3 className="font-body text-xs font-semibold tracking-widest text-richCharcoal/40 uppercase">
            Soft Drinks
          </h3>
          <span className="font-body text-sm font-semibold text-turmericGold">
            ${softDrinkPrice.toFixed(2)} each
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {softDrinks.map((drink) => (
            <span
              key={drink}
              className="font-body text-xs text-richCharcoal/70 bg-softCream px-3 py-1.5 rounded-none border border-richCharcoal/[0.08]"
            >
              {drink}
            </span>
          ))}
          <span className="font-body text-xs text-richCharcoal/70 bg-softCream px-3 py-1.5 border border-richCharcoal/[0.08]">
            Soy Milk · ${soyMilkPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   CATEGORY ICONS — Line-art food icons
   ───────────────────────────────────────────────────────────────────────────── */
const iconProps = {
  width: 28,
  height: 28,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

function SpringRollIcon() {
  return (
    <svg {...iconProps} viewBox="0 0 28 28">
      <ellipse cx="14" cy="14" rx="10" ry="5" transform="rotate(-30 14 14)" />
      <ellipse cx="14" cy="14" rx="10" ry="5" transform="rotate(30 14 14)" opacity="0.4" />
    </svg>
  )
}

function PhoIcon() {
  return (
    <svg {...iconProps} viewBox="0 0 28 28">
      <path d="M4 14 Q4 24 14 25 Q24 24 24 14" />
      <line x1="3" y1="14" x2="25" y2="14" />
      <path d="M10 10 Q11 7 12 7" />
      <path d="M14 9 Q15 6 16 6" />
    </svg>
  )
}

function RiceIcon() {
  return (
    <svg {...iconProps} viewBox="0 0 28 28">
      <rect x="4" y="8" width="20" height="3" rx="1" />
      <path d="M6 11 Q6 22 14 23 Q22 22 22 11" />
      <line x1="14" y1="4" x2="14" y2="8" />
    </svg>
  )
}

function NoodleIcon() {
  return (
    <svg {...iconProps} viewBox="0 0 28 28">
      <path d="M4 10 Q10 8 14 12 Q18 16 24 14" />
      <path d="M4 15 Q10 13 14 17 Q18 21 24 19" />
      <path d="M4 20 Q10 18 14 22 Q18 26 24 24" />
    </svg>
  )
}

function ChiliIcon() {
  return (
    <svg {...iconProps} viewBox="0 0 28 28">
      <path d="M14 8 C14 8 10 9 9 14 C8 19 11 23 14 24 C17 23 20 19 19 14 C18 9 14 8 14 8Z" />
      <path d="M14 8 C14 8 15.5 5 17 4" />
    </svg>
  )
}

function WokIcon() {
  return (
    <svg {...iconProps} viewBox="0 0 28 28">
      <path d="M3 13 Q4 22 14 23 Q24 22 25 13" />
      <line x1="2" y1="13" x2="26" y2="13" />
      <path d="M24 13 L26 9" />
      <path d="M9 7 L11 10" />
      <path d="M14 6 L14 10" />
      <path d="M19 7 L17 10" />
    </svg>
  )
}

function KidIcon() {
  return (
    <svg {...iconProps} viewBox="0 0 28 28">
      <circle cx="14" cy="8" r="4" />
      <path d="M6 24 C6 18 22 18 22 24" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg {...iconProps} viewBox="0 0 28 28">
      <line x1="14" y1="4" x2="14" y2="24" />
      <line x1="4" y1="14" x2="24" y2="14" />
    </svg>
  )
}

function BubbleTeaIcon() {
  return (
    <svg {...iconProps} viewBox="0 0 28 28">
      <path d="M9 6 L7 22 Q7 25 14 25 Q21 25 21 22 L19 6 Z" />
      <line x1="9" y1="6" x2="19" y2="6" />
      <line x1="14" y1="6" x2="14" y2="2" strokeWidth="2" />
      <circle cx="11" cy="19" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="14" cy="21" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="17" cy="19" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
