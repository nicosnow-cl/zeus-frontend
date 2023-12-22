import { twMerge } from 'tailwind-merge'

import { LikesBadge } from '@/common/components/ui/primitives/likes-badge'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { UserTypeBadge } from '../../user-type-badge'

export type HeaderProps = {
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  likes?: UserCardEntity['likes']
  small?: boolean
  type: UserCardEntity['type']
}

export function Header({ containerProps, likes, type, small = true }: HeaderProps) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = twMerge('flex items-center justify-between gap-2', className)

  return (
    <div {...restContainerProps} className={classes}>
      <UserTypeBadge type={type} small={small} />

      <LikesBadge count={likes} small={small} />
    </div>
  )
}
