import fs from 'fs';
import path from 'path';

import { Locales } from './locales';

const LOCALES_FOLDER = path.join(process.env.rootDir as string, 'locales');
const getLocalesFiles = (locale: Locales) => fs.readdirSync(path.join(LOCALES_FOLDER, locale));

export const getLocales = async (
  locale: Locales,
): Promise<{
  [key: string]: string;
}> => {
  const files = getLocalesFiles(locale);
  const filtered = files.filter((file) => file.endsWith('.json'));

  const locales: { [key: string]: string } = {};

  for (const name of filtered) {
    const namespace = await import(`../locales/${locale}/${name}`);

    Object.assign(locales, { ...namespace.default });
  }

  return locales;
};
