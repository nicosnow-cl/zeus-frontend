import { HTMLMotionProps, motion } from 'framer-motion'

export type ContentProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children?: React.ReactNode
  leftAdornment?: React.ReactNode
  rightAdornment?: React.ReactNode
}

export const Content = ({
  children,
  className = '',
  leftAdornment,
  rightAdornment,
}: ContentProps) => {
  return (
    <motion.div
      className={`fixed inset-0 z-50 m-auto flex max-w-[512px] items-center justify-center ${className}`}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.15 }}
    >
      <div className="relative">
        {children}

        {leftAdornment && (
          <div className="absolute left-0 top-[50%] translate-x-[-50%] translate-y-[-50%]">
            {leftAdornment}
          </div>
        )}

        {rightAdornment && (
          <div className="absolute right-0 top-[50%] translate-x-[50%] translate-y-[-50%]">
            {rightAdornment}
          </div>
        )}
      </div>
    </motion.div>
  )
}
