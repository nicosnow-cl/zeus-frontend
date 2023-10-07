'use client';

import { ColorModeScript } from '@chakra-ui/react';
import { notFound } from 'next/navigation';

import { ChakraUiProviders } from '../../src/providers/chakra-ui-providers';
import Locales from '../../src/common/enums/locales';
import theme from '../../src/theme';
import MainContainer from '../../src/common/components/containers/MainContainer';
import { IntlClientProvider } from '@/providers/intl-client-provider';

function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = params;

  const isValidLocale = !!Locales[locale as keyof typeof Locales];
  if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <IntlClientProvider locale={locale}>
          <ChakraUiProviders>
            <MainContainer>{children}</MainContainer>
          </ChakraUiProviders>
        </IntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
