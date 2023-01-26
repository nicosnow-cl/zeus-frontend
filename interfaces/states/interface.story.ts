import IImage from '../objects/interface.image';
import IVideo from '../objects/interface.video';

interface IStory {
  _id: string;
  avatar: IImage;
  escortId: string;
  highesUploadedDate: string;
  isNew?: boolean;
  name: string;
  username?: string;
  videos: IVideo[];
}

export default IStory;
