'use client'

import { AnimatePresence, Variants, motion } from 'framer-motion'

import { APP_NAME } from '@config/constants'
import { useState } from 'react'

const containerVariants: Variants = {
  initial: {
    height: '100vh',
  },
  exit: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

const textContainerVariants: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      delay: 1.5,
      duration: 0.3,
    },
  },
}

const textVariants: Variants = {
  initial: {
    y: 40,
  },
  animate: {
    y: 100,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

export type BrandingTransitionProps = {
  title?: string
}

export function BrandingTransition({ title = APP_NAME }: BrandingTransitionProps) {
  const [mount, setMount] = useState(true)

  return (
    <AnimatePresence>
      {mount && (
        <motion.div
          id="branding-transition"
          className="fixed inset-0 z-[1000] flex w-screen items-center justify-center bg-shade-950"
          initial="initial"
          exit="exit"
          variants={containerVariants}
        >
          <motion.svg
            animate="animate"
            className="flex"
            initial="initial"
            onAnimationComplete={() => setMount(false)}
            variants={textContainerVariants}
          >
            <pattern
              id="pattern"
              className="text-brand-600"
              height={800}
              patternUnits="userSpaceOnUse"
              width={750}
            >
              <rect className="h-full w-full fill-current" />

              <motion.rect
                animate="animate"
                className="h-full w-full"
                fill="url(#gradient)"
                initial="initial"
                variants={textVariants}
              />
              <linearGradient id="gradient" className="text-gradient">
                <stop offset="0%" />
                <stop offset="100%" />
              </linearGradient>
            </pattern>

            <text
              className="font-heading text-5xl font-bold"
              textAnchor="middle"
              x="50%"
              y="50%"
              style={{ fill: 'url(#pattern)' }}
            >
              {title}
            </text>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
