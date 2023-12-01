import { Grid } from '@radix-ui/themes'
import { MotionConfig, PanInfo } from 'framer-motion'
import { useRef, useState } from 'react'

import { DimLayer } from '@/common/components/ui/presentational/dim-layer'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { UserCardDynamic } from '../user-card-dynamic'

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

  const getCardSize = (type: string) => {
    switch (type) {
      case 'VIP':
        return 500
      case 'PREMIUM':
        return 450
      default:
        return 400
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
      <div className="columns-4 gap-1">
        {data.map((user, idx) => (
          <div key={idx} className={`relative mb-1 h-[${getCardSize(user.type)}px]`}>
            <UserCardDynamic
              data={user}
              expanded={selectedId === user._id}
              containerProps={{
                onClick: (evt) => handleClickCard(evt, { idx, id: user._id }),
              }}
            />
          </div>
        ))}
      </div>

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
