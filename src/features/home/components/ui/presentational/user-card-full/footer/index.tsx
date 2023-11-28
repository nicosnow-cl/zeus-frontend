import { Flex, Separator } from '@radix-ui/themes'

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
    <>
      <Separator className="ml-auto mr-0" my="3" size="2" />

      <Flex className="mt-4 w-full" justify="between" gap="5">
        {rrss && rrss.length > 0 && <SocialNetworksGroup rrss={rrss} />}

        <div>
          <AppearanceGroup nationality={nationality} flexProps={{ className: 'mb-2' }} />

          {services && services.length > 0 && <ServicesGroup services={services} />}
        </div>
      </Flex>
    </>
  )
}
