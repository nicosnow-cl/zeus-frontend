import { CircleFlag, CircleFlagProps } from 'react-circle-flags'
import clsx from 'clsx'

export type CountryFlagProps = {
  containerProps?: Omit<CircleFlagProps, 'countryCode'>
  countryCode: string
}

export function CountryFlag({ containerProps, countryCode }: CountryFlagProps) {
  const { className, ref, ...restContainerProps } = containerProps ?? {}
  const classes = clsx('border-2 rounded-full border-shade-100', className)

  const validCountryCode = getValidCountryCode(countryCode)

  function getValidCountryCode(countryCode: string) {
    switch (countryCode) {
      case 'Argentina':
        return 'ar'
      case 'Brasileña':
        return 'br'
      case 'Chilena':
        return 'cl'
      case 'Colombiana':
        return 'co'
      case 'Cubana':
        return 'cu'
      case 'Paraguaya':
        return 'py'
      case 'Venezolana':
        return 've'
      case 'Rusa':
        return 'ru'
      case 'Española':
        return 'es'
      case 'Ucraniana':
        return 'ua'
      default:
        return ''
    }
  }

  return validCountryCode ? (
    <CircleFlag
      height="20"
      {...restContainerProps}
      countryCode={validCountryCode}
      className={classes}
    />
  ) : null
}
