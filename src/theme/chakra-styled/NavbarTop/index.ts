import { defineStyleConfig } from '@chakra-ui/react';

import colors from '../../colors';

const NavbarTop = defineStyleConfig({
  baseStyle: ({ colorMode }) => ({
    alignItems: 'center',
    bg: 'transparent',
    color: 'white',
    display: 'flex',
    fontFamily: 'heading',
    fontSize: '12px',
    fontWeight: 'semibold',
    justifyContent: 'space-between',
    width: '100%',
    '&:before': {
      backdropFilter: 'auto',
      backdropSaturate: 180,
      backdropBlur: '20px',
      bg: colorMode === 'dark' ? `gray.900` : 'gray.800',
      content: '""',
      display: 'block',
      height: '40px',
      left: 0,
      opacity: 0.9,
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: -1,
    },
  }),
});

export default NavbarTop;
