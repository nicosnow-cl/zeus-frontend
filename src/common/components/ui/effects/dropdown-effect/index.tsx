'use client'

import { Container, Flex } from '@radix-ui/themes'
import { AnimatePresence, MotionConfig, Transition, Variants, motion } from 'framer-motion'
import { MouseEventHandler, useState } from 'react'

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

export const baseVariantsOverlay: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
}

type ContentWithDropdownProps = {
  children: (props: { isOpen: boolean; handleToggle: (value?: boolean) => void }) => JSX.Element
  classNameContainer?: string
  classNameContent?: string
  classNameOverlay?: string
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
  variantsOverlay?: Variants
}

export function ContentWithDropdown({
  children,
  content,
  onMouseEnter,
  onMouseLeave,
  transition,
  variantsContainer,
  variantsContent,
  variantsOverlay,
  classNameContainer = '',
  classNameContent = '',
  classNameOverlay = '',
}: ContentWithDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (value?: boolean) =>
    setIsOpen((prev) => (typeof value === 'boolean' ? value : !prev))

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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`h-full w-full backdrop-blur-md backdrop-saturate-150 ${classNameOverlay}`}
            variants={{
              closed: {
                ...baseVariantsOverlay.closed,
                ...variantsOverlay?.closed,
              },
              open: {
                ...baseVariantsOverlay.open,
                ...variantsOverlay?.open,
              },
            }}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            exit="closed"
            transition={{ duration: 0.1 }}
          />
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}
