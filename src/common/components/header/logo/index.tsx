import { Box, Heading } from '@radix-ui/themes';

import { LogoContainer } from '@/common/ui/logo-container';
import { LogoIcon } from '@/common/icons';

export const Logo = () => (
  <LogoContainer>
    <Box
      className={`flex items-center justify-center bg-crimson-9`}
      style={{ width: '40px', height: '40px' }}
    >
      <LogoIcon className={`fill-woodsmoke-50`} width="30" height="30" />
    </Box>

    <Heading>Tumoco.cl</Heading>
  </LogoContainer>
);
