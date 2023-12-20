import { twMerge } from 'tailwind-merge'

import { CountryFlag } from '@/common/components/ui/presentational/country-flag'
import { LikesBadge } from '@/common/components/ui/primitives/likes-badge/index'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { UserTypeBadge } from '../../user-type-badge'

export type HeaderProps = {
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  likes?: UserCardEntity['likes']
  nationality?: UserCardEntity['nationality']
  type: UserCardEntity['type']
}

export function Header({ containerProps, likes, nationality, type }: HeaderProps) {
  const { className, ...restContainerProps } = containerProps ?? {}
  const classes = twMerge('flex items-center justify-end gap-2 p-2', className)

  return (
    <div {...restContainerProps} className={classes}>
      <UserTypeBadge className="mr-auto" type={type} small />

      {nationality && <CountryFlag countryCode={nationality} />}
      <LikesBadge count={likes} small />
    </div>
  )
}
