import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import SmartDisplay from '@mui/icons-material/SmartDisplay';

import IconSpinner from '../IconSpinner';

export interface IVideoWithSpinnerProps {
  defaultSrc: string;
  height?: number | string;
  objectFit?: 'cover' | 'contain';
  objectPosition?: 'top' | 'center';
  style?: React.CSSProperties;
}

const VideoWithSpinner = ({
  defaultSrc,
  height,
  objectFit = 'cover',
  objectPosition = 'top',
  style,
}: IVideoWithSpinnerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [src, setSrc] = useState<string>(defaultSrc);

  return (
    <>
      <CardMedia
        playsInline
        autoPlay
        component={'video'}
        image={src}
        loop
        muted
        onCanPlay={() => setIsLoading(false)}
        style={{ ...style, objectFit, objectPosition, height: '100%' }}
      />

      {isLoading && (
        <div style={{ height: height || '100%' }}>
          <Skeleton
            width="100%"
            height="100%"
            style={{ position: 'absolute', transform: 'none' }}
          />
          <IconSpinner icon={<SmartDisplay />} />
        </div>
      )}
    </>
  );
};

export default VideoWithSpinner;
