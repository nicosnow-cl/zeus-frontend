import { twMerge } from 'tailwind-merge'

import { Avatar, AvatarFallback, AvatarImage } from '@/shadcn-components/ui/avatar'
import { LikesBadge } from '../../primitives/likes-badge'
import { PersonCircleIcon, PersonFillIcon } from '@/common/icons'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { UserTypeBadge } from '@/features/home/components/presentationals/user-type-badge'

export type AvatarWithNameProps = {
  age?: UserCardEntity['age']
  avatar: UserCardEntity['avatar']
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  likes?: UserCardEntity['likes']
  name: UserCardEntity['name']
  showAvatar?: boolean
  showUsername?: boolean
  showUserType?: boolean
  type?: UserCardEntity['type']
  username: UserCardEntity['username']
  withDropShadow?: boolean
}

export function AvatarWithName({
  age,
  avatar,
  containerProps,
  likes,
  name,
  showAvatar,
  showUsername,
  type,
  username,
  withDropShadow,
  showUserType = true,
}: Readonly<AvatarWithNameProps>) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = twMerge('relative flex flex-col justify-between', className)

  return (
    <div {...restContainerProps} className={classes}>
      {showUsername && (
        <div
          className="flex items-center gap-1 text-sm"
          style={{
            ...(withDropShadow && { textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }),
          }}
        >
          <PersonFillIcon />{' '}
          <span className="text-brand-700 dark:text-brand-500">
            <b>@</b>
            {username}
          </span>
        </div>
      )}

      <div className="flex items-center gap-5">
        <div className="flex items-center justify-between gap-2">
          {showAvatar && (
            <Avatar className={`${withDropShadow ? 'drop-shadow' : ''}`}>
              <AvatarImage src={avatar?.lq} />
              <AvatarFallback>
                <PersonCircleIcon size="15" />
              </AvatarFallback>
            </Avatar>
          )}

          <div
            className="font-heading text-xl font-bold"
            style={{ ...(withDropShadow && { textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }) }}
          >
            {name}, {age}
          </div>
        </div>

        {showUserType && (
          <div className="flex flex-col items-end gap-1">
            {type && <UserTypeBadge type={type} />}
            <LikesBadge count={likes} />
          </div>
        )}
      </div>
    </div>
  )
}
