import CardMedia from '@mui/material/CardMedia';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Videocam from '@mui/icons-material/Videocam';
import Visibility from '@mui/icons-material/Visibility';

import IImage from '../../../interfaces/objects/interface.image';
import IVideo from '../../../interfaces/objects/interface.video';
import NextImage from '../NextImage';
import styles from './index.module.scss';

export interface IProfileMediaProps {
  height?: number;
  image?: IImage;
  onClick?: () => void;
  type: 'img' | 'video';
  video?: IVideo;
}

const ProfileMedia = ({ height, image, onClick, type, video }: IProfileMediaProps) => {
  const containerStyle = height
    ? { height: `${height}px`, borderRadius: '12px' }
    : { borderRadius: '12px' };

  return (
    <div className={`pointer ${styles.mediaContainer}`} onClick={onClick} style={containerStyle}>
      <div className={`d-flex jc-center ai-center ${styles.hoverDiv}`}>
        <Visibility />
      </div>

      {type === 'video' ? (
        <Videocam className={`m-2 absolute ${styles.chip}`} color="action" />
      ) : (
        <PhotoCamera className={`m-2 absolute ${styles.chip}`} color="action" />
      )}

      {type === 'video' ? (
        <CardMedia
          autoPlay
          component="video"
          loop
          muted
          playsInline
          src={video!.mp4}
          style={{ objectFit: 'cover', objectPosition: 'top', height: '100%' }}
        />
      ) : (
        <NextImage image={image!} />
      )}
    </div>
  );
};

export default ProfileMedia;
