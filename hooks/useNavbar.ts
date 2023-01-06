import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

import checkIfIsServer from '../helpers/checkIfIsServer';

const isServer = checkIfIsServer();

export interface IUseNavbar {
  initialState?: boolean;
  debounceTime?: number;
  initialOffset?: number;
  minMoveInPixels?: number;
}

const useNavbar = ({
  debounceTime = 100,
  initialOffset = 0,
  initialState = true,
  minMoveInPixels = 100,
}: IUseNavbar) => {
  const [yOffset, setYOffset] = useState<number>(
    initialOffset || !isServer ? window.pageYOffset : 0,
  );
  const [isVisible, setIsVisible] = useState<boolean>(initialState);

  const handleScroll = useCallback(() => {
    const currentYOffset = window.pageYOffset;

    setYOffset(currentYOffset);
    setIsVisible(currentYOffset === 0 || yOffset - minMoveInPixels > currentYOffset);
  }, [setIsVisible, yOffset, minMoveInPixels]);

  useEffect(() => {
    const debounceHandleScroll = debounce(handleScroll, debounceTime);
    window.addEventListener('scroll', debounceHandleScroll);

    return () => window.removeEventListener('scroll', debounceHandleScroll);
  }, [handleScroll, debounceTime]);

  return isVisible;
};

export default useNavbar;
