import { Text } from '@radix-ui/themes'

import { AvatarWithName } from '@/common/components/ui/presentational/avatar-with-name'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type BodyProps = {
  age: UserCardEntity['age']
  avatar: UserCardEntity['avatar']
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  description: UserCardEntity['description']
  name: UserCardEntity['name']
  username: UserCardEntity['username']
}

export default function Body({
  age,
  avatar,
  containerProps,
  description,
  name,
  username,
}: BodyProps) {
  return (
    <div {...containerProps}>
      <AvatarWithName
        age={age}
        avatar={avatar}
        name={name}
        showAvatar
        showUsername
        showUserType={false}
        username={username}
        containerProps={{
          className: 'float-left mr-3',
          style: {
            shapeOutside: 'ellipse()',
          },
        }}
      />

      <Text className="mt-1 italic" as="p" size="2">
        {description}
      </Text>
    </div>
  )
}
