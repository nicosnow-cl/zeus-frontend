import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';

import { AppDispatch, RootState } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';
import BlurBackground from './BlurBackground';
import StoryContainer from './StoryContainer/index';
import styles from './index.module.scss';
import useStories from '../../../hooks/useStories';

const ViewLadyStory = () => {
  const selectedEscortStory = useSelector(
    (state: RootState): number => state.ui.selectedEscortStory,
  );
  const { value: allStories } = useSelector((state: RootState) => state.home.storiesState);
  const { story, metadata, controls } = useStories({ selectedEscortStory, allStories });
  const showLadiesStories = useSelector((state: RootState): boolean => state.ui.showLadiesStories);
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseLadyImage = () => {
    dispatch(uiActions.handleToggleLadiesStories(false));
  };

  return (
    <Dialog
      open={showLadiesStories}
      PaperProps={{
        sx: {
          background: `black`,
          height: '100% !important',
          margin: 0,
          maxHeight: '100% !important',
          maxWidth: '100% !important',
          padding: 0,
          width: '100%',
        },
      }}
      onClose={handleCloseLadyImage}
    >
      <div className={`h-100 w-100 d-flex jc-center ai-center`}>
        <BlurBackground src={`/videos/stories/${story?.mp4}`} />

        <IconButton
          disabled={metadata.actualEscortIdx === 0 && metadata.storyIdx === 0}
          className={`${styles.directionalBtn} ${styles.left}`}
          color="primary"
          size="large"
          onClick={controls.prev}
        >
          <ArrowBackIos fontSize="large" />
        </IconButton>

        <StoryContainer
          avatarSrc={metadata.avatar?.lq || ''}
          handleClose={handleCloseLadyImage}
          name={metadata.name || ''}
          publishDate={metadata.publishDate || ''}
          storyIdx={metadata.storyIdx}
          totalStories={metadata.totalStories}
          videoSrc={`/videos/stories/${story?.mp4}`}
          handleNext={controls.next}
        />

        <IconButton
          disabled={
            metadata.actualEscortIdx === allStories.length - 1 &&
            metadata.storyIdx === metadata.totalStories - 1
          }
          className={`${styles.directionalBtn} ${styles.right}`}
          color="primary"
          size="large"
          onClick={controls.next}
        >
          <ArrowForwardIos fontSize="large" />
        </IconButton>
      </div>
    </Dialog>
  );
};

export default ViewLadyStory;
