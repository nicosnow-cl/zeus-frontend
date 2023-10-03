import { defineStyleConfig } from '@chakra-ui/react';

const SidebarContainer = defineStyleConfig({
  baseStyle: ({ colorMode }) => ({
    alignItems: 'center',
    bg: 'transparent',
    color: 'white',
    fontFamily: 'heading',
    fontSize: '12px',
    fontWeight: 'semibold',
    marginTop: '40px',
    minH: '100vh',
    overflow: 'hidden',
    paddingTop: '25px',
    position: 'fixed',
    transition: 'width 0.25s ease-in-out',
    width: '40px',
    zIndex: 'banner',
    '&:hover': {
      width: '150px',
    },
    '&:before': {
      bg: colorMode === 'dark' ? `gray.900` : 'gray.800',
      content: '""',
      display: 'block',
      height: '100%',
      left: 0,
      opacity: 0.9,
      position: 'absolute',
      top: 0,
      width: '150px',
      zIndex: -1,
    },
  }),
});

export default SidebarContainer;
