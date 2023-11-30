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

  return (
    <MotionConfig
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 40,
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
          <UserCardDynamic
            key={idx}
            data={user}
            expanded={selectedId === user._id}
            containerProps={{
              onClick: (evt) => handleClickCard(evt, { idx, id: user._id }),
            }}
          />
        ))}
      </Grid>

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
