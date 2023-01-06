import useDevice from '../../../hooks/useDevice';

import MobileNavbar from '../MobileNavbar';
import Navbar from '../Navbar';

const NavbarHandler = () => {
  const { device } = useDevice({});

  if (device === 'mobile') return <MobileNavbar />;
  return <Navbar />;
};

export default NavbarHandler;
