import { Avatar, Badge, Flex, Heading, Text } from '@radix-ui/themes'

import { AvatarWithNameProps } from '@/features/home/types/components/user-card-props.type'
import { PatchCheckFillIcon, PersonCircleIcon, SuitHeartFillIcon } from '@/common/icons'

export const AvatarWithName = ({
  age,
  avatar,
  name,
  showAvatar,
  showUsername,
  username,
  withDropShadow,
  showUserType = true,
}: AvatarWithNameProps) => (
  <Flex p="2" justify="between" className="relative">
    <Flex gap="3" align={`${showAvatar ? 'center' : 'start'}`}>
      {showAvatar && avatar && (
        <Avatar
          className={`${withDropShadow ? 'drop-shadow' : ''}`}
          fallback={<PersonCircleIcon size="15" />}
          variant="solid"
          size="4"
          src={avatar.lq}
        />
      )}

      <Flex direction="column">
        <Heading
          as="h5"
          size="6"
          style={{ ...(withDropShadow && { textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }) }}
          highContrast
        >
          {name}, {age}
        </Heading>
        {showUsername && (
          <Text
            className="text-crimson-9"
            size="2"
            style={{ ...(withDropShadow && { textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }) }}
            highContrast
          >
            @{username}
          </Text>
        )}
      </Flex>
    </Flex>

    {showUserType && (
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
    )}
  </Flex>
)
