import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { useState } from 'react'
import * as Separator from '@radix-ui/react-separator'

import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import * as UserCard from '../user-card-simple'
import * as UserInfo from '../user-info'

export type UserCard3DProps = {
  containerProps?: React.ComponentProps<typeof motion.div>
  user: UserCardEntity
}

export function UserCard3D({ containerProps, user }: UserCard3DProps) {
  const { className, style, ...restContainerProps } = containerProps ?? {}
  const classes = twMerge(className, 'relative')

  const [isRevealed, setIsRevealed] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-15, 15])

  const handleMouseMove = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = evt.currentTarget.getBoundingClientRect()

    const { top, left, width, height } = rect
    const moveX = evt.clientX - left
    const moveY = evt.clientY - top

    const xPercent = moveX / width
    const yPercent = moveY / height

    x.set(xPercent - 0.5)
    y.set(yPercent - 0.5)
  }

  const handleReset = () => {
    x.set(0)
    y.set(0)
  }

  const handleToggleReveal = () => {
    setIsRevealed((prev) => !prev)
  }

  return (
    <motion.div
      {...restContainerProps}
      className={classes}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleReset}
      onClick={handleToggleReveal}
    >
      <UserCard.Media
        avatar={user.avatar}
        containerProps={{
          className: 'rounded-2xl',
          style: {
            transformStyle: 'preserve-3d',
          },
        }}
      />

      <div
        className="absolute inset-2 overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(30px)',
        }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {!isRevealed && (
            <motion.div
              key="first"
              className="h-full"
              initial={{
                x: '-100%',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '-100%',
              }}
            >
              <UserCard.Content>
                <UserCard.Header
                  likes={user.likes}
                  nationality={user.nationality}
                  type={user.type}
                  containerProps={{
                    className: 'p-0',
                  }}
                />

                <UserCard.Body
                  age={user.age}
                  description={user.description}
                  hasPromo={user.hasPromo}
                  name={user.name}
                  price={user.price}
                  containerProps={{
                    className: 'rounded-2xl',
                  }}
                />
              </UserCard.Content>
            </motion.div>
          )}

          {isRevealed && (
            <motion.div
              key="second"
              className="flex h-full flex-col justify-between gap-3"
              initial={{
                x: '100%',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '100%',
              }}
            >
              <UserInfo.Header likes={user.likes} type={user.type} />

              <div className="flex flex-col gap-2 rounded-xl border border-gray-600/50 bg-gray-950/60 px-2 py-3 text-sm text-shade-50 ">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
