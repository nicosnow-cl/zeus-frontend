'use client'

import { AnimatePresence, motion } from 'framer-motion'

export type TDimLayerProps = {
  isVisible?: boolean
}

export const DimLayer = ({ isVisible }: TDimLayerProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 h-screen w-screen bg-woodsmoke-950/20 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.15 }}
        />
      )}
    </AnimatePresence>
  )
}
