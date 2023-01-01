import { useDispatch } from 'react-redux';
import useTheme from '@mui/material/styles/useTheme';

import { AppDispatch } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import getHexToRgb from '../../../../utils/getHexToRgb';
import Logo from '../../Logo';
import MenuButton from '../../MenuButton';

const DownBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  const backgroundColor = getHexToRgb(theme.palette.grey[200]).join(', ');

  const handleOpenSidebar = () => {
    dispatch(uiActions.handleToggleSidebar());
  };

  return (
    <div
      className={`w-100 d-flex jc-center downbar`}
      style={{
        backgroundColor: `rgba(${backgroundColor}, 0.8)`,
        height: 60,
      }}
    >
      <div className={`wrapper d-flex jc-center`}>
        <Logo navbar={true} backgroundColor={theme.palette.grey[50]} />
        <MenuButton onClick={handleOpenSidebar} sx={{ marginLeft: 'auto' }} />
      </div>
    </div>
  );
};

export default DownBar;
