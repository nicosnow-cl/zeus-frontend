'use client'

import { Skeleton } from '@/shadcn-components/ui/skeleton'
import { stagger, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'

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
      'col-span-12 row-span-6 sm:col-span-6 lg:col-span-4',
      'col-span-12 row-span-5 sm:col-span-6 lg:col-span-4',
      'col-span-12 row-span-4 sm:col-span-6 lg:col-span-4',
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
    <MasonryContainer ref={scope} className="masonry-highlight grid-cols-12 gap-1">
      {Array.from({ length: skeletonCount }).map((_, idx) => (
        <Skeleton
          key={idx}
          className={`card-skeleton min-h-[450px] rounded-2xl ${pickRandomClassName()}`}
        />
      ))}
    </MasonryContainer>
  )
}
