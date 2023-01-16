import { useContext, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AppContext } from '../../../../pages/_app';
import { AppDispatch } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import Constants from '../../../../helpers/constants';
import getHexToRgb from '../../../../helpers/getHexToRgb';
import LogoIcon from '../../../custom-icons/LogoIcon';
import MenuButton from '../../MenuButton';
import styles from './index.module.scss';
import useNavbar from '../../../../hooks/useNavbar';
import ProgressBar from '../ProgressBar';

export interface IMobileNavbarProps {
  setNavbarHeight?: (height: string) => void;
}

const { AppName } = Constants;
const NAVBAR_HEIGHT = '60px';

const MobileNavbar = ({ setNavbarHeight = () => {} }: IMobileNavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useNavbar({ minMoveInPixels: 10 });
  const { theme } = useContext(AppContext);
  const dispatch = useDispatch<AppDispatch>();

  const backgroundColor = getHexToRgb(theme?.palette.grey[200]).join(', ');

  useEffect(() => {
    const { current } = ref;
    if (!current) return;

    setNavbarHeight(`${current.offsetHeight}px`);
  }, [ref, setNavbarHeight]);

  const handleOpenSidebar = () => {
    dispatch(uiActions.handleToggleSidebar());
  };

  return (
    <>
      <ProgressBar />

      <Box
        ref={ref}
        className={`w-100 px-2 d-flex jc-between ai-center downbar ${styles.mobileNavbar}`}
        sx={{
          backgroundColor: `rgba(${backgroundColor}, 0.8)`,
          boxShadow: 1,
          height: NAVBAR_HEIGHT,
          top: isVisible ? '0' : `-${NAVBAR_HEIGHT}`,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <div className={`d-flex ai-center`}>
          <LogoIcon color="primary" sx={{ fontSize: '2.5rem' }} />
          <Typography
            variant="h5"
            fontSize={16}
            sx={(theme) => ({
              color: theme?.palette.getContrastText(theme?.palette.grey[200] || ''),
            })}
          >
            {AppName}
          </Typography>
        </div>
        <MenuButton onClick={handleOpenSidebar} style={{}} />
      </Box>
    </>
  );
};

export default MobileNavbar;
