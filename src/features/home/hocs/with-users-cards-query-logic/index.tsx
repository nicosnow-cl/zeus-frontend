'use client'

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useRouter } from '@intl/navigation'

import { Routes } from '@config/enums'
import { searchParamsToUsersFilters } from '@/features/home/utils/params-to-users-filter'
import { useIsFirstRender } from '@/common/hooks/is-first-render'
import {
  UsersCardsFilters,
  usersCardsFiltersActions,
  useUsersCardsFiltersStore,
} from '@/features/home/store/user-cards-filters'

export type WithUsersCardsQueryLogicProps<T> = {
  Component: React.FC<{
    defaultValues: UsersCardsFilters
    onSubmit: (data: UsersCardsFilters) => void
  }>
}

export function WithUsersCardsQueryLogic<T>({ Component }: WithUsersCardsQueryLogicProps<T>) {
  return function UsersCardsQueryLogicContainer() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const isFirstRender = useIsFirstRender()
    const usersFilters = useUsersCardsFiltersStore()

    const handleSetInitialUsersFilters = (params: ReadonlyURLSearchParams) => {
      const filters = searchParamsToUsersFilters(params)

      usersCardsFiltersActions.update(filters)
    }

    const handleUpdateHomeQuery = async (data: Partial<UsersCardsFilters>) => {
      const params = new URLSearchParams()

      if (data.nameUsername) params.set('name', data.nameUsername)
      if (data.appearance?.length) params.set('appearance', data.appearance.join(','))
      if (data.services?.length) params.set('services', data.services.join(','))
      if (data.withVideo) params.set('withVideo', 'true')
      if (data.hasPromo) params.set('hasPromo', 'true')

      const url = `${Routes.Home}?${params.toString()}`

      router.push(url)
    }

    const handleSubmit = (data: UsersCardsFilters) => {
      handleUpdateHomeQuery(data)
      usersCardsFiltersActions.update(data)
    }

    useEffect(() => {
      if (isFirstRender) handleSetInitialUsersFilters(searchParams)
    }, [isFirstRender, searchParams])

    return <Component defaultValues={usersFilters} onSubmit={handleSubmit} />
  }
}
