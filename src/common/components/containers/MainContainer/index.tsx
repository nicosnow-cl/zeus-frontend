import { Box } from '@chakra-ui/react';
import { Fragment } from 'preact';

import NavbarManager from '../../header/NavbarManager';
import Sidebar from '../../header/Sidebar';

export interface IMainContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const MainContainer = ({ children }: IMainContainerProps) => {
  return (
    <Fragment>
      <NavbarManager />
      <Sidebar />

      <Box
        h="100vh"
        bg="transparent"
        bgGradient={'linear(to-b, gray.50, gray.300)'}
        display="block"
        paddingTop="65px"
        marginLeft="40px"
      >
        {children}
      </Box>
    </Fragment>
  );
};

export default MainContainer;
