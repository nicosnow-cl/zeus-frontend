import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

export type DimLayerProps = {
  isVisible?: boolean
}

export const DimLayer = ({ isVisible }: DimLayerProps) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '15px'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 h-screen w-screen bg-woodsmoke-950/20 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.15 }}
        />
      )}
    </AnimatePresence>
  )
}
