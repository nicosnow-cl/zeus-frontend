'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useMemo } from 'react'
import { useTheme } from 'next-themes'

export type DarkModeTransitionContainerProps = {
  children: React.ReactNode | React.ReactNode[]
}

const variants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
  },
}

export function DarkModeTransitionContainer({ children }: DarkModeTransitionContainerProps) {
  const { theme } = useTheme()

  const isDarkMode = useMemo(() => theme === 'dark', [theme])

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={`${isDarkMode}`}
        animate="animate"
        exit="exit"
        initial="initial"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
