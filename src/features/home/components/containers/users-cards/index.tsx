import { MotionConfig } from 'framer-motion'

import { MasonryContainer } from '@/common/components/containers/masonry'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { UserCardWithFlipEffect } from '../../ui/presentational/user-card-flip'
import { UserCard3D } from '../../ui/presentational/user-card-3d'

export type UsersCardsContainerProps = {
  data?: UserCardEntity[]
}

export const UsersCardsContainer = ({ data = [] }: UsersCardsContainerProps) => {
  const getCardClassName = (type: string) => {
    switch (type) {
      case 'VIP':
        return 'col-span-12 row-span-6 sm:col-span-6 lg:col-span-4'
      case 'PREMIUM':
        return 'col-span-12 row-span-5 sm:col-span-6 lg:col-span-4'
      default:
        return 'col-span-12 row-span-4 sm:col-span-6 lg:col-span-4'
    }
  }

  return (
    <MotionConfig
      transition={{
        type: 'spring',
        stiffness: 550,
        damping: 80,
      }}
    >
      <MasonryContainer className="masonry-highlight grid-cols-12 gap-1" role="list">
        {data.map((user, idx) => (
          <UserCard3D
            key={idx}
            user={user}
            containerProps={{
              className: `min-h-[450px] group ${getCardClassName(user.type)}`,
            }}
          />
        ))}
      </MasonryContainer>
    </MotionConfig>
  )
}
