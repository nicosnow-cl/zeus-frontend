import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

import getRandomNumber from '../../../utils/getRandomNumber';

export interface IProfileMediaProps {
  height?: number;
  onClick?: () => void;
  src: string;
  type: 'img' | 'video';
}

const DEFAULT_MEDIA_HEIGHT = 300;

const ERROR_IMAGES = [
  'https://pornstarbyface.com/ImgBase/Galleries/Aaliyah%20Love/3/6.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Aaliyah%20Love/3/12.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Aaliyah%20Love/3/8.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Abbey%20Rain/4/3.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Abbey%20Rain/4/2.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Akiho%20Yoshizawa/1/7.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Akiho%20Yoshizawa/1/10.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Akiho%20Yoshizawa/1/3.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Akiho%20Yoshizawa/1/2.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Akiho%20Yoshizawa/1/6.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alaina%20Fox/3/1.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alaina%20Fox/3/2.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alaina%20Fox/3/5.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alaina%20Fox/3/9.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alex%20Grey/1/2.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alex%20Grey/1/1.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alex%20Grey/1/5.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alex%20Tanner/1/1.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alex%20Tanner/1/4.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alex%20Tanner/1/2.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alexis%20Brill/2/1.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alexis%20Brill/2/2.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Alexis%20Brill/2/4.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Ally%20Tate/5/3.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Ally%20Tate/5/6.jpg',
  'https://pornstarbyface.com/ImgBase/Galleries/Ally%20Tate/5/10.jpg',
];

const ProfileMedia = ({
  height = DEFAULT_MEDIA_HEIGHT,
  onClick,
  src,
  type,
}: IProfileMediaProps) => {
  const handleError = (evt: React.SyntheticEvent<HTMLImageElement, Event>) => {
    evt.currentTarget.src = ERROR_IMAGES[getRandomNumber(0, ERROR_IMAGES.length - 1)];
  };

  return (
    <CardActionArea sx={{ borderRadius: 3 }} onClick={onClick}>
      <CardMedia
        alt="green iguana"
        component={type}
        height={`${height}px`}
        image={src}
        sx={{ borderRadius: 3, objectFit: 'cover', objectPosition: 'top' }}
        onError={handleError}
      />
    </CardActionArea>
  );
};

export default ProfileMedia;
