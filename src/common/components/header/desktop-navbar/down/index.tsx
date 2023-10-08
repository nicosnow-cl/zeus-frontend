'use client';

import { Box } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';

import { Breadcrumbs } from '@/common/ui/breadcrumbs';
import { ColorModeSwitch } from '@/common/ui/color-mode-switch';
import { getUrlBreadcrumb } from '@/common/helpers/getUrlBreadcrumb';

export const Down = () => {
  const pathname = usePathname();

  const crumbs = getUrlBreadcrumb(pathname);

  return (
    <Box
      className={`p-2 flex justify-between bg-gray-3`}
      style={{ paddingLeft: '45px', height: '25px' }}
    >
      <Breadcrumbs crumbs={crumbs} />

      <ColorModeSwitch />
    </Box>
  );
};
