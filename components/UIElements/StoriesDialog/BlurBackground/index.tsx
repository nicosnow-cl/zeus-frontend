import IVideo from '../../../../interfaces/objects/interface.video';
import styles from './index.module.scss';

export interface IBlurBackgroundProps {
  video: IVideo;
}

const BlurBackground = ({ video }: IBlurBackgroundProps) => {
  return (
    <div className={`h-100 w-100 ${styles.videoContainer}`}>
      <div className={`h-100 w-100 ${styles.blur}`} />
      <video
        autoPlay={false}
        className={`w-100 h-100 ${styles.videoBackground}`}
        id={`video-background-${Math.random()}`}
        loop={false}
        muted={true}
        src={`/videos/stories/${video.mp4}`}
      />
    </div>
  );
};

export default BlurBackground;
