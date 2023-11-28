import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import * as Dialog from '@/common/components/ui/presentational/clean-dialog'

export type UserInfoDialogProps = {
  data: UserCardEntity | null
  open?: boolean
  onOpenChange?: (value: boolean) => void
  onLeftClick?: () => void
  onRightClick?: () => void
}

export const UserInfoDialogV2 = ({ open, onOpenChange }: UserInfoDialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Content>Hola mundo</Dialog.Content>
    </Dialog.Root>
  )
}
