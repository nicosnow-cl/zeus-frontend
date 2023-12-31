import { twMerge } from 'tailwind-merge'

import { Badge } from '../../primitives/badge'
import { formatNumberToCurrency } from '@lib/format-number-to-currency'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type PriceBadgeProps = Omit<React.ComponentProps<typeof Badge>, 'children' | 'color'> & {
  hasPromo?: boolean
  price: UserCardEntity['price']
}

export function PriceBadge({ className, hasPromo, price, ...restProps }: PriceBadgeProps) {
  const classes = twMerge(className, 'flex flex-col font-semibold')
  const realPrice = hasPromo ? price.promo : price.normal

  return (
    <Badge {...restProps} className={classes} small={!hasPromo}>
      {hasPromo && (
        <span className={`text-xs font-light line-through ${hasPromo ? 'text-gray-400' : ''}`}>
          {formatNumberToCurrency(price.normal)}
        </span>
      )}

      {formatNumberToCurrency(realPrice)}
    </Badge>
  )
}
