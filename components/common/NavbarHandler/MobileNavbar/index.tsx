import { useContext, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';

import { AppContext } from '../../../../pages/_app';
import DownBar from './DownBar';
import ProgressBar from '../ProgressBar';
import styles from './index.module.scss';
import TopBar from './TopBar';
import useNavbar from '../../../../hooks/useNavbar';

export interface IMobileNavbarProps {
  downBarHeight?: number;
  setNavbarHeight?: (height: string) => void;
  topBarHeight?: number;
}

const DOWNBAR_HEIGHT = 35;
const TOPBAR_HEIGHT = 20;

const MobileNavbar = ({
  downBarHeight = DOWNBAR_HEIGHT,
  setNavbarHeight = () => {},
  topBarHeight = TOPBAR_HEIGHT,
}: IMobileNavbarProps) => {
  const { isVisible } = useNavbar({ minMoveInPixels: 10 });
  const { theme } = useContext(AppContext);
  const ref = useRef<HTMLDivElement>(null);

  const navbarHeight = `${topBarHeight + downBarHeight}px`;
  const topBarbackgroundColor = theme?.palette.grey[900];
  const downBarBackgroundColor = theme?.palette.grey[200];

  useEffect(() => {
    const { current } = ref;
    if (!current) return;

    setNavbarHeight(`${current.offsetHeight}px`);
  }, [ref, setNavbarHeight]);

  return (
    <>
      <ProgressBar />
      <Box
        ref={ref}
        className={`w-100 downbar ${styles.mobileNavbar}`}
        sx={{
          boxShadow: 1,
          height: navbarHeight,
          top: isVisible ? '0' : `-${navbarHeight}`,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <TopBar height={topBarHeight} backgroundColor={topBarbackgroundColor} />
        <DownBar height={downBarHeight} backgroundColor={downBarBackgroundColor} />
      </Box>
    </>
  );
};

export default MobileNavbar;
