import { useState } from 'react';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import ImageIcon from '@mui/icons-material/Image';

import IconSpinner from '../IconSpinner';

export interface INextImageWithSpinnerProps {
  alt?: string;
  height?: number | string;
  objectFit?: 'cover' | 'contain';
  src: string;
}

const NextImageWithSpinner = ({
  alt = 'img-media',
  height,
  objectFit = 'cover',
  src,
}: INextImageWithSpinnerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      <div style={{ height: !isLoading ? 0 : height }}>
        <Skeleton width="100%" height="100%" style={{ position: 'absolute', transform: 'none' }} />
        <IconSpinner icon={<ImageIcon />} />
      </div>

      <div style={{ height: isLoading ? 0 : height, position: 'relative' }}>
        <Image
          alt={alt}
          fill
          onLoadingComplete={() => setIsLoading(false)}
          quality={50}
          src={src}
          style={{ objectFit }}
        />
      </div>
    </>
  );
};

export default NextImageWithSpinner;
