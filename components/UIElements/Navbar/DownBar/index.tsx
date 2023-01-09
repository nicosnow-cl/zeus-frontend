import { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { AppContext } from '../../../../pages/_app';
import { AppDispatch } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import getHexToRgb from '../../../../helpers/getHexToRgb';
import Logo from '../../Logo';
import MenuButton from '../../MenuButton';

const DownBar = () => {
  const { theme } = useContext(AppContext);
  const dispatch = useDispatch<AppDispatch>();

  const backgroundColorNavbar = getHexToRgb(theme?.palette.grey[200]).join(', ');
  const backgroundColorLogo = theme?.palette.grey[50];

  const handleOpenSidebar = () => {
    dispatch(uiActions.handleToggleSidebar());
  };

  return (
    <div
      className={`w-100 d-flex jc-center downbar`}
      style={{
        backgroundColor: `rgba(${backgroundColorNavbar}, 0.8)`,
        height: 60,
      }}
    >
      <div className={`wrapper d-flex jc-center`}>
        <Logo navbar={true} backgroundColor={backgroundColorLogo} />
        <MenuButton onClick={handleOpenSidebar} style={{ marginLeft: 'auto' }} />
      </div>
    </div>
  );
};

export default DownBar;
