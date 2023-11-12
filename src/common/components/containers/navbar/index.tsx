import { LogoIcon } from '@/common/icons'
import * as DesktopNavbar from '../../ui/presentational/desktop-navbar'

function NavbarContainer() {
  return (
    <DesktopNavbar.Root>
      <DesktopNavbar.TopBar
        logo={
          <LogoIcon
            className="cursor-pointer fill-primary-600  transition-[fill] duration-300 hover:fill-woodsmoke-100"
            width={30}
            height={30}
          />
        }
      />
      <DesktopNavbar.BottomBar />
    </DesktopNavbar.Root>
  )
}

export { NavbarContainer }
