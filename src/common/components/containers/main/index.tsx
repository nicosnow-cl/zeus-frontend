import * as DesktopNavbar from '@/common/components/header/desktop-navbar';
// import { Logo } from '../../header/logo';
import { LogoIcon } from '@/common/icons';

export interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const MainContainer = ({ children }: IProps) => {
  return (
    <>
      <DesktopNavbar.Root>
        <DesktopNavbar.TopBar logo={<LogoIcon className={`mr-9 h-[30px] w-[30px]`} />} />
        <DesktopNavbar.BottomBar />
      </DesktopNavbar.Root>

      <div className="pt-[65px]">
        <div className="ml-[40px] p-12">{children}</div>
      </div>
    </>
  );
};
