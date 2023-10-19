import { Box, Button, Container } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import { TopBarProps } from '@/common/types/components/desktop-navbar.type';
import { LinkTab } from '../../link-tab';

export const TopBar = ({ logo }: TopBarProps) => {
  const t = useTranslations();

  return (
    <Box
      className={`flex border-b border-b-woodsmoke-200 bg-woodsmoke-950/90 text-woodsmoke-50 backdrop-blur-md backdrop-saturate-150`}
    >
      <Container size="4">
        <div className="flex h-[44px] items-center">
          {logo}
          <LinkTab />
        </div>
      </Container>

      <Button className={`h-full cursor-pointer uppercase`} size="3" radius="none" color="crimson">
        {t('navbar.announce')}
      </Button>
    </Box>
  );
};
