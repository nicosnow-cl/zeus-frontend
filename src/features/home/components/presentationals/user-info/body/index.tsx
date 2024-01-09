import { AvatarWithName } from '@/common/components/presentationals/avatar-with-name'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type BodyProps = {
  age: UserCardEntity['age']
  avatar: UserCardEntity['avatar']
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  description: UserCardEntity['description']
  name: UserCardEntity['name']
  nationality: UserCardEntity['nationality']
  username: UserCardEntity['username']
}

export default function Body({
  age,
  avatar,
  containerProps,
  description,
  name,
  nationality,
  username,
}: BodyProps) {
  return (
    <div {...containerProps}>
      <AvatarWithName
        age={age}
        avatar={avatar}
        name={name}
        showUsername
        showAvatar
        showUserType={false}
        username={username}
        containerProps={{
          className: 'float-left mr-3',
          style: {
            shapeOutside: 'ellipse()',
          },
        }}
      />

      <p className="text-justify">{description}</p>
    </div>
  )
}
