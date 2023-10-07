import { Box, Progress } from '@chakra-ui/react';

import DesktopNavbar from '../DesktopNavbar';

const NavbarManager = () => {
  return (
    <Box w="100%" display="block" position="fixed" zIndex="banner">
      <DesktopNavbar />
    </Box>
  );
};

export default NavbarManager;
