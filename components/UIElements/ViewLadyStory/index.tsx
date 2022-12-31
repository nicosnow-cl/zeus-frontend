import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Dialog, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback } from 'react';
import getConfig from 'next/config';

import { AppDispatch, RootState } from '../../../redux/store';
import { IUiState, uiActions } from '../../../redux/reducers/ui';
import BlurBackground from './BlurBackground';
import StoryContainer from './StoryContainer/index';
import styles from './index.module.scss';

// const storiesSrc = [
//   'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4',
//   'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4',
//   'https://assets.mixkit.co/videos/preview/mixkit-model-in-gold-makeup-in-a-photoshoot-34424-large.mp4',
// ];

const storiesSrc = [
  '/videos/stories/demo-1.mp4',
  '/videos/stories/demo-2.mp4',
  '/videos/stories/demo-3.mp4',
  '/videos/stories/demo-4.mp4',
];

const ViewLadyStory = () => {
  const [videoIdx, setVideoIdx] = useState<number>(0);
  const { showLadiesStories } = useSelector((state: RootState): IUiState => state.ui);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseLadyImage = () => {
    dispatch(uiActions.handleToggleLadiesStories(false));
  };

  const handleNextStory = useCallback(() => {
    if (videoIdx === storiesSrc.length - 1) {
      setVideoIdx(0);
      return;
    }

    setVideoIdx(videoIdx + 1);
  }, [videoIdx]);

  const handlePrevStory = useCallback(() => {
    if (videoIdx === 0) {
      setVideoIdx(storiesSrc.length - 1);
      return;
    }

    setVideoIdx(videoIdx - 1);
  }, [videoIdx]);

  const handleVideoRef = useCallback(
    (videoRef: React.RefObject<HTMLVideoElement>) => {
      const finished = videoRef.current?.ended;
      if (finished) {
        setVideoProgress(100);
        handleNextStory();
        return;
      }

      if (videoRef.current) {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;

        setVideoProgress(Math.floor((currentTime / duration) * 100));
      }
    },
    [handleNextStory],
  );

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
      <Box className={`h-100 w-100 d-flex jc-center ai-center`}>
        <BlurBackground src={storiesSrc[videoIdx]} />

        <IconButton
          className={`${styles.directionalBtn} ${styles.left}`}
          color="primary"
          size="large"
          onClick={handlePrevStory}
        >
          <ArrowBackIos fontSize="large" />
        </IconButton>

        <StoryContainer
          avatarSrc={`https://s3.eu-central-1.amazonaws.com/findpornface/preview/6fec440d-b757-40b3-9713-8150a6ccdf2a-9d67e961-1634-4333-98f8-ddd6f0a41006.jpg`}
          videoSrc={storiesSrc[videoIdx]}
          handleClose={handleCloseLadyImage}
          handleVideoRef={handleVideoRef}
          videoProgress={videoProgress}
        />

        <IconButton
          className={`${styles.directionalBtn} ${styles.right}`}
          color="primary"
          size="large"
          onClick={handleNextStory}
        >
          <ArrowForwardIos fontSize="large" />
        </IconButton>
      </Box>
    </Dialog>
  );
};

export default ViewLadyStory;
