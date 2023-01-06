import { Theme } from '@mui/system';
import { createContext } from 'react';

import { IDevice } from '../hooks/useDevice';

export interface IAppContextProps {
  theme?: Theme;
  device?: IDevice;
  isServer: boolean;
}

const createAppContext = (context: IAppContextProps) => createContext(context);

export default createAppContext;
