import { Box, FormLabel, useColorMode } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react';

import MoonIcon from '../../icons/Moon';
import SunIcon from '../../icons/Sun';

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box display="flex" alignItems="center" columnGap="12px">
      <SunIcon color="yellow.500" />
      <Switch id="toggle-color-mode" onChange={toggleColorMode} size="sm" />
      <MoonIcon color="blue.500" />
    </Box>
  );
};

export default ColorModeSwitch;
