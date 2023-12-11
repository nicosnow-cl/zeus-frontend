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
        return 'col-span-12 row-span-4 sm:col-span-6 lg:col-span-4'
      case 'PREMIUM':
        return 'col-span-6 row-span-3 sm:col-span-6 lg:col-span-4'
      default:
        return 'col-span-6 row-span-2 sm:col-span-6 lg:col-span-4'
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
          <div key={idx} className={`relative min-h-[325px] ${getCardClassName(user.type)}`}>
            <UserCard.Root className="cursor-pointer rounded-2xl">
              <UserCard.Contracted {...user} />

              <UserCard.Expanded {...user} />
            </UserCard.Root>
          </div>
        ))}
      </MasonryContainer>
    </MotionConfig>
  )
}
