import { omitBy } from 'lodash'

import { FindAllProps } from '@/common/repositories/users/findAll'
import { TSearchParams } from '@/common/types/misc/search-params.type'

export const searchParamsToFindAllProps = (searchParams?: TSearchParams): FindAllProps => {
  const query = {
    age: searchParams?.age?.split(',').map((value) => Number(value)),
    appearance: searchParams?.appearance?.split(','),
    hasPromo: searchParams?.hasPromo === 'true',
    name: searchParams?.name,
    nationality: searchParams?.nationality?.split(','),
    price: searchParams?.price?.split(',').map((value) => Number(value)),
    services: searchParams?.services?.split(','),
    type: searchParams?.type?.split(','),
    withVideo: searchParams?.withVideo === 'true',
  }

  return {
    page: searchParams?.page ? Number(searchParams.page) : 0,
    limit: searchParams?.limit ? Number(searchParams.limit) : 10,
    query: omitBy(query, (value) => {
      const isArray = Array.isArray(value)
      if (isArray) return !value.length

      return !value
    }),
  }
}
