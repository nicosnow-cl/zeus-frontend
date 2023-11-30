'use client'

import { Grid } from '@radix-ui/themes'
import { MotionConfig } from 'framer-motion'
import { useRef, useState } from 'react'

import { FlipEffect } from '@/common/components/ui/effects/flip-effect'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import * as UserCard from '../../ui/presentational/user-card'
import { UserInfoDialog } from '../../ui/presentational/user-info-dialog'
import { Button } from '@/shadcn-components/ui/button'
import { CaretLeftFillIcon, CaretRightFillIcon } from '@/common/icons'
import { UserCardDynamic } from '../user-card-dynamic'
import { DimLayer } from '@/common/components/ui/presentational/dim-layer'

export type UsersCardsContainerProps = {
  data?: UserCardEntity[]
}

const DELAYS = [...Array(10)].map((_, idx) => 100 + Math.max(1, idx) * 100)

export const UsersCardsContainer = ({ data = [] }: UsersCardsContainerProps) => {
  const [showDialog, setShowDialog] = useState(false)
  const [selectedUser, setSelectedUser] = useState<[number, UserCardEntity] | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const getDelay = (idx: number) => {
    const strNumber = idx.toString()
    const lastNumber = strNumber[strNumber.length - 1]

    return DELAYS[parseInt(lastNumber)]
  }

  const handleClickCard = (idx: number, evt?: React.MouseEvent<HTMLElement>) => {
    if (evt) {
      evt.preventDefault()
      evt.stopPropagation()
    }

    setSelectedUser([idx, data[idx]])
    setShowDialog(true)

    const card = cardsRef.current[idx]
    card?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleOpenDialog = (value: boolean) => {
    if (value) return

    setShowDialog(false)
    setSelectedUser(null)
  }

  const handleGoLeft = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault()
    evt.stopPropagation()

    const currentIdx = selectedUser?.[0] || 0
    let nextIdx = currentIdx - 1

    if (nextIdx < 0) nextIdx = data.length - 1

    setSelectedUser([nextIdx, data[nextIdx]])

    const card = cardsRef.current[nextIdx]
    card?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleGoRight = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault()
    evt.stopPropagation()

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
        ease: 'linear',
        type: 'spring',
        stiffness: 700,
        damping: 90,
      }}
    >
      <Grid
        className="relative"
        columns={{
          initial: '1',
          sm: '2',
          md: '3',
          lg: '4',
        }}
        gap="1"
      >
        {data.map((user, idx) => (
          <FlipEffect
            key={idx}
            className="min-h-[400px]"
            ref={(el) => (cardsRef.current[idx] = el)}
            delay={getDelay(idx)}
            frontChild={<UserCard.Skeleton />}
            backChild={
              <UserCard.Root onClick={(evt) => handleClickCard(idx, evt)}>
                <UserCard.BackgroundMedia avatar={user.avatar} medias={user.medias} />

                <UserCard.Body
                  avatar={user.avatar}
                  username={user.username}
                  age={user.age}
                  name={user.name}
                />
                <UserCard.Description description={user.description} />
              </UserCard.Root>
            }
          />
        ))}
      </Grid>

      <UserInfoDialog
        data={selectedUser?.[1] || null}
        open={showDialog}
        onOpenChange={handleOpenDialog}
        leftAdornment={
          <Button size="icon" onClick={(evt) => handleGoLeft(evt)}>
            <CaretLeftFillIcon />
          </Button>
        }
        rightAdornment={
          <Button size="icon" onClick={(evt) => handleGoRight(evt)}>
            <CaretRightFillIcon />
          </Button>
        }
      />
    </MotionConfig>
  )
}
