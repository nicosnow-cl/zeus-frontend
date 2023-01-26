import { ObjectId } from 'mongodb';

import IImage from '../interfaces/objects/interface.image';
import IMedia from '../interfaces/objects/interface.media';
import IVideo from '../interfaces/objects/interface.video';
import shuffle from 'lodash/shuffle';

const mapImgsAndVideosToMedias = (
  images: IImage[],
  videos: IVideo[],
  order: 'videos_first' | 'images_first' | 'shuffle' = 'shuffle',
) => {
  const videosMedia: IMedia[] = videos.map((video, idx) => ({
    _id: new ObjectId(idx).toString(),
    comments: [],
    createdAt: new Date().toString(),
    description: '',
    escortId: '',
    likes: 0,
    type: 'video',
    video,
  }));

  const imagesMedia: IMedia[] = images.map((img, idx) => ({
    _id: new ObjectId(idx + videosMedia.length).toString(),
    comments: [],
    createdAt: new Date().toString(),
    description: '',
    escortId: '',
    img,
    likes: 0,
    type: 'img',
  }));

  if (order === 'shuffle') return shuffle([...videosMedia, ...imagesMedia]);
  if (order === 'videos_first') return [...videosMedia, ...imagesMedia];

  return [...imagesMedia, ...videosMedia];
};

export default mapImgsAndVideosToMedias;
