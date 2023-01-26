import { CSSProperties } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IImage from '../../../../../interfaces/objects/interface.image';
import StoryAvatar from '../../../StoryAvatar';

export interface IMediaTitleProps {
  avatar: IImage;
  onClick?: () => void;
  name: string;
  style?: CSSProperties;
}

const MediaTitle = ({ avatar, onClick = () => {}, name, style = {} }: IMediaTitleProps) => {
  return (
    <div
      className={`w-100 p-3 d-flex fd-row jc-between ai-center`}
      style={{ height: 85, ...style }}
    >
      <div className={`d-flex ai-center col-gap-3`}>
        <StoryAvatar image={avatar} showBorder={false} size={80} />

        <Typography variant="h6" color="white">
          {name}
        </Typography>
      </div>

      {onClick && (
        <Button onClick={onClick} variant="contained">
          Cerrar
        </Button>
      )}
    </div>
  );
};

export default MediaTitle;
