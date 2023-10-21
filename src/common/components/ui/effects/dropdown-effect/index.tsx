'use client'

import { Container, Flex } from '@radix-ui/themes'
import { AnimatePresence, MotionConfig, Transition, Variants, motion } from 'framer-motion'
import { useState } from 'react'

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
  transition?: Transition
  variantsContainer?: Variants
  variantsContent?: Variants
  variantsOverlay?: Variants
}

export function ContentWithDropdown({
  children,
  content,
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
      >
        {children({
          isOpen,
          handleToggle,
        })}

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
        >
          <Flex align="center" className="h-[44px]" justify="center" px="6">
            <Container size="4">{content}</Container>
          </Flex>
        </motion.div>
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
