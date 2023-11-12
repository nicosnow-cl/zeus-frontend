'use client'

import { HTMLMotionProps, motion } from 'framer-motion'

export type TSkeletonProps = HTMLMotionProps<'div'>

export const Skeleton = (props: TSkeletonProps) => {
  const { className, ...restProps } = props

  return (
    <motion.div className={`relative h-[636px] drop-shadow ${className}`} {...restProps}>
      <div className="absolute z-[2] flex h-[636px] w-full flex-col justify-end bg-gray-7">
        <div className="h-[36px] bg-gray-4" />
      </div>
    </motion.div>
  )
}
