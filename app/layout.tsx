'use client';

import { ColorModeScript } from '@chakra-ui/react';
import { ChakraUiProviders } from '../src/providers/chakra-ui-providers';

import theme from '../src/theme';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraUiProviders>{children}</ChakraUiProviders>
      </body>
    </html>
  );
}

export default RootLayout;
