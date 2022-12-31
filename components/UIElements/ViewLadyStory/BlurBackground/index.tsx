import { Box } from '@mui/system';

import styles from './index.module.scss';

export interface IBlurBackgroundProps {
  src?: string;
}

const BlurBackground = ({ src }: IBlurBackgroundProps) => {
  return (
    <Box className={`h-100 w-100 ${styles.videoContainer}`}>
      <Box className={`h-100 w-100 ${styles.blur}`} />
      {src && (
        <video
          autoPlay={false}
          className={`w-100 h-100 ${styles.videoBackground}`}
          id={`video-background-${Math.random()}`}
          loop={false}
          muted={true}
          src={src}
        />
      )}
    </Box>
  );
};

export default BlurBackground;
