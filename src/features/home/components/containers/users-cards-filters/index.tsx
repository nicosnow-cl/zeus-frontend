'use client'

import { Button } from '@/shadcn-components/ui/button'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

import { useIsFirstRender } from '@/common/hooks/is-first-render'
import { UsersCardsFiltersSheet } from '../../ui/presentational/users-cards-filters-sheet'
import { useUsersCardsFiltersStore } from '@/features/home/store/user-cards-filters'

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
  const isFirstRender = useIsFirstRender()
  const usersFilters = useUsersCardsFiltersStore()

  const handleOpenSheet = (value: boolean) => setOpenSheet(value)

  useEffect(() => {
    if (isFirstRender) return

    handleOpenSheet(false)
  }, [isFirstRender, usersFilters])

  return (
    <div {...restContainerProps} className={classes}>
      <UsersCardsFiltersSheet
        onOpenChange={handleOpenSheet}
        open={openSheet}
        trigger={<Button className="rounded-full">Filtros</Button>}
      />

      <Button className="rounded-full">Sort</Button>
    </div>
  )
}
