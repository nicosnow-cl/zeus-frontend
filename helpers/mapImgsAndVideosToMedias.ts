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
    id: idx,
    type: 'video',
    video,
  }));

  const imagesMedia: IMedia[] = images.map((img, idx) => ({
    id: idx + videosMedia.length,
    type: 'img',
    img,
  }));

  if (order === 'shuffle') return shuffle([...videosMedia, ...imagesMedia]);
  if (order === 'videos_first') return [...videosMedia, ...imagesMedia];

  return [...imagesMedia, ...videosMedia];
};

export default mapImgsAndVideosToMedias;
