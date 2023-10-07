import { Box, Heading } from '@chakra-ui/react';

import { LogoContainer } from '../../ui/LogoContainer';
import LogoIcon from '../../icons/Logo';

const Logo = () => {
  return (
    <LogoContainer>
      <Box bgColor="primary.500" padding="8px" h="40px" minW="40px">
        <LogoIcon w={6} h={6} fill="white" />
      </Box>

      <Heading size="md" noOfLines={1} fontWeight="medium">
        Tumoco.cl
      </Heading>
    </LogoContainer>
  );
};

export default Logo;
