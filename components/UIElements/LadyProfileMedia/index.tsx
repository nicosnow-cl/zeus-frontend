import { CardActionArea, CardMedia } from '@mui/material';

export interface ILadyProfileMediaProps {
  type: 'image' | 'video';
  src: string;
  height?: number;
  onClick?: () => void;
}

const LadyProfileMedia = ({ type, src, height, onClick }: ILadyProfileMediaProps) => {
  return (
    <CardActionArea sx={{ borderRadius: 5 }} onClick={onClick}>
      <CardMedia
        alt="green iguana"
        component="img"
        height={height || 600}
        image={src}
        sx={{ borderRadius: 5 }}
      />
    </CardActionArea>
  );
};

export default LadyProfileMedia;
