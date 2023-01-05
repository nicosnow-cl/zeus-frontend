import { useState } from 'react';
import Image from 'next/image';
import ImageIcon from '@mui/icons-material/Image';
import Skeleton from '@mui/material/Skeleton';

import IconSpinner from '../IconSpinner';
import getRandomNumber from '../../../helpers/getRandomNumber';

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
      <Image
        alt={alt}
        fill
        hidden={isLoading}
        onError={handleError}
        onLoadingComplete={() => setIsLoading(false)}
        quality={50}
        src={src}
        style={{ ...style, objectFit }}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />

      {isLoading && (
        <div style={{ height: height || '100%' }}>
          <Skeleton
            width="100%"
            height="100%"
            style={{ position: 'absolute', transform: 'none' }}
          />
          <IconSpinner icon={<ImageIcon />} />
        </div>
      )}
    </>
  );
};

export default NextImageWithSpinner;
