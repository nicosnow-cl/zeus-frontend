import clsx from 'clsx'

import { Badge } from '@/common/components/primitives/badge'
import { GemIcon } from '@/common/icons'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type UserTypeBadgeProps = Omit<React.ComponentProps<typeof Badge>, 'children' | 'color'> & {
  type: UserCardEntity['type']
}

export function UserTypeBadge({ className, small, type, ...restProps }: UserTypeBadgeProps) {
  const classes = clsx('uppercase', className)

  const props = {
    className: '',
    color: 'prime',
    icon: <GemIcon className="h-4 w-4 opacity-80" />,
    label: 'Prime',
  } as {
    className: string
    color: React.ComponentProps<typeof Badge>['color']
    icon: JSX.Element
    label: string
  }

  switch (type) {
    case 'VIP':
      props.color = 'elite'
      props.icon = (
        <div className="flex items-center">
          <GemIcon className="mr-[-5px] h-3 w-3 opacity-50" />
          <GemIcon className="h-4 w-4" />
          <GemIcon className="ml-[-5px] h-3 w-3 opacity-50" />
        </div>
      )
      props.label = 'Elite'
      break
    case 'PREMIUM':
      props.color = 'pro'
      props.icon = (
        <div className="flex items-center">
          <GemIcon className="h-4 w-4" />
          <GemIcon className="ml-[-8px] h-4 w-4 opacity-50" />
        </div>
      )
      props.label = 'Pro'
      break
    default:
      break
  }

  return (
    <Badge
      {...restProps}
      className={`${classes} ${props.className}`}
      color={props.color}
      small={small}
    >
      {props.icon}
      {!small && props.label}
    </Badge>
  )
}
