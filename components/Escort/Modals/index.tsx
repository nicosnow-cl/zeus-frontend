import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

import { RootState } from '../../../redux/store';

const LazyMediaDialog = dynamic(() => import('../../../components/UIElements/MediaDialog'), {
  ssr: false,
});
const LazyStoriesDialog = dynamic(() => import('../../../components/UIElements/StoriesDialog'), {
  ssr: false,
});

const Modals = () => {
  const showLadiesStories = useSelector((state: RootState): boolean => state.ui.showLadiesStories);
  const showLadyImage = useSelector((state: RootState): boolean => state.ui.showLadyImage);

  return (
    <>
      {showLadiesStories && <LazyStoriesDialog />}
      {showLadyImage && <LazyMediaDialog />}
    </>
  );
};

export default Modals;
