import { memo, useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

// import mapImgsAndVideosToMedias from '../../../../helpers/mapImgsAndVideosToMedias';
import IImage from '../../../../interfaces/objects/interface.image';
import IVideo from '../../../../interfaces/objects/interface.video';
// import CardMediaTransition from '../../CardMediaTransition';
import NextImage from '../../NextImage';

const ImageMemo = memo(NextImage);

const DEBOUNCE_TIME = 1500;
const VIP_MEDIA_HEIGHT = 600;

export interface IVipPremiumCardMediaProps {
  alt?: string;
  image: IImage;
  isHovering?: boolean;
  mediaHeight?: number | string;
  videos?: IVideo[];
}

const VipPremiumCardMedia = ({
  alt = 'card-media',
  image,
  isHovering = false,
  mediaHeight = VIP_MEDIA_HEIGHT,
  videos = [],
}: IVipPremiumCardMediaProps) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [videoIdx, setVideoIdx] = useState<number>(0);
  const [wasHovered, setWasHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!videos.length) return;

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
  }, [videos, isHovering, wasHovered]);

  //   const medias = mapImgsAndVideosToMedias(videos, [image]).sort((a, b) =>
  //     a.type === 'img' ? -1 : 1,
  //   );

  if (!videos.length) {
    return (
      <div style={{ height: mediaHeight, position: 'relative' }}>
        <ImageMemo alt={alt} image={image} />
      </div>
    );
  }

  return (
    <SwipeableViews axis={'x'} index={!showVideo ? 0 : 1}>
      <div style={{ height: mediaHeight, position: 'relative' }}>
        <ImageMemo alt={alt} image={image} />
      </div>

      <div style={{ height: mediaHeight, position: 'relative', overflow: 'hidden' }}>
        {wasHovered && (
          <video
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
