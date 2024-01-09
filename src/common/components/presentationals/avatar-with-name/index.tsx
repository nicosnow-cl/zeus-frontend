import clsx from 'clsx'

import { PatchCheckFillIcon, PersonCircleIcon, SuitHeartFillIcon } from '@/common/icons'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { Avatar, AvatarFallback, AvatarImage } from '@/shadcn-components/ui/avatar'
import { Badge } from '@/shadcn-components/ui/badge'

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
          <Avatar className={`${withDropShadow ? 'drop-shadow' : ''}`}>
            <AvatarImage sizes="" src={avatar?.lq} />
            <AvatarFallback>
              <PersonCircleIcon size="15" />
            </AvatarFallback>
          </Avatar>
        )}

        <div>
          <div
            className="text-xl font-bold"
            style={{ ...(withDropShadow && { textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }) }}
          >
            {name}, {age}
          </div>

          {showUsername && (
            <div
              className="text-xs text-brand-700"
              style={{
                ...(withDropShadow && { textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }),
              }}
            >
              @{username}
            </div>
          )}
        </div>
      </div>

      {showUserType && (
        <div className="flex flex-col">
          <Badge className="text-3 px-2 py-1">
            <PatchCheckFillIcon /> VIP
          </Badge>
          <Badge className="text-2 px-2 py-1">
            <SuitHeartFillIcon /> 2.6k
          </Badge>
        </div>
      )}
    </div>
  )
}
