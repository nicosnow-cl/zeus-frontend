import { Box } from '@radix-ui/themes';

import { BottomBar } from './bottom-bar';
import { Logo } from '../logo';
import { NavigationSidebar } from '../navigation-sidebar';
import { TopBar } from './top-bar';

export const DesktopNavbar = () => {
  return (
    <Box className={`z-30`} position="fixed" width="100%">
      <TopBar start={<Logo />} />
      <BottomBar />

      <NavigationSidebar />
    </Box>
  );
};
