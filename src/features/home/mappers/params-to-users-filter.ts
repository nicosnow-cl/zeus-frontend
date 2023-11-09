import { ReadonlyURLSearchParams } from 'next/navigation'

import { TUsersFilters, DEFAULT_VALUES } from '../signals/users-filters'

export const searchParamsToUsersFilters = (params: ReadonlyURLSearchParams): TUsersFilters => {
  const filters: TUsersFilters = { ...DEFAULT_VALUES }

  for (const [key, value] of params) {
    switch (key) {
      case 'appearance':
      case 'services':
        filters[key] = value.split(',')
        break
      case 'withVideo':
      case 'hasPromo':
        filters[key] = value === 'true'
        break
      case 'name':
        filters.nameUsername = value
        break
      default:
        break
    }
  }

  return filters
}
