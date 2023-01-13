import IVideo from '../../../interfaces/objects/interface.video';

export interface IBlurBackgroundProps {
  video: IVideo;
}

const VideoBlurBackground = ({ video }: IBlurBackgroundProps) => {
  return (
    <video
      autoPlay={false}
      className={`w-100 h-100 absolute`}
      id={`video-background-${Math.random()}`}
      loop={false}
      muted={true}
      src={`/videos/stories/${video.mp4}`}
      style={{ filter: 'blur(30px)', objectFit: 'cover', objectPosition: 'center' }}
    />
  );
};

export default VideoBlurBackground;
