'use client'

import { Grid } from '@radix-ui/themes'

import { FlipEffect } from '@/common/components/ui/effects/flip-effect'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import * as UserCard from '../user-card'

export type TCardsContainerProps = {
  data?: UserCardEntity[]
}

export const CardsContainer = async ({ data = [] }: TCardsContainerProps) => {
  const delays = data.map((_, idx) => 100 + Math.max(1, idx) * 100)

  return (
    <Grid
      columns={{
        initial: '1',
        md: '2',
        lg: '3',
      }}
      gap="4"
    >
      {data.map((user, idx) => (
        <FlipEffect
          key={idx}
          frontChild={
            <UserCard.Root>
              <div className="absolute h-[600px] w-full overflow-hidden">
                <UserCard.BackgroundMedia avatar={user.avatar} medias={user.medias} />
              </div>

              <UserCard.AvatarWithName
                avatar={user.avatar}
                username={user.username}
                age={user.age}
                name={user.name}
              />
              <UserCard.Description description={user.description} />
              <UserCard.Actions />
            </UserCard.Root>
          }
          backChild={<UserCard.Skeleton />}
          delay={delays[idx]}
        />
      ))}
    </Grid>
  )
}
