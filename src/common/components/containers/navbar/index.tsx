import { Link } from '@intl/navigation'
import { LogoIcon } from '@/common/icons'
import { Routes } from '@config/enums'
import * as DesktopNavbar from '../../ui/presentational/desktop-navbar'

export const NavbarContainer = () => {
  return (
    <DesktopNavbar.Root>
      <DesktopNavbar.TopBar
        logo={
          <Link href={Routes.Home}>
            <LogoIcon
              className="cursor-pointer fill-woodsmoke-100 transition-[fill] duration-300 hover:fill-primary-600"
              width={30}
              height={30}
            />
          </Link>
        }
      />
      <DesktopNavbar.BottomBar />
    </DesktopNavbar.Root>
  )
}
