import { getRequestConfig } from 'next-intl/server';
import fs from 'fs';
import path from 'path';

import { LOCALES_FOLDER } from '@/common/constants';

export default getRequestConfig(async ({ locale }) => {
  const fileNames = fs.readdirSync(path.join(LOCALES_FOLDER, locale));

  const jsons = [];
  for (const name of fileNames) jsons.push((await import(`./locales/${locale}/${name}`)).default);

  return { messages: jsons.reduce((acc, json) => ({ ...acc, ...json }), {}) };
});
