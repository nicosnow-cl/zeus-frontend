'use client'

import { Badge, Button, DropdownMenu, Flex } from '@radix-ui/themes'

import { ActionsProps } from '@/features/home/types/components/user-card-props.type'

export const Actions = ({}: ActionsProps) => (
  <Flex className="relative bg-gray-4" justify="between" height="7" align="center" p="2">
    <Button size="1">Independencia</Button>

    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button size="1">Social</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content></DropdownMenu.Content>
    </DropdownMenu.Root>

    <Badge radius="full" color="mint" variant="surface" highContrast>
      $155.000 - 1h
    </Badge>
  </Flex>
)
