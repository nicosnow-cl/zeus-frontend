'use client'

import { HTMLMotionProps, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export type RootProps = Omit<HTMLMotionProps<'nav'>, 'ref'> & {
  showNavbar?: boolean
}

export const Root = ({ children, className, showNavbar = true, ...restProps }: RootProps) => {
  const classes = twMerge('navbar', className)

  return (
    <motion.nav
      className={classes}
      initial={{ opacity: 0 }}
      animate={{ opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: showNavbar ? 0.2 : 0.1 }}
      {...restProps}
    >
      {children}
    </motion.nav>
  )
}
