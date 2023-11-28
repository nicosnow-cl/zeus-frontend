import { Badge, Flex, Separator, Text, Theme } from '@radix-ui/themes'
import { Button } from '@/shadcn-components/ui/button'

import {
  Arrow90degRightIcon,
  PatchCheckFillIcon,
  ShareFillIcon,
  SuitHeartFillIcon,
} from '@/common/icons'
import { AvatarWithName } from '@/common/components/ui/presentational/avatar-with-name'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type TitleProps = {
  age: UserCardEntity['age']
  avatar: UserCardEntity['avatar']
  name: UserCardEntity['name']
  username: UserCardEntity['username']
}

export const Title = ({ age, avatar, name, username }: TitleProps) => (
  <div className="mb-2">
    <Flex justify="between" align="center">
      <Flex gap="2">
        <Badge className="px-2 py-1 text-3" radius="full" variant="surface" highContrast>
          <PatchCheckFillIcon /> VIP
        </Badge>

        <Badge
          className="px-2 py-1 text-2"
          color="tomato"
          radius="full"
          variant="surface"
          highContrast
        >
          <SuitHeartFillIcon /> 2.6k
        </Badge>
      </Flex>

      <Flex gap="2" align="center">
        <Button>
          <ShareFillIcon />
        </Button>
        <Button size="lg">
          Ver perfil
          <Arrow90degRightIcon className="ml-2" />
        </Button>
      </Flex>
    </Flex>

    <Separator my="3" size="2" />

    <AvatarWithName
      age={age}
      avatar={avatar}
      name={name}
      showAvatar
      showUsername
      showUserType={false}
      username={username}
    />
  </div>
)
