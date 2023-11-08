'use client'

import { Grid } from '@radix-ui/themes'
import { MotionConfig } from 'framer-motion'
import { useState } from 'react'

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
  const [selectedUser, setSelectedUser] = useState<UserCardEntity | null>(null)

  const getDelay = (idx: number) => {
    const strNumber = idx.toString()
    const lastNumber = strNumber[strNumber.length - 1]

    return DELAYS[parseInt(lastNumber)]
  }

  const handleClickCard = (idx: number) => {
    setSelectedUser(data[idx])
    setShowDialog(true)
  }

  const handleCloseDialog = () => {
    setShowDialog(false)
    setSelectedUser(null)
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
            delay={getDelay(idx)}
            frontChild={<UserCard.Skeleton />}
            backChild={
              <UserCard.Root onClik={() => handleClickCard(idx)}>
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
                <UserCard.Actions price={user.price} location={user.location} rrss={user.rrss} />
              </UserCard.Root>
            }
          />
        ))}
      </Grid>

      <UserDialog open={showDialog} data={selectedUser} onOpenChange={handleCloseDialog} />
    </MotionConfig>
  )
}
