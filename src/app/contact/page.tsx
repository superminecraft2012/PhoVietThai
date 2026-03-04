'use client'

import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { PatternBorder } from '@/components/ui/PatternBorder'
import { SectionEntrance, StaggerContainer, StaggerItem } from '@/components/ui/SectionEntrance'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  subject: z.enum(
    ['reservation', 'catering', 'general', 'feedback'],
    { required_error: 'Please select a subject.' }
  ),
  message: z.string().min(10, 'Please tell us a bit more — at least 10 characters.'),
})

type ContactFormValues = z.infer<typeof contactSchema>

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
            Questions, reservations, catering, or just want to say hi — we're here.
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
      {/* Info + Form */}
      <section className="py-[var(--section-pad-y)] bg-warmIvory" aria-labelledby="contact-form-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-14 md:gap-20">
            {/* Contact info */}
            <SectionEntrance>
              <ContactInfo />
            </SectionEntrance>

            {/* Form */}
            <SectionEntrance delay={0.1}>
              <ContactForm />
            </SectionEntrance>
          </div>
        </div>
      </section>

      {/* Order links */}
      <OrderLinks />

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
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      label: 'Yelp',
      href: '#',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
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
   CONTACT FORM — React Hook Form + Zod validation
   ───────────────────────────────────────────────────────────────────────────── */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    // TODO: wire up form submission to your backend/email service
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-4 py-10"
      >
        {/* Pho bowl success icon */}
        <svg
          width="48"
          height="36"
          viewBox="0 0 80 60"
          fill="none"
          className="text-turmericGold"
          aria-hidden="true"
        >
          <path d="M10 25 Q10 50 40 52 Q70 50 70 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="25" x2="72" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 12 Q31 9 30 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M40 10 Q41 7 40 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M50 12 Q51 9 50 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        <h2 className="font-display text-2xl text-richCharcoal">Message sent.</h2>
        <p className="font-body text-sm text-richCharcoal/65 leading-relaxed max-w-sm">
          Thanks for reaching out. We'll get back to you soon. In the meantime,
          the kitchen's open until 11 PM.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="font-body text-xs text-lacquerRed hover:underline mt-2"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
      aria-labelledby="contact-form-heading"
      noValidate
    >
      <h2 id="contact-form-heading" className="font-display text-2xl text-richCharcoal">
        Send a message
      </h2>

      {/* Name */}
      <div>
        <label htmlFor="name" className="form-label">Name *</label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className="form-input"
          placeholder="Your name"
          {...register('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="font-body text-xs text-lacquerRed mt-1.5">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="form-label">Email *</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="form-input"
            placeholder="your@email.com"
            {...register('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="font-body text-xs text-lacquerRed mt-1.5">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="form-label">
            Phone <span className="text-richCharcoal/30 normal-case">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="form-input"
            placeholder="(253) 000-0000"
            {...register('phone')}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="form-label">Subject *</label>
        <select
          id="subject"
          className="form-input appearance-none cursor-pointer"
          defaultValue=""
          {...register('subject')}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        >
          <option value="" disabled>Select a subject…</option>
          <option value="reservation">Reservation Inquiry</option>
          <option value="catering">Catering</option>
          <option value="general">General Question</option>
          <option value="feedback">Feedback</option>
        </select>
        {errors.subject && (
          <p id="subject-error" className="font-body text-xs text-lacquerRed mt-1.5">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">Message *</label>
        <textarea
          id="message"
          rows={5}
          className="form-input resize-none"
          placeholder="Tell us how we can help…"
          {...register('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="font-body text-xs text-lacquerRed mt-1.5">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary px-10 py-3.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   ORDER LINKS — Three platform cards
   ───────────────────────────────────────────────────────────────────────────── */
function OrderLinks() {
  const options = [
    {
      platform: 'Order Direct',
      note: 'Order online for pickup or delivery through our direct ordering partner.',
      href: 'https://phovietthai.orderfood.express/?menus=menu',
      cta: 'Order Now',
    },
  ]

  return (
    <section
      className="py-[var(--section-pad-y)] bg-softCream"
      aria-labelledby="order-links-heading"
    >
      <div className="container-site">
        <SectionEntrance>
          <h2
            id="order-links-heading"
            className="font-display text-3xl sm:text-4xl text-richCharcoal mb-2"
          >
            Order Online
          </h2>
          <span className="block w-12 h-0.5 bg-turmericGold mt-3 mb-10" />
        </SectionEntrance>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {options.map(({ platform, note, href, cta }) => (
            <StaggerItem key={platform}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-warmIvory border border-softCream p-6 hover:border-turmericGold transition-colors duration-200"
                aria-label={cta}
              >
                <h3 className="font-display text-xl text-richCharcoal mb-2 group-hover:text-lacquerRed transition-colors duration-200">
                  {platform}
                </h3>
                <p className="font-body text-sm text-richCharcoal/55 mb-5 leading-relaxed">
                  {note}
                </p>
                <div className="flex items-center gap-2 text-lacquerRed font-body text-sm font-semibold">
                  <span>{cta}</span>
                  <ArrowIcon />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
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

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-1"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
