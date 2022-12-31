import { AppBar, useTheme } from '@mui/material';

import DownBar from './DownBar';
import Sidebar from '../Sidebar';
import TopBar from './TopBar';

const Navbar = () => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 1,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <TopBar backgroundColor={theme.palette.grey[900]} />
        <DownBar />
      </AppBar>

      <Sidebar />
    </>
  );
};

export default Navbar;
