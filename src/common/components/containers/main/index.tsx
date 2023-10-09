import { Box, Container } from '@radix-ui/themes';
import { Fragment } from 'react';

import { DesktopNavbar } from '../../header/desktop-navbar';
import { Sidebar } from '../../header/sidebar';

export interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const MainContainer = ({ children }: IProps) => {
  return (
    <Fragment>
      <DesktopNavbar />
      <Sidebar />

      <Box style={{ paddingTop: 65 }}>
        <Container
          p="2"
          size={{
            md: '4',
          }}
        >
          {children}
        </Container>
      </Box>
    </Fragment>
  );
};
