'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'

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
  const { theme } = useTheme()
  const [animate, setAnimate] = useState(false)

  const isDarkMode = useMemo(() => theme === 'dark', [theme])

  useEffect(() => {
    setAnimate(true)
  }, [isDarkMode])

  return (
    <AnimatePresence initial={false} mode="wait">
      {animate && (
        <motion.div
          key={`${isDarkMode}`}
          className="fixed inset-0 z-50 bg-shade-950 dark:bg-shade-100"
          animate="animate"
          exit="exit"
          initial="initial"
          transition={{ duration: 0.4, ease: 'easeOut' }}
          variants={variants}
          onAnimationComplete={() => setAnimate(false)}
        />
      )}
    </AnimatePresence>
  )
}
