import type { Config } from 'tailwindcss';
import { radixThemePreset } from 'radix-themes-tw';
import { palette } from './utils/tailwind';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [],
  presets: [radixThemePreset],
};
export default config;
