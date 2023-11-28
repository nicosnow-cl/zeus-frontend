'use client'

import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import { forwardRef, useEffect, useState } from 'react'

export type FlipEffectProps = {
  backChild?: React.ReactNode
  className?: string
  containerProps?: Omit<HTMLMotionProps<'div'>, 'children' | 'ref'>
  delay?: number
  frontChild: React.ReactNode
}

export const FlipEffect = forwardRef<HTMLDivElement, FlipEffectProps>(
  ({ backChild, className = '', containerProps, delay, frontChild }, ref) => {
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
      const timeoutId = setTimeout(() => setIsRevealed(true), delay)

      return () => clearTimeout(timeoutId)
    }, [delay])

    return (
      <motion.div
        ref={ref}
        className={`relative h-fit ${className}`}
        style={{
          perspective: '800px',
          transformStyle: 'preserve-3d',
        }}
        {...containerProps}
      >
        <AnimatePresence>
          {!isRevealed && (
            <motion.div
              key="front"
              className="h-fit w-full"
              initial={{ rotateY: 0 }}
              exit={{ rotateY: -180 }}
              style={{
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                position: 'absolute',
              }}
            >
              {frontChild}
            </motion.div>
          )}

          {isRevealed && (
            <motion.div
              key="back"
              className="h-fit w-full"
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              style={{
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                position: 'absolute',
              }}
            >
              {backChild}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }
)

FlipEffect.displayName = 'FlipEffect'
