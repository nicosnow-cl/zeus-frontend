import { Box } from '@radix-ui/themes';
import { Fragment } from 'react';

import { DesktopNavbar } from '../../header/desktop-navbar';

export interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const MainContainer = ({ children }: IProps) => {
  return (
    <Fragment>
      <DesktopNavbar />
      {/* <Sidebar /> */}

      <Box>{children}</Box>
    </Fragment>
  );
};
