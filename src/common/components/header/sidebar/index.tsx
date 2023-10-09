import { Box } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';
import { Routes } from '@/common/enums';
import { BoxArrowRightIcon, EnvelopeIcon } from '@/common/icons';
import { Item } from './item';

export const Sidebar = () => {
  const t = useTranslations();

  return (
    <Box
      className={`overflow-hidden flex flex-col gap-y-5 bg-woodsmoke-950/80 text-woodsmoke-50 ${styles.sidebar}`}
      position="fixed"
      height="100%"
      style={{ marginTop: 40, paddingTop: 25 }}
    >
      <Item href={Routes.SignIn} icon={<BoxArrowRightIcon width={22} height={22} />}>
        {t('sidebar.sign-in')}
      </Item>
      <Item href={Routes.Contact} icon={<EnvelopeIcon width={22} height={22} />}>
        {t('sidebar.contact')}
      </Item>
    </Box>
  );
};
