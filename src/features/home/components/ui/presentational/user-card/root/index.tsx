import { HTMLMotionProps, motion } from 'framer-motion'

export type RootProps = HTMLMotionProps<'div'>

export const Root = ({ className, ...restProps }: RootProps) => (
  <motion.div
    {...restProps}
    className={`group relative cursor-pointer overflow-hidden rounded-3 transition-[transform] ${className}`}
  />
)
