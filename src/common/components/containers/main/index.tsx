import { Box, Container } from '@radix-ui/themes';

import { DesktopNavbar } from '../../header/desktop-navbar';

export interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const MainContainer = ({ children }: IProps) => {
  return (
    <>
      <DesktopNavbar />

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
    </>
  );
};
