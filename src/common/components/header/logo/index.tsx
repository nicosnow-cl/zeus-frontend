import { Box, Heading } from '@radix-ui/themes';

import { LogoContainer } from '@/common/ui/logo-container';
import { LogoIcon } from '@/common/icons';
import { APP_NAME } from '@utils/constants';

export const Logo = () => (
  <LogoContainer>
    <Box className={`w-[40px] h-40px flex items-center justify-center`}>
      <LogoIcon className={`h-[30px] w-[30px]`} />
    </Box>

    <Heading>{APP_NAME}</Heading>
  </LogoContainer>
);
