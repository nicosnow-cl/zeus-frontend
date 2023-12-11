import { Badge } from '@radix-ui/themes'
import clsx from 'clsx'

import { HeartFillIcon } from '@/common/icons'
import abbreviateNumber from '@lib/abbreviate-number'

export type LikeBadgeProps = {
  containerProps?: Omit<React.ComponentProps<typeof Badge>, 'children'>
  count?: number
  small?: boolean
}

export function LikesBadge({ containerProps, count = 0, small }: LikeBadgeProps) {
  const { className, ...restContainerProps } = containerProps ?? {}
  const classes = clsx('px-2 py-1 text-2', className)

  return (
    <Badge
      color="crimson"
      radius="full"
      variant="surface"
      highContrast
      className={classes}
      {...restContainerProps}
    >
      <HeartFillIcon /> {small ? abbreviateNumber(count) : count}
    </Badge>
  )
}
