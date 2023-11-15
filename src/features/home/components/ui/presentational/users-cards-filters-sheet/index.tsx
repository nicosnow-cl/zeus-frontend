'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shadcn-components/ui/sheet'
import { useState } from 'react'

import {
  UsersCardsFiltersForm,
  UsersCardsFiltersFormProps,
} from '../../../forms/users-cards-filters-form'

export type UsersCardsFiltersSheetProps = UsersCardsFiltersFormProps & {
  onOpenChange?: (open: boolean) => void
  open?: boolean
  trigger?: React.ReactNode
}

export function UsersCardsFiltersSheet({
  defaultValues,
  onOpenChange,
  onSubmit,
  open: externalOpen,
  trigger = 'Filters',
}: UsersCardsFiltersSheetProps) {
  const isControlled = typeof externalOpen != 'undefined'

  const [internalOpen, setInternalOpen] = useState(isControlled ? externalOpen : false)

  const open = isControlled ? externalOpen : internalOpen

  const handleOpenChange = (open: boolean) => {
    if (!isControlled) setInternalOpen(open)

    onOpenChange?.(open)
  }

  const handleSubmit: UsersCardsFiltersFormProps['onSubmit'] = (data) => {
    handleOpenChange(false)

    onSubmit?.(data)
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
          <SheetDescription>Ajuste los resultados de acuerdo a sus preferencias</SheetDescription>
        </SheetHeader>

        <UsersCardsFiltersForm onSubmit={handleSubmit} defaultValues={defaultValues} />
      </SheetContent>
    </Sheet>
  )
}
