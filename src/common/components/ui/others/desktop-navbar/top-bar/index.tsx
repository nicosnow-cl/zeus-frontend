'use client'

import { Container, Flex, Heading } from '@radix-ui/themes'

import { TopBarProps } from '@/common/types/components/desktop-navbar.type'
import { LinkTab } from '../../link-tab'
import { ContentWithDropdown } from '../../../effects/dropdown-effect'

export function TopBar({ logo }: TopBarProps) {
  return (
    <ContentWithDropdown
      className="border-b border-b-woodsmoke-200 text-woodsmoke-50 backdrop-blur-md backdrop-saturate-150 [--bg-to:theme(colors.woodsmoke.950)] [--bg-from:theme(colors.woodsmoke.950/0.9)]"
      content={<Heading>Buscar en tumoko.app</Heading>}
      variantsContainer={{
        closed: {
          backgroundColor: 'var(--bg-from)',
        },
        open: {
          backgroundColor: 'var(--bg-to)',
        },
      }}
    >
      {({ isOpen, handleToggle }) => (
        <Flex align="center" className="h-[44px] bg-transparent" justify="center" px="6">
          <Container size="4">
            <Flex align="center" justify="center">
              {logo}

              {/* <LinkTab /> */}
            </Flex>
          </Container>

          <button onClick={() => handleToggle()}>Collapse</button>
        </Flex>
      )}
    </ContentWithDropdown>
  )
}
