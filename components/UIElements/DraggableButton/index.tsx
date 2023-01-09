import { a } from '@react-spring/web';
import { RefObject, useContext, useEffect, useRef, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';

import { AppContext } from '../../../pages/_app';
import getHexToRgb from '../../../helpers/getHexToRgb';
import useDraggable from '../../../hooks/useDraggable';
import styles from './index.module.scss';

export interface IDraggableButtonProps {
  btnSize?: number;
  containerRef?: RefObject<HTMLDivElement>;
  icon?: JSX.Element;
  initialPosition?: { x: number; y: number };
  onClick?: () => void;
  zIndex?: number;
}

const DEFAULT_Z_INDEX = 1199;

const DraggableButton = ({
  btnSize = 50,
  containerRef,
  icon = <Search />,
  initialPosition = { x: 0, y: 0 },
  onClick,
  zIndex = DEFAULT_Z_INDEX,
}: IDraggableButtonProps) => {
  const { theme } = useContext(AppContext);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [otherProperties, setOtherProperties] = useState({
    position: 'relative',
    transform: 'scale(1)',
    isActive: false,
  });
  const { x, y, bind, set, setBounds } = useDraggable({
    initialPosition,
    onClick,
    conditionToUseDrag: () => otherProperties.isActive,
  });

  useEffect(() => {
    if (!buttonRef.current) return;

    const { current } = buttonRef;

    const left = -current.offsetLeft;
    const right = window.innerWidth - current.offsetLeft - current.offsetWidth;
    const top = -current.offsetTop;
    const bottom = window.innerHeight - current.offsetTop - current.offsetHeight;

    setBounds({ left, right, top, bottom });
  }, [buttonRef, setBounds]);

  useEffect(() => {
    const { current } = containerRef || { current: null };
    if (!current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        set({ x: 0, y: 0, config: { duration: 200 } });
        setOtherProperties({ position: 'relative', transform: 'scale(1)', isActive: false });
      } else if (!entry.isIntersecting && !otherProperties.isActive) {
        setOtherProperties({ position: 'fixed', transform: 'scale(1.1)', isActive: true });
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, [containerRef, set, otherProperties.isActive]);

  const backgroundColor = getHexToRgb(theme?.palette.primary.main).join(', ');
  const backgroundColorHover = getHexToRgb(theme?.palette.primary.dark).join(', ');

  return (
    <a.div
      ref={buttonRef}
      style={{
        display: 'inline-block',
        position: otherProperties.position as 'relative' | 'fixed',
        touchAction: 'none',
        x,
        y,
        zIndex,
      }}
      {...bind()}
    >
      <IconButton
        disabled={!otherProperties.isActive}
        className={`downbar ${styles.draggableBtn}`}
        sx={{
          '&:hover': { backgroundColor: `rgba(${backgroundColorHover}, 0.6)` },
          backgroundColor: `rgba(${backgroundColor}, 0.6)`,
          height: btnSize,
          transform: otherProperties.transform,
          width: btnSize,
        }}
      >
        {icon}
      </IconButton>
    </a.div>
  );
};

export default DraggableButton;
