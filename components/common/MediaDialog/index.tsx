import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';

import { AppDispatch, RootState } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';
import IMedia from '../../../interfaces/objects/interface.media';
import MediaImage from './MediaImage';
import MediaVideo from './MediaVideo';

const MediaDialog = () => {
  const medias = useSelector((state: RootState): IMedia[] => state.home.medias);
  const selectedId = useSelector((state: RootState): number => state.ui.actualProfileMedia);
  const [mediaIdx, setMediaIdx] = useState<number>(
    medias.findIndex((media) => media.id === selectedId),
  );
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
            img: <MediaImage alt={`media-img`} image={actualMedia.img!} />,
            video: <MediaVideo video={actualMedia.video!} />,
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
