import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';

import { AppDispatch, RootState } from '../../../redux/store';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { uiActions } from '../../../redux/reducers/ui';
import getRandomNumber from '../../../utils/getRandomNumber';
import IMedia from '../../../interfaces/objects/interface.media';
import styles from './index.module.scss';

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

const handleError = (evt: React.SyntheticEvent<HTMLImageElement, Event>) => {
  evt.currentTarget.src = ERROR_IMAGES[getRandomNumber(0, ERROR_IMAGES.length - 1)];
};

const MediaDialog = () => {
  const idx = useSelector((state: RootState): number => state.ui.actualProfileMedia);
  const [mediaIdx, setMediaIdx] = useState<number>(idx);
  const medias = useSelector((state: RootState): IMedia[] => state.home.medias);
  const showLadyImage = useSelector((state: RootState): boolean => state.ui.showLadyImage);
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseLadyImage = () => {
    dispatch(uiActions.handleToggleLadyImage(false));
  };

  const handleNextMedia = () => {
    if (mediaIdx === medias.length - 1) {
      setMediaIdx(0);
      return;
    }

    setMediaIdx(mediaIdx + 1);
  };

  const handlePrevMedia = () => {
    if (mediaIdx === 0) {
      setMediaIdx(medias.length - 1);
      return;
    }

    setMediaIdx(mediaIdx - 1);
  };

  const actualMedia: IMedia | null = medias[mediaIdx] || null;

  return (
    <Dialog
      open={showLadyImage}
      PaperProps={{
        sx: {
          background: 'transparent !important',
          height: '100% !important',
          margin: 0,
          maxHeight: '100% !important',
          maxWidth: '100% !important',
          padding: 0,
          width: '100%',
        },
      }}
      onClose={handleCloseLadyImage}
      sx={{
        '-webkit-backdrop-filter': 'saturate(180%) blur(20px)',
        backdropFilter: 'saturate(180%) blur(20px)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className={`h-100 w-100 d-flex jc-between ai-center`}>
        <Button
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            marginRight: 5,
            marginTop: 1,
            zIndex: 1300,
          }}
          variant="contained"
          onClick={handleCloseLadyImage}
        >
          Cerrar
        </Button>

        <IconButton
          color="primary"
          size="large"
          onClick={handlePrevMedia}
          sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, borderRadius: 0, zIndex: 1300 }}
        >
          <ArrowBackIos fontSize="large" />
        </IconButton>

        {actualMedia &&
          {
            img: (
              <div className={`w-100 h-100`} style={{ display: 'grid' }}>
                <LazyLoadImage
                  onError={handleError}
                  src={actualMedia.img?.hq}
                  style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }}
                />
              </div>
            ),
            video: (
              <div className={`${styles.videoContainer}`}>
                <Player autoPlay={true} src={actualMedia.video?.mp4} />
              </div>
            ),
          }[actualMedia.type]}

        <IconButton
          color="primary"
          size="large"
          onClick={handleNextMedia}
          sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, borderRadius: 0, zIndex: 1300 }}
        >
          <ArrowForwardIos fontSize="large" />
        </IconButton>
      </div>
    </Dialog>
  );
};

export default MediaDialog;
