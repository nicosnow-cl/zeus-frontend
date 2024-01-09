import { ReadonlyURLSearchParams } from 'next/navigation'

import { UsersCardsFilters } from '@/common/repositories/users/findAll'

export const searchParamsToUsersFilters = (
  params: ReadonlyURLSearchParams
): Partial<UsersCardsFilters> => {
  const filters: Partial<UsersCardsFilters> = {}

  for (const [key, value] of params) {
    switch (key) {
      case 'age':
      case 'price':
        filters[key] = value.split(',').map(Number) as [number, number]
        break
      case 'appearance':
      case 'services':
      case 'nationality':
      case 'type':
        filters[key] = value.split(',')
        break

      case 'withVideo':
      case 'hasPromo':
        filters[key] = value === 'true'
        break
      case 'name':
        filters[key] = value
        break
      default:
        break
    }
  }

  return filters
}
