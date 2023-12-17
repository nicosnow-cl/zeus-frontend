import { Badge } from '../../primitives/Badge'
import { formatNumberToCurrency } from '@lib/format-number-to-currency'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type PriceBadgeProps = {
  hasPromo?: boolean
  price: UserCardEntity['price']
}

export function PriceBadge({ hasPromo, price }: PriceBadgeProps) {
  const realPrice = hasPromo ? price.promo : price.normal

  return (
    <Badge className={`relative font-bold ${hasPromo ? 'text-lime-300 dark:!text-lime-400' : ''}`}>
      {formatNumberToCurrency(realPrice)}

      {hasPromo && (
        <span className="font-seminormal absolute bottom-5 left-1/2 -translate-x-1/2 text-xs line-through">
          {formatNumberToCurrency(price.normal)}
        </span>
      )}
    </Badge>
  )
}
