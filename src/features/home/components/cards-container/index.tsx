import { FlipEffect } from '@/common/components/ui/effects/flip-effect'
import { getCards } from '../../services/getCards'
import * as UserCard from '../user-card'

export const CardsContainer = async () => {
  const userCards = await getCards()

  const delays = userCards.map((_, idx) => 100 + Math.max(1, idx) * 100)

  return (
    <>
      {userCards.slice(0, 10).map((user, idx) => (
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
    </>
  )
}
