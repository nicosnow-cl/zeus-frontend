import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/system';
import Box from '@mui/system/Box';
import FemaleOutlined from '@mui/icons-material/FemaleOutlined';

import { AppDispatch } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';
import getHexToRgb from '../../../helpers/getHexToRgb';
import MenuButton from '../MenuButton';
import Sidebar from '../Sidebar';
import styles from './index.module.scss';
import useNavbar from '../../../hooks/useNavbar';

const MobileNavbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isVisible = useNavbar({});
  const theme = useTheme();
  const backgroundColor = getHexToRgb(theme.palette.grey[200]).join(', ');

  const handleOpenSidebar = () => {
    dispatch(uiActions.handleToggleSidebar());
  };

  return (
    <>
      <Box
        className={`w-100 px-2 d-flex jc-between ai-center downbar ${styles.mobileNavbar}`}
        sx={{
          backgroundColor: `rgba(${backgroundColor}, 0.8)`,
          top: isVisible ? '0' : '-60px',
          boxShadow: 1,
          zIndex: (theme) => theme.zIndex?.drawer! + 1,
        }}
      >
        <FemaleOutlined fontSize="large" color="primary" />
        <MenuButton onClick={handleOpenSidebar} style={{}} />
      </Box>

      <Sidebar />
    </>
  );
};

export default MobileNavbar;