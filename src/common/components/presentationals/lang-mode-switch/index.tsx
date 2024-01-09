'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shadcn-components/ui/dropdown-menu'
import { usePathname, useRouter } from '@intl/navigation'

import { Globe2Icon } from '@/common/icons'
import { Locale } from '@config/enums'

export const LangModeSwitch = () => {
  const pathname = usePathname()
  const router = useRouter()

  const handleChangeLang = (locale: Locale) => router.push(pathname, { locale })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Globe2Icon />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleChangeLang(Locale.Es)}>Español</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLang(Locale.En)}>English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
