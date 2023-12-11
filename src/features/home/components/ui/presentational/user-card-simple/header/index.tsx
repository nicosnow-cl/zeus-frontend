import clsx from 'clsx'

import { CountryFlag } from '@/common/components/ui/presentational/country-flag'
import { LikesBadge } from '@/common/components/ui/primitives/likes-badge/index'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import UserTypeDecorator from '../../user-type-decorator'

export type HeaderProps = {
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  likes?: UserCardEntity['likes']
  nationality?: UserCardEntity['nationality']
  type: UserCardEntity['type']
}

export function Header({ containerProps, likes, nationality, type }: HeaderProps) {
  const { className, ...restContainerProps } = containerProps ?? {}

  const classes = clsx('relative flex justify-between gap-2', className)

  return (
    <div {...restContainerProps} className={classes}>
      <UserTypeDecorator type={type} />

      <span className="flex items-center gap-2">
        {nationality && <CountryFlag countryCode={nationality} />}
        <LikesBadge count={likes} />
      </span>
    </div>
  )
}
