import { HTMLMotionProps, motion } from 'framer-motion'
import clsx from 'clsx'

export type RootProps = HTMLMotionProps<'div'>

export default function Root({ children, className, ...restProps }: RootProps) {
  const classes = clsx('group h-full overflow-hidden', className)

  return (
    <motion.div {...restProps} className={classes}>
      {children}
    </motion.div>
  )
}
