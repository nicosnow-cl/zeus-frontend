// import { useTheme } from '@mui/material';
import Head from 'next/head';
import useTheme from '@mui/material/styles/useTheme';

export interface IMainContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const MainContainer = ({ children }: IMainContainerProps) => {
  const theme = useTheme();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: `linear-gradient(${theme.palette.grey[50]}, ${theme.palette.grey[300]})`,
      }}
    >
      <Head>
        <title>Cariñositas.cl</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      {children}
    </div>
  );
};

export default MainContainer;
