import { AppearanceGroup } from '../../appearance-group'
import { ServicesGroup } from '../../services-group'
import { SocialNetworksGroup } from '../../social-networks-group'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type FooterProps = {
  rrss?: UserCardEntity['rrss']
  services: UserCardEntity['services']
  type: UserCardEntity['type']
}

export const Footer = ({ rrss, services, type }: FooterProps) => {
  return (
    <div className="flex flex-wrap gap-3 md:flex-nowrap">
      {type === 'VIP' && rrss && rrss.length > 0 && (
        <SocialNetworksGroup
          rrss={rrss}
          containerProps={{
            className: 'md:flex-col',
          }}
        />
      )}

      <div className="flex w-full flex-col gap-2">
        <AppearanceGroup containerProps={{ className: 'font-semibold' }} />

        {type !== 'GOLD' && services && services.length > 0 && (
          <ServicesGroup services={services} />
        )}
      </div>
    </div>
  )
}
