import clsx from 'clsx'
import { HTMLMotionProps, motion } from 'framer-motion'

export type RootProps = HTMLMotionProps<'div'>

export const Root = ({ className = '', children, ...restProps }: RootProps) => {
  const classes = clsx({
    'shadow-lg relative overflow-hidden': true,
    [className]: true,
  })

  return (
    <motion.div {...restProps} className={classes}>
      {children}
    </motion.div>
  )
}
