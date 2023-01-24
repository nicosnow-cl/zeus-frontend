import { CSSProperties, useState } from 'react';
import Image from 'next/image';

import IImage from '../../../../interfaces/objects/interface.image';
import styles from './index.module.scss';
import getRandomNumber from '../../../../helpers/getRandomNumber';

export interface IMediaImageProps {
  alt: string;
  fullHeight?: boolean;
  image: IImage;
  style?: CSSProperties;
}

const MediaImage = ({ alt, fullHeight = false, image, style = {} }: IMediaImageProps) => {
  const [src, setSrc] = useState<string>(image.hq);

  const otherProps = fullHeight ? { style: { height: '100%' } } : { fill: true };
  const handleError = (evt: React.SyntheticEvent<HTMLImageElement, Event>) =>
    setSrc(`/profile-pics/demo-${getRandomNumber(1, 9)}.jpg`);

  return (
    <div className={`${styles.mediaContainer}`} style={{ ...style }}>
      <Image
        alt={alt}
        blurDataURL={image.placeholder}
        className={`${styles.mediaImg}`}
        onError={handleError}
        placeholder="blur"
        quality={100}
        src={src}
        sizes={`(max-width: 768px) 100vw, 800px`}
        {...otherProps}
      />
    </div>
  );
};

export default MediaImage;
