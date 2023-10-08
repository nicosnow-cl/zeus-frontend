import { LOCALES_FILES } from './constants';

export const getLocales = async (
  locale: string,
): Promise<{
  [key: string]: string;
}> => {
  const files = LOCALES_FILES(locale);
  const filtered = files.filter((file) => !file.endsWith('.json'));

  const locales = {};

  for (const name of filtered) {
    const namespace = await import(`../locales/${locale}/${name}`);

    Object.assign(locales, { [name]: namespace.default });
  }

  return locales;
};
