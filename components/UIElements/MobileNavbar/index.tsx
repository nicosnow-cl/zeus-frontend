import { useContext, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import FemaleOutlined from '@mui/icons-material/FemaleOutlined';

import { AppContext } from '../../../pages/_app';
import { AppDispatch } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';
import getHexToRgb from '../../../helpers/getHexToRgb';
import MenuButton from '../MenuButton';
import styles from './index.module.scss';
import useNavbar from '../../../hooks/useNavbar';

export interface IMobileNavbarProps {
  setNavbarHeight?: (height: string) => void;
}

const NAVBAR_HEIGHT = '60px';

const MobileNavbar = ({ setNavbarHeight = () => {} }: IMobileNavbarProps) => {
  const { theme } = useContext(AppContext);
  const dispatch = useDispatch<AppDispatch>();
  const isVisible = useNavbar({});
  const ref = useRef<HTMLDivElement>(null);

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
      <FemaleOutlined fontSize="large" color="primary" />
      <MenuButton onClick={handleOpenSidebar} style={{}} />
    </Box>
  );
};

export default MobileNavbar;
