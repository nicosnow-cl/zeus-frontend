import { useContext, useEffect, useRef, useState } from 'react';
import { useSpring, a } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { debounce } from 'lodash';
import useDraggable from '../../../hooks/useDraggable';
import { AppContext } from '../../../pages/_app';

export interface IDraggableButtonProps {
  btnSize?: number;
  initialPosition?: { x: number; y: number };
  onClick?: () => void;
  zIndex?: number;
}

const DEFAULT_Z_INDEX = 1199;

const DraggableButton = ({
  btnSize = 50,
  initialPosition = { x: 0, y: 0 },
  onClick,
  zIndex = DEFAULT_Z_INDEX,
}: IDraggableButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [canAction, setCanAction] = useState(false);
  const { x, y, bind, set, setBounds } = useDraggable({
    initialPosition,
    onClick,
    conditionToUseDrag: () => canAction,
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
    const handleScroll = debounce(() => {
      const howMuchScroll = window.scrollY;

      if (howMuchScroll === 0) {
        set({ x: 0, y: 0, config: { duration: 200 } });
        setCanAction(false);
      } else if (!canAction) setCanAction(true);
    }, 25);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [x, y, set, canAction]);

  console.count('DraggableButton render');

  return (
    <a.div
      ref={buttonRef}
      style={{
        display: 'inline-block',
        position: 'fixed',
        touchAction: 'none',
        x,
        y,
        zIndex,
      }}
      {...bind()}
    >
      <IconButton
        className="downbar"
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.main,
          width: btnSize,
          height: btnSize,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        })}
      >
        <Search />
      </IconButton>
    </a.div>
  );
};

export default DraggableButton;
