import * as Separator from '@radix-ui/react-separator'

import { FlipEffect, FlipEffectProps } from '@/common/components/ui/effects/flip-effect'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import * as UserCardSimple from '../user-card-simple'
import * as UserInfo from '../user-info'

export type UserCardWithFlipEffectProps = Omit<
  FlipEffectProps,
  'backChild' | 'delay' | 'frontChild'
> & {
  user: UserCardEntity
}

export function UserCardWithFlipEffect({ containerProps, user }: UserCardWithFlipEffectProps) {
  return (
    <FlipEffect
      containerProps={containerProps}
      backChild={
        <UserInfo.Root>
          <UserCardSimple.Media
            avatar={user.avatar}
            containerProps={{
              className:
                'transition-[transform] group-hover:scale-[1.03] group-focus-within:scale-[1.03] group-data-[expanded=true]:scale-[1.03]',
            }}
          />

          <UserInfo.Content className="h-full justify-end bg-shade-300/30 backdrop-blur-sm dark:bg-shade-950/40">
            <UserInfo.Header likes={user.likes} type={user.type} />

            <div className="flex flex-col gap-2 rounded-xl border border-gray-600/50 bg-gray-950/60 px-2 py-3 text-shade-50 ">
              <UserInfo.Body
                age={user.age}
                avatar={user.avatar}
                description={user.description}
                name={user.name}
                username={user.username}
                nationality={user.nationality}
              />

              <Separator.Root className="separator-root max-w-[4rem]" />

              <UserInfo.Footer rrss={user.rrss} services={user.services} type={user.type} />
            </div>
          </UserInfo.Content>
        </UserInfo.Root>
      }
      backChildProps={{
        className: 'cursor-pointer rounded-2xl',
      }}
      frontChild={
        <UserCardSimple.Root>
          <UserCardSimple.Media
            avatar={user.avatar}
            containerProps={{
              className:
                'transition-[transform] group-hover:scale-[1.03] group-focus-within:scale-[1.03] group-data-[expanded=true]:scale-[1.03]',
            }}
          />

          <UserCardSimple.Content>
            <UserCardSimple.Header
              likes={user.likes}
              nationality={user.nationality}
              type={user.type}
            />

            <UserCardSimple.Body
              age={user.age}
              description={user.description}
              hasPromo={user.hasPromo}
              name={user.name}
              price={user.price}
            />
          </UserCardSimple.Content>
        </UserCardSimple.Root>
      }
      frontChildProps={{
        className: 'cursor-pointer rounded-2xl',
      }}
    />
  )
}
