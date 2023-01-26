import { NextPageWithLayout } from '../_app';
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';

import ContentContainer from '../../components/common/ContentContainer';
import EscortSection from '../../components/Escort/EscortSection';
import Footer from '../../components/common/Footer';
import MainContainer from '../../components/common/MainContainer';
import Modals from '../../components/Escort/Modals';
import obtainProfile from '../../services/escort/obtainProfile';

const LazyNavbarHandler = dynamic(() => import('../../components/common/NavbarHandler'), {
  ssr: false,
});

export const getServerSideProps = async ({ query }: any) => {
  const profile = await obtainProfile(query.match);

  return { props: { data: profile && JSON.parse(profile) } };
};

const EscortPage: NextPageWithLayout = ({ data }: any) => {
  console.count('EscortPage render');

  return (
    <>
      <EscortSection profile={data} />

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
