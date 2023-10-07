"use client";

import { ColorModeScript } from "@chakra-ui/react";
import { ChakraUiProviders } from "../src/providers/chakra-ui-providers";

import theme from "../src/theme";
import MainContainer from "../src/common/components/containers/MainContainer";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraUiProviders>
          <MainContainer>{children}</MainContainer>
        </ChakraUiProviders>
      </body>
    </html>
  );
}

export default RootLayout;
