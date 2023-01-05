import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import useTheme from '@mui/material/styles/useTheme';

import { AppDispatch } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import getHexToRgb from '../../../../helpers/getHexToRgb';
import Logo from '../../Logo';
import MenuButton from '../../MenuButton';
import NavLinks from '../NavLinks/index';

const links: Array<{ label: string; href: string }> = [{ label: 'Inicio', href: '/' }];

const DownBar = () => {
  const router = useRouter();
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
        {router.pathname !== '/' && <NavLinks activePath={router.pathname} links={links} />}
        <Logo navbar={true} backgroundColor={theme.palette.grey[50]} />
        <MenuButton onClick={handleOpenSidebar} style={{ marginLeft: 'auto' }} />
      </div>
    </div>
  );
};

export default DownBar;
