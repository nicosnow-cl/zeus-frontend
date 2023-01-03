import CardMedia from '@mui/material/CardMedia';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Videocam from '@mui/icons-material/Videocam';
import Visibility from '@mui/icons-material/Visibility';

import NextImageWithSpinner from '../NextImageWithSpinner';
import styles from './index.module.scss';
import VideoWithSpinner from '../VideoWithSpinner';

export interface IProfileMediaProps {
  height?: number;
  onClick?: () => void;
  src: string;
  type: 'img' | 'video';
}

const ProfileMedia = ({ height, onClick, src, type }: IProfileMediaProps) => {
  const containerStyle = height
    ? { height: `${height}px`, borderRadius: '12px' }
    : { borderRadius: '12px' };

  return (
    <div className={`pointer ${styles.mediaContainer}`} onClick={onClick} style={containerStyle}>
      <div className={`d-flex jc-center ai-center ${styles.hoverDiv}`}>
        <Visibility />
      </div>

      <div className={`m-2 ${styles.chip}`}>
        {type === 'video' ? <Videocam color="action" /> : <PhotoCamera color="action" />}
      </div>

      {type === 'video' ? (
        // <CardMedia
        //   autoPlay
        //   component={'video'}
        //   image={src}
        //   loop
        //   muted
        //   sx={{ objectFit: 'cover', objectPosition: 'top', height: '100%' }}
        // />
        <VideoWithSpinner defaultSrc={src} />
      ) : (
        <NextImageWithSpinner defaultSrc={src} />
      )}
    </div>
  );
};

export default ProfileMedia;
