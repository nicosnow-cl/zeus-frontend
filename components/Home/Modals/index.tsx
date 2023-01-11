import { useContext } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

import { AppContext } from '../../../pages/_app';
import { RootState } from '../../../redux/store';

const LazyRegionsModal = dynamic(() => import('../../../components/UIElements/RegionsModal'), {
  ssr: false,
});
const LazyFiltersModal = dynamic(() => import('../../../components/UIElements/FiltersModal'), {
  ssr: false,
});
const LazyViewLadyStory = dynamic(() => import('../../../components/UIElements/ViewLadyStory'), {
  ssr: false,
});

const Modals = () => {
  const { isServer } = useContext(AppContext);
  const showRegionModal = useSelector((state: RootState): boolean => state.ui.showRegionModal);
  const showFiltersModal = useSelector((state: RootState): boolean => state.ui.showFiltersModal);
  const showLadiesStories = useSelector((state: RootState): boolean => state.ui.showLadiesStories);

  return (
    <div>
      {!isServer && showRegionModal && <LazyRegionsModal />}
      {showFiltersModal && <LazyFiltersModal />}
      {showLadiesStories && <LazyViewLadyStory />}
    </div>
  );
};

export default Modals;
