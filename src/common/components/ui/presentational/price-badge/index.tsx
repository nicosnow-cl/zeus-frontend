import { Badge } from '@/shadcn-components/ui/badge'

import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { formatNumberToCurrency } from '@lib/format-number-to-currency'

export type PriceBadgeProps = {
  hasPromo?: boolean
  price: UserCardEntity['price']
}

export function PriceBadge({ hasPromo, price }: PriceBadgeProps) {
  const realPrice = hasPromo ? price.promo : price.normal

  return (
    <Badge className="relative rounded-md text-sm font-bold">
      {formatNumberToCurrency(realPrice)}

      {hasPromo && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs line-through">
          {formatNumberToCurrency(price.normal)}
        </span>
      )}
    </Badge>
  )
}
