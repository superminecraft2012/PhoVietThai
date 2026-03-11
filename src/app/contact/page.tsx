'use client'

import { PatternBorder } from '@/components/ui/PatternBorder'
import { SectionEntrance } from '@/components/ui/SectionEntrance'

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBody />
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────────────────────────────────────── */
function ContactHero() {
  return (
    <section className="pt-32 pb-14 bg-warmIvory relative overflow-hidden" aria-label="Contact page hero">
      <div className="container-site relative z-10">
        <SectionEntrance>
          <p className="font-body text-xs font-semibold tracking-widest text-lacquerRed/60 uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-lacquerRed font-semibold leading-tight mb-4">
            Contact Us
          </h1>
          <span className="block w-12 h-0.5 bg-turmericGold mt-2 mb-5" />
          <p className="font-body text-richCharcoal/65 text-base max-w-lg leading-relaxed">
            Questions, reservations, catering, or just want to say hi? We&apos;re here.
          </p>
        </SectionEntrance>
      </div>
      <PatternBorder className="absolute bottom-0 left-0 right-0" />
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   CONTACT BODY — Info + Form + Order Links + Map
   ───────────────────────────────────────────────────────────────────────────── */
function ContactBody() {
  return (
    <>
      {/* Info */}
      <section className="py-[var(--section-pad-y)] bg-warmIvory" aria-label="Contact information">
        <div className="container-site">
          <div className="max-w-lg">
            <SectionEntrance>
              <ContactInfo />
            </SectionEntrance>
          </div>
        </div>
      </section>

      {/* Map */}
      <MapSection />
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   CONTACT INFO BLOCK
   ───────────────────────────────────────────────────────────────────────────── */
function ContactInfo() {
  const socialLinks = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61580781386987',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/phovietthaitacoma/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      {/* Phone */}
      <div>
        <p className="form-label mb-2">Phone</p>
        <a
          href="tel:+12532671637"
          className="font-display text-3xl sm:text-4xl text-richCharcoal hover:text-lacquerRed transition-colors duration-200"
        >
          (253) 267-1637
        </a>
      </div>

      {/* Address */}
      <div>
        <p className="form-label mb-2">Address</p>
        <address className="not-italic font-body text-sm text-richCharcoal/75 leading-relaxed space-y-0.5">
          <p>3615 Steilacoom Blvd SW, Suite 102</p>
          <p>Lakewood, WA 98499</p>
        </address>
        <a
          href="https://maps.app.goo.gl/wCCFg33h9SBDxnF16"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs text-lacquerRed hover:underline mt-2 inline-block"
        >
          Get Directions →
        </a>
      </div>

      {/* Hours */}
      <div>
        <p className="form-label mb-2">Hours</p>
        <div className="font-body text-sm text-richCharcoal/75 space-y-1">
          <div className="flex justify-between border-b border-softCream py-1.5">
            <span className="text-turmericGold font-semibold">Open Daily</span>
            <span>11:00 AM – 11:00 PM</span>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div>
        <p className="form-label mb-3">Follow Along</p>
        <div className="flex gap-2">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center
                         bg-turmericGold text-warmIvory
                         hover:bg-lacquerRed transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAP — Full-width styled embed with address overlay
   ───────────────────────────────────────────────────────────────────────────── */
function MapSection() {
  return (
    <section className="relative h-[500px] bg-deepJade/10" aria-label="Location map">
      <div
        className="w-full h-full flex items-center justify-center overflow-hidden border border-softCream"
      >
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

      {/* Address overlay card */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[10%]
                   bg-warmIvory border-2 border-turmericGold p-5 shadow-lg min-w-[240px]"
      >
        <h3 className="font-display text-lg text-richCharcoal mb-2">Pho Viet Thai</h3>
        <address className="not-italic font-body text-sm text-richCharcoal/70 space-y-0.5">
          <p>3615 Steilacoom Blvd SW, Suite 102</p>
          <p>Lakewood, WA 98499</p>
          <p className="pt-2">
            <a href="tel:+12532671637" className="text-lacquerRed font-semibold">
              (253) 267-1637
            </a>
          </p>
        </address>
      </div>
    </section>
  )
}
