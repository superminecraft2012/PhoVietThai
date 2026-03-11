import { Metadata } from 'next'
import Image from 'next/image'
import { PlaceholderImg } from '@/components/ui/PlaceholderImg'
import { PatternBorder } from '@/components/ui/PatternBorder'
import { GlobeLightGlow } from '@/components/ui/GlobeLightGlow'
import { SectionEntrance, StaggerContainer, StaggerItem } from '@/components/ui/SectionEntrance'

export const metadata: Metadata = {
  title: 'Order Online',
  description:
    'Order Pho Viet Thai online via our direct ordering system. Delivery and pickup available in Lakewood, WA.',
}

export default function OrderPage() {
  return (
    <>
      <OrderHero />
      <OrderOptions />
      <FeaturedForDelivery />
      <DeliveryNote />
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   HERO — Deep jade, globe glows, large display type
   ───────────────────────────────────────────────────────────────────────────── */
function OrderHero() {
  return (
    <section
      className="pt-36 pb-20 bg-deepJade texture-woven relative overflow-hidden"
      aria-label="Order page hero"
    >
      <GlobeLightGlow size={700} intensity="medium" className="top-0 left-1/3 -translate-x-1/2" />
      <GlobeLightGlow size={400} intensity="subtle" className="bottom-0 right-1/4" />

      <div className="container-site relative z-10">
        <SectionEntrance>
          <p className="font-body text-xs font-semibold tracking-widest text-turmericGold/70 uppercase mb-4">
            Pho Viet Thai
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-warmIvory font-semibold leading-tight mb-4">
            Order Online
          </h1>
          <span className="block w-12 h-0.5 bg-turmericGold mt-4 mb-6" />
          <p className="font-display italic text-lg sm:text-xl text-warmIvory/65 max-w-lg leading-relaxed">
            Fresh food delivered to your door — or ready for pickup.
          </p>
        </SectionEntrance>
      </div>

      <PatternBorder variant="gold" className="absolute bottom-0 left-0 right-0" />
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   ORDER OPTIONS — Three platform cards
   ───────────────────────────────────────────────────────────────────────────── */
function OrderOptions() {
  const options = [
    {
      id: 'doordash',
      platform: 'Order Online',
      type: 'Direct Ordering',
      detail: 'Order straight from us for pickup or delivery through our online ordering partner.',
      cta: 'Order Now',
      href: 'https://phovietthai.orderfood.express/?menus=menu',
      accent: 'bg-lacquerRed',
      ctaClass: 'btn-primary',
    },
    {
      id: 'direct',
      platform: 'Phone Orders',
      type: '(253) 267-1637',
      detail:
        'Prefer to call? Phone in your order and we\'ll have it ready for pickup.',
      cta: 'Call to Order',
      href: 'tel:+12532671637',
      accent: 'bg-deepJade',
      ctaClass: 'btn-outline',
    },
  ]

  return (
    <section
      className="py-[var(--section-pad-y)] bg-warmIvory"
      aria-labelledby="order-options-heading"
    >
      <div className="container-site">
        <SectionEntrance>
          <h2
            id="order-options-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-richCharcoal mb-2"
          >
            Choose how you want it.
          </h2>
          <span className="block w-12 h-0.5 bg-turmericGold mt-3 mb-12" />
        </SectionEntrance>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map(({ id, platform, type, detail, cta, href, accent, ctaClass }) => (
            <StaggerItem key={id}>
              <div className="group flex flex-col h-full bg-softCream border border-warmIvory-dark hover:border-turmericGold transition-all duration-200 overflow-hidden">
                {/* Color accent top bar */}
                <div className={`h-1 w-full ${accent}`} />

                <div className="p-7 flex flex-col flex-1">
                  <div className="mb-6">
                    <h3 className="font-display text-2xl text-richCharcoal mb-1">
                      {platform}
                    </h3>
                    <p className="font-body text-xs font-semibold tracking-wider text-richCharcoal/40 uppercase">
                      {type}
                    </p>
                  </div>

                  <p className="font-body text-sm text-richCharcoal/65 leading-relaxed mb-8 flex-1">
                    {detail}
                  </p>

                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${ctaClass} text-sm text-center w-full py-3.5`}
                  >
                    {cta}
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   FEATURED FOR DELIVERY — Dishes that travel well
   ───────────────────────────────────────────────────────────────────────────── */
function FeaturedForDelivery() {
  const dishes = [
    {
      name: 'Combination Pho',
      description:
        'House Special Pho with all the beef cuts. We pack the broth separately to keep it piping hot and your noodles from going soft.',
      packaging: 'Broth packaged separately to keep fresh.',
      price: '$13.95',
      imagePlaceholder: {
        label: 'House Special Pho for delivery — bowl with beef and noodles — 600×480px',
        width: 600,
        height: 480,
      },
      imageSrc: '/images/photo5.jpg',
    },
    {
      name: 'Garlic & Pepper Wings',
      description:
        'Super crispy breaded wings with garlic and pepper. They travel well — still crispy when you open the box.',
      packaging: 'Sauce packaged on the side.',
      price: '$8.95',
      imagePlaceholder: {
        label: 'Garlic Pepper Wings for delivery — close-up crispy — 600×480px',
        width: 600,
        height: 480,
      },
      imageSrc: '/images/photo3.jpg',
    },
    {
      name: 'Pad Thai',
      description:
        'Stir-fried rice noodles with egg, bean sprouts, and your choice of protein. A solid delivery order — holds up well and reheats great.',
      packaging: 'Peanuts and green onion packaged separately.',
      price: '$15.95',
      imagePlaceholder: {
        label: 'Pad Thai for delivery — plated with lime wedge — 600×480px',
        width: 600,
        height: 480,
      },
      imageSrc: '/images/photo2.jpg',
    },
  ]

  return (
    <section
      className="py-[var(--section-pad-y)] bg-softCream relative overflow-hidden"
      aria-labelledby="delivery-dishes-heading"
    >
      <div className="container-site">
        <SectionEntrance>
          <h2
            id="delivery-dishes-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-richCharcoal mb-2"
          >
            Great for delivery.
          </h2>
          <span className="block w-12 h-0.5 bg-turmericGold mt-3 mb-3" />
          <p className="font-body text-richCharcoal/60 text-sm mb-12 leading-relaxed max-w-lg">
            These travel well. We package them to arrive the way they should.
          </p>
        </SectionEntrance>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dishes.map(({ name, description, packaging, price, imagePlaceholder, imageSrc }) => (
            <StaggerItem key={name}>
              <article className="group bg-warmIvory overflow-hidden">
                <div className="relative overflow-hidden">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={name}
                      width={imagePlaceholder.width}
                      height={imagePlaceholder.height}
                      className="w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <PlaceholderImg
                      alt={name}
                      width={imagePlaceholder.width}
                      height={imagePlaceholder.height}
                      label={imagePlaceholder.label}
                      className="w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  {/* Warm overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        'radial-gradient(ellipse at 50% 60%, rgba(181, 35, 26, 0.12) 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-lg text-richCharcoal leading-snug">{name}</h3>
                    <span className="font-body font-semibold text-turmericGold text-sm shrink-0">
                      {price}
                    </span>
                  </div>

                  <p className="font-body text-xs text-richCharcoal/60 leading-relaxed mb-3">
                    {description}
                  </p>

                  {/* Packaging note */}
                  <div className="flex items-start gap-2 bg-softCream px-3 py-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D4921A"
                      strokeWidth="2"
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <p className="font-body text-xs text-richCharcoal/55">{packaging}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   DELIVERY NOTE — Honest local info
   ───────────────────────────────────────────────────────────────────────────── */
function DeliveryNote() {
  return (
    <section
      className="py-16 bg-deepJade texture-woven relative overflow-hidden"
      aria-label="Delivery area information"
    >
      <PatternBorder variant="gold" className="absolute top-0 left-0 right-0" />
      <GlobeLightGlow size={500} intensity="subtle" className="top-0 right-1/4" />

      <div className="container-site relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <SectionEntrance>
            <h2 className="font-display text-2xl sm:text-3xl text-warmIvory mb-4">
              Delivery in Lakewood and surrounding areas.
            </h2>
            <p className="font-body text-sm text-warmIvory/60 leading-relaxed mb-8">
              We deliver through DoorDash and Uber Eats across Lakewood, parts of Tacoma,
              and surrounding neighborhoods. Delivery zones depend on the platform — check
              your address at checkout. For pickup, we&apos;re at{' '}
              <span className="text-warmIvory/80">3615 Steilacoom Blvd SW, Suite 102</span>,
              open daily from 11 AM to 11 PM.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+12532671637"
                className="btn-outline-ivory text-sm px-8 py-3.5"
              >
                Call to Order: (253) 267-1637
              </a>
              <a
                href="https://phovietthai.orderfood.express/?menus=menu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-8 py-3.5"
              >
                Order Online Now
              </a>
            </div>
          </SectionEntrance>
        </div>
      </div>
    </section>
  )
}
