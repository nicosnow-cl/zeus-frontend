import '../styles/_nprogress.scss';
import '../styles/index.scss';
import 'the-new-css-reset/css/reset.css'; // Reset styles
import { PaletteMode, responsiveFontSizes } from '@mui/material/';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { useMemo, useState } from 'react';
import createTheme from '@mui/material/styles/createTheme';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

import checkIfIsServer from '../helpers/checkIfIsServer';
import createAppContext from '../contexts/app';
import getTheme from '../helpers/theme';
import Loader from '../components/Loader';
import store, { persistor } from '../redux/store';
import triggerThemeModeChange from '../helpers/triggerThemeModeChange';
import useDevice from '../hooks/useDevice';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const isServer = checkIfIsServer();
export const AppContext = createAppContext({ isServer });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [mode, setMode] = useState<PaletteMode>(
    !isServer ? (localStorage.getItem('themeMode') as PaletteMode) || 'light' : 'light',
  );
  const device = useDevice({});
  const router = useRouter();
  const theme = useMemo(() => responsiveFontSizes(createTheme(getTheme(mode))), [mode]);

  if (!isServer) {
    triggerThemeModeChange(() => {
      const newMode = (localStorage.getItem('themeMode') as PaletteMode) || 'light';

      setMode(newMode);
    });
  }

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppContext.Provider value={{ isServer, theme, device, router }}>
            {getLayout(<Component {...pageProps} />)}
          </AppContext.Provider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
