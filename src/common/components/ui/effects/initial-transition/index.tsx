'use client'

import { AnimatePresence, Variants, motion } from 'framer-motion'

import { APP_NAME } from '@config/constants'

const containerVariants: Variants = {
  initial: {
    height: '100%',
    top: 0,
  },
  //   animate: {
  //     height: 0,
  //     transition: {
  //       when: 'afterChildren',
  //       duration: 1.5,
  //       ease: [0.87, 0, 0.13, 1],
  //     },
  //   },
}

const textContainerVariants: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: 'afterChildren',
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

export type InitialTransitionProps = {
  title?: string
}

export function InitialTransition({ title = APP_NAME }: InitialTransitionProps) {
  const handleAnimationStart = () => {
    console.log('handleAnimationStart')
    document.body.classList.add('overflow-hidden')
  }

  const handleAnimationComplete = () => {
    console.log('handleAnimationComplete')
    document.body.classList.remove('overflow-hidden')
  }

  return (
    <AnimatePresence>
      <motion.div
        id="initial-transition"
        className="fixed z-[1000] flex h-full w-full items-center justify-center bg-shade-950"
        initial="initial"
        animate="animate"
        // variants={containerVariants}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        <motion.svg
          // variants={textContainerVariants}
          className="flex"
        >
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            // className="text-brand-600"
          >
            <rect className="h-full w-full fill-current" />

            <motion.rect
              //   variants={textVariants}
              className="h-full w-full"
              fill="url(#gradient)"
            />
            <linearGradient id="gradient">
              <stop offset="0%" stop-color="#7A5FFF">
                <animate
                  attributeName="stop-color"
                  values="#7A5FFF; #01FF89; #7A5FFF"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>

              <stop offset="100%" stop-color="#01FF89">
                <animate
                  attributeName="stop-color"
                  values="#01FF89; #7A5FFF; #01FF89"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </pattern>

          <text
            className="text-4xl font-bold"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: 'url(#pattern)' }}
          >
            {title}
          </text>
        </motion.svg>
      </motion.div>
    </AnimatePresence>
  )
}
