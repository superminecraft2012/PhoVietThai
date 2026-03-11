import Link from 'next/link'
import Image from 'next/image'
import { PlaceholderImg } from '@/components/ui/PlaceholderImg'
import { PatternBorder } from '@/components/ui/PatternBorder'
import { GlobeLightGlow } from '@/components/ui/GlobeLightGlow'
import { SectionEntrance, StaggerContainer, StaggerItem } from '@/components/ui/SectionEntrance'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AtAGlanceStrip />
      <SignatureDishes />
      <AboutTeaser />
      <DrinksHighlight />
      <ReviewsStrip />
      <OrderCtaBanner />
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   HERO — Full viewport interior shot, warm overlay, large display type
   ───────────────────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden" aria-label="Hero">
      {/* PLACEHOLDER: Hero banner — 1440×720px — wide-angle interior shot of dining room,
          globe pendant lights visible, lush plants in background — replace with real photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Pho Viet Thai dining room interior"
          fill
          className="object-cover"
          priority
        />

        {/* Dark gradient: bottom-heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-richCharcoal/90 via-richCharcoal/40 to-richCharcoal/10" />

        {/* Lacquer red radial warm wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 35% 65%, rgba(181, 35, 26, 0.18) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Globe light glow behind heading */}
      <GlobeLightGlow
        size={700}
        intensity="medium"
        className="-top-20 left-1/4 -translate-x-1/2"
      />

      {/* Content */}
      <div className="container-site relative z-10 pb-24 pt-32 w-full">
        <div className="max-w-2xl">
          <div className="pattern-strip mb-8 w-16" />

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-warmIvory font-semibold leading-[1.05] mb-4">
            Pho Viet Thai
          </h1>

          <p className="font-display italic text-xl sm:text-2xl text-turmericGold mb-10 leading-snug">
            &quot;Two Cuisines. One Bowl.&quot;
          </p>

          <p className="font-body text-warmIvory/75 text-base md:text-lg mb-10 leading-relaxed max-w-lg">
            Vietnamese and Thai food in Lakewood, WA. Rich pho broth, pepper garlic wings,
            and the kind of meal that makes you rearrange your week to come back.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://phovietthai.orderfood.express/?menus=menu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 text-center"
            >
              Order Now
            </a>
            <Link href="/menu" className="btn-outline text-base px-8 py-4 text-center">
              View Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Pattern border at bottom of hero */}
      <PatternBorder className="absolute bottom-0 left-0 right-0 z-10" />
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   AT A GLANCE STRIP — four quick facts with line-art icons
   ───────────────────────────────────────────────────────────────────────────── */
