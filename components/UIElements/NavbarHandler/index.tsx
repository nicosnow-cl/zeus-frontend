import { memo, useContext, useState } from 'react';

import { AppContext } from '../../../pages/_app';
import MobileNavbar from '../MobileNavbar';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const SidebarMemo = memo(Sidebar);

const NavbarHandler = () => {
  const [navbarHeight, setNavbarHeight] = useState<string>('0px');
  const { device } = useContext(AppContext);

  return (
    <>
      {device?.type === 'mobile' ? (
        <MobileNavbar setNavbarHeight={setNavbarHeight} />
      ) : (
        <Navbar setNavbarHeight={setNavbarHeight} />
      )}

      <SidebarMemo marginTop={navbarHeight} />
    </>
  );
};

export default NavbarHandler;
