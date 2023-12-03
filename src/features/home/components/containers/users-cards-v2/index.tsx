'use client'

import { MotionConfig, motion } from 'framer-motion'
import { useState } from 'react'

import { DimLayer } from '@/common/components/ui/presentational/dim-layer'
import { MasonryContainer } from '@/common/components/containers/masonry'
import { UserCardDynamic } from '../user-card-dynamic'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { useWindowSize } from '@/common/hooks/window-size'

export type UsersCardsContainerProps = {
  data?: UserCardEntity[]
}

const DELAYS = [...Array(10)].map((_, idx) => 100 + Math.max(1, idx) * 100)

export const UsersCardsContainerV2 = ({ data = [] }: UsersCardsContainerProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)

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

  const getCardDimensions = (type: string) => {
    switch (type) {
      case 'VIP':
        return {
          className: 'col-span-full row-span-3 xl:col-span-2 xl:row-span-3 min-h-[400px]',
          style: { gridColumn: 'span 2', gridRow: 'span 3', minHeight: '400px' },
        }
      case 'PREMIUM':
        return {
          className: 'col-span-2 row-span-2 xl:col-span-2 xl:row-span-2 min-h-[400px]',
          style: { gridColumn: 'span 2', gridRow: 'span 2', minHeight: '400px' },
        }
      default:
        return {
          className: 'col-span-2 row-span-2 xl:col-span-1 xl:row-span-2 min-h-[400px]',
          style: { gridColumn: 'span 1', gridRow: 'span 2', minHeight: '400px' },
        }
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
      <MasonryContainer className="grid-cols-4 gap-1">
        {data.map((user, idx) => (
          <div key={idx} className={`relative ${getCardDimensions(user.type).className}`}>
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
