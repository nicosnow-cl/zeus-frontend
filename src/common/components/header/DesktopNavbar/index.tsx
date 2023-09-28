import { Box } from '@chakra-ui/react';

import useNavbar from '../../../hooks/useNavbar';
import ProgressBar from '../ProgressBar';

export interface INavbarProps {
  setNavbarHeight?: (height: string) => void;
}

const DesktopNavbar = ({ setNavbarHeight = () => {} }: INavbarProps) => {
  const { isVisible } = useNavbar();

  // const backgroundColor = useTheme().palette.grey[900];

  return (
    <Box boxShadow="xs" position="fixed" width="100%">
      {/* <TopBar backgroundColor={backgroundColor} isVisible={isVisible} />
      <DownBar /> */}
    </Box>
  );
};

export default DesktopNavbar;
