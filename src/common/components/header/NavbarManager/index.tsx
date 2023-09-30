import { Box, Progress } from '@chakra-ui/react';

import DesktopNavbar from '../DesktopNavbar';

const NavbarManager = () => {
  return (
    <Box display="flex" flexDirection="column">
      <DesktopNavbar />
      {/* <Progress w="100%" value={20} size="xs" colorScheme="primary" isIndeterminate /> */}
    </Box>
  );
};

export default NavbarManager;
