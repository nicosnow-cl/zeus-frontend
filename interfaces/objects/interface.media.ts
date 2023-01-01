import IImage from './interface.image';
import IVideo from './interface.video';

interface IMedia {
  id: number;
  img?: IImage;
  type: 'img' | 'video';
  video?: IVideo;
}

export default IMedia;
