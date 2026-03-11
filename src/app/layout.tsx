import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Pho Viet Thai | Vietnamese & Thai Restaurant in Lakewood, WA',
    template: '%s | Pho Viet Thai',
  },
  description:
    'Vietnamese and Thai cuisine in Lakewood, WA. Rich pho broth, pepper garlic wings, Pad Thai, and the Thai Tom Yum Pho that keeps people coming back. Open daily 11AM–11PM.',
  keywords: [
    'Pho Viet Thai',
    'Vietnamese restaurant Lakewood WA',
    'Thai restaurant Lakewood WA',
    'pho Lakewood',
    'Vietnamese Thai food Tacoma',
    'Tom Yum pho',
    'pad thai Lakewood',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Pho Viet Thai',
    title: 'Pho Viet Thai | Two Cuisines. One Bowl.',
    description:
      'Vietnamese and Thai food in Lakewood, WA. Rich pho, garlic pepper wings, fresh curries. Open daily 11AM–11PM.',
    /* PLACEHOLDER: OG image — 1200×630px — branded social share image — replace with real photo */
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'Pho Viet Thai' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pho Viet Thai | Two Cuisines. One Bowl.',
    description: 'Vietnamese and Thai food in Lakewood, WA. Open daily 11AM–11PM.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://phovietthai.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable}`}
    >
      <body className="font-body bg-warmIvory text-richCharcoal antialiased">
        <Navigation />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
