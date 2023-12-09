import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import * as Dialog from '@/common/components/ui/presentational/clean-dialog'

export type UserInfoDialogProps = {
  data: UserCardEntity | null
  leftAdornment?: React.ReactNode
  onOpenChange?: (value: boolean) => void
  open?: boolean
  rightAdornment?: React.ReactNode
}

export const UserInfoDialog = ({
  data,
  leftAdornment,
  onOpenChange,
  open,
  rightAdornment,
}: UserInfoDialogProps) => {
  if (!data) return null

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Content
        leftAdornment={leftAdornment}
        rightAdornment={rightAdornment}
      ></Dialog.Content>
    </Dialog.Root>
  )
}
