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
import { TUsersFilters, usersFilters } from '../../signals/users-filters'
import { useRouter } from '@intl/navigation'
import { Routes } from '@/common/enums'

export type TFilterSheetProps = {
  trigger?: React.ReactNode
}

export function FilterSheet({ trigger = 'Filters' }: TFilterSheetProps) {
  const router = useRouter()

  const handleUpdateUsersFiltersSignal = (data: Partial<TUsersFilters>) => {
    usersFilters.value = { ...usersFilters.value, ...data }
  }

  const handleUpdateHomeQuery = (data: Partial<TUsersFilters>) => {
    const params = new URLSearchParams()

    if (data.nameUsername) params.set('name', data.nameUsername)
    if (data.appearance?.length) params.set('appearance', data.appearance.join(','))
    if (data.services?.length) params.set('services', data.services.join(','))
    if (data.withVideo) params.set('withVideo', 'true')
    if (data.hasPromo) params.set('hasPromo', 'true')

    const url = `${Routes.Home}?${params.toString()}`

    router.replace(url)
  }

  const handleSubmit = (data: TUsersFilters) => {
    handleUpdateUsersFiltersSignal(data)
    handleUpdateHomeQuery(data)
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
          <FilterForm onSubmit={handleSubmit} defaultValues={usersFilters.value} />
        </Theme>
      </SheetContent>
    </Sheet>
  )
}
