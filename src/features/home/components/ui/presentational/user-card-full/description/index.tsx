import { Separator, Text } from '@radix-ui/themes'

export type DescriptionProps = {
  description: string
}

export const Description = ({ description }: DescriptionProps) => (
  <Text as="div" className="italic" size="2">
    {description}
  </Text>
)
