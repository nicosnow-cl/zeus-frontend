'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'

export type DarkModeTransitionContainerProps = {
  children: React.ReactNode | React.ReactNode[]
}

const transitionSpringPhysics = {
  type: 'spring',
  mass: 0.2,
  stiffness: 80,
  damping: 10,
}

export function DarkModeTransitionContainer({ children }: DarkModeTransitionContainerProps) {
  const { systemTheme, theme } = useTheme()

  const isDarkMode = useMemo(() => theme === 'dark', [theme])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        id="theme-transition-in"
        key="theme-transition-in"
        className="bg-shade-950"
        style={{
          position: 'fixed',
          width: '100vw',
          zIndex: 1000,
          bottom: 0,
        }}
        transition={transitionSpringPhysics}
        animate={{ height: '0vh' }}
        exit={{ height: '100vh' }}
      />
      <motion.div
        id="exit-loader"
        key="exit-loader"
        className="bg-shade-950"
        style={{
          position: 'fixed',
          width: '100vw',
          zIndex: 1000,
          top: 0,
        }}
        transition={transitionSpringPhysics}
        initial={{ height: '100vh' }}
        animate={{ height: '0vh', transition: { delay: 0.2 } }}
      />

      <motion.div layout>{children}</motion.div>
    </AnimatePresence>
  )
}
