import { LogoIcon } from '@/common/icons'
import * as DesktopNavbar from '../../ui/presentational/desktop-navbar'

function NavbarContainer() {
  return (
    <DesktopNavbar.Root>
      <DesktopNavbar.TopBar
        logo={<LogoIcon className="fill-primary-500" width={30} height={30} />}
      />
      <DesktopNavbar.BottomBar />
    </DesktopNavbar.Root>
  )
}

export { NavbarContainer }
