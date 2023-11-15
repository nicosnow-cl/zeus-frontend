'use client'

import { Button } from '@/shadcn-components/ui/button'
import { Flex } from '@radix-ui/themes'
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useRouter } from '@intl/navigation'

import { Routes } from '@config/enums'
import { searchParamsToUsersFilters } from '@/features/home/utils/params-to-users-filter'
import { useIsFirstRender } from '@/common/hooks/is-first-render'
import { UsersCardsFiltersSheet } from '../../ui/presentational/users-cards-filters-sheet'
import {
  UsersFilters,
  usersFiltersActions,
  useUsersFiltersStore,
} from '@/features/home/store/users-filters'

export const UserCardsFiltersContainer = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const isFirstRender = useIsFirstRender()
  const usersFilters = useUsersFiltersStore()

  const handleSetInitialUsersFilters = (params: ReadonlyURLSearchParams) => {
    const filters = searchParamsToUsersFilters(params)

    usersFiltersActions.update(filters)
  }

  const handleUpdateHomeQuery = async (data: Partial<UsersFilters>) => {
    const params = new URLSearchParams()

    if (data.nameUsername) params.set('name', data.nameUsername)
    if (data.appearance?.length) params.set('appearance', data.appearance.join(','))
    if (data.services?.length) params.set('services', data.services.join(','))
    if (data.withVideo) params.set('withVideo', 'true')
    if (data.hasPromo) params.set('hasPromo', 'true')

    const url = `${Routes.Home}?${params.toString()}`

    router.push(url)
  }

  const handleSubmit = (data: UsersFilters) => {
    handleUpdateHomeQuery(data)
    usersFiltersActions.update(data)
  }

  useEffect(() => {
    if (isFirstRender) handleSetInitialUsersFilters(searchParams)
  }, [isFirstRender, searchParams])

  return (
    <Flex className="breakout" justify="between" py="4">
      <UsersCardsFiltersSheet
        trigger={
          <Button className="rounded-full" variant="default">
            Filtros
          </Button>
        }
        defaultValues={usersFilters}
        onSubmit={handleSubmit}
      />

      <Button className="rounded-full" variant="outline">
        Sort
      </Button>
    </Flex>
  )
}
