import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lacquerRed: {
          DEFAULT: '#B5231A',
          dark: '#C4291F',
        },
        turmericGold: {
          DEFAULT: '#D4921A',
          light: '#E8A520',
        },
        deepJade: {
          DEFAULT: '#1A4A3A',
          light: '#1E5542',
        },
        warmIvory: {
          DEFAULT: '#FAF5E8',
          dark: '#F5EFD8',
        },
        richCharcoal: {
          DEFAULT: '#1C1C1C',
          light: '#242424',
        },
        softCream: '#EDE5CC',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        relaxed: '1.75',
      },
      backgroundImage: {
        'diagonal-weave': `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 8px,
          rgba(255,255,255,0.03) 8px,
          rgba(255,255,255,0.03) 10px
        )`,
      },
    },
  },
  plugins: [],
}

export default config
