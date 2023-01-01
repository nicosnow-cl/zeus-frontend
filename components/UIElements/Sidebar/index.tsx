import { useDispatch, useSelector } from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import DarkMode from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LightMode from '@mui/icons-material/LightMode';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';

import { IUiState, uiActions } from '../../../redux/reducers/ui';
import { RootState, AppDispatch } from '../../../redux/store';
import checkIfIsServer from '../../../utils/checkIfIsServer';
import CustomButton from '../CustomButton';
import getHexToRgb from '../../../utils/getHexToRgb';
import getThemeMode from '../../../utils/getThemeMode';
import ResumeFilters from './ResumeFilters';
import setThemeMode from '../../../utils/setThemeMode';
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

        <CustomButton customClasses="w-100" label={`Acceso Clientes`} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
