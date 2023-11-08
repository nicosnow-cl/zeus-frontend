'use client'

import { Grid } from '@radix-ui/themes'
import { stagger, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Skeleton } from '@/features/home/components/user-card'

export type TCardsContainerLoadingProps = {
  staggerDelay?: number
  skeletonCount?: number
}

export const CardsContainerLoading = ({
  staggerDelay = 0.15,
  skeletonCount = 10,
}: TCardsContainerLoadingProps) => {
  const [scope, animate] = useAnimate()
  const [duration] = useState(skeletonCount * staggerDelay)

  useEffect(() => {
    animate(
      '.card-skeleton',
      { opacity: 1 },
      {
        duration: duration,
        delay: stagger(staggerDelay),
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: duration,
      }
    )
  }, [])

  return (
    <Grid
      columns={{
        initial: '1',
        md: '2',
        lg: '3',
      }}
      gap="4"
      ref={scope}
    >
      {Array.from({ length: skeletonCount }).map((_, idx) => (
        <Skeleton key={idx} className="card-skeleton" initial={{ opacity: 0.05 }} />
      ))}
    </Grid>
  )
}
