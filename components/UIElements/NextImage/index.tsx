import { useState } from 'react';
import Image from 'next/image';

import getRandomNumber from '../../../helpers/getRandomNumber';

export interface INextImageProps {
  alt?: string;
  defaultSrc: string;
  height?: number | string;
  objectFit?: 'cover' | 'contain';
  style?: React.CSSProperties;
}

const NextImage = ({
  alt = 'img-media',
  defaultSrc,
  height,
  objectFit = 'cover',
  style = {},
}: INextImageProps) => {
  const [src, setSrc] = useState<string>(defaultSrc);

  const handleError = (evt: React.SyntheticEvent<HTMLImageElement, Event>) =>
    setSrc(`/profile-pics/demo-${getRandomNumber(1, 9)}.jpg`);

  return (
    <Image
      alt={alt}
      fill
      onError={handleError}
      quality={50}
      src={src}
      style={{ ...style, objectFit }}
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />
  );
};

export default NextImage;
