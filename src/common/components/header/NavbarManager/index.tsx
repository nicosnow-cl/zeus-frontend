import { Fragment } from 'preact';
import { Progress } from '@chakra-ui/react';

import DesktopNavbar from '../DesktopNavbar';

const NavbarManager = () => {
  return (
    <Fragment>
      <DesktopNavbar />
      <Progress value={20} size="xs" colorScheme="primary" isIndeterminate />
    </Fragment>
  );
};

export default NavbarManager;
