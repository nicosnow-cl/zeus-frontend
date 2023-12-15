import { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  corePlugins: {
    preflight: false,
  },
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        default: ['var(--font-default)'],
        heading: ['var(--font-heading)'],
      },
      fontSize: {
        xs: ['var(--fs-100)', { lineHeight: '1rem' }],
        sm: ['var(--fs-200)', { lineHeight: '1.25rem' }],
        base: ['var(--fs-300)', { lineHeight: '1.5rem' }],
        lg: ['var(--fs-400)', { lineHeight: '1.75rem' }],
        xl: ['var(--fs-500)', { lineHeight: '1.75rem' }],
      },
      colors: {
        brand: {
          50: 'var(--clr-brand-50)',
          100: 'var(--clr-brand-100)',
          200: 'var(--clr-brand-200)',
          300: 'var(--clr-brand-300)',
          400: 'var(--clr-brand-400)',
          500: 'var(--clr-brand-500)',
          600: 'var(--clr-brand-600)',
          700: 'var(--clr-brand-700)',
          800: 'var(--clr-brand-800)',
          900: 'var(--clr-brand-900)',
          950: 'var(--clr-brand-950)',
        },
        accent: {
          50: 'var(--clr-accent-50)',
          100: 'var(--clr-accent-100)',
          200: 'var(--clr-accent-200)',
          300: 'var(--clr-accent-300)',
          400: 'var(--clr-accent-400)',
          500: 'var(--clr-accent-500)',
          600: 'var(--clr-accent-600)',
          700: 'var(--clr-accent-700)',
          800: 'var(--clr-accent-800)',
          900: 'var(--clr-accent-900)',
          950: 'var(--clr-accent-950)',
        },
        shade: {
          50: 'var(--clr-shade-50)',
          100: 'var(--clr-shade-100)',
          200: 'var(--clr-shade-200)',
          300: 'var(--clr-shade-300)',
          400: 'var(--clr-shade-400)',
          500: 'var(--clr-shade-500)',
          600: 'var(--clr-shade-600)',
          700: 'var(--clr-shade-700)',
          800: 'var(--clr-shade-800)',
          900: 'var(--clr-shade-900)',
          950: 'var(--clr-shade-950)',
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config
