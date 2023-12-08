import { HTMLMotionProps, motion } from 'framer-motion'

export type RootProps = HTMLMotionProps<'div'>

export default function Root({ children, ...restProps }: RootProps) {
  return <motion.div {...restProps}>{children}</motion.div>
}
