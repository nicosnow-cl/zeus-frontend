import { PaletteMode } from '@mui/material';
import localFont from '@next/font/local';

import Constants from './constants';

const {
  PaletteColorsDark,
  PaletteColorsLight,
  ShadowsDark,
  ShadowsLight,
  TypographyColorsDark,
  TypographyColorsLight,
} = Constants;

const quicksand = localFont({
  src: [
    {
      path: '../assets/fonts/Quicksand-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Quicksand-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? PaletteColorsLight : PaletteColorsDark),
  },
  typography: {
    fontFamily: `${quicksand.style.fontFamily}, Arial, sans-serif`,
    fontSize: 12,
    ...(mode === 'light' ? TypographyColorsLight : TypographyColorsDark),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
        }
      `,
    },
  },
  shadows: mode === 'light' ? ShadowsLight : ShadowsDark,
});

export default getTheme;
