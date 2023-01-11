import { useContext } from 'react';
import Typography from '@mui/material/Typography';

import { AppContext } from '../../../pages/_app';
import getTimeSince from '../../../helpers/getTimeSince';
import IImage from '../../../interfaces/objects/interface.image';
import Image from 'next/image';
import styles from './index.module.scss';

export interface IStoryAvatarProps {
  fontColor?: string;
  image: IImage;
  name?: string;
  onClick?: () => void;
  publishDate?: string;
  showBorder?: boolean;
  size?: number;
}

const MIN_AVATAR_SIZE = 80;

const StoryAvatar = ({
  fontColor,
  image,
  name,
  onClick,
  publishDate,
  showBorder = true,
  size = MIN_AVATAR_SIZE,
}: IStoryAvatarProps) => {
  const { theme } = useContext(AppContext);

  const borderColor = theme?.palette.primary.main;
  const firstName = name?.split(' ')[0];
  const timeSince = publishDate ? getTimeSince(new Date(), new Date(publishDate)) : null;

  return (
    <div className={`d-flex fd-column jc-center ai-center`} style={{ color: fontColor }}>
      {firstName && <Typography variant="subtitle1">{firstName}</Typography>}

      <Image
        alt={`story-${name}`}
        className={`p-1 pointer ${styles.storyImage}`}
        height={size}
        onClick={onClick}
        quality={30}
        sizes={`(max-width: 768px) ${size}, (max-width: 1200px) ${size}, ${size}`}
        src={image.lq}
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
          border: showBorder ? `3px solid ${borderColor}` : 'none',
        }}
        width={size}
      />

      {timeSince && <Typography variant="subtitle2">{timeSince}</Typography>}
    </div>
  );
};

export default StoryAvatar;
