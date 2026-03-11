import { Metadata } from 'next'
import { PlaceholderImg } from '@/components/ui/PlaceholderImg'
import { PatternBorder } from '@/components/ui/PatternBorder'
import { GlobeLightGlow } from '@/components/ui/GlobeLightGlow'
import { SectionEntrance, StaggerContainer, StaggerItem } from '@/components/ui/SectionEntrance'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Pho Viet Thai, a Vietnamese and Thai restaurant in Lakewood, WA. Real food, honest prices, and the kind of place you come back to twice a week.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <WhyPhoVietThai />
      <HoursAndLocation />
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   HERO — Warm ivory, tropical leaf corner bleed, large heading
   ───────────────────────────────────────────────────────────────────────────── */
function AboutHero() {
  return (
    <section
      className="pt-32 pb-16 bg-warmIvory relative overflow-hidden"
      aria-label="About page hero"
    >
      {/* Tropical leaf bleed — top right */}
      <LeafCorner position="topRight" />

      <div className="container-site relative z-10">
        <SectionEntrance>
          <p className="font-body text-xs font-semibold tracking-widest text-lacquerRed/60 uppercase mb-4">
            Pho Viet Thai · Lakewood, WA
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-richCharcoal font-semibold leading-tight">
            Our Story
          </h1>
          <span className="block w-12 h-0.5 bg-turmericGold mt-5" />
        </SectionEntrance>
      </div>

      <PatternBorder className="absolute bottom-0 left-0 right-0" />
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   STORY — Long-form copy + portrait interior photo
   ───────────────────────────────────────────────────────────────────────────── */
function StorySection() {
  return (
    <section
      className="py-[var(--section-pad-y)] bg-warmIvory"
      aria-labelledby="story-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-14 md:gap-20 items-start">
          {/* Copy block */}
          <SectionEntrance>
            <h2 id="story-heading" className="sr-only">
              Restaurant Story
            </h2>

            <div className="font-body text-richCharcoal/75 text-base leading-[1.85] space-y-5">
              <p>
                Pho Viet Thai started the way most neighborhood restaurants worth anything
                do, with a specific idea about what good food should feel like, and a
                room to make it happen in. The room turned out to be here, on Steilacoom
                Boulevard in Lakewood. The idea turned out to be this: serve two cuisines
                that belong in the same conversation, do it honestly, and let the food
                speak for itself.
              </p>

              <p>
                Vietnamese and Thai cooking share more than they don&apos;t. Aromatic broths.
                Fresh herbs that matter. Heat that&apos;s earned, not just applied. Layered
                flavors built over time. But they&apos;re distinct, and here, both are done
                with their own care. The pho broth has been going since the morning. The
                Thai curries are built from scratch. Nothing here comes from a packet.
              </p>

              <p>
                The dining room reflects how the food feels: warm, casual, and genuinely
                comfortable. Dark wood tables. Globe pendant lights that cast the right
                kind of glow. Tropical plants throughout, not as decoration but as part
                of the atmosphere. It&apos;s a space that&apos;s been used and loved, and it shows.
              </p>

              <p>
                The menu is wide because the regulars come for different things. Some
                people have been ordering the Thai Tom Yum Pho every week since they
                found it. Some come specifically for the Garlic Pepper Wings. Some work
                their way through the pho variants one visit at a time. The Vietnamese
                iced coffee with salted creme has its own fan base. The kids menu makes
                this a real family spot.
              </p>

              <p>
                Lakewood has given this place its regulars, and those regulars have given
                it its reputation. Budget-friendly doesn&apos;t mean cutting corners. It means
                treating people right. Generous portions, consistent quality, and a staff
                that knows the menu because they eat here too.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote
              className="my-10 font-display italic text-xl sm:text-2xl text-lacquerRed leading-snug
                         border-l-2 border-turmericGold pl-6 -ml-6 md:ml-0 md:pl-6"
            >
              &quot;The broth has been going since morning. Nothing here comes from a packet.&quot;
            </blockquote>

            <div className="font-body text-richCharcoal/75 text-base leading-[1.85]">
              <p>
                Open daily, 11 AM to 11 PM. Dine in, take out, or order delivery through
                DoorDash, Uber Eats, or directly at ordervietthai.com. However you get
                here. The food&apos;s ready when you are.
              </p>
            </div>
          </SectionEntrance>

          {/* Portrait photo */}
          <SectionEntrance delay={0.15} className="md:sticky md:top-28">
            <div className="relative">
              {/* Turmeric gold left-edge rule */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-turmericGold z-10" />

              {/* PLACEHOLDER: About story photo — 600×800px — portrait-orientation interior shot,
                  globe lights visible, warm ambient, plants in background — replace with real photo */}
              <PlaceholderImg
                alt="Pho Viet Thai dining room interior"
                width={600}
                height={800}
                label="About page portrait — interior with globe lights and plants — 600×800px"
                className="w-full pl-4"
              />

              {/* Warm overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 60% 30%, rgba(181, 35, 26, 0.08) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />
            </div>
          </SectionEntrance>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   WHY PHO VIET THAI — Three value statements
   ───────────────────────────────────────────────────────────────────────────── */
function WhyPhoVietThai() {
  const values = [
    {
      icon: <RecipeIcon />,
      title: 'Family recipes, served fresh',
      body:
        "The broth starts in the morning. The herbs go in fresh. The recipes didn't come from anywhere you can Google.",
    },
    {
      icon: <TwoCuisinesIcon />,
      title: 'Vietnamese + Thai under one roof',
      body:
        'Two cuisines done right, not split attention. Both menus are full and both are made with the same care.',
    },
    {
      icon: <CommunityIcon />,
      title: "Lakewood's neighborhood spot",
      body:
        "The regulars here know the staff by name. The staff knows what you usually order. That's not an accident.",
    },
  ]

  return (
    <section
      className="py-[var(--section-pad-y)] bg-deepJade texture-woven relative overflow-hidden"
      aria-labelledby="why-heading"
    >
      <GlobeLightGlow size={700} intensity="medium" className="top-0 left-1/2 -translate-x-1/2" />
      <PatternBorder variant="gold" className="absolute top-0 left-0 right-0" />

      <div className="container-site relative z-10">
        <SectionEntrance>
          <h2
            id="why-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-warmIvory mb-2"
          >
            Why people keep coming back.
          </h2>
          <span className="block w-12 h-0.5 bg-turmericGold mt-3 mb-12" />
        </SectionEntrance>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {values.map(({ icon, title, body }) => (
            <StaggerItem key={title}>
              <div className="flex flex-col gap-4">
                <div className="text-turmericGold w-10 h-10">{icon}</div>
                <h3 className="font-display text-xl text-warmIvory leading-snug">{title}</h3>
                <p className="font-body text-sm text-warmIvory/60 leading-relaxed">{body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <PatternBorder variant="gold" className="absolute bottom-0 left-0 right-0" />
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   HOURS AND LOCATION — Hours list + Google Maps embed
   ───────────────────────────────────────────────────────────────────────────── */
function HoursAndLocation() {
  const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday',
  ]

  return (
    <section
      className="py-[var(--section-pad-y)] bg-warmIvory"
      aria-labelledby="hours-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Hours */}
          <SectionEntrance>
            <h2
              id="hours-heading"
              className="font-display text-3xl sm:text-4xl text-richCharcoal mb-2"
            >
              Hours & Location
            </h2>
            <span className="block w-12 h-0.5 bg-turmericGold mt-3 mb-8" />

            <div className="space-y-2 mb-8">
              {days.map((day) => (
                <div
                  key={day}
                  className="flex justify-between items-center py-2 border-b border-softCream"
                >
                  <span className="font-body text-sm font-semibold text-turmericGold">
                    {day}
                  </span>
                  <span className="font-body text-sm text-richCharcoal/75">
                    11:00 AM – 11:00 PM
                  </span>
                </div>
              ))}
            </div>

            <address className="not-italic font-body text-sm text-richCharcoal/70 space-y-1">
              <p className="font-semibold text-richCharcoal">Pho Viet Thai</p>
              <p>3615 Steilacoom Blvd SW, Suite 102</p>
              <p>Lakewood, WA 98499</p>
              <p className="pt-2">
                <a
                  href="tel:+12532671637"
                  className="text-lacquerRed font-semibold hover:underline"
                >
                  (253) 267-1637
                </a>
              </p>
            </address>

            <a
              href="https://maps.google.com/?q=3615+Steilacoom+Blvd+SW+Lakewood+WA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex text-sm px-7 py-3"
            >
              Get Directions →
            </a>
          </SectionEntrance>

          {/* Map */}
          <SectionEntrance delay={0.15}>
            <div className="relative h-[400px] md:h-full min-h-[350px]">
              <div className="w-full h-full bg-deepJade/10 border border-softCream overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5424.046328487428!2d-122.48966890420103!3d47.1769830431733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5491017980669a3d%3A0x849ab2d63f9cac5!2sPho%20Viet%20Thai!5e0!3m2!1sen!2sus!4v1772650182781!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Turmeric gold border accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-turmericGold" />
            </div>
          </SectionEntrance>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   LEAF CORNER — Tropical leaf SVG bleeds
   ───────────────────────────────────────────────────────────────────────────── */
function LeafCorner({ position }: { position: 'topRight' | 'bottomLeft' }) {
  const isTopRight = position === 'topRight'
  return (
    <svg
      viewBox="0 0 220 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute w-56 h-80 pointer-events-none opacity-[0.06] ${
        isTopRight ? 'top-0 right-0' : 'bottom-0 left-0 rotate-180'
      }`}
      aria-hidden="true"
    >
      <path
        d="M200 10 C200 10 110 35 65 130 C25 200 40 320 85 340 C85 340 135 240 160 160 C185 80 200 10 200 10Z"
        fill="#1A4A3A"
        stroke="#1A4A3A"
        strokeWidth="1"
      />
      <path
        d="M85 340 C85 340 110 250 148 175 C178 112 200 10 200 10"
        stroke="#1A4A3A"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   VALUE ICONS
   ───────────────────────────────────────────────────────────────────────────── */
const iconSvgProps = {
  width: 40,
  height: 40,
  viewBox: '0 0 40 40',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

function RecipeIcon() {
  return (
    <svg {...iconSvgProps}>
      <path d="M12 8 Q12 6 20 6 Q28 6 28 8" />
      <path d="M8 16 Q8 30 20 32 Q32 30 32 16" />
      <line x1="8" y1="16" x2="32" y2="16" />
      {/* Steam */}
      <path d="M16 12 Q17 9 16 6" />
      <path d="M20 11 Q21 8 20 5" />
      <path d="M24 12 Q25 9 24 6" />
    </svg>
  )
}

function TwoCuisinesIcon() {
  return (
    <svg {...iconSvgProps}>
      {/* Two overlapping bowls */}
      <path d="M6 18 Q6 26 14 27 Q22 26 22 18" />
      <line x1="5" y1="18" x2="23" y2="18" />
      <path d="M18 18 Q18 26 26 27 Q34 26 34 18" />
      <line x1="17" y1="18" x2="35" y2="18" />
    </svg>
  )
}

function CommunityIcon() {
  return (
    <svg {...iconSvgProps}>
      <circle cx="14" cy="13" r="5" />
      <circle cx="26" cy="13" r="5" />
      <path d="M5 32 C5 25 23 25 23 32" />
      <path d="M17 32 C17 25 35 25 35 32" />
    </svg>
  )
}
