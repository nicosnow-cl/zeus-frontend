import { Dispatch, SetStateAction, useState } from 'react';
import { ReactDOMAttributes } from '@use-gesture/react/dist/declarations/src/types';
import { SpringRef, SpringValue, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

interface IUseDraggableProps {
  conditionToUseDrag?: () => boolean;
  delay?: number;
  fixedBounds?: { left: number; right: number; top: number; bottom: number };
  initialPosition?: { x: number; y: number };
  limited?: boolean;
  onClick?: () => void;
}

interface IUseDraggable {
  x: SpringValue<number>;
  y: SpringValue<number>;
  set: SpringRef<{
    x: number;
    y: number;
  }>;
  bind: (...args: any[]) => ReactDOMAttributes;
  setBounds: Dispatch<
    SetStateAction<{
      left: number;
      right: number;
      top: number;
      bottom: number;
    }>
  >;
}

const useDraggable = ({
  conditionToUseDrag = () => true,
  delay = 500,
  fixedBounds,
  initialPosition = { x: 0, y: 0 },
  onClick = () => {},
}: IUseDraggableProps): IUseDraggable => {
  const [bounds, setBounds] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const [{ x, y }, set] = useSpring(() => initialPosition);

  const bind = useDrag(
    ({ down, tap, offset: [ox, oy] }) => {
      if (!conditionToUseDrag()) return;

      if (tap) onClick();
      else if (ox || oy) {
        set({
          immediate: down,
          x: ox,
          y: oy,
        });
      }
    },
    {
      bounds: fixedBounds || bounds,
      delay,
      from: () => [x.get(), y.get()],
    },
  );

  return { x, y, set, bind, setBounds } as const;
};

export default useDraggable;
