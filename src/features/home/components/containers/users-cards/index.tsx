'use client'

import { MotionConfig } from 'framer-motion'
import { useState } from 'react'

import { DimLayer } from '@/common/components/ui/presentational/dim-layer'
import { MasonryContainer } from '@/common/components/containers/masonry'
import { UserCardDynamic } from '../user-card-dynamic'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'

export type UsersCardsContainerProps = {
  data?: UserCardEntity[]
}

const DELAYS = [...Array(10)].map((_, idx) => 100 + Math.max(1, idx) * 100)

export const UsersCardsContainer = ({ data = [] }: UsersCardsContainerProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const getDelay = (idx: number) => {
    const strNumber = idx.toString()
    const lastNumber = strNumber[strNumber.length - 1]

    return DELAYS[parseInt(lastNumber)]
  }

  const handleClickCard = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>,
    card: { idx: number; id: string }
  ) => {
    evt.preventDefault()

    if (!selectedId) setSelectedId(card.id)
  }

  const handleHideCard = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.preventDefault()

    if (selectedId) setSelectedId(null)
  }

  const getCardClassName = (type: string) => {
    switch (type) {
      case 'VIP':
        return 'col-span-4 row-span-4 sm:col-span-2 sm:row-span-3 xl:col-span-2 xl:row-span-4 min-h-[300px] md:min-h-[400px]'
      case 'PREMIUM':
        return 'col-span-2 row-span-3 sm:col-span-2 sm:row-span-2 xl:col-span-2 xl:row-span-3 min-h-[300px] md:min-h-[400px]'
      default:
        return 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-1 xl:col-span-2 xl:row-span-2 min-h-[300px] md:min-h-[400px]'
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
      <MasonryContainer className="masonry-highlight relative grid-cols-4 gap-1">
        {data.map((user, idx) => (
          <div
            key={idx}
            className={`masonry-item-highlighted relative ${getCardClassName(user.type)}`}
          >
            <UserCardDynamic
              data={user}
              expanded={selectedId === user._id}
              containerProps={{
                onClick: (evt) => handleClickCard(evt, { idx, id: user._id }),
              }}
            />
          </div>
        ))}
      </MasonryContainer>

      <DimLayer
        byOwn
        isVisible={Boolean(selectedId)}
        containerProps={{
          onClick: handleHideCard,
        }}
      />
    </MotionConfig>
  )
}
