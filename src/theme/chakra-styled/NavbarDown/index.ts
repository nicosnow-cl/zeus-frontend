import { defineStyleConfig } from '@chakra-ui/react';

const NavbarDown = defineStyleConfig({
  baseStyle: ({ colorMode }) => ({
    alignItems: 'center',
    bg: colorMode === 'dark' ? 'gray.200' : 'gray.50',
    color: 'gray.800',
    display: 'flex',
    fontSize: '12px',
    fontWeight: 'semibold',
    justifyContent: 'space-between',
    width: '100%',
    height: '25px',
    fontFamily: 'body',
    paddingX: '8px',
    borderTop: '1px solid',
    borderColor: 'gray.300',
  }),
});

export default NavbarDown;
