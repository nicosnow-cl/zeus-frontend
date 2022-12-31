import { Box } from '@mui/system';
import { DarkMode, LightMode } from '@mui/icons-material';
import { Drawer, Switch, Divider, Stack, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { AppDispatch, RootState } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import checkIfIsServer from '../../../../utils/checkIfIsServer';
import CustomButton from '../../CustomButton';
import getThemeMode from '../../../../utils/getThemeMode';
import setThemeMode from '../../../../utils/setThemeMode';

const ICON_COLORS = {
  light: '#EABC00',
  dark: '#33567F',
};
const isServer = checkIfIsServer();

const Sidebar = () => {
  const showSidebar = useSelector((state: RootState): boolean => state.ui.showSidebar);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const mode = !isServer ? getThemeMode() : 'light';

  const handleCloseSidebar = () => {
    dispatch(uiActions.handleToggleSidebar(false));
  };

  const handleChangeThemeMode = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;
    setThemeMode(checked ? 'dark' : 'light');
  };

  const handleGoTo = (path: string) => {
    handleCloseSidebar();
    router.push(path);
  };

  return (
    <Drawer
      anchor="right"
      open={showSidebar}
      onClose={handleCloseSidebar}
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
        },
      }}
    >
      <Box className={`p-2 d-flex jc-center`} sx={{ marginTop: '100px !important', width: 225 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <LightMode sx={{ color: ICON_COLORS.light }} />
          <Switch checked={mode === 'dark'} onChange={(evt) => handleChangeThemeMode(evt)} />
          <DarkMode sx={{ color: ICON_COLORS.dark }} />
        </Stack>
      </Box>

      <Divider />

      <div className={`h-100 d-flex fd-column jc-between`}>
        <div className={`p-2 d-flex`}>
          <Button className={`w-100 `} variant="outlined" onClick={() => handleGoTo('/')}>
            Inicio
          </Button>
        </div>

        <CustomButton customClasses="w-100" label={`Acceso Clientes`} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
