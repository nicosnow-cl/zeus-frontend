import IImage from '../objects/interface.image';
import IVideo from '../objects/interface.video';

interface IStory {
  _id: string;
  avatar: IImage;
  escortId: number;
  highesUploadedDate: string;
  name: string;
  videos: IVideo[];
}

export default IStory;
