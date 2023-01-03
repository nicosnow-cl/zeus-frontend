import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Videocam from '@mui/icons-material/Videocam';

import NextImageWithSpinner from '../NextImageWithSpinner';

export interface IProfileMediaProps {
  height?: number;
  onClick?: () => void;
  src: string;
  type: 'img' | 'video';
}

const DEFAULT_MEDIA_HEIGHT = 300;

const ProfileMedia = ({
  height = DEFAULT_MEDIA_HEIGHT,
  onClick,
  src,
  type,
}: IProfileMediaProps) => {
  return (
    <CardActionArea sx={{ borderRadius: 3 }} onClick={onClick}>
      <div
        className={`m-2`}
        style={{
          position: 'absolute',
          right: 0,
          zIndex: 3,
        }}
      >
        {type === 'video' ? <Videocam color="action" /> : <PhotoCamera color="action" />}
      </div>

      {type === 'video' ? (
        <CardMedia
          component={'video'}
          height={`${height}px`}
          image={src}
          sx={{ borderRadius: 3, objectFit: 'cover', objectPosition: 'top' }}
        />
      ) : (
        <NextImageWithSpinner defaultSrc={src} height={height} style={{ borderRadius: '12px' }} />
      )}
    </CardActionArea>
  );
};

export default ProfileMedia;
