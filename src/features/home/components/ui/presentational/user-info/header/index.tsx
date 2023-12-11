import { Button } from '@/shadcn-components/ui/button'
import clsx from 'clsx'

import { Arrow90degRightIcon, ShareFillIcon } from '@/common/icons'
import { LikesBadge } from '@/common/components/ui/primitives/likes-badge'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import UserTypeBadge from '../../user-type-badge'

export type HeaderProps = {
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  likes?: UserCardEntity['likes']
  type: UserCardEntity['type']
}

export default function Header({ containerProps, likes, type }: HeaderProps) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = clsx('flex flex-wrap gap-2', className)

  return (
    <div {...restContainerProps} className={classes}>
      <div className="flex grow items-center justify-between gap-1">
        <UserTypeBadge type={type} />

        <LikesBadge count={likes} />
      </div>

      <div className="flex grow items-center justify-center gap-1">
        <Button>
          <ShareFillIcon />
        </Button>

        <Button size="lg">
          Ver perfil
          <Arrow90degRightIcon className="ml-2" />
        </Button>
      </div>
    </div>
  )
}
