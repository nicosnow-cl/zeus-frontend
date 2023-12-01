import { Grid } from '@radix-ui/themes'
import { MotionConfig, PanInfo } from 'framer-motion'
import { useRef, useState } from 'react'
import Masonry from 'react-masonry-component'

import { DimLayer } from '@/common/components/ui/presentational/dim-layer'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { UserCardDynamic } from '../user-card-dynamic'
import * as UserCardMinimal from '../../ui/presentational/user-card'
import styles from './styles.module.css'

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
        return 'grid-item--width2 h-[500px]'
      case 'PREMIUM':
        return 'h-[450px]'
      default:
        return 'h-[400px]'
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
      {/* <div className="columns-4 gap-1"> */}
      <Masonry
        className={'grid w-full'}
        options={{
          transitionDuration: 0,
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-sizer',
          // do not use .grid-sizer in layout
          itemSelector: '.grid-item',
          percentPosition: true,
        }}
      >
        <div className={'grid-sizer'} />

        {data.map((user, idx) => (
          <div key={idx} className={`grid-item ${getCardSize(user.type)}`}>
            <UserCardDynamic
              data={user}
              expanded={selectedId === user._id}
              containerProps={{
                onClick: (evt) => handleClickCard(evt, { idx, id: user._id }),
              }}
            />
          </div>
        ))}
      </Masonry>
      {/* </div> */}

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
