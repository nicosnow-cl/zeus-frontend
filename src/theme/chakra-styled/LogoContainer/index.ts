import { defineStyleConfig } from '@chakra-ui/react';

import colors from '../../colors';

const LogoContainer = defineStyleConfig({
  baseStyle: ({ colorMode }) => ({
    alignItems: 'center',
    bg: colorMode === 'dark' ? 'gray.100' : 'gray.50',
    color: 'gray.700',
    columnGap: '8px',
    display: 'flex',
    fontFamily: 'heading',
    fontSize: '18px',
    fontWeight: 'medium',
    height: '40px',
    position: 'relative',
    zIndex: 'banner',
    '&:after': {
      bg: 'transparent',
      content: '""',
      display: 'block',
      height: '100%',
      position: 'absolute',
      right: '-30px',
      top: '0',
      zIndex: -1,
      borderRight: '30px solid transparent',
      borderTop:
        colorMode === 'dark'
          ? '40px solid ' + colors.gray['100']
          : '40px solid ' + colors.gray['50'],
    },
  }),
});

export default LogoContainer;
