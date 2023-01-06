import { useContext } from 'react';

import { AppContext } from '../../../pages/_app';
import MobileNavbar from '../MobileNavbar';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const NavbarHandler = () => {
  const { device } = useContext(AppContext);

  return (
    <>
      {device?.type === 'mobile' ? <MobileNavbar /> : <Navbar />}

      <Sidebar />
    </>
  );
};

export default NavbarHandler;
