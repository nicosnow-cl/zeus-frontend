import { Box, Button, Container, Flex } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'

import { TopBarProps } from '@/common/types/components/desktop-navbar.type'
import { LinkTab } from '../../link-tab'

export function TopBar({ logo }: TopBarProps) {
  // const t = useTranslations()

  return (
    <Flex
      align="center"
      className={`min-h-[44px] border-b border-b-woodsmoke-200 bg-woodsmoke-950/90 text-woodsmoke-50 backdrop-blur-md backdrop-saturate-150`}
      justify="center"
      px="6"
    >
      <Container size="4">
        <div className="flex items-center justify-center">
          {logo}
          <LinkTab />
        </div>
      </Container>

      {/* <Button className={`h-full cursor-pointer uppercase`} size="3" radius="none" color="crimson">
        {t('navbar.announce')}
      </Button> */}
    </Flex>
  )
}
