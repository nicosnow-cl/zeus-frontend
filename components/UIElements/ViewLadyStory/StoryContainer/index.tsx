import { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import getTimeSince from '../../../../helpers/getTimeSince';
import StoryAvatar from '../../StoryAvatar';
import styles from './index.module.scss';

export interface IStoryContainerProps {
  avatarSrc?: string;
  handleClose?: () => void;
  name: string;
  publishDate: string;
  storyIdx: number;
  totalStories: number;
  videoSrc?: string;
  handleNext?: () => void;
}

const StoryContainer = ({
  avatarSrc,
  handleClose,
  name,
  publishDate,
  storyIdx,
  totalStories,
  videoSrc,
  handleNext = () => {},
}: IStoryContainerProps) => {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleProgress = useCallback(
    (current: HTMLVideoElement) => {
      const finished = videoRef.current?.ended;

      if (finished) {
        handleNext();
        return;
      }

      if (videoRef.current) {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;

        setProgress(Math.floor((currentTime / duration) * 100));
      }
    },
    [handleNext],
  );

  useEffect(() => {
    const { current } = videoRef;
    if (!current) return;

    const intervalId = setInterval(() => handleProgress(current), 250);

    return () => clearInterval(intervalId);
  }, [videoRef, handleProgress]);

  return (
    <div className={`h-100 d-flex fd-column ${styles.storyContainer}`} style={{ minWidth: 400 }}>
      <div className={`w-100 d-flex fd-column jc-between ${styles.titleContainer}`}>
        <div className={`px-3 d-flex jc-between ai-center`}>
          <div className={`d-flex ai-center`}>
            <StoryAvatar
              image={{ hq: avatarSrc || '', lq: avatarSrc || '' }}
              showBorder={false}
              size={80}
            />

            <div className={`ml-3`}>
              <Typography variant="h5" color="white">
                {name}
                <span className={`ml-3`} style={{ fontSize: 13 }}>
                  {getTimeSince(new Date(), new Date(publishDate))}
                </span>
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
          {new Array(totalStories).fill(undefined).map((_, idx) => (
            <LinearProgress
              key={idx}
              sx={{ width: '100%' }}
              value={idx === storyIdx ? progress : 0}
              variant="determinate"
            />
          ))}
        </Stack>
      </div>

      {videoSrc && (
        <CardMedia
          ref={videoRef}
          autoPlay={true}
          component="video"
          height="100%"
          id={`story-${Math.random()}`}
          loop={false}
          muted={false}
          src={videoSrc}
        />
      )}
    </div>
  );
};

export default StoryContainer;
