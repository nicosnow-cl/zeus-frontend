'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shadcn-components/ui/sheet'

import { FilterForm } from '../filter-form'
import { Button, Flex, Theme } from '@radix-ui/themes'

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
          <Flex className="mt-5" direction="column" gap="5">
            <FilterForm />

            <Flex justify="between">
              <Button variant="soft" size="3">
                Limpiar
              </Button>
              <Button variant="surface" color="crimson" size="3">
                Aplicar filtros
              </Button>
            </Flex>
          </Flex>
        </Theme>
      </SheetContent>
    </Sheet>
  )
}
