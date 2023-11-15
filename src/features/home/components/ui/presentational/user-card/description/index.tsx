import { Badge, Blockquote, Box, Flex } from '@radix-ui/themes'

import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type DescriptionProps = {
  description: UserCardEntity['description']
  services?: UserCardEntity['services']
}

export const Description = ({ description, services = [] }: DescriptionProps) => (
  <Box
    p="2"
    className="absolute bottom-0 border-t border-woodsmoke-100/20 bg-woodsmoke-900/20 opacity-0 backdrop-blur-sm backdrop-contrast-100 transition-[bottom,opacity] ease-in-out group-hover:bottom-[36px] group-hover:opacity-100"
    style={{
      textShadow: '2px 2px 3px rgba(0, 0, 0, 0.15)',
    }}
  >
    <Blockquote className="text-woodsmoke-50" color="crimson" size="2">
      {description}

      {services.length > 0 && (
        <Flex mt="2" className="max-w-fit" wrap="wrap" gap="1">
          {services.map((svc, idx) => (
            <Badge key={idx} className="text-1" radius="full" color="gray" variant="surface">
              {svc}
            </Badge>
          ))}
        </Flex>
      )}
    </Blockquote>
  </Box>
)
