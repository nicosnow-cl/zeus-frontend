import { CardMedia } from '@mui/material';
import { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';

import IVideo from '../../../../interfaces/objects/interface.video';
import TabPanel from '../../TabPanel';

export interface IPremiumCardMediaProps {
  alt?: string;
  imageSrc: string;
  isHovering?: boolean;
  mediaHeight?: number | string;
  videoSrc?: IVideo;
}

const DEBOUNCE_TIME = 1500;
const PREMIUM_MEDIA_HEIGHT = 500;

const PremiumCardMedia = ({
  alt,
  imageSrc,
  isHovering = false,
  mediaHeight = PREMIUM_MEDIA_HEIGHT,
  videoSrc,
}: IPremiumCardMediaProps) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (isHovering)
      timeout = setTimeout(() => {
        setShowVideo(true);
      }, DEBOUNCE_TIME);
    else setShowVideo(false);

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [isHovering]);

  return (
    <>
      {!videoSrc ? (
        <CardMedia
          alt={`${alt || ''}`}
          component="img"
          height={mediaHeight}
          src={imageSrc}
          sx={{ objectPosition: 'top' }}
        />
      ) : (
        <SwipeableViews axis={'x'} index={!showVideo ? 0 : 1}>
          <TabPanel dir={'ltr'}>
            <CardMedia
              alt={`${alt || ''}`}
              component="img"
              height={mediaHeight}
              src={imageSrc}
              sx={{ objectPosition: 'top' }}
            />
          </TabPanel>
          <TabPanel dir={'ltr'}>
            <CardMedia
              autoPlay={true}
              component="video"
              height={mediaHeight}
              loop={true}
              muted={true}
              src={videoSrc.mp4}
              sx={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </TabPanel>
        </SwipeableViews>
      )}
    </>
  );
};

export default PremiumCardMedia;
