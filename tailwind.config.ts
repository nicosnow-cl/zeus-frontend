import type { Config } from 'tailwindcss'
import { radixThemePreset } from 'radix-themes-tw'

import { palette } from './constants/tailwind'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      ...radixThemePreset.theme?.colors,
      ...palette,
    },
    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    },
  },
  plugins: [],
  presets: [radixThemePreset],
}
export default config
