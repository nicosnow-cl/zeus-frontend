import { Box } from '@chakra-ui/react';
import { Fragment } from 'preact';

import Down from './Down';
import Logo from '../Logo';
import Top from './Top';

const DesktopNavbar = () => {
  return (
    <Fragment>
      <Box>
        <Top menu={<Logo />} />
        <Down />
      </Box>
    </Fragment>
  );
};

export default DesktopNavbar;
