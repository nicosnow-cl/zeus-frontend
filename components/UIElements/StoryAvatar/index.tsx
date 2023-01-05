import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImageIcon from '@mui/icons-material/Image';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';

import getTimeSince from '../../../helpers/getTimeSince';
import IconSpinner from '../IconSpinner';
import styles from './index.module.scss';

export interface IStoryAvatarProps {
  name?: string;
  onShowProfile?: () => void;
  onShowStory?: () => void;
  publishDate?: string;
  showBorder?: boolean;
  size?: number;
  src: string;
}

const MIN_AVATAR_SIZE = 100;

const StoryAvatar = ({
  name,
  onShowProfile,
  onShowStory,
  publishDate,
  showBorder = true,
  size = MIN_AVATAR_SIZE,
  src,
}: IStoryAvatarProps) => {
  const theme = useTheme();
  const timeSince = publishDate ? getTimeSince(new Date(), new Date(publishDate)) : null;

  return (
    <div className={`d-flex fd-column jc-center ai-center`}>
      {name && (
        <Typography sx={{ color: theme.palette.grey[800], fontSize: 13, fontWeight: 600 }}>
          {name}
        </Typography>
      )}

      <div
        className={`mt-1 mb-1 p-1 pointer ${styles.storyImage}`}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: showBorder ? `3px solid ${theme.palette.primary.main}` : 'none',
        }}
        onClick={onShowStory}
      >
        <LazyLoadImage
          alt="123"
          height={'100%'}
          placeholder={<IconSpinner icon={<ImageIcon />} />}
          src={src}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
          width={'100%'}
        />
      </div>

      {timeSince && <Typography sx={{ fontSize: 10 }}>{timeSince}</Typography>}
    </div>
  );
};

export default StoryAvatar;
