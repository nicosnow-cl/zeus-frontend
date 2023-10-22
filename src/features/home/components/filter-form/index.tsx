'use client'

import { Combobox } from '@/common/components/ui/primitives/combobox'

import { Checkbox, Flex, Text } from '@radix-ui/themes'

export const FilterForm = () => {
  return (
    <>
      <Combobox triggerPlaceholder="Apariencia" />
      <Combobox triggerPlaceholder="Servicios" />

      <Flex gap="4">
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox defaultChecked /> Con video
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox defaultChecked /> En promoción
          </Flex>
        </Text>
      </Flex>
    </>
  )
}
