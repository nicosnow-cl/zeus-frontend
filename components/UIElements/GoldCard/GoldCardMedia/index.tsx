import NextImage from '../../NextImage';
export interface IGoldCardMedia {
  alt?: string;
  imageSrc: string;
  mediaHeight?: number | string;
}

const GOLD_MEDIA_HEIGHT = 400;

const GoldCardMedia = ({ alt, imageSrc, mediaHeight = GOLD_MEDIA_HEIGHT }: IGoldCardMedia) => {
  return (
    <div style={{ height: mediaHeight, position: 'relative' }}>
      <NextImage alt={alt} defaultSrc={imageSrc} />
    </div>
  );
};

export default GoldCardMedia;
