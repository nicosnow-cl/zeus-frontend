import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import useMediaQuery from '@mui/material/useMediaQuery';

import DeviceType from '../types/type.device';

export interface IUseDevice {
  debounceTime?: number;
}

export interface IDevice {
  navbarHeight: string;
  resizeCount: number;
  type: DeviceType;
}

const useDevice = ({ debounceTime = 100 }: IUseDevice): IDevice => {
  const [resizeCount, setResizeCount] = useState<number>(0);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 960px)');

  const handleResize = debounce(() => {
    setResizeCount((prev) => prev + 1);
  }, debounceTime);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  if (isMobile)
    return {
      type: 'mobile',
      resizeCount,
      navbarHeight: '60px',
    } as const;

  if (isTablet)
    return {
      type: 'tablet',
      resizeCount,
      navbarHeight: '95px',
    } as const;

  return {
    type: 'desktop',
    resizeCount,
    navbarHeight: '95px',
  } as const;
};

export default useDevice;
