import { ChakraUiProviders } from '../src/providers/chakra-ui-providers';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ChakraUiProviders>{children}</ChakraUiProviders>
      </body>
    </html>
  );
};

export default RootLayout;
