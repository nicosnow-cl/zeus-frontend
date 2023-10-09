import fs from 'fs';
import path from 'path';

import { Locales } from './locales';

const LOCALES_FOLDER = path.join(process.env.rootDir as string, 'locales');
const getLocalesFiles = (locale: Locales) => fs.readdirSync(path.join(LOCALES_FOLDER, locale));

// * ONLY FOR SERVER-SIDE
export const getLocalesFromJsons = async (
  locale: Locales,
  basePath = LOCALES_FOLDER,
): Promise<{
  [key: string]: string;
}> => {
  const files = getLocalesFiles(locale).filter((name) => name.endsWith('.json'));

  const mergedJsons = [];
  for (const name of files) {
    const raw = fs.readFileSync(path.join(basePath, locale, name));
    mergedJsons.push(JSON.parse(raw.toString()));
  }

  return mergedJsons.reduce((acc, json) => ({ ...acc, ...json }), {});
};
