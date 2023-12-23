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
        sm: ['var(--fs-300)', { lineHeight: '1.25rem' }],
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
        elite: {
          50: 'rgb(var(--clr-elite-50-ch) / <alpha-value>)',
          100: 'rgb(var(--clr-elite-100-ch) / <alpha-value>)',
          200: 'rgb(var(--clr-elite-200-ch) / <alpha-value>)',
          300: 'rgb(var(--clr-elite-300-ch) / <alpha-value>)',
          400: 'rgb(var(--clr-elite-400-ch) / <alpha-value>)',
          500: 'rgb(var(--clr-elite-500-ch) / <alpha-value>)',
          600: 'rgb(var(--clr-elite-600-ch) / <alpha-value>)',
          700: 'rgb(var(--clr-elite-700-ch) / <alpha-value>)',
          800: 'rgb(var(--clr-elite-800-ch) / <alpha-value>)',
          900: 'rgb(var(--clr-elite-900-ch) / <alpha-value>)',
          950: 'rgb(var(--clr-elite-950-ch) / <alpha-value>)',
        },
        pro: {
          50: 'rgb(var(--clr-pro-50-ch) / <alpha-value>)',
          100: 'rgb(var(--clr-pro-100-ch) / <alpha-value>)',
          200: 'rgb(var(--clr-pro-200-ch) / <alpha-value>)',
          300: 'rgb(var(--clr-pro-300-ch) / <alpha-value>)',
          400: 'rgb(var(--clr-pro-400-ch) / <alpha-value>)',
          500: 'rgb(var(--clr-pro-500-ch) / <alpha-value>)',
          600: 'rgb(var(--clr-pro-600-ch) / <alpha-value>)',
          700: 'rgb(var(--clr-pro-700-ch) / <alpha-value>)',
          800: 'rgb(var(--clr-pro-800-ch) / <alpha-value>)',
          900: 'rgb(var(--clr-pro-900-ch) / <alpha-value>)',
          950: 'rgb(var(--clr-pro-950-ch) / <alpha-value>)',
        },
        prime: {
          50: 'rgb(var(--clr-prime-50-ch) / <alpha-value>)',
          100: 'rgb(var(--clr-prime-100-ch) / <alpha-value>)',
          200: 'rgb(var(--clr-prime-200-ch) / <alpha-value>)',
          300: 'rgb(var(--clr-prime-300-ch) / <alpha-value>)',
          400: 'rgb(var(--clr-prime-400-ch) / <alpha-value>)',
          500: 'rgb(var(--clr-prime-500-ch) / <alpha-value>)',
          600: 'rgb(var(--clr-prime-600-ch) / <alpha-value>)',
          700: 'rgb(var(--clr-prime-700-ch) / <alpha-value>)',
          800: 'rgb(var(--clr-prime-800-ch) / <alpha-value>)',
          900: 'rgb(var(--clr-prime-900-ch) / <alpha-value>)',
          950: 'rgb(var(--clr-prime-950-ch) / <alpha-value>)',
        },
      },
      gridTemplateRows: {
        '0': '0fr',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config
