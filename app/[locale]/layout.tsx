import '@radix-ui/themes/styles.css';
import '@styles/globals.css';

import { notFound } from 'next/navigation';

import { Locales } from '@/common/enums';
import { RadixUiProvider } from '@/providers/radix-ui-provider';

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
    <html lang={locale} suppressHydrationWarning>
      <body>
        <RadixUiProvider>{children}</RadixUiProvider>
      </body>
    </html>
  );
}

export default RootLayout;
