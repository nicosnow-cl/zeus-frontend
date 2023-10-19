'use client'

import { Box } from '@radix-ui/themes'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback'

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
  closeWidth?: string | number
  onClose?: () => void
  onOpen?: () => void
  open?: boolean
  openWidth?: string | number
}

export const Drawer = ({
  children,
  onClose,
  onOpen,
  open: openProp,
  className = '',
  closeWidth = 0,
  openWidth = '300px',
  ...props
}: DrawerProps) => {
  const isControlled = typeof openProp != 'undefined'

  const [internalOpen, setInternalOpen] = useState(isControlled ? openProp : false)
  const variants = useMemo(
    () => ({
      open: { width: openWidth, transition: { duration: 0.03 } },
      closed: { width: closeWidth, transition: { duration: 0.03 } },
    }),
    [closeWidth, openWidth]
  )

  const open = isControlled ? openProp : internalOpen

  const handleOpen = useThrottledCallback(
    () => {
      if (onOpen) onOpen()
      if (!isControlled) setInternalOpen(true)
    },
    [],
    50
  )

  const handleClose = useThrottledCallback(
    () => {
      if (onClose) onClose()
      if (!isControlled) setInternalOpen(false)
    },
    [],
    50
  )

  return (
    <div {...props} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <motion.div
        className={`group fixed h-full w-fit overflow-hidden backdrop-blur-md backdrop-saturate-150 
        transition-all duration-300 ease-in-out ${className}`}
        initial="closed"
        variants={variants}
        animate={open ? 'open' : 'closed'}
      >
        {children}
      </motion.div>
    </div>
  )
}
