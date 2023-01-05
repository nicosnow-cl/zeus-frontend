import { CardMedia } from '@mui/material';
import { useState, useEffect, memo, useContext } from 'react';
import SwipeableViews from 'react-swipeable-views';

import IVideo from '../../../../interfaces/objects/interface.video';
import NextImage from '../../NextImage';
import NextImageWithSpinner from '../../NextImageWithSpinner';
import TabPanel from '../../TabPanel';
// import { CardContext } from '../index';

const ImgMemo = memo(NextImageWithSpinner);

export interface IVipPremiumCardMedia {
  alt?: string;
  imageSrc: string;
  isHovering?: boolean;
  mediaHeight?: number | string;
  videosSrc?: IVideo[];
}

const DEBOUNCE_TIME = 1500;
const VIP_MEDIA_HEIGHT = 600;

const VipPremiumCardMedia = ({
  alt = 'card-media',
  imageSrc,
  isHovering = false,
  mediaHeight = VIP_MEDIA_HEIGHT,
  videosSrc = [],
}: IVipPremiumCardMedia) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [videoIdx, setVideoIdx] = useState<number>(0);
  const [wasHovered, setWasHovered] = useState<boolean>(false);

  // const cardContext = useContext(CardContext);
  // const { data, isHovering, theme } = cardContext;
  // const imageSrc = data?.img.hq ?? '';
  // const videosSrc = data?.videos ?? [];

  useEffect(() => {
    if (!videosSrc.length) return;

    if (isHovering && !wasHovered) setWasHovered(true);

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
    <div style={{ height: mediaHeight, position: 'relative' }}>
      <NextImage alt={alt} defaultSrc={imageSrc} />
    </div>
  );

  // return (
  //   <>
  //     {!videosSrc.length ? (
  //       <div style={{ height: mediaHeight, position: 'relative' }}>
  //         <NextImage alt={alt} defaultSrc={imageSrc} />
  //       </div>
  //     ) : (
  //       <SwipeableViews axis={'x'} index={!showVideo ? 0 : 1}>
  //         <TabPanel dir={'ltr'}>
  //           <div style={{ height: mediaHeight, position: 'relative' }}>
  //             <NextImage alt={alt} defaultSrc={imageSrc} height={mediaHeight} />
  //           </div>
  //         </TabPanel>
  //         <TabPanel dir={'ltr'}>
  //           <div style={{ height: mediaHeight, position: 'relative', overflow: 'hidden' }}>
  //             {wasHovered && (
  //               <video
  //                 autoPlay
  //                 muted
  //                 loop={videosSrc.length < 1 ? true : false}
  //                 onEnded={() => setVideoIdx((prev) => (prev + 1) % videosSrc.length)}
  //                 controls={false}
  //                 src={videosSrc[videoIdx].mp4}
  //                 style={{
  //                   backgroundPosition: 'center',
  //                   height: '100%',
  //                   objectFit: 'cover',
  //                   objectPosition: 'top',
  //                   width: '100%',
  //                 }}
  //               />

  //               // <CardMedia
  //               //   autoPlay={true}
  //               //   component="video"
  //               //   height={mediaHeight}
  //               //   loop={videosSrc.length < 1 ? true : false}
  //               //   muted={true}
  //               //   onEnded={() => setVideoIdx((prev) => (prev + 1) % videosSrc.length)}
  //               //   src={videosSrc[videoIdx].mp4}
  //               //   sx={{ objectFit: 'cover', objectPosition: 'top' }}
  //               // />
  //             )}
  //           </div>
  //         </TabPanel>
  //       </SwipeableViews>
  //     )}
  //   </>
  // );
};

export default VipPremiumCardMedia;
