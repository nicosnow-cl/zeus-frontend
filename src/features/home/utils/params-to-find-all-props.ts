import { omitBy } from 'lodash'

import { FindAllProps } from '@/common/repositories/users/findAll'
import { TSearchParams } from '@/common/types/misc/search-params.type'

export const searchParamsToFindAllProps = (searchParams?: TSearchParams): FindAllProps => {
  const query = {
    name: searchParams?.name,
    appearance: searchParams?.appearance?.split(','),
    services: searchParams?.services?.split(','),
    hasPromo: searchParams?.promotion === 'true',
    withVideo: searchParams?.video === 'true',
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
