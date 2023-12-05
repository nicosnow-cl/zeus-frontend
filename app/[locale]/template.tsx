'use client'
import { AnimatePresence, motion } from 'framer-motion'

const transitionSpringPhysics = {
  type: 'spring',
  mass: 0.2,
  stiffness: 80,
  damping: 10,
}

const transitionColor = 'deepskyblue'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          id="initial-loader"
          key="initial-loader"
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
      </AnimatePresence>

      {children}
    </>
  )
}
