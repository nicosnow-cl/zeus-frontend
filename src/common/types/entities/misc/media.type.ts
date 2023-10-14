import { Comment } from './comment.type';
import { Image } from './image.type';
import { Video } from './video.type';

export type Media = {
  _id: string;
  comments: Comment[];
  createdAt: string;
  description: string;
  escortId: string;
  img?: Image;
  likes: number;
  type: 'img' | 'video';
  video?: Video;
};
