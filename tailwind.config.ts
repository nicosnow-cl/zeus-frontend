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
          50: 'rgb(var(--clr-brand-50-ch) / <alpha-value>)',
          100: 'rgb(var(--clr-brand-100-ch) / <alpha-value>)',
          200: 'rgb(var(--clr-brand-200-ch) / <alpha-value>)',
          300: 'rgb(var(--clr-brand-300-ch) / <alpha-value>)',
          400: 'rgb(var(--clr-brand-400-ch) / <alpha-value>)',
          500: 'rgb(var(--clr-brand-500-ch) / <alpha-value>)',
          600: 'rgb(var(--clr-brand-600-ch) / <alpha-value>)',
          700: 'rgb(var(--clr-brand-700-ch) / <alpha-value>)',
          800: 'rgb(var(--clr-brand-800-ch) / <alpha-value>)',
          900: 'rgb(var(--clr-brand-900-ch) / <alpha-value>)',
          950: 'rgb(var(--clr-brand-950-ch) / <alpha-value>)',
        },
        accent: {
          50: 'rgb(var(--clr-accent-50-ch) / <alpha-value>)',
          100: 'rgb(var(--clr-accent-100-ch) / <alpha-value>)',
          200: 'rgb(var(--clr-accent-200-ch) / <alpha-value>)',
          300: 'rgb(var(--clr-accent-300-ch) / <alpha-value>)',
          400: 'rgb(var(--clr-accent-400-ch) / <alpha-value>)',
          500: 'rgb(var(--clr-accent-500-ch) / <alpha-value>)',
          600: 'rgb(var(--clr-accent-600-ch) / <alpha-value>)',
          700: 'rgb(var(--clr-accent-700-ch) / <alpha-value>)',
          800: 'rgb(var(--clr-accent-800-ch) / <alpha-value>)',
          900: 'rgb(var(--clr-accent-900-ch) / <alpha-value>)',
          950: 'rgb(var(--clr-accent-950-ch) / <alpha-value>)',
        },
        shade: {
          50: 'rgb(var(--clr-shade-50-ch) / <alpha-value>)',
          100: 'rgb(var(--clr-shade-100-ch) / <alpha-value>)',
          200: 'rgb(var(--clr-shade-200-ch) / <alpha-value>)',
          300: 'rgb(var(--clr-shade-300-ch) / <alpha-value>)',
          400: 'rgb(var(--clr-shade-400-ch) / <alpha-value>)',
          500: 'rgb(var(--clr-shade-500-ch) / <alpha-value>)',
          600: 'rgb(var(--clr-shade-600-ch) / <alpha-value>)',
          700: 'rgb(var(--clr-shade-700-ch) / <alpha-value>)',
          800: 'rgb(var(--clr-shade-800-ch) / <alpha-value>)',
          900: 'rgb(var(--clr-shade-900-ch) / <alpha-value>)',
          950: 'rgb(var(--clr-shade-950-ch) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config
