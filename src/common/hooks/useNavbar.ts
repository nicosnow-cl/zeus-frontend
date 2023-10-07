import { useState } from 'react';
import useDebouncedCallback from 'beautiful-react-hooks/useDebouncedCallback';
import useWindowScroll from 'beautiful-react-hooks/useWindowScroll';

export interface IUseNavbarProps {
  initialOffset?: number;
  initialState?: boolean;
  minMoveInPixels?: number;
  wait?: number;
}

export interface IUseNavbar {
  isVisible: boolean;
  lastOffset: number;
}

export const DEFAULT_PROPS = {
  initialOffset: 0,
  initialState: true,
  minMoveInPixels: 25,
};

const useNavbar = ({
  initialOffset,
  initialState,
  minMoveInPixels,
  wait,
}: IUseNavbarProps = DEFAULT_PROPS): IUseNavbar => {
  const [status, set] = useState<IUseNavbar>({
    isVisible: !!initialState,
    lastOffset: initialOffset ?? window.pageYOffset,
  });
  const onWindowScroll = useWindowScroll();

  onWindowScroll(
    useDebouncedCallback(
      () => {
        const currentYOffset = window.pageYOffset;

        set((prev) => ({
          isVisible:
            currentYOffset === 0 || prev.lastOffset - (minMoveInPixels ?? 0) > currentYOffset,
          lastOffset: currentYOffset,
        }));
      },
      [],
      wait,
    ),
  );

  return status;
};

export default useNavbar;
