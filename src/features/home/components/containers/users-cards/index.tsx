'use client'

import { Grid } from '@radix-ui/themes'
import { MotionConfig } from 'framer-motion'
import { useRef, useState } from 'react'

import { FlipEffect } from '@/common/components/ui/effects/flip-effect'
import { $showNavbar } from '@/common/signals/ui'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { UserInfoDialog } from '../../ui/presentational/user-info-dialog'
import * as UserCard from '../../ui/presentational/user-card'

export type TCardsContainerProps = {
  data?: UserCardEntity[]
}

const DELAYS = [...Array(10)].map((_, idx) => 100 + Math.max(1, idx) * 100)

export const UsersCardsContainer = ({ data = [] }: TCardsContainerProps) => {
  const [showDialog, setShowDialog] = useState(false)
  const [selectedUser, setSelectedUser] = useState<[number, UserCardEntity] | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const getDelay = (idx: number) => {
    const strNumber = idx.toString()
    const lastNumber = strNumber[strNumber.length - 1]

    return DELAYS[parseInt(lastNumber)]
  }

  const handleClickCard = (idx: number, evt?: React.MouseEvent<HTMLElement>) => {
    $showNavbar.value = false

    setSelectedUser([idx, data[idx]])
    setShowDialog(true)

    if (evt) {
      evt.preventDefault()
      evt.stopPropagation()
    }

    const card = cardsRef.current[idx]
    card?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCloseDialog = () => {
    $showNavbar.value = true

    setShowDialog(false)

    setTimeout(() => {
      setSelectedUser(null)
    }, 150)
  }

  const handleGoLeft = () => {
    const currentIdx = selectedUser?.[0] || 0
    let nextIdx = currentIdx - 1

    if (nextIdx < 0) nextIdx = data.length - 1

    setSelectedUser([nextIdx, data[nextIdx]])

    const card = cardsRef.current[nextIdx]
    card?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleGoRight = () => {
    const currentIdx = selectedUser?.[0] || 0
    let nextIdx = currentIdx + 1

    if (nextIdx >= data.length) nextIdx = 0

    setSelectedUser([nextIdx, data[nextIdx]])

    const card = cardsRef.current[nextIdx]
    card?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <MotionConfig
      transition={{
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 700,
        damping: 90,
      }}
    >
      <Grid
        columns={{
          initial: '1',
          sm: '2',
          md: '3',
          lg: '4',
        }}
        gap="4"
      >
        {data.map((user, idx) => (
          <FlipEffect
            key={idx}
            className={selectedUser?.[0] === idx ? 'z-40' : ''}
            ref={(el) => (cardsRef.current[idx] = el)}
            delay={getDelay(idx)}
            frontChild={<UserCard.Skeleton />}
            backChild={
              <UserCard.Root onClik={(evt) => handleClickCard(idx, evt)}>
                <div className="absolute h-[600px] w-full overflow-hidden">
                  <UserCard.BackgroundMedia avatar={user.avatar} medias={user.medias} />
                </div>

                <UserCard.Body
                  avatar={user.avatar}
                  username={user.username}
                  age={user.age}
                  name={user.name}
                />
                <UserCard.Description description={user.description} />
                <UserCard.Actions price={user.price} location={user.location} />
              </UserCard.Root>
            }
          />
        ))}
      </Grid>

      <UserInfoDialog
        open={showDialog}
        data={selectedUser?.[1] || null}
        onLeftClick={handleGoLeft}
        onOpenChange={handleCloseDialog}
        onRightClick={handleGoRight}
      />
    </MotionConfig>
  )
}
