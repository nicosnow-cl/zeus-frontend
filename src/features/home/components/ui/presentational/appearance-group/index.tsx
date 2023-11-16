import { Flex, Text } from '@radix-ui/themes'

export type AppearanceGroupProps = {
  nationality: string
  flexProps?: Omit<React.ComponentProps<typeof Flex>, 'children'>
  textProps?: Omit<React.ComponentProps<typeof Text>, 'children' | 'as'>
}

export const AppearanceGroup = ({ nationality, flexProps, textProps }: AppearanceGroupProps) => {
  return (
    <Flex justify="between" gap="2" width="100%" {...flexProps}>
      <Text className="text-crimson-9" size="2" weight="bold" {...textProps}>
        {nationality}
      </Text>
      <Text className="text-crimson-9" size="2" weight="bold" {...textProps}>
        Mulata
      </Text>
      <Text className="text-crimson-9" size="2" weight="bold" {...textProps}>
        162 CM
      </Text>
      <Text className="text-crimson-9" size="2" weight="bold" {...textProps}>
        57 KG
      </Text>
      <Text className="text-crimson-9" size="2" weight="bold" {...textProps}>
        101 - 84 - 100 CM
      </Text>
    </Flex>
  )
}
