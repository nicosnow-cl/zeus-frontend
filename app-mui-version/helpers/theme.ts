import { PaletteMode } from '@mui/material';
import localFont from 'next/font/local';

import Constants from './constants';

const {
  PaletteColorsDark,
  PaletteColorsLight,
  ShadowsDark,
  ShadowsLight,
  // TypographyColorsDark,
  // TypographyColorsLight,
} = Constants;

const quicksand = localFont({
  src: [
    {
      path: '../assets/fonts/quicksand/Quicksand-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/quicksand/Quicksand-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

const sourceSandProp = localFont({
  src: [
    {
      path: '../assets/fonts/source-sans-pro/SourceSansPro-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/source-sans-pro/SourceSansPro-Regular.ttf',
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
    fontSize: 12,
    fontFamily: `${sourceSandProp.style.fontFamily}, Arial, sans-serif`,
    h1: {
      fontFamily: `${quicksand.style.fontFamily}, Arial, sans-serif`,
    },
    h2: {
      fontFamily: `${quicksand.style.fontFamily}, Arial, sans-serif`,
    },
    h3: {
      fontFamily: `${quicksand.style.fontFamily}, Arial, sans-serif`,
    },
    h4: {
      fontFamily: `${quicksand.style.fontFamily}, Arial, sans-serif`,
    },
    h5: {
      fontFamily: `${quicksand.style.fontFamily}, Arial, sans-serif`,
    },
    h6: {
      fontFamily: `${quicksand.style.fontFamily}, Arial, sans-serif`,
    },
    body1: {
      fontFamily: `${sourceSandProp.style.fontFamily}, Arial, sans-serif`,
    },
    body2: {
      fontFamily: `${sourceSandProp.style.fontFamily}, Arial, sans-serif`,
    },
    subtitle1: {
      fontFamily: `${quicksand.style.fontFamily}, Arial, sans-serif`,
    },
    subtitle2: {
      fontFamily: `${sourceSandProp.style.fontFamily}, Arial, sans-serif`,
    },
    caption: {
      fontFamily: `${quicksand.style.fontFamily}, Arial, sans-serif`,
    },
    button: {
      fontFamily: `${quicksand.style.fontFamily}, Arial, sans-serif`,
    },
    select: {
      fontFamily: `${quicksand.style.fontFamily}, Arial, sans-serif`,
    },
  },
  shadows: mode === 'light' ? ShadowsLight : ShadowsDark,
});

export default getTheme;
