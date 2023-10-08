import { ColorModeScript } from '@chakra-ui/react';
import { notFound } from 'next/navigation';

import { ChakraUiProviders } from '@/providers/chakra-ui-providers';
import { IntlClientProvider } from '@/providers/intl-client-provider';
import { Locales } from '@/common/enums';
import { theme } from '@/theme';
import MainContainer from '@/common/components/containers/MainContainer';

function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: Locales;
  };
}) {
  const isValidLocale = Boolean(Locales[locale]);
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
