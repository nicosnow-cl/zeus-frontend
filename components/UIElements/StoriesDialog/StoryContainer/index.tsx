import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import createArray from '../../../../helpers/createArray';
import getTimeSince from '../../../../helpers/getTimeSince';
import IImage from '../../../../interfaces/objects/interface.image';
import IVideo from '../../../../interfaces/objects/interface.video';
import StoryAvatar from '../../StoryAvatar';
import styles from './index.module.scss';
import { AppContext } from '../../../../pages/_app';

export interface IStoryContainerProps {
  activeBar?: number;
  avatar: IImage;
  escortId: number;
  handleClose?: () => void;
  handleNext?: () => void;
  name: string;
  publishDate?: string;
  totalBars?: number;
  video: IVideo;
}

const StoryContainer = ({
  activeBar = 0,
  avatar,
  escortId,
  handleClose = () => {},
  handleNext = () => {},
  name,
  publishDate,
  totalBars = 1,
  video,
}: IStoryContainerProps) => {
  const { router } = useContext(AppContext);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleProgress = useCallback(
    (current: HTMLVideoElement) => {
      const finished = current.ended;

      if (finished) {
        handleNext();
        return;
      }

      if (current) {
        const duration = current.duration;
        const currentTime = current.currentTime;

        setProgress(Math.floor((currentTime / duration) * 100));
      }
    },
    [handleNext],
  );

  const handleViewProfile = () => {
    if (!escortId) return;

    router?.push(`/escort/${escortId}`);
  };

  useEffect(() => {
    const { current } = videoRef;
    if (!current) return;

    const intervalId = setInterval(() => handleProgress(current), 250);

    return () => clearInterval(intervalId);
  }, [videoRef, handleProgress]);

  const videoUrl = `/videos/stories/${video.mp4}`;

  return (
    <div className={`h-100 d-flex fd-column ${styles.storyContainer}`} style={{ minWidth: 400 }}>
      <div className={`w-100 d-flex fd-column jc-between ${styles.titleContainer}`}>
        <div className={`px-3 d-flex jc-between ai-center`}>
          <div className={`d-flex ai-center`}>
            <StoryAvatar image={avatar} showBorder={false} size={80} onClick={handleViewProfile} />

            <div className={`ml-3`}>
              <Typography variant="h5" color="white">
                {name}

                {publishDate && (
                  <span className={`ml-3`} style={{ fontSize: 13 }}>
                    {getTimeSince(new Date(), new Date(publishDate))}
                  </span>
                )}
              </Typography>
            </div>
          </div>

          {handleClose && (
            <Button className={`${styles.closeBtn}`} onClick={handleClose} variant="contained">
              Cerrar
            </Button>
          )}
        </div>

        <Stack spacing={[0, 1]} direction="row">
          {createArray(totalBars).map((_, idx) => (
            <LinearProgress
              key={idx}
              sx={{ width: '100%' }}
              value={idx === activeBar ? progress : 0}
              variant="determinate"
            />
          ))}
        </Stack>
      </div>

      <CardMedia
        ref={videoRef}
        autoPlay={true}
        component="video"
        height="100%"
        id={`story-video-${name}`}
        loop={false}
        muted={false}
        src={videoUrl}
      />
    </div>
  );
};

export default StoryContainer;
