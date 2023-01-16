import { memo } from 'react';
import { NextPageWithLayout } from '../_app';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';

import { RootState } from '../../redux/store';
import ContentContainer from '../../components/UIElements/ContentContainer';
import EscortSection from '../../components/Escort/EscortSection';
import MainContainer from '../../components/UIElements/MainContainer';
import obtainProfileGet from '../../services/escort/obtainProfileGet';

const LazyNavbar = dynamic(() => import('../../components/UIElements/NavbarHandler'), {
  ssr: false,
});
const LazyMediaDialog = dynamic(() => import('../../components/UIElements/MediaDialog'), {
  ssr: false,
});
const MemoEscortSection = memo(EscortSection);

export const getServerSideProps = async ({ query }: any) => {
  const { id } = query;

  const profile = await obtainProfileGet(+id);

  return { props: { data: profile || null } };
};

const EscortPage: NextPageWithLayout = ({ data }: any) => {
  const showLadyImage = useSelector((state: RootState): boolean => state.ui.showLadyImage);

  console.count('EscortPage render');

  return (
    <>
      <MemoEscortSection profile={data} />

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
