import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

export type DimLayerProps = {
  byOwn?: boolean
  isVisible?: boolean
}

export const DimLayer = ({ byOwn, isVisible }: DimLayerProps) => {
  useEffect(() => {
    if (!byOwn) return

    if (isVisible) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '15px'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
  }, [byOwn, isVisible])

  const getMainComponent = () =>
    isVisible ? (
      <motion.div
        animate={{ opacity: 1 }}
        className="fixed inset-0 h-screen w-screen bg-shade-950/20 backdrop-blur-md dark:bg-gray-950/80"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.2 }}
      />
    ) : null

  return byOwn ? <AnimatePresence>{getMainComponent()}</AnimatePresence> : getMainComponent()
}
