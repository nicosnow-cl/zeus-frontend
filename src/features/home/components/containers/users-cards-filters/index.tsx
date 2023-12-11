'use client'

import { Button } from '@/shadcn-components/ui/button'
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRouter } from '@intl/navigation'

import { Routes } from '@config/enums'
import { searchParamsToUsersFilters } from '@/features/home/utils/params-to-users-filter'
import { useIsFirstRender } from '@/common/hooks/is-first-render'
import { UsersCardsFiltersSheet } from '../../ui/presentational/users-cards-filters-sheet'
import {
  UsersCardsFilters,
  usersCardsFiltersActions,
  useUsersCardsFiltersStore,
} from '@/features/home/store/user-cards-filters'
import clsx from 'clsx'

export type UsersCardsMobileFiltersContainerProps = {
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
}

export const UsersCardsMobileFiltersContainer = ({
  containerProps,
}: UsersCardsMobileFiltersContainerProps) => {
  const { className, ...restContainerProps } = containerProps ?? {}
  const classes = clsx(
    'flex gap-2 justify-between rounded-full bg-slate-200 p-1 dark:bg-shade-900/25',
    className
  )

  const [openSheet, setOpenSheet] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const isFirstRender = useIsFirstRender()
  const usersFilters = useUsersCardsFiltersStore()

  const handleOpenSheet = (value: boolean) => setOpenSheet(value)

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

  return (
    <div {...restContainerProps} className={classes}>
      <UsersCardsFiltersSheet
        defaultValues={usersFilters}
        onOpenChange={handleOpenSheet}
        onSubmit={handleSubmit}
        open={openSheet}
        trigger={<Button className="rounded-full">Filtros</Button>}
      />

      <Button className="rounded-full">Sort</Button>
    </div>
  )
}
