import { CircleFlag, CircleFlagProps } from 'react-circle-flags'

export type CountryFlagProps = {
  containerProps?: Omit<CircleFlagProps, 'countryCode'>
  countryCode: string
}

export function CountryFlag({ containerProps, countryCode }: CountryFlagProps) {
  const validCountryCode = getValidCountryCode(countryCode)

  function getValidCountryCode(countryCode: string) {
    const countryName = countryCode?.toLowerCase()

    switch (countryName) {
      case 'argentina':
        return 'ar'
      case 'brasileña':
        return 'br'
      case 'chilena':
        return 'cl'
      case 'colombiana':
        return 'co'
      case 'cubana':
        return 'cu'
      case 'paraguaya':
        return 'py'
      case 'venezolana':
        return 've'
      case 'rusa':
        return 'ru'
      case 'española':
        return 'es'
      case 'ucraniana':
        return 'ua'
      default:
        return ''
    }
  }

  return validCountryCode ? (
    <CircleFlag height="20" {...containerProps} countryCode={validCountryCode} />
  ) : null
}
