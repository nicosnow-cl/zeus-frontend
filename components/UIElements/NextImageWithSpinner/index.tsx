import { useState } from 'react';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import ImageIcon from '@mui/icons-material/Image';

import IconSpinner from '../IconSpinner';
import getRandomNumber from '../../../utils/getRandomNumber';

export interface INextImageWithSpinnerProps {
  alt?: string;
  defaultSrc: string;
  height?: number | string;
  objectFit?: 'cover' | 'contain';
  style?: React.CSSProperties;
}

const NextImageWithSpinner = ({
  alt = 'img-media',
  defaultSrc,
  height,
  objectFit = 'cover',
  style = {},
}: INextImageWithSpinnerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [src, setSrc] = useState<string>(defaultSrc);

  const handleError = (evt: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setSrc(`/profile-pics/demo-${getRandomNumber(1, 9)}.jpg`);
  };

  return (
    <>
      <div hidden={!isLoading} style={{ ...style, height }}>
        <Skeleton width="100%" height="100%" style={{ position: 'absolute', transform: 'none' }} />
        <IconSpinner icon={<ImageIcon />} />
      </div>

      <div style={{ height: isLoading ? 0 : height, position: 'relative' }}>
        <Image
          alt={alt}
          fill
          onError={handleError}
          onLoadingComplete={() => setIsLoading(false)}
          quality={50}
          src={src}
          style={{ ...style, objectFit }}
        />
      </div>
    </>
  );
};

export default NextImageWithSpinner;
