'use client';

import { DropdownMenu, IconButton } from '@radix-ui/themes';

import { Globe2Icon } from '@/common/icons';
import { Locales } from '../../../../../intl/locales';
import { usePathname, useRouter } from '../../../../../intl/navigation';

export const LangModeSwitch = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeLang = (locale: Locales) => router.push(pathname, { locale });

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton size="1" variant="ghost">
          <Globe2Icon className={`text-woodsmoke-800`} />
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item onClick={() => handleChangeLang(Locales.Es)}>Español</DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => handleChangeLang(Locales.En)}>English</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
