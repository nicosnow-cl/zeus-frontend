import { AbstractIntlMessages } from 'next-intl';
import fs from 'fs';
import path from 'path';

import { Locales } from './locales';

const LOCALES_FOLDER = path.join(process.env.rootDir as string, './intl/locales');
const getLocalesFiles = (locale: Locales) => fs.readdirSync(path.join(LOCALES_FOLDER, locale));

export const getMessages = async (locale: Locales): Promise<AbstractIntlMessages> => {
  const files = getLocalesFiles(locale);
  const filtered = files.filter((file) => file.endsWith('.json'));

  const messages: AbstractIntlMessages = {};

  for (const name of filtered) {
    const namespace = await import(`./locales/${locale}/${name}`);

    Object.assign(messages, { ...namespace.default });
  }

  return messages;
};
