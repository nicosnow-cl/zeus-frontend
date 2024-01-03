import { DialogProps } from '@radix-ui/react-dialog'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/shadcn-components/ui/sheet'

import {
  UsersCardsFiltersForm,
  UsersCardsFiltersFormProps,
} from '../../../forms/users-cards-filters-form'
import { withUsersCardsQueryLogic } from '@/features/home/hocs/with-users-cards-query-logic'
import { CSS } from '@/common/utils/css-classes'

const { Utilities } = CSS

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
      <SheetContent className={`${Utilities.glassmorphism} max-w-[350px]`} side="left">
        <SheetHeader className="mb-3 text-left">
          <div className="pl-2 text-gray-900 dark:text-gray-100">
            <strong className="text-lg font-semibold text-gray-950 dark:text-gray-50">
              Filtros
            </strong>
            <br />
            Ajuste los resultados de acuerdo a sus preferencias
          </div>
        </SheetHeader>

        <UsersCardsFiltersFormWithQueryLogic />
      </SheetContent>
    </Sheet>
  )
}
