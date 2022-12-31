import { Box } from '@mui/system';
import { useState } from 'react';
import { useTheme, Typography, Menu, MenuItem, CardActionArea } from '@mui/material';
import Image from 'next/image';

import shortText from '../../../utils/shortText';
import styles from './index.module.scss';
import getTimeSince from '../../../utils/getTimeSince';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SimpleSpinner from '../SimpleSpinner';

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
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const theme = useTheme();

  const timeSince = publishDate ? getTimeSince(new Date(), new Date(publishDate)) : null;

  const handleOpenMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null,
    );
  };

  const handleCloseMenu = () => {
    setContextMenu(null);
  };

  const handleMenuAction = (action: 'story' | 'profile') => {
    handleCloseMenu();

    if (action === 'story') {
      onShowStory?.();
      return;
    }

    onShowProfile?.();
  };

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
          src={src}
          width={'100%'}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
          // placeholderSrc={
          //   'https://soc.ucsb.edu/sites/default/files/styles/people_node/public/people/photo/PLACEHOLDER_23_2.jpg?itok=4QZOYt-c'
          // }
          placeholder={<SimpleSpinner />}
        />
      </div>

      {timeSince && <Typography sx={{ fontSize: 10 }}>{timeSince}</Typography>}

      {/* <Menu
        id="basic-menu"
        anchorReference="anchorPosition"
        open={contextMenu !== null}
        onClose={handleCloseMenu}
        anchorPosition={
          contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
        }
      >
        <MenuItem onClick={() => handleMenuAction('story')}>Historia</MenuItem>
        <MenuItem onClick={() => handleMenuAction('profile')}>Perfil</MenuItem>
      </Menu> */}
    </div>
  );
};

export default StoryAvatar;
