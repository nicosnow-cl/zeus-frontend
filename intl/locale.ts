import { Locale } from '@config/enums'

export const getLocalesValues = (): string[] => Object.values(Locale)

export const isValueValidLocale = (locale: string | Locale) => {
  if (typeof locale !== 'string') false

  return getLocalesValues().includes(locale as Locale)
}

export const getValidLocale = (locale: string | Locale) => {
  const isValid = isValueValidLocale(locale)

  return {
    isValid,
    locale: isValid ? locale : null,
  }
}
