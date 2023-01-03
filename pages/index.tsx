import { NextPageWithLayout } from './_app';
import type { ReactElement } from 'react';

import checkIfIsServer from '../utils/checkIfIsServer';
import ContentContainer from '../components/UIElements/ContentContainer';
import EscortsSection from '../components/Home/EscortsSection';
import FiltersModal from '../components/UIElements/FiltersModal';
import MainContainer from '../components/UIElements/MainContainer';
import Navbar from '../components/UIElements/Navbar';
import PageFilters from '../components/UIElements/PageFilters';
import RegionsModal from '../components/UIElements/RegionsModal';
import StoriesBar from '../components/Home/StoriesBar';
import MediaDialog from '../components/UIElements/MediaDialog';
import ViewLadyStory from '../components/UIElements/ViewLadyStory';

const isServer = checkIfIsServer();

const Home: NextPageWithLayout = () => {
  console.count('Home render');

  return (
    <div className={`d-flex fd-column row-gap-4`}>
      <div className={`pt-4`}>
        <PageFilters />
      </div>
      <StoriesBar />
      <EscortsSection />

      <div>
        {!isServer && <RegionsModal />}
        <FiltersModal />
        <MediaDialog />
        <ViewLadyStory />
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => (
  <MainContainer>
    <Navbar />

    <ContentContainer>{page}</ContentContainer>
  </MainContainer>
);

export default Home;
