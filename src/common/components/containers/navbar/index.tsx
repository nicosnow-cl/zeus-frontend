import { LogoIcon } from '@/common/icons'
import * as DesktopNavbar from '../../ui/others/desktop-navbar'

function NavbarContainer() {
  return (
    <DesktopNavbar.Root>
      <DesktopNavbar.TopBar logo={<LogoIcon className={`mr-9 h-[30px] w-[30px]`} />} />
      <DesktopNavbar.BottomBar />
    </DesktopNavbar.Root>
  )
}

export { NavbarContainer }
