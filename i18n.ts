import { getRequestConfig } from 'next-intl/server';

import { getLocales } from './intl/getLocales';
import { Locales } from './intl/locales';

export default getRequestConfig(async ({ locale }) => ({
  messages: await getLocales(locale as Locales),
}));
