'use client'

import { Badge, Flex } from '@radix-ui/themes'

import { ActionsProps } from '@/features/home/types/components/user-card-props.type'
import { Button } from '@/shadcn-components/ui/button'
import { formatNumberToCurrency } from '@lib/format-number-to-currency'
import { GeoAltFillIcon } from '@/common/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shadcn-components/ui/dropdown-menu'

export const Actions = ({ price, location, rrss }: ActionsProps) => {
  const priceFormatted = formatNumberToCurrency(price.normal)

  return (
    <Flex className="relative bg-gray-4" justify="between" height="7" align="center" p="2">
      <Button size="sm">
        <GeoAltFillIcon className="mr-2" />
        {location.name}
      </Button>

      {/* {rrss && rrss?.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button size="sm" variant="outline">
              Social
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {rrss.map((rrss, idx) => (
              <DropdownMenuItem key={idx}>{rrss.type}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )} */}

      <Badge radius="full" color="mint" variant="surface" highContrast>
        {priceFormatted} - 1h
      </Badge>
    </Flex>
  )
}
