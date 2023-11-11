'use client'

import { Button } from '@/shadcn-components/ui/button'
import { Flex } from '@radix-ui/themes'
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { FilterSheet } from '../../filter-sheet'
import { searchParamsToUsersFilters } from '@/features/home/utils/params-to-users-filter'
import { useIsFirstRender } from '@/common/hooks/is-first-render'
import { usersFilters } from '@/features/home/signals/users-filters'

export const UserCardsFiltersContainer = () => {
  const searchParams = useSearchParams()
  const isFirstRender = useIsFirstRender()

  const handleUpdateUsersFiltersSignal = (params: ReadonlyURLSearchParams) => {
    const filters = searchParamsToUsersFilters(params)
    usersFilters.value = filters
  }

  useEffect(() => {
    if (isFirstRender) handleUpdateUsersFiltersSignal(searchParams)
  }, [isFirstRender, searchParams])

  return (
    <Flex className="breakout" justify="between" py="4">
      <FilterSheet
        trigger={
          <Button className="rounded-full" variant="default">
            Filtros
          </Button>
        }
      />

      <Button className="rounded-full" variant="outline">
        Sort
      </Button>
    </Flex>
  )
}
