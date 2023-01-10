import { ReactElement, useContext } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

import { AppContext, NextPageWithLayout } from './_app';
import { RootState } from '../redux/store';
import ContentContainer from '../components/UIElements/ContentContainer';
import MainContainer from '../components/UIElements/MainContainer';
import NavbarHandler from '../components/UIElements/NavbarHandler';
import PageFilters from '../components/Home/ButtonFiltersHandler';
import StoriesBar from '../components/Home/StoriesBar';
import ContentSection from '../components/Home/ContentSection';

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
  const { isServer } = useContext(AppContext);
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
      <ContentSection />

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
