import { memo } from 'react';
import { NextPageWithLayout } from '../_app';
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';

import ContentContainer from '../../components/UIElements/ContentContainer';
import EscortSection from '../../components/Escort/EscortSection';
import Footer from '../../components/UIElements/Footer';
import MainContainer from '../../components/UIElements/MainContainer';
import Modals from '../../components/Escort/Modals';
import obtainProfile from '../../services/escort/obtainProfile';

const LazyNavbarHandler = dynamic(() => import('../../components/UIElements/NavbarHandler'), {
  ssr: false,
});

const MemoEscortSection = memo(EscortSection);

export const getServerSideProps = async ({ query }: any) => {
  const profile = await obtainProfile(query.id);

  return { props: { data: profile && JSON.parse(profile) } };
};

const EscortPage: NextPageWithLayout = ({ data }: any) => {
  console.count('EscortPage render');

  return (
    <>
      <MemoEscortSection profile={data} />

      <Modals />
    </>
  );
};

EscortPage.getLayout = (page: ReactElement) => (
  <MainContainer>
    <LazyNavbarHandler />

    <ContentContainer>{page}</ContentContainer>

    <Footer />
  </MainContainer>
);

export default EscortPage;
