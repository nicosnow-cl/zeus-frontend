import { Badge } from '../badge'
import { HeartFillIcon } from '@/common/icons'
import abbreviateNumber from '@lib/abbreviate-number'

export type LikeBadgeProps = Omit<React.ComponentProps<typeof Badge>, 'children' | 'color'> & {
  count?: number
}

export function LikesBadge({ count = 0, small, ...restProps }: LikeBadgeProps) {
  return (
    <Badge {...restProps} color="brand" small={small}>
      <HeartFillIcon /> {small ? abbreviateNumber(count) : count}
    </Badge>
  )
}
