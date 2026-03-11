import Link from 'next/link'
import { PatternBorder } from '@/components/ui/PatternBorder'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61580781386987',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/phovietthaitacoma/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer
      className="bg-deepJade text-warmIvory texture-woven"
      aria-label="Site footer"
    >
      <PatternBorder variant="gold" />

      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 — Brand + Address */}
          <div>
            <Link
              href="/"
              className="font-display text-2xl text-turmericGold font-semibold block mb-4 hover:opacity-80 transition-opacity"
            >
              Pho Viet Thai
            </Link>
            <p className="font-display italic text-warmIvory/50 text-sm mb-6">
              &quot;Two Cuisines. One Bowl.&quot;
            </p>

            <address className="not-italic space-y-2 font-body text-sm text-warmIvory/70">
              <p>
                3615 Steilacoom Blvd SW, Suite 102
                <br />
                Lakewood, WA 98499
              </p>
              <p>
                <a
                  href="tel:+12532671637"
                  className="hover:text-turmericGold transition-colors duration-200"
                >
                  (253) 267-1637
                </a>
              </p>
              <p className="pt-2">
                <span className="text-turmericGold font-semibold">Hours</span>
                <br />
                Open Daily · 11:00 AM – 11:00 PM
              </p>
            </address>
          </div>

          {/* Column 2 — Nav links */}
          <div className="md:text-center">
            <h3 className="font-body text-xs font-semibold tracking-widest text-warmIvory/40 uppercase mb-5">
              Explore
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-body text-sm text-warmIvory/70 hover:text-turmericGold transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

          </div>

          {/* Column 3 — Social + tagline */}
          <div className="md:text-right">
            <h3 className="font-body text-xs font-semibold tracking-widest text-warmIvory/40 uppercase mb-5">
              Follow Along
            </h3>
            <div className="flex md:justify-end gap-3 mb-8">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center text-warmIvory/60
                             bg-turmericGold/10 hover:bg-turmericGold hover:text-warmIvory
                             transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Pho bowl line-art decoration */}
            <div className="mb-6" aria-hidden="true">
              <PhoLineArt />
            </div>

            <Link
              href="https://phovietthai.orderfood.express/?menus=menu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm inline-flex"
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-warmIvory/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-warmIvory/30">
            © {new Date().getFullYear()} Pho Viet Thai · Lakewood, WA
          </p>
          <p className="font-body text-xs text-warmIvory/20">
            Vietnamese · Thai · Open Daily
          </p>
        </div>
      </div>
    </footer>
  )
}

/* Minimal pho bowl line-art — used as decorative footer element */
function PhoLineArt() {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-auto opacity-20"
      aria-hidden="true"
    >
      {/* Bowl */}
      <path
        d="M10 25 Q10 50 40 52 Q70 50 70 25"
        stroke="#D4921A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line x1="8" y1="25" x2="72" y2="25" stroke="#D4921A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Steam wisps */}
      <path d="M25 18 Q27 12 25 6" stroke="#D4921A" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M40 15 Q42 9 40 3" stroke="#D4921A" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M55 18 Q57 12 55 6" stroke="#D4921A" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Chopsticks */}
      <line x1="35" y1="20" x2="50" y2="5" stroke="#D4921A" strokeWidth="1" strokeLinecap="round" />
      <line x1="40" y1="20" x2="56" y2="6" stroke="#D4921A" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}
