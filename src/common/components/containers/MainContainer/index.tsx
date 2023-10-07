import { Box } from '@chakra-ui/react';
import { Fragment } from 'preact';

import NavbarManager from '../../header/NavbarManager';
import Sidebar from '../../header/Sidebar';
import { MainWrapper } from '../MainWrapper';

export interface IMainContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const MainContainer = ({ children }: IMainContainerProps) => {
  return (
    <Fragment>
      <NavbarManager />
      <Sidebar />

      <Box
        bgGradient={'linear(to-b, gray.50, gray.300)'}
        display="block"
        h="100vh"
        marginLeft="40px"
        paddingTop="65px"
      >
        <MainWrapper>{children}</MainWrapper>
      </Box>
    </Fragment>
  );
};

export default MainContainer;
