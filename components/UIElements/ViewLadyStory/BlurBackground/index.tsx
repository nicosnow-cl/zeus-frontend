import styles from './index.module.scss';

export interface IBlurBackgroundProps {
  src?: string;
}

const BlurBackground = ({ src }: IBlurBackgroundProps) => {
  return (
    <div className={`h-100 w-100 ${styles.videoContainer}`}>
      <div className={`h-100 w-100 ${styles.blur}`} />
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
    </div>
  );
};

export default BlurBackground;
