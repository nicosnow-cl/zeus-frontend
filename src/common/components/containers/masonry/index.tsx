import { motion } from 'framer-motion'

export type MasonryContainerProps = Omit<
  React.ComponentPropsWithoutRef<typeof motion.div>,
  'children'
> & {
  children: React.ReactNode
}

export const MasonryContainer = ({
  children,
  className: classNameProp = '',
  ...restProps
}: MasonryContainerProps) => {
  return (
    <motion.div
      {...restProps}
      className={`relative grid w-full grid-flow-dense auto-rows-fr ${classNameProp}`}
    >
      {children}
    </motion.div>
  )
}
