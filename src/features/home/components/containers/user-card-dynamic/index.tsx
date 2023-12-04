import { forwardRef, useCallback } from 'react'
import { motion } from 'framer-motion'

import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import * as UserCardFull from '../../ui/presentational/user-card-full'
import * as UserCardMinimal from '../../ui/presentational/user-card'

export type UserCardDynamicProps = {
  containerProps?: React.ComponentPropsWithoutRef<typeof motion.div>
  data: UserCardEntity
  expanded?: boolean
}

const UserCardDynamic = forwardRef<HTMLDivElement | null, UserCardDynamicProps>(
  ({ containerProps, data, expanded }, ref) => {
    const getMinimalCard = useCallback(
      () => (
        <UserCardMinimal.Root>
          <UserCardMinimal.BackgroundMedia avatar={data.avatar} medias={data.medias} />

          <UserCardMinimal.Body
            avatar={data.avatar}
            username={data.username}
            age={data.age}
            name={data.name}
          />
          <UserCardMinimal.Description description={data.description} />
        </UserCardMinimal.Root>
      ),
      [data]
    )

    const getFullCard = useCallback(
      () => (
        <UserCardFull.Root className="max-w-[564px]">
          <UserCardFull.Media avatar={data.avatar} medias={data.medias} />

          <UserCardFull.Content>
            <UserCardFull.Title
              age={data.age}
              avatar={data.avatar}
              name={data.name}
              username={data.username}
            />

            <UserCardFull.Description description={data.description} />

            <UserCardFull.Footer
              nationality={data.nationality}
              rrss={data.rrss}
              services={data.services}
            />
          </UserCardFull.Content>
        </UserCardFull.Root>
      ),
      [data]
    )

    return (
      <motion.div
        id={data._id}
        ref={ref}
        className={
          expanded
            ? 'fixed inset-0 bottom-0 left-0 right-0 top-0 z-50 m-auto flex h-fit w-fit items-center justify-center'
            : 'h-full w-full overflow-hidden rounded-2xl'
        }
        layout
        transition={{
          layout: {
            type: 'spring',
            stiffness: 500,
            damping: 40,
          },
        }}
        {...containerProps}
      >
        {expanded ? getFullCard() : getMinimalCard()}
      </motion.div>
    )
  }
)

UserCardDynamic.displayName = 'UserCardDynamic'

export { UserCardDynamic }
