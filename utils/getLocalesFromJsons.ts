import fs from 'fs';
import path from 'path';

import { LOCALES_FOLDER, LOCALES_FILES } from './constants';

// * ONLY FOR SERVER-SIDE
export const getLocalesFromJsons = async (
  locale: string,
  basePath = LOCALES_FOLDER,
): Promise<{
  [key: string]: string;
}> => {
  const files = LOCALES_FILES(locale).filter((name) => name.endsWith('.json'));

  const mergedJsons = [];
  for (const name of files) {
    const raw = fs.readFileSync(path.join(basePath, locale, name));
    mergedJsons.push(JSON.parse(raw.toString()));
  }

  // ! DEPRECATED CODE, DO NOT USE
  // for (const name of files) {
  //   const json = await import(path.join(basePath, locale, name));
  //   mergedJsons.push(json.default);
  // }

  return mergedJsons.reduce((acc, json) => ({ ...acc, ...json }), {});
};
