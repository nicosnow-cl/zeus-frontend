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

import { Routes } from '@config/enums'
import { TUsersFilters, usersFilters } from '@/features/home/signals/users-filters'
import { useRouter } from '@intl/navigation'
import { UsersCardsFiltersForm } from '../../../forms/users-cards-filters-form'

export type TFilterSheetProps = {
  onOpenChange?: (open: boolean) => void
  open?: boolean
  trigger?: React.ReactNode
}

export function UsersCardsFiltersSheet({
  onOpenChange,
  open: externalOpen,
  trigger = 'Filters',
}: TFilterSheetProps) {
  const isControlled = typeof externalOpen != 'undefined'

  const [internalOpen, setInternalOpen] = useState(isControlled ? externalOpen : false)
  const router = useRouter()

  const open = isControlled ? externalOpen : internalOpen

  const handleOpenChange = (open: boolean) => {
    if (onOpenChange) onOpenChange(open)
    if (!isControlled) setInternalOpen(open)
  }

  const handleUpdateUsersFiltersSignal = (data: Partial<TUsersFilters>) => {
    usersFilters.value = { ...usersFilters.value, ...data }
  }

  const handleUpdateHomeQuery = async (data: Partial<TUsersFilters>) => {
    const params = new URLSearchParams()

    if (data.nameUsername) params.set('name', data.nameUsername)
    if (data.appearance?.length) params.set('appearance', data.appearance.join(','))
    if (data.services?.length) params.set('services', data.services.join(','))
    if (data.withVideo) params.set('withVideo', 'true')
    if (data.hasPromo) params.set('hasPromo', 'true')

    const url = `${Routes.Home}?${params.toString()}`

    router.push(url)
  }

  const handleSubmit = (data: TUsersFilters) => {
    handleUpdateUsersFiltersSignal(data)
    handleUpdateHomeQuery(data)

    handleOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
          <SheetDescription>Ajuste los resultados de acuerdo a sus preferencias</SheetDescription>
        </SheetHeader>

        <UsersCardsFiltersForm onSubmit={handleSubmit} defaultValues={usersFilters.value} />
      </SheetContent>
    </Sheet>
  )
}
