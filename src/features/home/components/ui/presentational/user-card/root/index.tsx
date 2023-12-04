import { HTMLMotionProps, motion } from 'framer-motion'

export type RootProps = HTMLMotionProps<'div'>

export const Root = ({ className, ...restProps }: RootProps) => (
  <motion.div
    {...restProps}
    className={`group relative h-full cursor-pointer overflow-hidden transition-[transform] ${className}`}
  />
)
