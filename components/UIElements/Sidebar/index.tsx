import { Box } from '@mui/system';
import { DarkMode, ExpandMore, LightMode } from '@mui/icons-material';
import {
  Drawer,
  Switch,
  Divider,
  Stack,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '../../../redux/store';
import { IUiState, uiActions } from '../../../redux/reducers/ui';
import checkIfIsServer from '../../../utils/checkIfIsServer';
import CustomButton from '../CustomButton';
import getThemeMode from '../../../utils/getThemeMode';
import NavLinks from '../NavLinks';
import setThemeMode from '../../../utils/setThemeMode';
import ResumeFilters from './ResumeFilters';
import { red } from '@mui/material/colors';
import getHexToRgb from '../../../utils/getHexToRgb';
import styles from './index.module.scss';

const ICON_COLORS = {
  light: '#EABC00',
  dark: '#33567F',
};

const isServer = checkIfIsServer();

const Sidebar = () => {
  const { showSidebar } = useSelector((state: RootState): IUiState => state.ui);
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  const mode = !isServer ? getThemeMode() : 'light';

  const handleCloseSidebar = () => {
    dispatch(uiActions.handleToggleSidebar(false));
  };

  const handleChangeThemeMode = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;
    setThemeMode(checked ? 'dark' : 'light');
  };

  const backgroundColor = getHexToRgb(theme.palette.grey[300]).join(', ');

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
      <Box className={`p-2 d-flex jc-center`} sx={{ marginTop: '100px !important', width: 225 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <LightMode sx={{ color: ICON_COLORS.light }} />
          <Switch checked={mode === 'dark'} onChange={(evt) => handleChangeThemeMode(evt)} />
          <DarkMode sx={{ color: ICON_COLORS.dark }} />
        </Stack>
      </Box>

      <Divider />

      <Box className={`h-100 d-flex fd-column jc-between`}>
        <Box>
          <Accordion sx={{ borderRadius: '0 !important' }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Filtros rapidos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ResumeFilters />
            </AccordionDetails>
          </Accordion>
        </Box>

        <CustomButton customClasses="w-100" label={`Acceso Clientes`} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
