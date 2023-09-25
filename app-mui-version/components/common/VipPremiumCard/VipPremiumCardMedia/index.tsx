import { memo, useEffect, useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import SwipeableViews from 'react-swipeable-views';

import IImage from '../../../../interfaces/objects/interface.image';
import NextImage from '../../NextImage';
import IMedia from '../../../../interfaces/objects/interface.media';
import IVideo from '../../../../interfaces/objects/interface.video';

export interface IVipPremiumCardMediaProps {
  alt?: string;
  image: IImage;
  isHovering?: boolean;
  mediaHeight?: number | string;
  showVideos?: boolean;
  medias?: IMedia[];
}

const ImageMemo = memo(NextImage);
const VIP_MEDIA_HEIGHT = 600;

const VipPremiumCardMedia = ({
  alt = 'card-media',
  image,
  isHovering = false,
  mediaHeight = VIP_MEDIA_HEIGHT,
  showVideos = false,
  medias = [],
}: IVipPremiumCardMediaProps) => {
  const [videos] = useState<IVideo[]>(
    medias.filter((media) => media.type === 'video').map((media) => media.video!),
  );
  const [videoIdx, setVideoIdx] = useState<number>(0);
  const [wasHovered, setWasHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isHovering && !wasHovered) setWasHovered(true);
  }, [isHovering, wasHovered]);

  if (!videos.length) {
    return (
      <div style={{ height: mediaHeight, position: 'relative' }}>
        <ImageMemo alt={alt} image={image} sizes="550px" />
      </div>
    );
  }

  return (
    <SwipeableViews axis={'x'} index={!showVideos ? 0 : 1}>
      <div style={{ height: mediaHeight, position: 'relative' }}>
        <ImageMemo alt={alt} image={image} sizes="550px" />
      </div>

      <div style={{ height: mediaHeight, position: 'relative', overflow: 'hidden' }}>
        {wasHovered && (
          <CardMedia
            autoPlay
            component="video"
            loop={videos.length <= 1 ? true : false}
            muted
            onEnded={() => setVideoIdx((prev) => (prev + 1) % videos.length)}
            playsInline
            src={videos[videoIdx].mp4}
            style={{ objectFit: 'cover', objectPosition: 'top', height: '100%' }}
          />
        )}
      </div>
    </SwipeableViews>
  );
};

export default VipPremiumCardMedia;
