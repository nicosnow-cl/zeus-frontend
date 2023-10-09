import { Box } from '@radix-ui/themes';

import { Top } from './top';
import { Down } from './down';
import { Logo } from '../logo';

export const DesktopNavbar = () => {
  return (
    <Box position="fixed" width="100%">
      <Top start={<Logo />} />
      <Down />
    </Box>
  );
};
