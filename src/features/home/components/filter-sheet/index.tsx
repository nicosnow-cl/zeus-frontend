'use client'

import { Theme } from '@radix-ui/themes'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shadcn-components/ui/sheet'
import { FilterForm } from '../filter-form'
import { TUsersFilters } from '../../signals/users-filters'
import { useRouter } from '@intl/navigation'
import { Routes } from '@/common/enums'

export type TFilterSheetProps = {
  trigger?: React.ReactNode
}

export function FilterSheet({ trigger = 'Filters' }: TFilterSheetProps) {
  const router = useRouter()

  const handleSubmit = (data: TUsersFilters) => {
    const params = new URLSearchParams()

    if (data.nameUsername) params.set('name', data.nameUsername)

    const url = `${Routes.Home}?${params.toString()}`

    router.replace(url)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
          <SheetDescription>Ajuste los resultados de acuerdo a sus preferencias</SheetDescription>
        </SheetHeader>

        <Theme
          accentColor="gray"
          grayColor="slate"
          radius="full"
          scaling="90%"
          hasBackground={false}
        >
          <FilterForm onSubmit={handleSubmit} />
        </Theme>
      </SheetContent>
    </Sheet>
  )
}
