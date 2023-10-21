import { Button, Flex } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'
import NextLink from 'next/link'

import { BoxArrowRightIcon, PatchCheckFillIcon, SearchIcon } from '@/common/icons'
import { Routes } from '@/common/enums'

export const LinkTab = () => {
  const t = useTranslations()

  return (
    <Flex gap="8">
      <NextLink className={`flex items-center gap-x-3 text-1`} href={Routes.Contact}>
        {t('sidebar.sign-up')}
        {<PatchCheckFillIcon width={14} height={14} />}
      </NextLink>
      <NextLink className={`flex items-center gap-x-3 text-1`} href={Routes.Home}>
        {t('sidebar.sign-in')}
        <BoxArrowRightIcon width={14} height={14} />
      </NextLink>
      <NextLink className={`flex items-center gap-x-3 text-1`} href={Routes.Contact}>
        {t('sidebar.contact')}
      </NextLink>
      <Button className={`flex items-center gap-x-3 text-1`}>
        {<SearchIcon width={14} height={14} />}
      </Button>
    </Flex>
  )
}
