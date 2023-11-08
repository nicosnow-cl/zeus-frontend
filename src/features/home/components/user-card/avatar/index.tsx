import { Avatar, Badge, Flex, Heading, Text } from '@radix-ui/themes'

import { AvatarWithNameProps } from '@/features/home/types/components/user-card-props.type'
import { PatchCheckFillIcon, PersonCircleIcon, SuitHeartFillIcon } from '@/common/icons'

export const AvatarWithName = ({ avatar, username, age, name }: AvatarWithNameProps) => (
  <Flex p="2" justify="between" className="relative h-[600px]">
    <Flex gap="3">
      <Avatar
        className="drop-shadow"
        fallback={<PersonCircleIcon size="15" />}
        variant="solid"
        size="2"
        src={Math.random() > 0.5 ? avatar.lq : 'ww.dolasd.cl'}
      />

      <Flex direction="column">
        <Heading
          className="text-woodsmoke-50"
          as="h5"
          size="5"
          style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}
          highContrast
        >
          {name}, {age}
        </Heading>
        {/* <Text
          className="text-crimson-9"
          size="2"
          style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}
          highContrast
        >
          @{username}
        </Text> */}
      </Flex>
    </Flex>

    <Flex gap="2" direction="column">
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
  </Flex>
)
