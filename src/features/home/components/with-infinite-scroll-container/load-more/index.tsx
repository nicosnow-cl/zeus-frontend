import { forwardRef, useEffect, useState } from 'react'
import { Progress } from '@/shadcn-components/ui/progress'
import randomIntFromInterval from '@lib/rand-int-from-interval'

export type TLoadMoreProps = {
  className?: string
  isLoading?: boolean
  maxProgressValue?: number
}

const LoadMore = forwardRef<HTMLDivElement, TLoadMoreProps>(
  ({ className = 'mt-4', isLoading, maxProgressValue = 95 }, ref) => {
    const [progress, setProgress] = useState(0)

    const handleProgress = (initialStep = 25) => {
      setProgress((prev) => {
        if (prev >= maxProgressValue) return maxProgressValue

        const step = initialStep * (1 - prev / maxProgressValue)

        return prev + step
      })
    }

    useEffect(() => {
      let intervalId: NodeJS.Timeout | null

      if (isLoading) {
        intervalId = setInterval(() => handleProgress(randomIntFromInterval(25, 75)), 500)
      } else setProgress(0)

      return () => {
        if (intervalId) clearTimeout(intervalId)
      }
    }, [isLoading])

    return (
      <div ref={ref} className={className}>
        <Progress value={progress} />
      </div>
    )
  }
)

export default LoadMore
