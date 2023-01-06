import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';

import DownBar from './DownBar';
import Sidebar from '../Sidebar';
import TopBar from './TopBar';

const Navbar = () => {
  const backgroundColor = useTheme().palette.grey[900];

  return (
    <Box
      sx={{
        boxShadow: 1,
        position: 'fixed',
        width: '100%',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <TopBar backgroundColor={backgroundColor} />
      <DownBar />

      <Sidebar />
    </Box>
  );
};

export default Navbar;
