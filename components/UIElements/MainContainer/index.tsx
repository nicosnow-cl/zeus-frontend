import { Box } from '@mui/material';
import Head from 'next/head';

export interface IMainContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const MainContainer = ({ children }: IMainContainerProps) => {
  return (
    <Box
      sx={(theme) => ({
        minHeight: '100vh',
        background: `linear-gradient(${theme.palette.grey[50]}, ${theme.palette.grey[300]})`,
      })}
    >
      <Head>
        <title>Cariñositas.cl</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      {children}
    </Box>
  );
};

export default MainContainer;
