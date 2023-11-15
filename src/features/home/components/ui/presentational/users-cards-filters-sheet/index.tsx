'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shadcn-components/ui/sheet'
import { DialogProps } from '@radix-ui/react-dialog'

import {
  UsersCardsFiltersForm,
  UsersCardsFiltersFormProps,
} from '../../../forms/users-cards-filters-form'

export type UsersCardsFiltersSheetProps = DialogProps &
  UsersCardsFiltersFormProps & {
    trigger?: React.ReactNode
  }

export const UsersCardsFiltersSheet = ({
  defaultValues,
  onOpenChange,
  onSubmit,
  trigger = 'Filters',
  ...restProps
}: UsersCardsFiltersSheetProps) => {
  const handleSubmit: UsersCardsFiltersFormProps['onSubmit'] = (data) => {
    onOpenChange?.(false)

    onSubmit?.(data)
  }

  return (
    <Sheet {...restProps} onOpenChange={onOpenChange}>
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
