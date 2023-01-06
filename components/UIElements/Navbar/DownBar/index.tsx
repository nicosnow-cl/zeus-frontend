import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { AppContext } from '../../../../pages/_app';
import { AppDispatch } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import getHexToRgb from '../../../../helpers/getHexToRgb';
import Logo from '../../Logo';
import MenuButton from '../../MenuButton';
import NavLinks from '../NavLinks/index';

const links: Array<{ label: string; href: string }> = [{ label: 'Inicio', href: '/' }];

const DownBar = () => {
  const { theme } = useContext(AppContext);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

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
        {router.pathname !== '/' && <NavLinks activePath={router.pathname} links={links} />}
        <Logo navbar={true} backgroundColor={backgroundColorLogo} />
        <MenuButton onClick={handleOpenSidebar} style={{ marginLeft: 'auto' }} />
      </div>
    </div>
  );
};

export default DownBar;
