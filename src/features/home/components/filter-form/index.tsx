'use client'

import { Checkbox } from '@/shadcn-components/ui/checkbox'
import { Combobox } from '@/common/components/ui/primitives/combobox'

import { Flex, Text } from '@radix-ui/themes'
import { Input } from '@/shadcn-components/ui/input'

export const FilterForm = () => {
  return (
    <>
      <Input className="rounded-full" placeholder="Nombre / @usuario" />

      <Combobox triggerPlaceholder="Apariencia" />
      <Combobox triggerPlaceholder="Servicios" />

      <Flex className="rounded-md bg-gray-100 dark:bg-gray-900 " gap="4" p="3">
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Checkbox /> Con video
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Checkbox /> En promoción
          </Flex>
        </Text>
      </Flex>
    </>
  )
}
