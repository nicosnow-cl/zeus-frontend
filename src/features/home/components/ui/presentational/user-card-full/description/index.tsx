import { Separator, Text } from '@radix-ui/themes'

export type DescriptionProps = {
  description: string
}

export const Description = ({ description }: DescriptionProps) => (
  <>
    <Separator className="ml-auto mr-0" my="3" size="2" />

    <Text as="div" className="italic" size="2">
      {description}
    </Text>
  </>
)
