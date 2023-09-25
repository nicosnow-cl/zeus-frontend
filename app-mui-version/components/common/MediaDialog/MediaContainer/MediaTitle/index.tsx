import { CSSProperties, useContext } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IImage from '../../../../../interfaces/objects/interface.image';
import StoryAvatar from '../../../StoryAvatar';
import { AppContext } from '../../../../../pages/_app';

export interface IMediaTitleProps {
  avatar: IImage;
  onClick?: () => void;
  name: string;
  style?: CSSProperties;
}

const MediaTitle = ({ avatar, onClick = () => {}, name, style = {} }: IMediaTitleProps) => {
  const { device } = useContext(AppContext);

  const isMobile = device?.type === 'mobile';
  const containerHeight = isMobile ? 55 : 85;
  const avatarHeight = isMobile ? 50 : 80;

  return (
    <div
      className={`w-100 p-3 d-flex fd-row jc-between ai-center`}
      style={{ height: containerHeight, ...style }}
    >
      <div className={`d-flex ai-center col-gap-3`}>
        <StoryAvatar image={avatar} showBorder={false} size={avatarHeight} />

        <Typography variant={isMobile ? 'body1' : 'h6'} color="white">
          {name}
        </Typography>
      </div>

      {onClick && (
        <Button onClick={onClick} variant="contained" size="small">
          Cerrar
        </Button>
      )}
    </div>
  );
};

export default MediaTitle;
