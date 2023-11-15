import { ReadonlyURLSearchParams } from 'next/navigation'

import { UsersCardsFilters } from '../store/user-cards-filters'

export const searchParamsToUsersFilters = (
  params: ReadonlyURLSearchParams
): Partial<UsersCardsFilters> => {
  const filters: Partial<UsersCardsFilters> = {}

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
