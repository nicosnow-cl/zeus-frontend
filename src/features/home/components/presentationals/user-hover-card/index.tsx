import { AvatarWithName } from '@/common/components/presentationals/avatar-with-name'
import { HoverCard } from '@/common/components/primitives/hover-card'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type UserHoverCardProps = {
  children: React.ReactNode
  user: Pick<UserCardEntity, 'age' | 'avatar' | 'name' | 'username'>
}

export function UserHoverCard({ children, user }: Readonly<UserHoverCardProps>) {
  return (
    <HoverCard
      triggerProps={{
        children,
      }}
    >
      <span className="text-sm">Usuario</span>

      <AvatarWithName {...user} showAvatar showUsername />
    </HoverCard>
  )
}
