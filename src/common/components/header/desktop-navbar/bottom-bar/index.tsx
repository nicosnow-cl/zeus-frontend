'use client';

import { Box } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';

import { Breadcrumbs } from '@/common/ui/breadcrumbs';
import { ColorModeSwitch } from '@/common/ui/color-mode-switch';
import { getUrlBreadcrumb } from '@/common/helpers/getUrlBreadcrumb';
import { LangModeSwitch } from '@/common/ui/lang-mode-switch';

export const BottomBar = () => {
  const pathname = usePathname();

  const crumbs = getUrlBreadcrumb(pathname);

  return (
    <Box
      className={`h-[25px] p-2 pl-[45px] flex justify-between bg-woodsmoke-200/80 backdrop-blur-md backdrop-saturate-150 text-woodsmoke-950 fill-woodsmoke-950`}
    >
      <Breadcrumbs crumbs={crumbs} />

      <span>
        <LangModeSwitch />
        <ColorModeSwitch />
      </span>
    </Box>
  );
};
