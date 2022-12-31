import IImage from '../objects/interface.image';
import IVideo from '../objects/interface.video';

interface IStory {
  avatarSrc: IImage;
  escortId: number;
  name: string;
  publishDate: string;
  videos: IVideo[];
}

export default IStory;
