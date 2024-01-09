import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { CountryFlag } from '@/common/components/presentationals/country-flag'
import { LikesBadge } from '@/common/components/primitives/likes-badge'
import { PriceBadge } from '@/common/components/presentationals/price-badge'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { UserTypeBadge } from '../../user-type-badge'

export type HeaderProps = {
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
  hasPromo?: UserCardEntity['hasPromo']
  likes?: UserCardEntity['likes']
  nationality?: UserCardEntity['nationality']
  price?: UserCardEntity['price']
  small?: boolean
  type: UserCardEntity['type']
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ containerProps, hasPromo, likes, nationality, price, small, type }, ref) => {
    const { className, ...restContainerProps } = containerProps ?? {}
    const classes = twMerge('flex items-start justify-between gap-2 p-2', className)

    return (
      <div {...restContainerProps} ref={ref} className={classes}>
        <UserTypeBadge type={type} small={small} />

        <div className="flex flex-col items-end gap-2">
          {price && <PriceBadge hasPromo={hasPromo} price={price} />}

          <LikesBadge count={likes} small={small} />

          {nationality && <CountryFlag countryCode={nationality} />}
        </div>
      </div>
    )
  }
)

Header.displayName = 'UserCard.Header'
