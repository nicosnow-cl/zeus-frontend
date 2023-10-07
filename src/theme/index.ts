import { extendBaseTheme } from '@chakra-ui/react';

import colors from './colors';
import components from './components';
import fonts from './fonts';

const theme = extendBaseTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'white',
      },
    },
  },
  colors: { ...colors },
  components: { ...components },
  fonts: { ...fonts },
});

export default theme;
