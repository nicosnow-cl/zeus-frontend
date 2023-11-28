import { HTMLMotionProps, motion } from 'framer-motion'

export type ContentProps = HTMLMotionProps<'div'>

export const Content = ({ children, className = '' }: ContentProps) => {
  return (
    <motion.div
      className={`fixed inset-0 z-40 flex items-center justify-center ${className}`}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.15 }}
    >
      {children}
    </motion.div>
  )
}
