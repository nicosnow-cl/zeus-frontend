import { getRequestConfig } from 'next-intl/server';

// import { getLocalesFromJsons } from '@utils';
// import { getLocales } from '@utils/getLocales';
import { getLocalesFromJsons } from '@utils';

export default getRequestConfig(async ({ locale }) => ({
  messages: await getLocalesFromJsons(locale),
}));
