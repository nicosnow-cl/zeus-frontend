import { Config } from 'tailwindcss'
import { radixThemePreset } from 'radix-themes-tw'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
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
      ...radixThemePreset.theme,
      fontFamily: {
        default: ['var(--font-default)'],
        heading: ['var(--font-heading)'],
      },
      fontSize: {
        ...radixThemePreset.theme?.fontSize,
        xs: ['var(--font-size-1)', 'var(--line-height-1)'],
        sm: ['var(--font-size-2)', 'var(--line-height-2)'],
      },
      colors: {
        ...radixThemePreset.theme?.colors,
        primary: {
          50: '#fef1f2',
          100: '#fde7e9',
          200: '#fbd0d6',
          300: '#f7abb6',
          400: '#f2788b',
          500: '#e84a67',
          600: '#d52a52',
          700: '#b41d45',
          800: '#971c41',
          900: '#7e1b3c',
          950: '#470a1d',
        },
        secondary: {
          50: '#f0f7fe',
          100: '#dcecfd',
          200: '#c2dffb',
          300: '#97ccf9',
          400: '#66b0f4',
          500: '#438fee',
          600: '#2d72e3',
          700: '#255dd0',
          800: '#2248a0',
          900: '#224386',
          950: '#192a52',
        },
        woodsmoke: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#dce6ef',
          300: '#b1c9dd',
          400: '#80a4c6',
          500: '#3b71ab',
          600: '#2c4568',
          700: '#22334e',
          800: '#1b263b',
          900: '#191f2f',
          950: '#0b0d14',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config
