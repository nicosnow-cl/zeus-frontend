import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';
import IImage from '../../../interfaces/objects/interface.image';
import IVideo from '../../../interfaces/objects/interface.video';
import ProfileMedia from '../../UIElements/ProfileMedia';
import styles from './index.module.scss';

export interface IMediaSetionProps {
  images: IImage[];
  videos: IVideo[];
}

const MediaSection = ({ images, videos }: IMediaSetionProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenLadyImage = () => {
    dispatch(uiActions.handleToggleLadyImage(true));
  };

  return (
    <div className={`p-5 ${styles.mediaContainer}`}>
      {videos.map((video, idx) => (
        <ProfileMedia key={idx} onClick={handleOpenLadyImage} src={video.mp4} type={'video'} />
      ))}

      {images.map((src, idx) => (
        <ProfileMedia key={idx} onClick={handleOpenLadyImage} src={src.hq} type={'img'} />
      ))}
    </div>
  );
};

export default MediaSection;
