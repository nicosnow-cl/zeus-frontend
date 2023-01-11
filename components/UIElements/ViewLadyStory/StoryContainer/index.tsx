import { Button, CardMedia, LinearProgress, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { RefObject, useEffect, useRef, useState } from 'react';

import StoryAvatar from '../../StoryAvatar';
import styles from './index.module.scss';

export interface IStoryContainerProps {
  avatarSrc?: string;
  videoSrc?: string;
  handleClose?: () => void;
  handleVideoRef?: (videoRef: RefObject<HTMLVideoElement>) => void;
  videoProgress?: number;
}

const StoryContainer = ({
  avatarSrc,
  handleClose,
  handleVideoRef,
  videoSrc,
  videoProgress,
}: IStoryContainerProps) => {
  const [loop, setLoop] = useState<NodeJS.Timer | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect((): (() => void) => {
    if (videoRef.current) videoRef.current.play();
    if (loop) clearInterval(loop);

    if (handleVideoRef) {
      const _ = setInterval((): void => handleVideoRef(videoRef), 500);
      setLoop(_);
    }

    return (): void => (loop ? clearInterval(loop) : undefined);
  }, [videoSrc, handleVideoRef]);

  return (
    <Box className={`h-100 d-flex fd-column ${styles.storyContainer}`}>
      <Box className={`w-100 d-flex fd-column jc-between ${styles.titleContainer}`}>
        <Box className={`px-3 d-flex jc-between ai-center`}>
          <Box className={`d-flex ai-center`}>
            <StoryAvatar
              image={{ hq: avatarSrc || '', lq: avatarSrc || '' }}
              showBorder={false}
              size={80}
            />

            <Box className={`ml-3`}>
              <Typography variant="h5" color="white">
                Diana
                <span className={`ml-3`} style={{ fontSize: 13 }}>
                  Hace 8 min. atrás
                </span>
              </Typography>
            </Box>
          </Box>

          {handleClose && (
            <Button className={`${styles.closeBtn}`} onClick={handleClose} variant="contained">
              Cerrar
            </Button>
          )}
        </Box>

        <Stack spacing={[0, 1]} direction="row">
          <LinearProgress
            sx={{ width: '100%' }}
            value={videoProgress || 100}
            variant="determinate"
          />
        </Stack>
      </Box>

      {videoSrc && (
        <CardMedia
          ref={videoRef}
          id={`story-${Math.random()}`}
          autoPlay={true}
          component="video"
          loop={false}
          muted={false}
          src={videoSrc}
          height="100%"
        />
      )}
    </Box>
  );
};

export default StoryContainer;
