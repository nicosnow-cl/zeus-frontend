'use client'

import { Badge, Flex } from '@radix-ui/themes'
import { Button } from '@/shadcn-components/ui/button'

import { formatNumberToCurrency } from '@lib/format-number-to-currency'
import { GeoAltFillIcon } from '@/common/icons'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type ActionsProps = {
  price: UserCardEntity['price']
  location: UserCardEntity['location']
}

export const Actions = ({ price, location }: ActionsProps) => {
  const priceFormatted = formatNumberToCurrency(price.normal)

  const handleLocationClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault()
    evt.stopPropagation()

    console.log('location')
  }

  return (
    <Flex className="relative bg-gray-4" justify="between" height="7" align="center" p="2">
      <Button size="sm" onClick={handleLocationClick}>
        <GeoAltFillIcon className="mr-2" />
        {location.name}
      </Button>

      <Badge radius="full" color="mint" variant="surface" highContrast>
        {priceFormatted} - 1h
      </Badge>
    </Flex>
  )
}
