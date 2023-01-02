import '../styles/_nprogress.scss';
import '../styles/index.scss';
import 'the-new-css-reset/css/reset.css'; // Reset styles
import { PaletteMode } from '@mui/material/';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { useMemo, useState } from 'react';
import createTheme from '@mui/material/styles/createTheme';
import NProgress from 'nprogress';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

import checkIfIsServer from '../utils/checkIfIsServer';
import getTheme from '../utils/theme';
import Loader from '../components/Loader';
import store, { persistor } from '../redux/store';
import triggerThemeModeChange from '../utils/triggerThemeModeChange';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const isServer = checkIfIsServer();

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [mode, setMode] = useState<PaletteMode>(
    !isServer ? (localStorage.getItem('themeMode') as PaletteMode) || 'light' : 'light',
  );

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);
  const getLayout = Component.getLayout ?? ((page) => page);

  if (!isServer) {
    triggerThemeModeChange(() => {
      const newMode = (localStorage.getItem('themeMode') as PaletteMode) || 'light';

      setMode(newMode);
    });
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
