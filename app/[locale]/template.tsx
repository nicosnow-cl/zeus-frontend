'use client'

import { APP_NAME } from '@config/constants'
import { AnimatePresence, motion } from 'framer-motion'

const blackBox = {
  initial: {
    height: '100%',
    top: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

const textContainer = {
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

const text = {
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

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="absolute z-[999] flex max-h-screen w-full items-center justify-center bg-shade-950"
          initial="initial"
          animate="animate"
          variants={blackBox}
          onAnimationStart={() => document.body.classList.add('overflow-hidden')}
          onAnimationComplete={() => document.body.classList.remove('overflow-hidden')}
        >
          <motion.svg variants={textContainer} className="absolute z-[999] flex">
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width={750}
              height={800}
              className="text-brand-600"
            >
              <rect className="h-full w-full fill-current" />
              <motion.rect variants={text} className="h-full w-full fill-current text-gray-600" />
            </pattern>

            <text
              className="text-4xl font-bold"
              textAnchor="middle"
              x="50%"
              y="50%"
              style={{ fill: 'url(#pattern)' }}
            >
              {APP_NAME}
            </text>
          </motion.svg>
        </motion.div>
      </AnimatePresence>

      {children}
    </>
  )
}
