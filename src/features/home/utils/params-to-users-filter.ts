import { ReadonlyURLSearchParams } from 'next/navigation'

import { UsersFilters } from '../store/users-filters'

export const searchParamsToUsersFilters = (
  params: ReadonlyURLSearchParams
): Partial<UsersFilters> => {
  const filters: Partial<UsersFilters> = {}

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
