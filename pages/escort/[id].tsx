import { NextPageWithLayout } from '../_app';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import Skeleton from '@mui/material/Skeleton';
import type { ReactElement } from 'react';

import { RootState } from '../../redux/store';
import ContentContainer from '../../components/UIElements/ContentContainer';
import EscortSection from '../../components/Escort/EscortSection';
import MainContainer from '../../components/UIElements/MainContainer';
import obtainProfileGet from '../../services/escort/obtainProfileGet';

const LazyNavbar = dynamic(() => import('../../components/UIElements/Navbar'), {
  loading: () => (
    <Skeleton
      variant="rectangular"
      style={{ width: '100%', height: '90px', transform: 'none', position: 'fixed' }}
    />
  ),
  ssr: false,
});
const LazyMediaDialog = dynamic(() => import('../../components/UIElements/MediaDialog'), {
  ssr: false,
});

export const getServerSideProps = async ({ query }: any) => {
  const { id } = query;

  const profile = await obtainProfileGet(+id);

  return { props: { data: profile || null } };
};

const EscortPage: NextPageWithLayout = ({ data }: any) => {
  const showLadyImage = useSelector((state: RootState): boolean => state.ui.showLadyImage);

  return (
    <>
      <EscortSection profile={data} />

      {showLadyImage && <LazyMediaDialog />}
    </>
  );
};

EscortPage.getLayout = (page: ReactElement) => (
  <MainContainer>
    <LazyNavbar />

    <ContentContainer>{page}</ContentContainer>
  </MainContainer>
);

export default EscortPage;
