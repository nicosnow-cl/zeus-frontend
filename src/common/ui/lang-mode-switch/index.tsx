'use client';

import { Globe2Icon } from '@/common/icons';
import { Button, DropdownMenu, IconButton } from '@radix-ui/themes';

export const LangModeSwitch = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton color="amber">
          asdas
          {/* <Globe2Icon width="18" height="18" /> */}
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
