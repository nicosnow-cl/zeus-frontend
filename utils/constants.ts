const PaletteColorsLight = {
  primary: {
    dark: '#AA0035',
    light: '#FF9AB0',
    main: '#D22A52',
  },
  secondary: {
    dark: '#816c14',
    light: '#9a862d',
    main: '#8f7816',
  },
  info: {
    dark: '#0d68a8',
    light: '#409bdb',
    main: '#1082d2',
  },
};

const TypographyColorsLight = {
  h1: { color: '#0B0B0B' },
  h2: { color: '#0B0B0B' },
  h3: { color: '#0B0B0B' },
  h4: { color: '#0B0B0B' },
  h5: { color: '#0B0B0B' },
  h6: { color: '#0B0B0B' },
  subtitle1: { color: '#0B0B0B' },
  subtitle2: { color: '#0B0B0B' },
  body1: { color: '#0B0B0B' },
  body2: { color: '#0B0B0B' },
};

const ShadowsLight: any = [
  'none',
  '0px 1px 4px rgba(0, 0, 0, 0.16)',
  '0px 2px 5px -1px rgba(50, 50, 93, 0.25), 0px 1px 3px -1px rgba(0, 0, 0, 0.3)',
  '0px 4px 12px rgba(0, 0, 0, 0.1)',
  ...Array(21).fill('0px 4px 12px rgba(0, 0, 0, 0.1)'),
];

const PaletteColorsDark = {
  primary: {
    main: '#D22A52',
    light: '#FF9AB0',
    dark: '#AA0035',
  },
  secondary: {
    main: '#8f7816',
    light: '#9a862d',
    dark: '#816c14',
  },
  info: {
    dark: '#0d68a8',
    light: '#409bdb',
    main: '#1082d2',
  },
  grey: {
    '50': '#252525',
    '100': '#212121',
    '200': '#1e1e1e',
    '300': '#1a1a1a',
    '400': '#161616',
    '500': '#131313',
    '600': '#0f0f0f',
    '700': '#0B0B0B',
    '800': '#070707',
    '900': '#040404',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
};

const TypographyColorsDark = {
  h1: { color: '#FAFAFA' },
  h2: { color: '#FAFAFA' },
  h3: { color: '#FAFAFA' },
  h4: { color: '#FAFAFA' },
  h5: { color: '#FAFAFA' },
  h6: { color: '#FAFAFA' },
  subtitle1: { color: '#FAFAFA' },
  subtitle2: { color: '#FAFAFA' },
  body1: { color: '#FAFAFA' },
  body2: { color: '#FAFAFA' },
};

const ShadowsDark: any = [
  'none',
  '0px 1px 4px rgba(255, 255, 255, 0.16)',
  '0px 2px 5px -1px rgba(205, 205, 162, 0.25), 0px 1px 3px -1px rgba(255, 255, 255, 0.3)',
  '0px 4px 12px rgba(255, 255, 255, 0.1)',
  ...Array(21).fill('0px 4px 12px rgba(255, 255, 255, 0.1)'),
];

const Constants = {
  PaletteColorsLight,
  PaletteColorsDark,
  ShadowsDark,
  ShadowsLight,
  TypographyColorsDark,
  TypographyColorsLight,
};

export default Constants;
