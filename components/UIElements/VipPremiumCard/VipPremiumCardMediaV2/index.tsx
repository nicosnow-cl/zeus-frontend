import { memo, useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import IImage from '../../../../interfaces/objects/interface.image';
import IVideo from '../../../../interfaces/objects/interface.video';
import NextImage from '../../NextImage';

export interface IVipPremiumCardMediaProps {
  alt?: string;
  image: IImage;
  isHovering?: boolean;
  mediaHeight?: number | string;
  showVideos?: boolean;
  videos?: IVideo[];
}

const ImageMemo = memo(NextImage);
const VIP_MEDIA_HEIGHT = 600;

const VipPremiumCardMedia = ({
  alt = 'card-media',
  image,
  isHovering = false,
  mediaHeight = VIP_MEDIA_HEIGHT,
  showVideos = false,
  videos = [],
}: IVipPremiumCardMediaProps) => {
  const [videoIdx, setVideoIdx] = useState<number>(0);
  const [wasHovered, setWasHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isHovering && !wasHovered) setWasHovered(true);
  }, [isHovering, wasHovered]);

  if (!videos.length) {
    return (
      <div style={{ height: mediaHeight, position: 'relative' }}>
        <ImageMemo alt={alt} image={image} />
      </div>
    );
  }

  return (
    <SwipeableViews axis={'x'} index={!showVideos ? 0 : 1}>
      <div style={{ height: mediaHeight, position: 'relative' }}>
        <ImageMemo alt={alt} image={image} />
      </div>

      <div style={{ height: mediaHeight, position: 'relative', overflow: 'hidden' }}>
        {wasHovered && (
          <video
            playsInline
            autoPlay
            muted
            loop={videos.length < 1 ? true : false}
            onEnded={() => setVideoIdx((prev) => (prev + 1) % videos.length)}
            controls={false}
            src={videos[videoIdx].mp4}
            style={{
              backgroundPosition: 'center',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              width: '100%',
            }}
          />
        )}
      </div>
    </SwipeableViews>
  );
};

export default VipPremiumCardMedia;
