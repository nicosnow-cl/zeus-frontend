import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../../redux/store';
import { homeActions } from '../../../redux/reducers/home';
import { uiActions } from '../../../redux/reducers/ui';
import IImage from '../../../interfaces/objects/interface.image';
import IMedia from '../../../interfaces/objects/interface.media';
import IVideo from '../../../interfaces/objects/interface.video';
import ProfileMedia from '../../UIElements/ProfileMedia';
import styles from './index.module.scss';

export interface IMediaSetionProps {
  images: IImage[];
  videos: IVideo[];
}

const mapImgVideosToMedia = (videos: IVideo[], images: IImage[]) => {
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

const MediaSection = ({ images, videos }: IMediaSetionProps) => {
  const dispatch = useDispatch<AppDispatch>();

  if (images.length || videos.length) {
    dispatch(homeActions.setMedias(mapImgVideosToMedia(videos, images)));
  }

  const handleOpenLadyImage = (idx: number) => {
    dispatch(uiActions.handleApplyProfileMedia(idx));
    dispatch(uiActions.handleToggleLadyImage(true));
  };

  return (
    <div className={`p-5 ${styles.mediaContainer}`}>
      {videos.map((video, idx) => (
        <ProfileMedia
          key={idx}
          onClick={() => handleOpenLadyImage(idx)}
          src={video.mp4}
          type={'video'}
        />
      ))}

      {images.map((src, idx) => (
        <ProfileMedia
          key={idx}
          onClick={() => handleOpenLadyImage(videos.length + idx)}
          src={src.lq}
          type={'img'}
        />
      ))}
    </div>
  );
};

export default MediaSection;
