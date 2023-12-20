'use client'

import { Button } from '@/shadcn-components/ui/button'
import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

import { UsersCardsFiltersSheet } from '../../ui/presentational/users-cards-filters-sheet'

export type UsersCardsMobileFiltersContainerProps = {
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
}

export const UsersCardsMobileFiltersContainer = ({
  containerProps,
}: UsersCardsMobileFiltersContainerProps) => {
  const { className, ...restContainerProps } = containerProps ?? {}
  const classes = twMerge(
    'flex gap-2 justify-between rounded-full bg-slate-200 p-1 dark:bg-shade-900/25',
    className
  )

  const [openSheet, setOpenSheet] = useState(false)

  const handleOpenSheet = (value: boolean) => setOpenSheet(value)

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
