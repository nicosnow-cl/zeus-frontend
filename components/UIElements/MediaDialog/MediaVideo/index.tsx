import { Player } from 'video-react';

import IVideo from '../../../../interfaces/objects/interface.video';
import styles from './index.module.scss';

export interface IMediaVideoProps {
  autoPlay?: boolean;
  video: IVideo;
}

const MediaVideo = ({ autoPlay = true, video }: IMediaVideoProps) => {
  return (
    <div className={`${styles.videoContainer}`}>
      <Player autoPlay={autoPlay} playsInline={autoPlay} src={video.mp4} />
    </div>
  );
};

export default MediaVideo;
