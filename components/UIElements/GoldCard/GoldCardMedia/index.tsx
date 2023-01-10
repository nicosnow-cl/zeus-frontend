import { memo } from 'react';

import IImage from '../../../../interfaces/objects/interface.image';
import NextImage from '../../NextImage';

export interface IGoldCardMedia {
  alt?: string;
  image: IImage;
  mediaHeight?: number | string;
}

const ImageMemo = memo(NextImage);
const GOLD_MEDIA_HEIGHT = 400;

const GoldCardMedia = ({ alt, image, mediaHeight = GOLD_MEDIA_HEIGHT }: IGoldCardMedia) => {
  return (
    <div style={{ height: mediaHeight, position: 'relative' }}>
      <ImageMemo alt={alt} image={image} />
    </div>
  );
};

export default GoldCardMedia;
