import { Grid } from '@radix-ui/themes'
import { MotionConfig, PanInfo } from 'framer-motion'
import { useRef, useState } from 'react'
// import Masonry from 'react-masonry-component'
import { XMasonry, XBlock } from 'react-xmasonry'

import { DimLayer } from '@/common/components/ui/presentational/dim-layer'
import { UserCardEntity } from '@/common/types/entities/user-card-entity.type'
import { UserCardDynamic } from '../user-card-dynamic'
import * as UserCardMinimal from '../../ui/presentational/user-card'
import styles from './styles.module.css'
import { MasonryContainer } from '@/common/components/containers/masonry'

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

  const getCardDimensions = (type: string) => {
    switch (type) {
      case 'VIP':
        return { width: 2, height: 500, style: { gridColumn: 'span 3', gridRow: 'span 4' } }
      case 'PREMIUM':
        return { width: 1, height: 450, style: { gridColumn: 'span 3', gridRow: 'span 3' } }
      default:
        return { width: 1, height: 400, style: { gridColumn: 'span 2', gridRow: 'span 2' } }
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
      {/* <Masonry
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
        <div className={'grid-sizer'} /> */}

      {/* <MasonryContainer
        masonryOptions={{
          columnNumber: 4,
        }}
      > */}
      {/* <XMasonry> */}
      <div
        className="gap-1"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
          gridAutoRows: '10rem',
          gridAutoFlow: 'dense',
        }}
      >
        {data.map((user, idx) => {
          const { width, height, style } = getCardDimensions(user.type)

          return (
            // <XBlock key={idx} width={width}>
            <div key={idx} className={`relative`} style={style}>
              <UserCardDynamic
                data={user}
                expanded={selectedId === user._id}
                containerProps={{
                  onClick: (evt) => handleClickCard(evt, { idx, id: user._id }),
                }}
              />
            </div>
            // </XBlock>
          )
        })}
      </div>
      {/* </XMasonry> */}
      {/* </MasonryContainer> */}
      {/* </Masonry> */}
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
