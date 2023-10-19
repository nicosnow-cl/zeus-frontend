import { getRequestConfig } from 'next-intl/server';

import { getMessages } from './intl/getMessages';
import { Locale } from './intl/locale';

export default getRequestConfig(async ({ locale }) => ({
  messages: await getMessages(locale as Locale),
}));
