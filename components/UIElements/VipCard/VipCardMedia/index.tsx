import { CardMedia } from '@mui/material';
import { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';

import IVideo from '../../../../interfaces/objects/interface.video';
import TabPanel from '../../TabPanel';

export interface IVipCardMedia {
  alt?: string;
  imageSrc: string;
  isHovering?: boolean;
  mediaHeight?: number | string;
  videosSrc?: IVideo[];
}

const DEBOUNCE_TIME = 1500;
const VIP_MEDIA_HEIGHT = 600;

const VipCardMedia = ({
  alt,
  imageSrc,
  isHovering = false,
  mediaHeight = VIP_MEDIA_HEIGHT,
  videosSrc = [],
}: IVipCardMedia) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [videoIdx, setVideoIdx] = useState<number>(0);

  useEffect(() => {
    if (!videosSrc.length) return;

    let timeout: NodeJS.Timeout | null = null;

    if (isHovering)
      timeout = setTimeout(() => {
        setShowVideo(true);
      }, DEBOUNCE_TIME);
    else setShowVideo(false);

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [videosSrc, isHovering]);

  return (
    <>
      {!videosSrc.length ? (
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
              loop={videosSrc.length < 1 ? true : false}
              muted={true}
              onEnded={() => setVideoIdx((prev) => (prev + 1) % videosSrc.length)}
              src={videosSrc[videoIdx].mp4}
              sx={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </TabPanel>
        </SwipeableViews>
      )}
    </>
  );
};

export default VipCardMedia;
