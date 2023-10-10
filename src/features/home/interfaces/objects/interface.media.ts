import { IComment } from './interface.comment';
import { IImage } from './interface.image';
import { IVideo } from './interface.video';

export interface IMedia {
  _id: string;
  comments: IComment[];
  createdAt: string;
  description: string;
  escortId: string;
  img?: IImage;
  likes: number;
  type: 'img' | 'video';
  video?: IVideo;
}
