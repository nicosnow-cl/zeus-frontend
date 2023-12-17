import clsx from 'clsx'

import { Badge } from '../Badge'
import { HeartFillIcon } from '@/common/icons'
import abbreviateNumber from '@lib/abbreviate-number'

export type LikeBadgeProps = {
  containerProps?: Omit<React.ComponentProps<typeof Badge>, 'children'>
  count?: number
  small?: boolean
}

export function LikesBadge({ containerProps, count = 0, small }: LikeBadgeProps) {
  const { className, ...restContainerProps } = containerProps ?? {}
  const classes = clsx('text-xs', className)

  return (
    <Badge className={classes} {...restContainerProps} color="brand">
      <HeartFillIcon /> {small ? abbreviateNumber(count) : count}
    </Badge>
  )
}
