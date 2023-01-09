import { createContext } from 'react';
import { NextRouter } from 'next/router';
import { Theme } from '@mui/system';

import { IDevice } from '../hooks/useDevice';

export interface IAppContextProps {
  device?: IDevice;
  isServer: boolean;
  router?: NextRouter;
  theme?: Theme;
}

const createAppContext = (context: IAppContextProps) => createContext(context);

export default createAppContext;
