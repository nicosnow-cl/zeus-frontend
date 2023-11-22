import { Config } from 'tailwindcss'
import { radixThemePreset } from 'radix-themes-tw'
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
        brand: {
          50: 'hsl(356, 100%, 97%)',
          100: 'hsl(353, 100%, 95%)',
          200: 'hsl(352, 100%, 90%)',
          300: 'hsl(352, 100%, 82%)',
          400: 'hsl(350, 100%, 71%)',
          500: 'hsl(348, 96%, 60%)',
          600: 'hsl(345, 83%, 50%)',
          700: 'hsl(344, 87%, 40%)',
          800: 'hsl(342, 80%, 35%)',
          900: 'hsl(340, 75%, 30%)',
          950: 'hsl(342, 90%, 16%)',
        },
        accent: {
          50: 'hsl(193, 100%, 96%)',
          100: 'hsl(198, 100%, 92%)',
          200: 'hsl(196, 100%, 86%)',
          300: 'hsl(194, 100%, 76%)',
          400: 'hsl(196, 100%, 65%)',
          500: 'hsl(200, 100%, 57%)',
          600: 'hsl(206, 100%, 53%)',
          700: 'hsl(209, 93%, 47%)',
          800: 'hsl(211, 86%, 40%)',
          900: 'hsl(209, 79%, 33%)',
          950: 'hsl(211, 70%, 21%)',
        },
        shade: {
          '50': 'hsl(214, 47%, 97%)',
          '100': 'hsl(218, 35%, 94%)',
          '200': 'hsl(216, 38%, 86%)',
          '300': 'hsl(213, 37%, 74%)',
          '400': 'hsl(212, 37%, 60%)',
          '500': 'hsl(212, 36%, 48%)',
          '600': 'hsl(214, 38%, 39%)',
          '700': 'hsl(216, 38%, 32%)',
          '800': 'hsl(215, 35%, 27%)',
          '900': 'hsl(214, 34%, 24%)',
          '950': 'hsl(218, 22%, 7%)',
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
