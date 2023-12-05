'use client'

import { Grid } from '@radix-ui/themes'
import { stagger, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Skeleton } from '../user-card'
import { MasonryContainer } from '@/common/components/containers/masonry'

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

  const pickRandomClassName = () => {
    const className = [
      'col-span-4 row-span-4 sm:col-span-2 sm:row-span-3 xl:col-span-2 xl:row-span-4 min-h-[300px] md:min-h-[400px]',
      'col-span-2 row-span-3 sm:col-span-2 sm:row-span-2 xl:col-span-2 xl:row-span-3 min-h-[300px] md:min-h-[400px]',
      'col-span-2 row-span-2 sm:col-span-2 sm:row-span-1 xl:col-span-2 xl:row-span-2 min-h-[300px] md:min-h-[400px]',
    ]

    return className[Math.floor(Math.random() * className.length)]
  }

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
    <MasonryContainer ref={scope} className="relative grow grid-cols-4 gap-1">
      {Array.from({ length: skeletonCount }).map((_, idx) => (
        <Skeleton
          key={idx}
          className={`card-skeleton rounded-2xl ${pickRandomClassName()}`}
          initial={{ opacity: 0.05 }}
        />
      ))}
    </MasonryContainer>
  )
}
