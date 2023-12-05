'use client'

import { HTMLMotionProps, motion } from 'framer-motion'

export type SkeletonProps = HTMLMotionProps<'div'> & {
  withFooter?: boolean
}

export const Skeleton = (props: SkeletonProps) => {
  const { className, withFooter, ...restProps } = props

  return (
    <motion.div className={`relative overflow-hidden drop-shadow ${className}`} {...restProps}>
      <div className="absolute z-[2] flex h-full w-full flex-col justify-end bg-gray-7">
        {withFooter && <div className="h-[36px] bg-gray-4" />}
      </div>
    </motion.div>
  )
}
