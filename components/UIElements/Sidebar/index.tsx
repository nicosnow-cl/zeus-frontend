import { useDispatch, useSelector } from 'react-redux';
import DarkMode from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import LightMode from '@mui/icons-material/LightMode';
import Switch from '@mui/material/Switch';
import useTheme from '@mui/material/styles/useTheme';
import { useContext } from 'react';

import { IUiState, uiActions } from '../../../redux/reducers/ui';
import { RootState, AppDispatch } from '../../../redux/store';
import checkIfIsServer from '../../../helpers/checkIfIsServer';
import CustomButton from '../CustomButton';
import getHexToRgb from '../../../helpers/getHexToRgb';
import getThemeMode from '../../../helpers/getThemeMode';
import setThemeMode from '../../../helpers/setThemeMode';
import styles from './index.module.scss';
import NavLinks from './NavLinks';
import ILink from '../../../interfaces/objects/interface.link';
import { AppContext } from '../../../pages/_app';

const ICON_COLORS = {
  light: '#EABC00',
  dark: '#33567F',
};

const LINKS: ILink[] = [
  {
    title: 'Inicio',
    href: '/',
  },
  {
    title: 'Anunciate',
    href: '/anunciate',
  },
  {
    title: 'Contacto',
    href: '/contacto',
  },
];

const Sidebar = () => {
  const { isServer, theme } = useContext(AppContext);
  const showSidebar = useSelector((state: RootState): boolean => state.ui.showSidebar);
  const dispatch = useDispatch<AppDispatch>();

  const backgroundColor = getHexToRgb(theme?.palette.grey[300]).join(', ');
  const mode = !isServer ? getThemeMode() : 'light';

  const handleCloseSidebar = () => {
    dispatch(uiActions.handleToggleSidebar(false));
  };

  const handleChangeThemeMode = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;
    setThemeMode(checked ? 'dark' : 'light');
  };

  return (
    <Drawer
      className={`${styles.sidebar}`}
      anchor="right"
      open={showSidebar}
      onClose={handleCloseSidebar}
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: `rgba(${backgroundColor}, 0.8)`,
        },
      }}
    >
      <div
        className={`p-2 d-flex jc-center ai-center col-gap-3`}
        style={{ marginTop: 100, width: 225 }}
      >
        <LightMode sx={{ color: ICON_COLORS.light }} />
        <Switch checked={mode === 'dark'} onChange={(evt) => handleChangeThemeMode(evt)} />
        <DarkMode sx={{ color: ICON_COLORS.dark }} />
      </div>

      <Divider />

      <div className={`h-100 d-flex fd-column jc-between`}>
        <div className={`pt-1 px-2 d-flex fd-column row-gap-1`}>
          <NavLinks links={LINKS} />
        </div>

        <CustomButton customClasses="w-100" label={`Acceso Clientes`} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
