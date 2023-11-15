import { HTMLMotionProps, motion } from 'framer-motion'

export type TRootProps = HTMLMotionProps<'nav'> & {
  children: React.ReactNode
  showNavbar?: boolean
}

export const Root = (props: TRootProps) => {
  const { children, className = '', showNavbar = true, ...restProps } = props

  return (
    <motion.nav
      className={`fixed z-40 w-screen bg-transparent ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: showNavbar ? 0.2 : 0.1 }}
      {...restProps}
    >
      <div className="relative">{children}</div>
    </motion.nav>
  )
}