import { useContext } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

import { AppContext } from '../../../pages/_app';
import { RootState } from '../../../redux/store';

const LazyRegionsModal = dynamic(() => import('../../../components/common/RegionsModal'), {
  ssr: false,
});
const LazyFiltersModal = dynamic(() => import('../../../components/common/FiltersModal'), {
  ssr: false,
});
const LazyStoriesDialog = dynamic(() => import('../../../components/common/StoriesDialog'), {
  ssr: false,
});

const Modals = () => {
  const { isServer } = useContext(AppContext);
  const showRegionModal = useSelector((state: RootState): boolean => state.ui.showRegionModal);
  const showFiltersModal = useSelector((state: RootState): boolean => state.ui.showFiltersModal);
  const showLadiesStories = useSelector((state: RootState): boolean => state.ui.showLadiesStories);

  return (
    <>
      {!isServer && showRegionModal && <LazyRegionsModal />}
      {showFiltersModal && <LazyFiltersModal />}
      {showLadiesStories && <LazyStoriesDialog />}
    </>
  );
};

export default Modals;
