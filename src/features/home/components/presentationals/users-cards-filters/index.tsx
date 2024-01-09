'use client'

import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

import { Button } from '@/common/components/primitives/button'
import { UsersCardsFiltersSheet } from '../../presentationals/users-cards-filters-sheet'

export type UsersCardsMobileFiltersContainerProps = {
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
}

export function UsersCardsMobileFiltersContainer({
  containerProps,
}: UsersCardsMobileFiltersContainerProps) {
  const { className, ...restContainerProps } = containerProps ?? {}
  const classes = twMerge(
    'flex gap-2 justify-between rounded-full bg-gradient-to-r from-shade-200 p-1',
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
