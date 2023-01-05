import IImage from '../interfaces/objects/interface.image';
import IMedia from '../interfaces/objects/interface.media';
import IVideo from '../interfaces/objects/interface.video';

const mapImgsAndVideosToMedias = (videos: IVideo[], images: IImage[]) => {
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

  return [...videosMedia, ...imagesMedia];
};

export default mapImgsAndVideosToMedias;
