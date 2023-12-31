import { DialogProps } from '@radix-ui/react-dialog'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shadcn-components/ui/sheet'

import {
  UsersCardsFiltersForm,
  UsersCardsFiltersFormProps,
} from '../../../forms/users-cards-filters-form'
import { withUsersCardsQueryLogic } from '@/features/home/hocs/with-users-cards-query-logic'
import { CSS } from '@/common/utils/css-classes'

export const UsersCardsFiltersFormWithQueryLogic = withUsersCardsQueryLogic({
  Component: UsersCardsFiltersForm,
})

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
      <SheetContent className={CSS.glassmorphism} side="left" withPortal>
        <SheetHeader>
          <SheetTitle className="pl-2 text-lg font-semibold text-gray-950 dark:text-gray-50">
            Filtros
          </SheetTitle>
          <SheetDescription className="pl-2 text-gray-900 dark:text-gray-100">
            Ajuste los resultados de acuerdo a sus preferencias
          </SheetDescription>
        </SheetHeader>

        <UsersCardsFiltersFormWithQueryLogic />
      </SheetContent>
    </Sheet>
  )
}
