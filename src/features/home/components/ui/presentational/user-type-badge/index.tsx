import clsx from 'clsx'

import { GemIcon } from '@/common/icons'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { Badge } from '@/common/components/ui/primitives/Badge'

export type UserTypeBadgeProps = {
  containerProps?: Omit<React.ComponentProps<typeof Badge>, 'children'>
  small?: boolean
  type: UserCardEntity['type']
}

export default function UserTypeBadge({ containerProps, small, type }: UserTypeBadgeProps) {
  const { className, ...restContainerProps } = containerProps ?? {}
  const classes = clsx('px-2 py-1 text-3 font-semibold uppercase', className)

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
    <Badge className={`${classes} ${props.className}`} color={props.color} {...restContainerProps}>
      {props.icon}
      {!small && props.label}
    </Badge>
  )
}
