import { NextIntlClientProvider } from 'next-intl';

import { Locales } from '@/common/enums';
import { getLocales } from '@utils/getLocales';

export interface IProps {
  children: React.ReactNode;
  locale: Locales;
}

export async function IntlClientProvider({ children, locale }: IProps) {
  let messages;

  try {
    messages = await getLocales(locale);
  } catch (err) {
    console.error(err);

    return null;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
