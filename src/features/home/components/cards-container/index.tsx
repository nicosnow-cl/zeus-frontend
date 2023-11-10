'use client'

import { Grid } from '@radix-ui/themes'
import { MotionConfig } from 'framer-motion'
import { useRef, useState } from 'react'

import { DimLayer } from '@/common/components/ui/effects/dim-layer'
import { FlipEffect } from '@/common/components/ui/effects/flip-effect'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { UserDialog } from '../user-dialog'
import * as UserCard from '../user-card'

export type TCardsContainerProps = {
  data?: UserCardEntity[]
}

const DELAYS = [...Array(10)].map((_, idx) => 100 + Math.max(1, idx) * 100)

export const CardsContainer = ({ data = [] }: TCardsContainerProps) => {
  const [showDialog, setShowDialog] = useState(false)
  const [selectedUser, setSelectedUser] = useState<[number, UserCardEntity] | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const getDelay = (idx: number) => {
    const strNumber = idx.toString()
    const lastNumber = strNumber[strNumber.length - 1]

    return DELAYS[parseInt(lastNumber)]
  }

  const handleClickCard = (idx: number, evt?: React.MouseEvent<HTMLElement>) => {
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
          md: '2',
          lg: '3',
        }}
        gap="4"
      >
        {data.map((user, idx) => (
          <FlipEffect
            key={idx}
            className={selectedUser?.[0] === idx ? 'z-[55]' : ''}
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

      <DimLayer isVisible={showDialog} />
      <UserDialog
        open={showDialog}
        data={selectedUser?.[1] || null}
        onOpenChange={handleCloseDialog}
        onLeftClick={handleGoLeft}
        onRightClick={handleGoRight}
      />
    </MotionConfig>
  )
}
