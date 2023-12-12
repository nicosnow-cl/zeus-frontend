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

  const handleKeyUp = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (evt.key === 'Enter') setIsExpanded((prev) => !prev)
  }

  const handleBlur = (evt: React.FocusEvent<HTMLDivElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    const currentTarget = evt.currentTarget

    requestAnimationFrame(() => {
      // Check if the new focused element is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        // Do blur logic here!
        setIsExpanded(false)
      }
    })
  }

  const handleMouseLeave = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    evt.currentTarget.blur()

    setIsExpanded(false)
  }

  return (
    <motion.div
      className={classes}
      data-expanded={isExpanded}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      onBlur={handleBlur}
      onMouseLeave={handleMouseLeave}
      {...restProps}
    >
      {children}
    </motion.div>
  )
}
