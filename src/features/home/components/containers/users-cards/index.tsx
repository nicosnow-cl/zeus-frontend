import { MotionConfig } from 'framer-motion'

import { MasonryContainer } from '@/common/components/containers/masonry'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import * as UserCard from '@/features/home/components/ui/presentational/user-card-complete'

export type UsersCardsContainerProps = {
  data?: UserCardEntity[]
}

const DELAYS = [...Array(10)].map((_, idx) => 100 + Math.max(1, idx) * 100)

export const UsersCardsContainer = ({ data = [] }: UsersCardsContainerProps) => {
  const getCardClassName = (type: string) => {
    switch (type) {
      case 'VIP':
        return 'col-span-12 row-span-4 sm:col-span-6 sm:row-span-3 xl:col-span-5 xl:row-span-4 min-h-[300px] md:min-h-[400px]'
      case 'PREMIUM':
        return 'col-span-12 row-span-3 sm:col-span-6 sm:row-span-2 xl:col-span-4 xl:row-span-3 min-h-[300px] md:min-h-[400px]'
      default:
        return 'col-span-6 row-span-2 sm:col-span-3 sm:row-span-1 xl:col-span-3 xl:row-span-2 min-h-[300px] md:min-h-[400px]'
    }
  }

  return (
    <MotionConfig
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 40,
      }}
    >
      <MasonryContainer className="masonry-highlight relative grow grid-cols-12 gap-1" role="list">
        {data.map((user, idx) => (
          <div
            key={idx}
            className={`masonry-item-highlighted relative ${getCardClassName(user.type)}`}
          >
            <UserCard.Root className="cursor-pointer rounded-2xl">
              <UserCard.Contracted
                age={user.age}
                avatar={user.avatar}
                description={user.description}
                name={user.name}
              />

              <UserCard.Expanded
                age={user.age}
                avatar={user.avatar}
                description={user.description}
                name={user.name}
                nationality={user.nationality}
                rrss={user.rrss}
                services={user.services}
                username={user.username}
              />
            </UserCard.Root>
          </div>
        ))}
      </MasonryContainer>
    </MotionConfig>
  )
}
