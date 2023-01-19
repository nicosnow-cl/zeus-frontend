import { useContext, useRef } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { useDispatch } from 'react-redux';

import { AppContext } from '../../../../pages/_app';
import { AppDispatch } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import IImage from '../../../../interfaces/objects/interface.image';
import IVideo from '../../../../interfaces/objects/interface.video';
import StoryTitle from '../StoryTitle';

export interface IStoryContainerProps {
  activeBar?: number;
  avatar: IImage;
  escortId: string;
  handleClose?: () => void;
  handleNext?: () => void;
  name: string;
  publishDate?: string;
  totalBars?: number;
  video: IVideo;
}

const StoryContainer = ({
  activeBar = 0,
  avatar,
  escortId,
  handleClose = () => {},
  handleNext = () => {},
  name,
  publishDate,
  totalBars = 1,
  video,
}: IStoryContainerProps) => {
  const { router } = useContext(AppContext);
  const videoRef = useRef<HTMLVideoElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const videoUrl = `/videos/stories/${video.mp4}`;

  const handleViewProfile = () => {
    if (escortId) {
      dispatch(uiActions.handleToggleLadiesStories(false));
      router?.push(`/escort/${escortId}`);
    }
  };

  return (
    <div
      className={`h-100 d-flex fd-column jc-between relative`}
      style={{ minWidth: 250, maxWidth: 685 }}
    >
      <StoryTitle
        activeBar={activeBar}
        avatar={avatar}
        handleAvatarClick={handleViewProfile}
        handleClose={handleClose}
        handleNext={handleNext}
        name={name}
        publishDate={publishDate}
        totalBars={totalBars}
        videoRef={videoRef}
        style={{ zIndex: 3 }}
      />

      <CardMedia
        ref={videoRef}
        autoPlay={true}
        component="video"
        height="100%"
        id={`story-video-${name}`}
        loop={false}
        muted={false}
        src={videoUrl}
        style={{ zIndex: 2 }}
      />
    </div>
  );
};

export default StoryContainer;
