import { DEFAULT_LOCALE } from '../constants/main';

export enum Locale {
  Es = 'es',
  En = 'en',
}

export const getLocalesValues = (): string[] => Object.values(Locale);

export const isValueValidLocale = (locale: string | Locale): boolean => {
  if (typeof locale !== 'string') false;

  return getLocalesValues().includes(locale as Locale);
};

export const getValidLocale = (locale: string | Locale): Locale =>
  isValueValidLocale(locale) ? (locale as Locale) : (DEFAULT_LOCALE as Locale);
