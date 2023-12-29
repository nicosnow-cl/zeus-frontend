import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useRouter } from '@intl/navigation'

import { Routes } from '@config/enums'
import { searchParamsToUsersFilters } from '@/features/home/mappers/params-to-users-filter'
import {
  usersCardsFiltersActions,
  useUsersCardsFiltersStore,
} from '@/features/home/store/user-cards-filters'
import { UsersCardsFilters } from '@/common/repositories/users/findAll'

export type WithUsersCardsQueryLogicProps<T> = {
  Component: React.FC<{
    defaultValues?: UsersCardsFilters
    onSubmit: (data: UsersCardsFilters) => void
    values?: UsersCardsFilters
  }>
}

export function withUsersCardsQueryLogic<T>({ Component }: WithUsersCardsQueryLogicProps<T>) {
  return function UsersCardsQueryLogicContainer() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const usersFilters = useUsersCardsFiltersStore()

    const handleUpdateUserFiltersStore = (params: ReadonlyURLSearchParams) => {
      const filters = searchParamsToUsersFilters(params)

      usersCardsFiltersActions.update(filters)
    }

    const handleUpdateHomeQuery = (data: Partial<UsersCardsFilters>) => {
      const params = new URLSearchParams()

      console.log({ data })

      if (data.appearance?.length) params.set('appearance', data.appearance.join(','))
      if (data.hasPromo) params.set('hasPromo', 'true')
      if (data.name) params.set('name', data.name)
      if (data.nationality?.length) params.set('nationality', data.nationality.join(','))
      if (data.services?.length) params.set('services', data.services.join(','))
      if (data.type) params.set('type', data.type.join(','))
      if (data.withVideo) params.set('withVideo', 'true')

      const url = `${Routes.Home}?${params.toString()}`

      router.push(url)
    }

    const handleSubmit = (data: UsersCardsFilters) => {
      handleUpdateHomeQuery(data)
    }

    useEffect(() => {
      handleUpdateUserFiltersStore(searchParams)
    }, [searchParams])

    return <Component values={usersFilters} onSubmit={handleSubmit} />
  }
}
