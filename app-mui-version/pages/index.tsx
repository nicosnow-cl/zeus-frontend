import { ReactElement } from 'react';

import { NextPageWithLayout } from './_app';
import ContentContainer from '../components/common/ContentContainer';
import ContentSection from '../components/Home/ContentSection';
import Footer from '../components/common/Footer';
import MainContainer from '../components/common/MainContainer';
import Modals from '../components/Home/Modals';
import NavbarHandler from '../components/common/NavbarHandler';
import PageFilters from '../components/Home/ButtonFiltersHandler';
import StoriesBar from '../components/Home/StoriesBar';

const Home: NextPageWithLayout = () => {
  console.count('Home render');

  return (
    <div className={`d-flex fd-column row-gap-4`}>
      <div className={`pt-4`}>
        <PageFilters />
      </div>
      <StoriesBar />

      <ContentSection />

      <Modals />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => (
  <MainContainer>
    <NavbarHandler />

    <ContentContainer>{page}</ContentContainer>

    <Footer />
  </MainContainer>
);

export default Home;
