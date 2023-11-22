'use client'

import { Badge, Flex } from '@radix-ui/themes'

import { formatNumberToCurrency } from '@lib/format-number-to-currency'
import { GeoAltFillIcon } from '@/common/icons'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type ActionsProps = {
  price: UserCardEntity['price']
  location: UserCardEntity['location']
}

export const Actions = ({ price, location }: ActionsProps) => {
  const priceFormatted = formatNumberToCurrency(price.normal)

  return (
    <Flex className="relative bg-slate-4" justify="between" height="7" align="center" p="2">
      <Badge radius="full" color="gray" variant="surface" highContrast>
        <GeoAltFillIcon />
        {location.name}
      </Badge>

      <Badge radius="full" color="mint" variant="surface" highContrast>
        {priceFormatted} - 1h
      </Badge>
    </Flex>
  )
}
