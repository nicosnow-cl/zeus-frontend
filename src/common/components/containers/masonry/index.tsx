import { motion } from 'framer-motion'
import { forwardRef } from 'react'

export type MasonryContainerProps = Omit<
  React.ComponentPropsWithoutRef<typeof motion.div>,
  'children'
> & {
  children: React.ReactNode
}

export const MasonryContainer = forwardRef<HTMLDivElement, MasonryContainerProps>(
  ({ children, className: classNameProp = '', ...restProps }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`relative grid grid-flow-dense auto-rows-fr ${classNameProp}`}
        {...restProps}
      >
        {children}
      </motion.div>
    )
  }
)

MasonryContainer.displayName = 'MasonryContainer'
