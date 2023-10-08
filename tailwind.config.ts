import type { Config } from 'tailwindcss';
import { radixThemePreset } from 'radix-themes-tw';
import { palette } from './utils/tailwind';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      ...radixThemePreset.theme?.colors,
      ...palette,
    },
  },
  plugins: [],
  presets: [radixThemePreset],
};
export default config;
