'use client'

import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import { forwardRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export type FlipEffectProps = {
  backChild?: React.ReactNode
  backChildProps?: Omit<HTMLMotionProps<'div'>, 'children' | 'ref'>
  containerProps?: Omit<HTMLMotionProps<'div'>, 'children' | 'ref'>
  frontChild: React.ReactNode
  frontChildProps?: Omit<HTMLMotionProps<'div'>, 'children' | 'ref'>
}

export const FlipEffect = forwardRef<HTMLDivElement, FlipEffectProps>(
  ({ backChild, backChildProps, containerProps, frontChild, frontChildProps }, ref) => {
    const [isRevealed, setIsRevealed] = useState(false)
    const [isSafeToRender, setIsSafeToRender] = useState(true)

    const { className, ...restContainerProps } = containerProps || {}
    const { className: frontClassName, ...restFrontChildProps } = frontChildProps || {}
    const { className: backClassName, ...restBackChildProps } = backChildProps || {}
    const classes = twMerge('relative h-full', className)
    const frontClasses = twMerge('h-fit w-full overflow-hidden', frontClassName)
    const backClasses = twMerge('h-fit w-full overflow-hidden', backClassName)

    const handleDoFlip = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      evt.preventDefault()
      evt.stopPropagation()

      if (!isSafeToRender) return

      setIsRevealed((prev) => !prev)
    }

    return (
      <motion.div
        {...restContainerProps}
        ref={ref}
        className={classes}
        onClick={handleDoFlip}
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <AnimatePresence initial={false}>
          {!isRevealed ? (
            <motion.div
              key="front"
              {...restFrontChildProps}
              className={frontClasses}
              initial={{ rotateY: -180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -180 }}
              onAnimationStart={() => setIsSafeToRender(false)}
              onAnimationComplete={() => setIsSafeToRender(true)}
              style={{
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                position: 'absolute',
              }}
            >
              {frontChild}
            </motion.div>
          ) : (
            <motion.div
              key="back"
              {...restBackChildProps}
              className={backClasses}
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 180 }}
              onAnimationStart={() => setIsSafeToRender(false)}
              onAnimationComplete={() => setIsSafeToRender(true)}
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
