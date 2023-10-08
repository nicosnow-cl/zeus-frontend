import { getRequestConfig } from 'next-intl/server';

// import { getLocalesFromJsons } from '@utils';
import { getLocales } from '@utils/getLocales';

export default getRequestConfig(async ({ locale }) => ({
  messages: await getLocales(locale),
}));
