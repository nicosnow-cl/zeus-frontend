import { Player } from 'video-react';

import IVideo from '../../../../interfaces/objects/interface.video';

export interface IMediaVideoProps {
  autoPlay?: boolean;
  video: IVideo;
}

const MediaVideo = ({ autoPlay = true, video }: IMediaVideoProps) => {
  return <Player autoPlay={autoPlay} playsInline={autoPlay} src={video.mp4} />;
};

export default MediaVideo;
