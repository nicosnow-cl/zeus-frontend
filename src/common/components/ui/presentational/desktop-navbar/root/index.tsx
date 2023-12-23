'use client'

import { HTMLMotionProps, motion } from 'framer-motion'

export type RootProps = HTMLMotionProps<'nav'> & {
  children: React.ReactNode
  showNavbar?: boolean
}

export const Root = (props: RootProps) => {
  const { children, className = '', showNavbar = true, ...restProps } = props

  return (
    <motion.nav
      className={`max-w-screen fixed z-40 min-h-[var(--navbar-full-height)] w-full bg-transparent ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: showNavbar ? 0.2 : 0.1 }}
      {...restProps}
    >
      {children}
    </motion.nav>
  )
}
