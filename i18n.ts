import { getRequestConfig } from 'next-intl/server';

import { getMessages } from './intl/getMessages';
import { Locales } from './intl/locales';

export default getRequestConfig(async ({ locale }) => ({
  messages: await getMessages(locale as Locales),
}));
