import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useContext } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import Typography from '@mui/material/Typography';

import { AppContext } from '../../../pages/_app';
import getTimeSince from '../../../helpers/getTimeSince';
import IconSpinner from '../IconSpinner';
import styles from './index.module.scss';

export interface IStoryAvatarProps {
  fontColor?: string;
  name?: string;
  onShowStory?: () => void;
  publishDate?: string;
  showBorder?: boolean;
  size?: number;
  src: string;
}

const MIN_AVATAR_SIZE = 80;

const StoryAvatar = ({
  fontColor,
  name,
  onShowStory,
  publishDate,
  showBorder = true,
  size = MIN_AVATAR_SIZE,
  src,
}: IStoryAvatarProps) => {
  const { theme } = useContext(AppContext);
  const timeSince = publishDate ? getTimeSince(new Date(), new Date(publishDate)) : null;
  const borderColor = theme?.palette.primary.main;

  return (
    <div className={`d-flex fd-column jc-center ai-center`} style={{ color: fontColor }}>
      {name && <Typography variant="subtitle1">{name}</Typography>}

      <div
        className={`p-1 pointer ${styles.storyImage}`}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: showBorder ? `3px solid ${borderColor}` : 'none',
        }}
        onClick={onShowStory}
      >
        <LazyLoadImage
          alt="story-image"
          height={'100%'}
          placeholder={<IconSpinner icon={<ImageIcon />} />}
          src={src}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
          width={'100%'}
        />
      </div>

      {timeSince && <Typography variant="subtitle2">{timeSince}</Typography>}
    </div>
  );
};

export default StoryAvatar;
