import { DEFAULT_LOCALE } from '@config/constants'
import { Locale } from '@config/enums'

export const getLocalesValues = (): string[] => Object.values(Locale)

export const isValueValidLocale = (locale: string | Locale): boolean => {
  if (typeof locale !== 'string') false

  return getLocalesValues().includes(locale as Locale)
}

export const getValidLocale = (locale: string | Locale): Locale =>
  isValueValidLocale(locale) ? (locale as Locale) : (DEFAULT_LOCALE as Locale)
