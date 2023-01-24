import { CSSProperties, RefObject } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import getTimeSince from '../../../../helpers/getTimeSince';
import IImage from '../../../../interfaces/objects/interface.image';
import StoryAvatar from '../../StoryAvatar';
import StoryProgressBars from '../StoryProgressBars';

export interface IStoryTitleProps {
  activeBar?: number;
  avatar: IImage;
  handleAvatarClick?: () => void;
  handleClose?: () => void;
  handleNext?: () => void;
  name: string;
  publishDate?: string;
  totalBars?: number;
  videoRef?: RefObject<HTMLVideoElement>;
  style?: CSSProperties;
}

const StoryTitle = ({
  activeBar = 0,
  avatar,
  handleAvatarClick = () => {},
  handleClose = () => {},
  handleNext = () => {},
  name,
  publishDate,
  totalBars = 1,
  videoRef,
  style = {},
}: IStoryTitleProps) => {
  return (
    <div
      className={`w-100 d-flex fd-column jc-between absolute downbar`}
      style={{ background: 'rgba(0,0,0,0.4)', height: 85, ...style }}
    >
      <div className={`px-3 d-flex jc-between ai-center`}>
        <div className={`d-flex ai-center col-gap-3`}>
          <StoryAvatar image={avatar} showBorder={false} size={80} onClick={handleAvatarClick} />

          <Typography variant="h6" color="white">
            {name}

            {publishDate && (
              <Typography variant="subtitle2" color="white">
                {getTimeSince(new Date(), new Date(publishDate))}
              </Typography>
            )}
          </Typography>
        </div>

        {handleClose && (
          <Button onClick={handleClose} variant="contained">
            Cerrar
          </Button>
        )}
      </div>

      {videoRef && (
        <StoryProgressBars
          videoRef={videoRef}
          activeBar={activeBar}
          totalBars={totalBars}
          handleNext={handleNext}
        />
      )}
    </div>
  );
};

export default StoryTitle;
