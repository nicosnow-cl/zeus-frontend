import { CSSProperties } from 'react';
import Image from 'next/image';

import IImage from '../../../../interfaces/objects/interface.image';
import styles from './index.module.scss';

export interface IMediaImageProps {
  alt: string;
  fullHeight?: boolean;
  image: IImage;
  style?: CSSProperties;
}

const MediaImage = ({ alt, fullHeight = false, image, style = {} }: IMediaImageProps) => {
  const otherProps = fullHeight ? { style: { height: '100%' } } : { fill: true };

  return (
    <div className={`${styles.mediaContainer}`} style={{ ...style }}>
      <Image
        alt={alt}
        blurDataURL={image.placeholder}
        className={`${styles.mediaImg}`}
        placeholder="blur"
        quality={100}
        src={image.hq}
        sizes={`(max-width: 768px) 100vw, 800px`}
        {...otherProps}
      />
    </div>
  );
};

export default MediaImage;
