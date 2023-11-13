import { useState } from 'react'

export type TControlledDialogProps = {
  children: (props: { open?: boolean; onOpenChange?: (newOpen: boolean) => void }) => JSX.Element
  onOpenChange?: (newOpen: boolean) => void
  open?: boolean
}

export const ControlledDialog = ({
  children,
  onOpenChange,
  open: externalOpen,
}: TControlledDialogProps) => {
  const isControlled = typeof externalOpen != 'undefined'

  const [internalOpen, setInternalOpen] = useState(isControlled ? externalOpen : false)

  const open = isControlled ? externalOpen : internalOpen

  const handleOpenChange = (open: boolean) => {
    if (onOpenChange) onOpenChange(open)
    if (!isControlled) setInternalOpen(open)
  }

  return children({ open, onOpenChange: handleOpenChange })
}
