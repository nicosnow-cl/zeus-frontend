'use client'

import { HTMLMotionProps, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import clsx from 'clsx'

export type RootProps = HTMLMotionProps<'div'>

export default function Root({ className, children, ...restProps }: RootProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const classes = useMemo(
    () => clsx('group relative h-full overflow-hidden', className),
    [className]
  )

  return (
    <motion.div
      {...restProps}
      className={classes}
      data-expanded={isExpanded}
      onClick={() => setIsExpanded((prev) => !prev)}
      onFocus={() => setIsExpanded(true)}
      role="button"
      tabIndex={0}
    >
      {children}
    </motion.div>
  )
}
