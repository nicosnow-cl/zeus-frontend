import { CardMedia } from '@mui/material';

export interface IGoldCardMedia {
  alt?: string;
  imageSrc: string;
  mediaHeight?: number | string;
}

const GOLD_MEDIA_HEIGHT = 400;

const GoldCardMedia = ({ alt, imageSrc, mediaHeight = GOLD_MEDIA_HEIGHT }: IGoldCardMedia) => {
  return (
    <CardMedia
      alt={`${alt || ''}`}
      component="img"
      height={mediaHeight}
      src={imageSrc}
      sx={{ objectPosition: 'top' }}
    />
  );
};

export default GoldCardMedia;
