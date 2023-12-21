'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { uiActions, useUiStore } from '@/common/store/ui'

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

export function DarkModeTransition() {
  const { theme, setTheme } = useTheme()
  const { changeTheme } = useUiStore()

  const isDarkTheme = theme === 'dark'

  const handleAnimationComplete = () => {
    uiActions.toggleTheme(false)

    if (isDarkTheme) setTheme('light')
    else setTheme('dark')
  }

  return (
    <AnimatePresence initial={false}>
      {changeTheme && (
        <motion.div
          key="dark-mode-transition"
          animate="animate"
          className={`fixed inset-0 z-50 ${isDarkTheme ? 'bg-shade-100' : 'bg-shade-950'}`}
          exit="exit"
          initial="initial"
          onAnimationComplete={handleAnimationComplete}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          variants={variants}
        />
      )}
    </AnimatePresence>
  )
}
