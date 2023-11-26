import { AvatarWithName } from '@/common/components/ui/presentational/avatar-with-name'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type BodyProps = {
  username: UserCardEntity['username']
  age?: UserCardEntity['age']
  avatar: UserCardEntity['avatar']
  name: UserCardEntity['name']
}

export const Body = ({ avatar, name, username, age }: BodyProps) => {
  return (
    <div className="h-[400px] text-shade-50">
      <AvatarWithName avatar={avatar} name={name} username={username} age={age} withDropShadow />
    </div>
  )
}
