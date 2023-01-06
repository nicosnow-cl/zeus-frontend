import { NextPageWithLayout } from './_app';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';

import { RootState } from '../redux/store';
import checkIfIsServer from '../helpers/checkIfIsServer';
import ContentContainer from '../components/UIElements/ContentContainer';
import EscortsSection from '../components/Home/EscortsSection';
import MainContainer from '../components/UIElements/MainContainer';
import NavbarHandler from '../components/UIElements/NavbarHandler';
import PageFilters from '../components/UIElements/PageFilters';
import StoriesBar from '../components/Home/StoriesBar';

const isServer = checkIfIsServer();
const LazyRegionsModal = dynamic(() => import('../components/UIElements/RegionsModal'), {
  ssr: false,
});
const LazyFiltersModal = dynamic(() => import('../components/UIElements/FiltersModal'), {
  ssr: false,
});
const LazyViewLadyStory = dynamic(() => import('../components/UIElements/ViewLadyStory'), {
  ssr: false,
});

const Home: NextPageWithLayout = () => {
  const showRegionModal = useSelector((state: RootState): boolean => state.ui.showRegionModal);
  const showFiltersModal = useSelector((state: RootState): boolean => state.ui.showFiltersModal);
  const showLadiesStories = useSelector((state: RootState): boolean => state.ui.showLadiesStories);

  console.count('Home render');

  return (
    <div className={`d-flex fd-column row-gap-4`}>
      <div className={`pt-4`}>
        <PageFilters />
      </div>
      <StoriesBar />
      <EscortsSection />

      <div>
        {!isServer && showRegionModal && <LazyRegionsModal />}
        {showFiltersModal && <LazyFiltersModal />}
        {showLadiesStories && <LazyViewLadyStory />}
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => (
  <MainContainer>
    <NavbarHandler />

    <ContentContainer>{page}</ContentContainer>
  </MainContainer>
);

export default Home;
