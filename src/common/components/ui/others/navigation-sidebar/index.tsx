import { useTranslations } from 'next-intl';
import NextLink from 'next/link';

import { BoxArrowRightIcon, EnvelopeIcon } from '@/common/icons';
import { Drawer } from '../../primitives/drawer';
import { Item } from '../sidebar-item';
import { Routes } from '@/common/enums';

export const NavigationSidebar = () => {
  const t = useTranslations();

  return (
    <Drawer className={`mt-[-25px] pt-[25px]`}>
      <Item>
        <NextLink className={`flex items-center gap-x-3`} href={Routes.Home}>
          {<BoxArrowRightIcon width={22} height={22} />}
          {t('sidebar.sign-in')}
        </NextLink>
      </Item>
      <Item>
        <NextLink className={`flex items-center gap-x-3`} href={Routes.Contact}>
          <EnvelopeIcon width={22} height={22} />
          {t('sidebar.contact')}
        </NextLink>
      </Item>
    </Drawer>
  );
};
