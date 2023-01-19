import { useContext, CSSProperties } from 'react';
import Typography from '@mui/material/Typography';

import { AppContext } from '../../../pages/_app';
import getTimeSince from '../../../helpers/getTimeSince';
import IImage from '../../../interfaces/objects/interface.image';
import Image from 'next/image';
import styles from './index.module.scss';

export interface IStoryAvatarProps {
  color?: string;
  image: IImage;
  isNew?: boolean;
  name?: string;
  onClick?: () => void;
  publishDate?: string;
  showBorder?: boolean;
  size?: number;
  imageStyle?: CSSProperties;
  zIndex?: number;
}

const StoryAvatar = ({
  color,
  image,
  isNew = false,
  name,
  onClick,
  publishDate,
  showBorder = false,
  size = 80,
  imageStyle = {},
  zIndex = 4,
}: IStoryAvatarProps) => {
  const { theme } = useContext(AppContext);

  const border = !showBorder
    ? 'none'
    : isNew
    ? `3px solid ${theme?.palette.primary.main}`
    : `3px solid ${theme?.palette.grey[300]}`;
  const firstName = name?.split(' ')[0];
  const timeSince = publishDate ? getTimeSince(new Date(), new Date(publishDate)) : null;

  return (
    <div className={`d-flex fd-column jc-center ai-center`} style={{ color, zIndex }}>
      {firstName && <Typography variant="subtitle1">{firstName}</Typography>}

      <Image
        alt={`story-${name}`}
        blurDataURL={image.placeholder}
        className={`p-1 ${onClick ? styles.clickeable : ''}`}
        height={size}
        onClick={onClick}
        placeholder="blur"
        quality={30}
        sizes={`(max-width: 768px) ${size}, (max-width: 1200px) ${size}, ${size}`}
        src={image.lq}
        style={{
          border,
          borderRadius: '50%',
          objectFit: 'cover',
          transition: 'transform 0.15s ease-in-out',
          ...imageStyle,
        }}
        width={size}
      />

      {timeSince && <Typography variant="subtitle2">{timeSince}</Typography>}
    </div>
  );
};

export default StoryAvatar;
