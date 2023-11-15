'use client'

import { AnimatePresence, MotionConfig, Transition, Variants, motion } from 'framer-motion'
import { Container } from '@radix-ui/themes'
import { useEffect, useState } from 'react'

import { DimLayer } from '../../presentational/dim-layer'

export const baseTransition: Transition = {
  type: 'tween',
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1],
}

export const baseVariantsContainer: Variants = {
  closed: { height: 44 },
  open: { height: 'auto' },
}

export const baseVariantsContent: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
}

export type ContentWithDropdownProps = {
  children: (props: { isOpen: boolean; handleToggle: (value?: boolean) => void }) => JSX.Element
  classNameContainer?: string
  classNameContent?: string
  content: React.ReactNode
  onMouseEnter?: (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => void
  onMouseLeave?: (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => void
  transition?: Transition
  variantsContainer?: Variants
  variantsContent?: Variants
}

export function ContentWithDropdown({
  children,
  content,
  onMouseEnter,
  onMouseLeave,
  transition,
  variantsContainer,
  variantsContent,
  classNameContainer = '',
  classNameContent = '',
}: ContentWithDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (value?: boolean) =>
    setIsOpen((prev) => (typeof value === 'boolean' ? value : !prev))

  useEffect(() => {
    if (document) {
      if (isOpen) document.body.style.overflow = 'hidden'
      else document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <MotionConfig transition={{ ...baseTransition, ...transition }}>
      <motion.div
        className={classNameContainer}
        variants={{
          closed: {
            ...baseVariantsContainer.closed,
            ...variantsContainer?.closed,
          },
          open: {
            ...baseVariantsContainer.open,
            ...variantsContainer?.open,
          },
        }}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        onMouseEnter={(evt) => onMouseEnter?.(evt, setIsOpen)}
        onMouseLeave={(evt) => onMouseLeave?.(evt, setIsOpen)}
      >
        {children({
          isOpen,
          handleToggle,
        })}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={classNameContent}
              variants={{
                closed: {
                  ...baseVariantsContent.closed,
                  ...variantsContent?.closed,
                },
                open: {
                  ...baseVariantsContent.open,
                  ...variantsContent?.open,
                },
              }}
              initial="closed"
              animate={isOpen ? 'open' : 'closed'}
              exit="closed"
            >
              <Container size="4" p="6">
                {content}
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <DimLayer isVisible={isOpen} />
    </MotionConfig>
  )
}
