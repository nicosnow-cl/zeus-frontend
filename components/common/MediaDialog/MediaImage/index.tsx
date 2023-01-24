import Image from 'next/image';

import IImage from '../../../../interfaces/objects/interface.image';
import styles from './index.module.scss';

export interface IMediaImageProps {
  alt: string;
  image: IImage;
}

const MediaImage = ({ alt, image }: IMediaImageProps) => {
  return (
    <div className={`${styles.mediaContainer}`}>
      <Image
        alt={alt}
        blurDataURL={image.placeholder}
        className={`${styles.mediaImg}`}
        fill
        placeholder="blur"
        src={image.hq}
      />
    </div>
  );
};

export default MediaImage;