function AtAGlanceStrip() {
  const facts = [
    {
      icon: <ClockIcon />,
      label: 'Open Daily',
      sub: '11:00 AM – 11:00 PM',
    },
    {
      icon: <DineIcon />,
      label: 'Dine-In + Takeout',
      sub: 'Delivery via DoorDash & Uber Eats',
    },
    {
      icon: <BowlIcon />,
      label: 'Vietnamese + Thai',
      sub: 'Two cuisines, one kitchen',
    },
    {
      icon: <PinIcon />,
      label: 'Lakewood, WA',
      sub: '3615 Steilacoom Blvd SW',
    },
  ]

  return (
    <section
      className="bg-softCream border-b border-warmIvory-dark"
      aria-label="Quick facts"
    >
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-warmIvory-dark">
          {facts.map(({ icon, label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center py-6 px-4 gap-2"
            >
              <div className="text-turmericGold mb-1">{icon}</div>
              <span className="font-body text-sm font-semibold text-richCharcoal">
                {label}
              </span>
              <span className="font-body text-xs text-richCharcoal/55 leading-snug">
                {sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   SIGNATURE DISHES — Asymmetric 3-card layout
   ───────────────────────────────────────────────────────────────────────────── */
function SignatureDishes() {
  return (
    <section
      className="py-[var(--section-pad-y)] bg-warmIvory overflow-hidden"
      aria-labelledby="signature-heading"
    >
      <div className="container-site">
        <SectionEntrance>
          <div className="mb-12">
            <div className="relative inline-block">
              <GlobeLightGlow size={400} intensity="subtle" className="-top-8 -left-8" />
              <h2
                id="signature-heading"
                className="font-display text-3xl sm:text-4xl md:text-5xl text-richCharcoal relative z-10"
              >
                House Favorites
              </h2>
            </div>
            <span className="heading-rule" />
            <p className="font-body text-richCharcoal/65 text-base max-w-md leading-relaxed">
              The dishes people come back for. Every week.
            </p>
          </div>
        </SectionEntrance>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">
          {/* Large card — Thai Tom Yum Pho (house signature) */}
          <StaggerItem className="md:col-span-2">
            <DishCard
              imageSrc="/images/photo2.webp"
              imagePlaceholder={{
                label: 'Thai Tom Yum Pho Noodle Soup — overhead shot, steam visible — 800×600px',
                width: 800,
                height: 520,
              }}
              name="Thai Tom Yum Pho Noodle Soup"
              description="Rich, aromatic broth with the tangy heat of Tom Yum. This is what people talk about on the way home."
              price="$15.95"
              badge="House Signature"
              large
            />
          </StaggerItem>

          {/* Two smaller cards stacked */}
          <StaggerItem className="flex flex-col gap-5 md:gap-6">
            <DishCard
              imageSrc="/images/photo3.webp"
              imagePlaceholder={{
                label: 'Garlic and Pepper Wing — close-up, crispy texture — 600×400px',
                width: 600,
                height: 360,
              }}
              name="Garlic and Pepper Wing"
              description="Super crispy, loaded with garlic and black pepper. Served with sweet and sour sauce."
              price="$8.95"
            />
            <DishCard
              imageSrc="/images/photo5.webp"
              imagePlaceholder={{
                label: 'House Special Pho — all beef cuts, overhead shot — 600×400px',
                width: 600,
                height: 360,
              }}
              name="House Special Pho"
              description="Every cut of beef in one bowl: steak, brisket, tendon, tripe, and meatball. The full experience."
              price="$13.95"
              badge="House Special"
            />
          </StaggerItem>
        </StaggerContainer>

        <SectionEntrance delay={0.2} className="mt-10 text-center">
          <Link href="/menu" className="btn-outline px-10 py-3.5 text-sm">
            View Full Menu →
          </Link>
        </SectionEntrance>
      </div>
    </section>
  )
}

interface DishCardProps {
  imagePlaceholder: { label: string; width: number; height: number }
  name: string
  description: string
  price: string
  badge?: string
  large?: boolean
  imageSrc?: string
}

function DishCard({ imagePlaceholder, name, description, price, badge, large, imageSrc }: DishCardProps) {
  return (
    <article className="group relative overflow-hidden bg-softCream">
      {/* Image wrapper */}
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
          <>
            {/* PLACEHOLDER: [imagePlaceholder.label] — replace with real food photography */}
            <PlaceholderImg
              alt={name}
              width={imagePlaceholder.width}
              height={imagePlaceholder.height}
              label={imagePlaceholder.label}
              className="w-full transition-transform duration-500 group-hover:scale-105"
            />
          </>
        )}

        {/* Warm red wash over image */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(ellipse at 50% 80%, rgba(181, 35, 26, 0.15) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {badge && (
          <span className="absolute top-3 left-3 badge-house-special">
            {badge}
          </span>
        )}
      </div>

      {/* Card content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3
            className={`font-display text-richCharcoal leading-tight ${
              large ? 'text-xl md:text-2xl' : 'text-lg'
            }`}
          >
            {name}
          </h3>
          <span className="font-body font-semibold text-turmericGold whitespace-nowrap text-base shrink-0">
            {price}
          </span>
        </div>
        <p className="font-body text-sm text-richCharcoal/60 mt-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Turmeric gold left-edge accent on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-turmericGold scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
    </article>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   ABOUT TEASER — Two column, warm copy + interior photo
   ───────────────────────────────────────────────────────────────────────────── */
function AboutTeaser() {
  return (
    <section className="py-[var(--section-pad-y)] bg-softCream" aria-labelledby="about-teaser-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text block */}
          <SectionEntrance>
            <div className="relative">
              {/* Pattern left-edge accent */}
              <div
                className="hidden md:block absolute -left-6 top-0 bottom-0 w-1"
                style={{
                  background:
                    'repeating-linear-gradient(180deg, var(--lacquer-red) 0, var(--lacquer-red) 6px, transparent 6px, transparent 12px)',
                  opacity: 0.3,
                }}
                aria-hidden="true"
              />

              <h2
                id="about-teaser-heading"
                className="font-display text-3xl sm:text-4xl md:text-5xl text-richCharcoal"
              >
                A Lakewood original.
              </h2>
              <span className="heading-rule" />

              <div className="space-y-4 font-body text-richCharcoal/70 text-base leading-relaxed">
                <p>
                  Pho Viet Thai has been feeding Lakewood the honest way: big portions,
                  fair prices, and a broth that&apos;s been going since morning. The dining room
                  feels lived in. Warm wood, globe pendant lights, and enough tropical
                  plants to make you forget you&apos;re in a strip mall.
                </p>
                <p>
                  The menu runs two cuisines without pretending they&apos;re the same thing.
                  Vietnamese pho, slow-built, clear, and rich. Thai curries and noodles
                  that let the spice scale do its job. Both done well under one roof.
                </p>
                <p>
                  If you&apos;ve been here before, you know. If you haven&apos;t, start with
                  the Thai Tom Yum Pho and the Garlic Pepper Wings, and work from there.
                </p>
              </div>

              <Link href="/about" className="btn-outline mt-8 inline-flex text-sm px-8 py-3.5">
                Our Story
              </Link>
            </div>
          </SectionEntrance>

          {/* Interior photo */}
          <SectionEntrance delay={0.15}>
            <div className="relative">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/hero.webp"
                  alt="Pho Viet Thai dining room interior"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
                {/* Warm overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at 60% 40%, rgba(181, 35, 26, 0.10) 0%, transparent 65%)',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Turmeric gold top-edge rule */}
              <div className="absolute -top-0.5 left-0 right-0 h-0.5 bg-turmericGold" />
            </div>
          </SectionEntrance>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   DRINKS HIGHLIGHT — Full-width deep jade, three drink cards
   ───────────────────────────────────────────────────────────────────────────── */
function DrinksHighlight() {
  return (
    <section
      className="py-[var(--section-pad-y)] bg-deepJade texture-woven relative overflow-hidden"
      aria-labelledby="drinks-heading"
    >
      <GlobeLightGlow size={600} intensity="medium" className="top-0 left-1/4" />
      <GlobeLightGlow size={400} intensity="subtle" className="bottom-0 right-1/4" />

      <PatternBorder variant="gold" className="absolute top-0 left-0 right-0" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text block */}
          <SectionEntrance>
            <h2
              id="drinks-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl text-warmIvory mb-2"
            >
              Something to Drink
            </h2>
            <span className="block w-12 h-0.5 bg-turmericGold mt-3 mb-8" />

            <div className="space-y-5 font-body text-warmIvory/65 text-base leading-relaxed">
              <p>
                The drink menu here pulls its weight. Vietnamese iced coffee brewed dark
                and slow, finished with a salted cream top that changes the whole thing.
                House-made bubble tea in 24-ounce cups. The kind of size and flavor that
                made it the most-ordered drink on the menu.
              </p>
              <p>
                Thai matcha whisked in-house with creamy half and half poured over the top.
                Earthy, smooth, and rich without being heavy. There are fruit teas, smoothies,
                and enough options to keep things interesting whether you come once a week
                or every day.
              </p>
            </div>

            <Link href="/menu#drinks" className="btn-outline-ivory px-8 py-3.5 text-sm mt-8 inline-flex">
              View Drinks Menu
            </Link>
          </SectionEntrance>

          {/* Image */}
          <SectionEntrance delay={0.15}>
            <div className="relative overflow-hidden">
              <Image
                src="/images/drinks.webp"
                alt="Featured drinks at Pho Viet Thai"
                width={800}
                height={600}
                className="w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 30%, rgba(212, 146, 26, 0.08) 0%, transparent 70%)',
                }}
                aria-hidden="true"
              />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-turmericGold" />
            </div>
          </SectionEntrance>
        </div>
      </div>

      <PatternBorder variant="gold" className="absolute bottom-0 left-0 right-0" />
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   REVIEWS STRIP — Three Google review quotes
   ───────────────────────────────────────────────────────────────────────────── */
function ReviewsStrip() {
  const reviews = [
    {
      stars: 5,
      quote:
        "I drove 35 min because I was craving this brisket pho broth.. I love the pepper garlic chicken wings, it\u2019s a must.. my server Tan was on it, he is super nice and helpful.. Everything was fire! Ambiance was clean and super chill vibe. I\u2019ll be back for sure!",
      reviewer: 'Marisa Canne',
    },
    {
      stars: 5,
      quote:
        "A cool hidden gem, and best tasting broth I\u2019ve ever had! I got the Thai Tom Yum Pho and the flavor combinations are incredible \u2014 the perfect balance of acidity, sweetness, savory. Veggies are always fresh and delicious. Spring rolls are super good and banh mi as well.",
      reviewer: 'Logan Maltese',
    },
    {
      stars: 5,
      quote:
        "A family owned restaurant with excellent food! The curry is spiced 1\u20135 so you can have it exactly as spicy as you want it! The Vietnamese Coffee was one of the best I\u2019ve had. A definite place to revisit!",
      reviewer: 'Rosemary Joy Espinosa',
    },
  ]

  return (
    <section
      className="py-16 bg-deepJade/95 texture-woven relative overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <PatternBorder variant="gold" className="absolute top-0 left-0 right-0" />

      <div className="container-site">
        <SectionEntrance>
          <h2 id="reviews-heading" className="sr-only">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-3 mb-10">
            <StarRow count={4} />
            <span className="font-body text-warmIvory/50 text-sm">3.9 · 349 reviews on Google</span>
          </div>
        </SectionEntrance>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <StaggerItem key={i}>
              <blockquote className="bg-deepJade-light/60 border border-warmIvory/[0.06] p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg
                      key={s}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={s < review.stars ? '#D4921A' : 'none'}
                      stroke={s < review.stars ? '#D4921A' : '#D4921A44'}
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="font-display italic text-base text-warmIvory/80 leading-relaxed mb-4">
                  &quot;{review.quote}&quot;
                </p>
                <footer>
                  <cite className="font-body text-xs text-warmIvory/40 not-italic">
                    - {review.reviewer}
                  </cite>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   ORDER CTA BANNER — Lacquer red, full-width
   ───────────────────────────────────────────────────────────────────────────── */
function OrderCtaBanner() {
  return (
    <section className="py-20 bg-lacquerRed relative overflow-hidden" aria-label="Order online">
      {/* Diagonal woven texture in red */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.15) 10px,
            rgba(255,255,255,0.15) 12px
          )`,
        }}
        aria-hidden="true"
      />

      {/* Globe glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(212, 146, 26, 0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 text-center">
        <SectionEntrance>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-warmIvory mb-4">
            Ready to eat?
          </h2>
          <p className="font-body text-warmIvory/70 text-base mb-10">
            Order online for pickup or delivery. Fresh every time.
          </p>

          <a
            href="https://phovietthai.orderfood.express/?menus=menu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-ivory text-sm px-8 py-3.5 text-center"
          >
            Order Online
          </a>
        </SectionEntrance>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   ICON COMPONENTS
   ───────────────────────────────────────────────────────────────────────────── */
function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function DineIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  )
}

function BowlIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11 Q3 19 12 20 Q21 19 21 11 Z" />
      <line x1="3" y1="11" x2="21" y2="11" />
      <path d="M10 6 Q11 3 12 3 Q13 3 14 6" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < count ? '#D4921A' : 'none'} stroke="#D4921A" strokeWidth="1.5" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}
