import { Badge } from '@/shadcn-components/ui/badge'

import { AvatarWithName } from '@/common/components/ui/presentational/avatar-with-name'
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
        showUserType={false}
        username={username}
        containerProps={{
          className: 'float-left mr-3',
          style: {
            shapeOutside: 'ellipse()',
          },
        }}
      />

      <p>
        <Badge className="mr-2 px-[0.65rem] py-[0.20rem]">{nationality}</Badge>

        {description}
      </p>
    </div>
  )
}
