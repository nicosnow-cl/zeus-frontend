import { Box, Heading } from '@radix-ui/themes';

import { LogoContainer } from '@/common/ui/others/logo-container';
import { LogoIcon } from '@/common/icons';
import { APP_NAME } from '../../../../../constants/main';

export const Logo = () => (
  <LogoContainer>
    <Box className={`h-40px flex w-[40px] items-center justify-center`}>
      <LogoIcon className={`h-[30px] w-[30px]`} />
    </Box>

    <Heading>{APP_NAME}</Heading>
  </LogoContainer>
);
