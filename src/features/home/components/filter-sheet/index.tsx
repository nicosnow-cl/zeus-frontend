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
import { RadixUiProvider } from '@/common/components/providers/radix-ui'
import { Flex, Theme } from '@radix-ui/themes'

export type TFilterSheetProps = {
  trigger?: React.ReactNode
}

export function FilterSheet({ trigger = 'Filters' }: TFilterSheetProps) {
  return (
    <Sheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
          <SheetDescription>This action is permanent and cannot be undone.</SheetDescription>
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
          </Flex>
        </Theme>
      </SheetContent>
    </Sheet>
  )
}
