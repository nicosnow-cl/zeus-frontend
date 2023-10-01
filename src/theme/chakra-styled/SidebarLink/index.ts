import { defineStyleConfig } from '@chakra-ui/react';

const SidebarLink = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '8px',
    minWidth: '150px',
    height: '40px',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
    columnGap: '10px',
    svg: {
      width: '24px',
      height: '24px',
    },
    '& > #aware': {
      position: 'absolute',
      display: 'block',
      width: '0%',
      height: '0%',
      bottom: 0,
      left: 0,
      borderRadius: '50%',
      backgroundColor: 'primary.500',
      transition: 'width 0.4s ease-in-out, height 0.4s ease-in-out',
      transform: 'translate(-50%, 50%)',
      zIndex: -1,
    },
    '&:hover': {
      '& > #aware': {
        height: 'calc(150px * 2.25)',
        width: 'calc(150px * 2.25)',
      },
    },
    '&:active': {
      backgroundColor: 'primary.500',
    },
  },
});

export default SidebarLink;
