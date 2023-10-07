import { NextIntlClientProvider } from 'next-intl';

import Locales from '@/common/enums/locales';

export interface IProps {
  children: React.ReactNode;
  locale: Locales;
}

export async function IntlClientProvider({ children, locale }: IProps) {
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    return null;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
