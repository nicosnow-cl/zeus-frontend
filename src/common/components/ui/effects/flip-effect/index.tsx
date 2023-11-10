'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { forwardRef, useEffect, useState } from 'react'

export type FlipEffectProps = {
  backChild?: React.ReactNode
  className?: string
  delay?: number
  frontChild: React.ReactNode
}

export const FlipEffect = forwardRef<HTMLDivElement, FlipEffectProps>(
  ({ backChild, className = '', delay, frontChild }, ref) => {
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
      const timeoutId = setTimeout(() => setIsRevealed(true), delay)

      return () => clearTimeout(timeoutId)
    }, [delay])

    return (
      <motion.div
        ref={ref}
        className={`relative flex h-[636px] items-center justify-center ${className}`}
        style={{
          perspective: '800px',
          transformStyle: 'preserve-3d',
        }}
      >
        <AnimatePresence>
          {!isRevealed && (
            <motion.div
              key="front"
              className="h-fit w-full"
              initial={{ rotateY: 0, zIndex: 1 }}
              exit={{ rotateY: -180, zIndex: 0 }}
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
              initial={{ rotateY: 180, zIndex: 0 }}
              animate={{ rotateY: 0, zIndex: 1 }}
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
