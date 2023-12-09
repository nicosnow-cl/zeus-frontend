'use client'

import { HTMLMotionProps, motion } from 'framer-motion'
import { useState } from 'react'
import clsx from 'clsx'

export type RootProps = HTMLMotionProps<'div'>

export default function Root({ className, children, ...restProps }: RootProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const classes = clsx('group relative h-full overflow-hidden', className)

  const handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    setIsExpanded((prev) => !prev)
  }

  const handleFocus = (evt: React.FocusEvent<HTMLDivElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    setIsExpanded(true)
  }

  return (
    <motion.div
      className={classes}
      data-expanded={isExpanded}
      onClick={handleClick}
      onFocus={handleFocus}
      {...restProps}
    >
      {children}
    </motion.div>
  )
}
