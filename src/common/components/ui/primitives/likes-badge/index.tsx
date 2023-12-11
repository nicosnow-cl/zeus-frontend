import { Badge } from '@radix-ui/themes'
import clsx from 'clsx'

import { HeartFillIcon } from '@/common/icons'
import abbreviateNumber from '@lib/abbreviate-number'

export type LikeBadgeProps = {
  count?: number
  containerProps?: Omit<React.ComponentProps<typeof Badge>, 'children'>
}

export function LikesBadge({ count = 0, containerProps }: LikeBadgeProps) {
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
      <HeartFillIcon /> {abbreviateNumber(count)}
    </Badge>
  )
}
