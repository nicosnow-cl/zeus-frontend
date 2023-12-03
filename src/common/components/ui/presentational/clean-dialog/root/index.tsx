import { AnimatePresence } from 'framer-motion'
import { Portal, Theme } from '@radix-ui/themes'
import { useState } from 'react'

import { DimLayer } from '@/common/components/ui/presentational/dim-layer'

export type RootProps = {
  children?: React.ReactNode
  onOpenChange?: (value: boolean) => void
  open?: boolean
}

export const Root = ({ children, onOpenChange, open: externalOpen }: RootProps) => {
  const isControlled = typeof externalOpen === 'boolean'

  const [internalOpen, setInternalOpen] = useState(false)

  const open = isControlled ? externalOpen : internalOpen

  const handleOpenChange = (value: boolean) => {
    onOpenChange?.(value)

    if (!isControlled) setInternalOpen(value)
  }

  return (
    <Portal onClick={() => handleOpenChange(false)}>
      <Theme accentColor="gray" grayColor="slate" radius="full" scaling="90%" hasBackground={false}>
        <AnimatePresence>
          {open && <DimLayer key="overlay-div" isVisible={open} byOwn />}
          {open && children}
        </AnimatePresence>
      </Theme>
    </Portal>
  )
}