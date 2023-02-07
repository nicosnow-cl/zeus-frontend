import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';

import { AppContext } from '../../../pages/_app';
import { AppDispatch, RootState } from '../../../redux/store';
import { uiActions } from '../../../redux/reducers/ui';
import IMedia from '../../../interfaces/objects/interface.media';
import MediaContainer from './MediaContainer';

const MediaDialog = () => {
  const { router } = useContext(AppContext);
  const medias = useSelector((state: RootState): IMedia[] => state.home.medias);
  const actualMediaIdx = medias.findIndex((media) => media._id === router?.query.key);
  const dispatch = useDispatch<AppDispatch>();
  const showLadyImage = useSelector((state: RootState): boolean => state.ui.showLadyImage);

  const handleCloseMediaDialog = () => {
    router?.replace({ query: { ...router.query, key: undefined } }, undefined, { shallow: true });

    dispatch(uiActions.handleToggleLadyImage(false));
  };

  const handleNextMedia = () => {
    const nextMediaId =
      actualMediaIdx === medias.length - 1 ? medias[0]._id : medias[actualMediaIdx + 1]._id;

    router?.replace({ query: { ...router.query, key: nextMediaId } }, undefined, { shallow: true });
  };

  const handlePrevMedia = () => {
    const prevMediaId =
      actualMediaIdx === 0 ? medias[medias.length - 1]._id : medias[actualMediaIdx - 1]._id;

    router?.replace({ query: { ...router.query, key: prevMediaId } }, undefined, { shallow: true });
  };

  const media = medias[actualMediaIdx];
  if (!media) {
    handleCloseMediaDialog();

    return <></>;
  }

  console.count('MediaDialog render');

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
      onClose={handleCloseMediaDialog}
      sx={{
        '-webkit-backdrop-filter': 'saturate(180%) blur(20px)',
        backdropFilter: 'saturate(180%) blur(20px)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className={`h-100 w-100 d-flex jc-center ai-center`}>
        <IconButton
          color="primary"
          size="large"
          onClick={handlePrevMedia}
          sx={{
            borderRadius: 0,
            height: 60,
            left: 0,
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1300,
          }}
        >
          <ArrowBackIos fontSize="large" />
        </IconButton>

        <MediaContainer media={media} />

        <IconButton
          color="primary"
          size="large"
          onClick={handleNextMedia}
          sx={{
            borderRadius: 0,
            height: 60,
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1300,
          }}
        >
          <ArrowForwardIos fontSize="large" />
        </IconButton>
      </div>
    </Dialog>
  );
};

export default MediaDialog;
