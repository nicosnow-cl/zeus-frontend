import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Button, CardMedia, Dialog, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { AppDispatch, RootState } from '../../../redux/store';
import { IUiState, uiActions } from '../../../redux/reducers/ui';

import img1 from '../../../assets/imgs/profile-pics/demo-1.jpg';
import img2 from '../../../assets/imgs/profile-pics/demo-2.jpg';
import img3 from '../../../assets/imgs/profile-pics/demo-3.jpg';
import img4 from '../../../assets/imgs/profile-pics/demo-4.jpg';
import img5 from '../../../assets/imgs/profile-pics/demo-5.jpg';
import img6 from '../../../assets/imgs/profile-pics/demo-6.jpg';
import img7 from '../../../assets/imgs/profile-pics/demo-7.jpg';
import img8 from '../../../assets/imgs/profile-pics/demo-8.jpg';
import img9 from '../../../assets/imgs/profile-pics/demo-9.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const ViewLadyImage = () => {
  const [imgIdx, setImgIdx] = useState<number>(0);
  const { showLadyImage } = useSelector((state: RootState): IUiState => state.ui);
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseLadyImage = () => {
    dispatch(uiActions.handleToggleLadyImage(false));
  };

  const handleNextImage = () => {
    if (imgIdx === images.length - 1) {
      setImgIdx(0);
      return;
    }

    setImgIdx(imgIdx + 1);
  };

  const handlePrevImage = () => {
    if (imgIdx === 0) {
      setImgIdx(images.length - 1);
      return;
    }

    setImgIdx(imgIdx - 1);
  };

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
      sx={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <Box className={`h-100 w-100 d-flex jc-between ai-center`}>
        <Button
          sx={{ position: 'absolute', top: 0, right: 0, marginRight: 5, marginTop: 1 }}
          variant="contained"
          onClick={handleCloseLadyImage}
        >
          Cerrar
        </Button>

        <IconButton color="primary" size="large" onClick={handlePrevImage}>
          <ArrowBackIos fontSize="large" />
        </IconButton>

        <Box>
          <CardMedia
            className={`h-100`}
            component="img"
            alt="green iguana"
            image={images[imgIdx].src}
          />
        </Box>

        <IconButton color="primary" size="large" onClick={handleNextImage}>
          <ArrowForwardIos fontSize="large" />
        </IconButton>
      </Box>
    </Dialog>
  );
};

export default ViewLadyImage;
