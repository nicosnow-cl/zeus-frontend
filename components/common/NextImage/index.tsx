import { useState } from 'react';
import Image from 'next/image';

import getRandomNumber from '../../../helpers/getRandomNumber';
import IImage from '../../../interfaces/objects/interface.image';

export interface INextImageProps {
  alt?: string;
  height?: number | string;
  image: IImage;
  objectFit?: 'cover' | 'contain';
  sizes?: string;
  style?: React.CSSProperties;
}

const NextImage = ({
  alt = 'img-media',
  height,
  image,
  objectFit = 'cover',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  style = {},
}: INextImageProps) => {
  const [src, setSrc] = useState<string>(image.hq);

  const handleError = (evt: React.SyntheticEvent<HTMLImageElement, Event>) =>
    setSrc(`/profile-pics/demo-${getRandomNumber(1, 9)}.jpg`);

  return (
    <Image
      alt={alt}
      blurDataURL={image.placeholder}
      fill
      onError={handleError}
      placeholder="blur"
      quality={75}
      sizes={sizes}
      src={src}
      style={{ ...style, objectFit }}
    />
  );
};

export default NextImage;
