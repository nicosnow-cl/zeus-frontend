import { CardMedia, useTheme } from '@mui/material';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import IVideo from '../../../../interfaces/objects/interface.video';
import TabPanel from '../../TabPanel';

export interface ILadyCardMedia {
  imageSrc: string;
  mediaHeight?: number | string;
  alt?: string;
  showVideo?: boolean;
  videosSrc?: IVideo[];
}

const LadyCardMedia = ({
  imageSrc,
  videosSrc = [],
  alt,
  showVideo = false,
  mediaHeight = 300,
}: ILadyCardMedia) => {
  const theme = useTheme();
  const [videoIdx, setVideoIdx] = useState<number>(0);

  return (
    <>
      {videosSrc.length > 0 ? (
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={!showVideo ? 0 : 1}
        >
          <TabPanel dir={theme.direction}>
            <CardMedia
              alt={`${alt || ''}`}
              component="img"
              height={mediaHeight}
              src={imageSrc}
              sx={{ objectPosition: 'top' }}
            />
          </TabPanel>
          <TabPanel dir={theme.direction}>
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
      ) : (
        <CardMedia
          alt={`${alt || ''}`}
          component="img"
          height={mediaHeight}
          src={imageSrc}
          sx={{ objectPosition: 'top' }}
        />
      )}
    </>
  );
};

export default LadyCardMedia;
