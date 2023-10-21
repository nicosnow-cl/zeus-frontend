'use client'

import { Container, Flex } from '@radix-ui/themes'
import { Variants, motion } from 'framer-motion'
import { useState } from 'react'

const baseVariantsContainer: Variants = {
  closed: { height: 44 },
  open: { height: 'auto' },
}

const baseVariantsContent: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
}

type ContentWithDropdownProps = {
  children: (props: { isOpen: boolean; handleToggle: (value?: boolean) => void }) => JSX.Element
  className?: string
  content: React.ReactNode
  variantsContainer?: Variants
  variantsContent?: Variants
}

export function ContentWithDropdown({
  children,
  content,
  variantsContainer,
  variantsContent,
  className = '',
}: ContentWithDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (value?: boolean) =>
    setIsOpen((prev) => (typeof value === 'boolean' ? value : !prev))

  return (
    <motion.div
      className={className}
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
      <motion.div />

      {children({
        isOpen,
        handleToggle,
      })}

      <motion.div
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
  )
}
