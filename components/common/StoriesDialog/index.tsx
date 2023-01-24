import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';

import { AppDispatch, RootState } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';
import StoryContainer from './StoryContainer/index';
import useStories from '../../../hooks/useStories';
import VideoBlurBackground from '../VideoBlurBackground';

const StoriesDialog = () => {
  const selectedEscortStory = useSelector((state: RootState) => state.ui.selectedEscortStory);
  const { value: stories } = useSelector((state: RootState) => state.home.storiesState);
  const { controls, metadata, video } = useStories({ selectedEscortStory, stories });
  const showLadiesStories = useSelector((state: RootState): boolean => state.ui.showLadiesStories);
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseStoriesDialog = () => {
    dispatch(uiActions.handleToggleLadiesStories(false));
  };

  const { avatar, escortId, hasNext, hasPrev, name, publishDate, totalStories, videoIdx } =
    metadata;

  console.count('StoriesDialog render');

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
      onClose={handleCloseStoriesDialog}
    >
      <div className={`h-100 w-100 d-flex jc-center ai-center`}>
        <VideoBlurBackground video={video} />

        <IconButton
          className={`absolute`}
          color="primary"
          disabled={!hasPrev}
          onClick={controls.prev}
          size="large"
          style={{ zIndex: 4, left: 0 }}
        >
          <ArrowBackIos fontSize="large" />
        </IconButton>

        <StoryContainer
          activeBar={videoIdx}
          avatar={avatar}
          escortId={escortId}
          handleClose={handleCloseStoriesDialog}
          handleNext={controls.next}
          name={name}
          publishDate={publishDate}
          totalBars={totalStories}
          video={video}
        />

        <IconButton
          className={`absolute`}
          color="primary"
          disabled={!hasNext}
          onClick={controls.next}
          size="large"
          style={{ zIndex: 4, right: 0 }}
        >
          <ArrowForwardIos fontSize="large" />
        </IconButton>
      </div>
    </Dialog>
  );
};

export default StoriesDialog;
