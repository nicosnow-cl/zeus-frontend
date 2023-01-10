import { useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';

import DownBar from './DownBar';
import TopBar from './TopBar';
import useNavbar from '../../../hooks/useNavbar';

export interface INavbarProps {
  setNavbarHeight?: (height: string) => void;
}

const Navbar = ({ setNavbarHeight = () => {} }: INavbarProps) => {
  const isVisible = useNavbar({});

  const backgroundColor = useTheme().palette.grey[900];

  useLayoutEffect(() => {
    setNavbarHeight(`${isVisible ? 95 : 60}px`);
  }, [isVisible, setNavbarHeight]);

  return (
    <Box
      sx={{
        boxShadow: 1,
        position: 'fixed',
        width: '100%',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <TopBar backgroundColor={backgroundColor} isVisible={isVisible} />
      <DownBar />
    </Box>
  );
};

export default Navbar;
