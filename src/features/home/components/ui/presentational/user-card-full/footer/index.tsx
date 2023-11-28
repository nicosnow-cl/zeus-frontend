import { Flex } from '@radix-ui/themes'

import { AppearanceGroup } from '../../appearance-group'
import { ServicesGroup } from '../../services-group'
import { SocialNetworksGroup } from '../../social-networks-group'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type FooterProps = {
  nationality: UserCardEntity['nationality']
  rrss: UserCardEntity['rrss']
  services: UserCardEntity['services']
}

export const Footer = ({ nationality, rrss, services }: FooterProps) => {
  return (
    <Flex className="mt-4 w-full" justify="between" gap="5">
      {rrss && rrss.length > 0 && <SocialNetworksGroup rrss={rrss} />}

      <div>
        <AppearanceGroup nationality={nationality} flexProps={{ className: 'mb-2' }} />

        {services && services.length > 0 && <ServicesGroup services={services} />}
      </div>
    </Flex>
  )
}
