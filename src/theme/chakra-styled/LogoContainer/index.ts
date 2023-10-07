import { defineStyleConfig } from '@chakra-ui/react';

import colors from '../../colors';

const LogoContainer = defineStyleConfig({
  baseStyle: ({ colorMode }) => ({
    alignItems: 'center',
    bg: colorMode === 'dark' ? 'black' : 'gray.50',
    color: colorMode === 'dark' ? 'gray.50' : 'gray.700',
    columnGap: '8px',
    display: 'flex',
    fontFamily: 'heading',
    fontSize: '18px',
    fontWeight: 'medium',
    height: '40px',
    position: 'relative',
    zIndex: 'banner',

    // '&:after': {
    //   bg: 'transparent',
    //   content: '""',
    //   display: 'block',
    //   height: '100%',
    //   position: 'absolute',
    //   right: '-30px',
    //   top: '0',
    //   zIndex: -1,
    //   borderRight: '30px solid transparent',
    //   borderTop: colorMode === 'dark' ? '40px solid black' : '40px solid ' + colors.gray['50'],
    // },

    '&:after': {
      bg: colorMode === 'dark' ? 'black' : 'gray.50',
      content: '""',
      display: 'block',
      height: '100%',
      width: '20px',
      position: 'absolute',
      right: '-20px',
      top: '0',
      zIndex: -1,
      borderRadius: '0px 50px 0px 0',
      // borderRight: '30px solid transparent',
      // borderTop: colorMode === 'dark' ? '40px solid black' : '40px solid ' + colors.gray['50'],
    },
  }),
});

export default LogoContainer;
