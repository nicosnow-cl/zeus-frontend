import { Box } from '@radix-ui/themes';
import { Fragment } from 'react';

import { DesktopNavbar } from '../../header/desktop-navbar';

export interface IMainContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const MainContainer = ({ children }: IMainContainerProps) => {
  return (
    <Fragment>
      <DesktopNavbar />
      {/* <Sidebar /> */}

      <Box>{children}</Box>
    </Fragment>
  );
};
