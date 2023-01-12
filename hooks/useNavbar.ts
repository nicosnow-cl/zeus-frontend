import { useMemo, useState } from 'react';
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

const useNavbar = ({
  initialOffset = 0,
  initialState = true,
  minMoveInPixels = 25,
  wait,
}: IUseNavbarProps): IUseNavbar => {
  const [status, set] = useState<IUseNavbar>({
    isVisible: initialState,
    lastOffset: initialOffset ?? window.pageYOffset,
  });
  const onWindowScroll = useWindowScroll();

  onWindowScroll(
    useDebouncedCallback(
      () => {
        const currentYOffset = window.pageYOffset;

        set((prev) => ({
          isVisible: currentYOffset === 0 || prev.lastOffset - minMoveInPixels > currentYOffset,
          lastOffset: currentYOffset,
        }));
      },
      [],
      wait,
    ),
  );

  return useMemo(() => status, [status]);
};

export default useNavbar;
