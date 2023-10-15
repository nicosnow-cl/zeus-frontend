import { Flex } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';

import { Routes } from '@/common/enums';

export const LinkTab = () => {
  const t = useTranslations();

  return (
    <Flex gap="9">
      <NextLink className={`flex items-center gap-x-3 text-1`} href={Routes.Home}>
        {t('sidebar.sign-in')}
      </NextLink>
      <NextLink className={`flex items-center gap-x-3 text-1`} href={Routes.Contact}>
        {t('sidebar.contact')}
      </NextLink>
    </Flex>
  );
};
