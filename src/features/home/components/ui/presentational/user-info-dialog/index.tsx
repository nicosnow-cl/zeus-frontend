import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import * as Dialog from '@/common/components/ui/presentational/clean-dialog'
import * as UserCard from '../user-card-full'

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
      <Dialog.Content leftAdornment={leftAdornment} rightAdornment={rightAdornment}>
        <UserCard.Root>
          <UserCard.Media avatar={data?.avatar} medias={data?.medias} />

          <UserCard.Content>
            <UserCard.Title
              age={data.age}
              avatar={data.avatar}
              name={data.name}
              username={data.username}
            />

            <UserCard.Description description={data.description} />

            <UserCard.Footer
              nationality={data.nationality}
              rrss={data.rrss}
              services={data.services}
            />
          </UserCard.Content>
        </UserCard.Root>
      </Dialog.Content>
    </Dialog.Root>
  )
}
