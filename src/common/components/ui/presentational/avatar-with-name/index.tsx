import { Avatar, Badge, Heading, Text } from '@radix-ui/themes'
import clsx from 'clsx'

import { PatchCheckFillIcon, PersonCircleIcon, SuitHeartFillIcon } from '@/common/icons'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type AvatarWithNameProps = {
  age?: UserCardEntity['age']
  avatar: UserCardEntity['avatar']
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  name: UserCardEntity['name']
  showAvatar?: boolean
  showUsername?: boolean
  showUserType?: boolean
  username: UserCardEntity['username']
  withDropShadow?: boolean
}

export function AvatarWithName({
  age,
  avatar,
  containerProps,
  name,
  showAvatar,
  showUsername,
  username,
  withDropShadow,
  showUserType = true,
}: AvatarWithNameProps) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = clsx('relative flex justify-between', className)

  return (
    <div {...restContainerProps} className={classes}>
      <div className="flex items-center gap-2">
        {showAvatar && (
          <Avatar
            className={`${withDropShadow ? 'drop-shadow' : ''}`}
            fallback={<PersonCircleIcon size="15" />}
            variant="solid"
            size="4"
            src={avatar?.lq}
          />
        )}

        <div className="flex flex-col">
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
        </div>
      </div>

      {showUserType && (
        <div className="flex flex-col">
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
        </div>
      )}
    </div>
  )
}
