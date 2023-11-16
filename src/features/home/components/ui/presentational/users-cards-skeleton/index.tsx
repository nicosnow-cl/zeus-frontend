'use client'

import { Grid } from '@radix-ui/themes'
import { stagger, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Skeleton } from '../user-card'

export type CardsContainerLoadingProps = {
  staggerDelay?: number
  skeletonCount?: number
}

export const UsersCardsSkeleton = ({
  staggerDelay = 0.15,
  skeletonCount = 10,
}: CardsContainerLoadingProps) => {
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
  }, [animate, duration, staggerDelay])

  return (
    <Grid
      columns={{
        initial: '1',
        sm: '2',
        md: '3',
        lg: '4',
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
