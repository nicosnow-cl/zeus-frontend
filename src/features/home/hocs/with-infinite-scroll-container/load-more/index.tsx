import { forwardRef, useCallback, useEffect, useState } from 'react'
import { Progress } from '@/shadcn-components/ui/progress'

import randomIntFromInterval from '@lib/rand-int-from-interval'

export type LoadMoreProps = {
  className?: string
  isLoading?: boolean
  maxProgressValue?: number
}

export const LoadMore = forwardRef<HTMLDivElement, LoadMoreProps>(
  ({ className = 'mt-4', isLoading, maxProgressValue = 95 }, ref) => {
    const [progress, setProgress] = useState(0)

    const handleProgress = useCallback(
      (initialStep = 25) => {
        setProgress((prev) => {
          if (prev >= maxProgressValue) return maxProgressValue

          const step = initialStep * (1 - prev / maxProgressValue)

          return prev + step
        })
      },
      [maxProgressValue]
    )

    useEffect(() => {
      let intervalId: NodeJS.Timeout | null

      if (isLoading) {
        intervalId = setInterval(() => handleProgress(randomIntFromInterval(25, 75)), 500)
      } else setProgress(0)

      return () => {
        if (intervalId) clearTimeout(intervalId)
      }
    }, [isLoading, handleProgress])

    return (
      <div ref={ref} className={`${className}`}>
        <Progress value={progress} />
      </div>
    )
  }
)

LoadMore.displayName = 'LoadMore'
