import { Flex, Grid } from '@radix-ui/themes'

import { Badge } from '@/shadcn-components/ui/badge'

export type TServicesGroupProps = {
  services: string[]
  gridProps?: Omit<React.ComponentProps<typeof Grid>, 'children'>
}

export const ServicesGroup = ({ services, gridProps }: TServicesGroupProps) => {
  return (
    <Grid columns="3" gap="3" width="100%" {...gridProps}>
      {services.map((service, idx) => (
        <Badge key={idx} variant="secondary">
          {service}
        </Badge>
      ))}
    </Grid>
  )
}
