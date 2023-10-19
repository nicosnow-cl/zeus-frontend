import { notFound } from 'next/navigation';

import { fonts } from '@/theme/fonts';
import { Locales } from '../../intl/locales';
import { MainContainer } from '@/common/components/containers/main';
import { RadixUiProvider } from '@/providers/radix-ui-provider';

import '@styles/globals.css';
import '@styles/theme-config.css';

const MAIN_LOCALES = Object.values(Locales);

function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: Locales;
  };
}) {
  const isValidLocale = MAIN_LOCALES.includes(locale);
  if (!isValidLocale) notFound();

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      className={fonts.map((font) => font.variable).join(' ')}
    >
      <body>
        <RadixUiProvider>
          <MainContainer>{children}</MainContainer>
        </RadixUiProvider>
      </body>
    </html>
  );
}

export default RootLayout;
