import IImage from '../objects/interface.image';
import IVideo from '../objects/interface.video';

interface IStory {
  _id: string;
  avatar: IImage;
  escortId: string;
  highesUploadedDate: string;
  name: string;
  videos: IVideo[];
  isNew?: boolean;
}

export default IStory;
