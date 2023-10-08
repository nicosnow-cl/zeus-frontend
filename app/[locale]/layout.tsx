import '@radix-ui/themes/styles.css';
import '@styles/globals.css';
import '@styles/theme-config.css';

import { notFound } from 'next/navigation';

import { Locales } from '@/common/enums';
import { RadixUiProvider } from '@/providers/radix-ui-provider';
import { fonts } from '@/theme/fonts';

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
    <html
      lang={locale}
      className={fonts.map((font) => font.variable).join(' ')}
      suppressHydrationWarning
    >
      <body>
        <RadixUiProvider>{children}</RadixUiProvider>
      </body>
    </html>
  );
}

export default RootLayout;
