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

export type TFilterSheetProps = {
  trigger?: React.ReactNode
}

export function FilterSheet({ trigger = 'Filters' }: TFilterSheetProps) {
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
          <FilterForm />
        </Theme>
      </SheetContent>
    </Sheet>
  )
}
