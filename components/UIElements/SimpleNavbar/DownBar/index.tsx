import { Button, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { AppDispatch } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import getHexToRgb from '../../../../utils/getHexToRgb';
import Logo from '../../Logo';
import MenuButton from '../../MenuButton';

const DownBar = () => {
  const router = useRouter();
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  const backgroundColor = getHexToRgb(theme.palette.grey[200]).join(', ');

  const handleOpenSidebar = () => {
    dispatch(uiActions.handleToggleSidebar());
  };

  const handleGoToHome = () => {
    router.push('/');
  };

  return (
    <div
      className={`wrapper d-flex jc-center downbar`}
      style={{
        backgroundColor: `rgba(${backgroundColor}, 0.8)`,
        height: 60,
        margin: '0 auto !important',
        position: 'relative',
      }}
    >
      <Button
        onClick={handleGoToHome}
        size={`small`}
        sx={{ marginRight: 'auto', height: '100%', borderRadius: 0 }}
        variant="contained"
      >
        Inicio
      </Button>
      <Logo navbar={true} backgroundColor={theme.palette.grey[50]} />
      <MenuButton onClick={handleOpenSidebar} sx={{ flex: '0  1 auto', marginLeft: 'auto' }} />
    </div>
  );
};

export default DownBar;
