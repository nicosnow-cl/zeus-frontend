import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccessTime from '@mui/icons-material/AccessTime';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Instagram from '@mui/icons-material/Instagram';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { AppContext } from '../../../pages/_app';
import { AppDispatch, RootState } from '../../../redux/store';
import { getStories } from '../../../redux/thunks/home';
import StoriesCarousel from './Stories';

const StoriesBar = () => {
  const { theme } = useContext(AppContext);
  const { value: stories, isLoading } = useSelector((state: RootState) => state.home.storiesState);
  const firstLoadDone = useSelector(
    (state: RootState): boolean => state.home.cardsState.firstLoadDone,
  );
  const dispatch = useDispatch<AppDispatch>();

  const backgroundColorBody = theme?.palette.grey[100];
  const backgroundColorHeader = theme?.palette.grey[300];
  const fontColor = theme?.palette.getContrastText(backgroundColorHeader);

  useEffect(() => {
    if (firstLoadDone) dispatch(getStories());
  }, [dispatch, firstLoadDone]);

  console.count('StoriesBar render');

  return (
    <Box
      sx={{
        backgroundColor: backgroundColorBody,
        borderRadius: 10,
        boxShadow: 1,
        minHeight: '160px',
      }}
    >
      <div
        className={`w-100 d-flex jc-between`}
        style={{ backgroundColor: backgroundColorHeader, borderRadius: '40px 40px 0 0' }}
      >
        <div className={`ml-2 pl-4 d-flex ai-center col-gap-2`} style={{ color: fontColor }}>
          <Typography style={{ fontSize: 11 }}>ÚLTIMAS HISTORIAS</Typography>
          <AccessTime style={{ fontSize: 14 }} />
        </div>

        <Button
          className={`pr-4`}
          endIcon={<Instagram />}
          sx={{ borderRadius: '10px 40px 0 10px' }}
        >
          HISTORIAS DE IG
        </Button>
      </div>
      {!firstLoadDone || isLoading ? (
        <LinearProgress />
      ) : (
        <StoriesCarousel fontColor={fontColor} stories={stories} />
      )}
    </Box>
  );
};

export default StoriesBar;
