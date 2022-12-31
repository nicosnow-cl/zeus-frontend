import { AccessTime, Instagram } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Typography, useTheme, Stack, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { AppDispatch, RootState } from '../../../redux/store';
import { getStories } from '../../../redux/thunks/home';
import { uiActions } from '../../../redux/reducers/ui';
import CustomCarrousel from '../../UIElements/CustomCarrousel';
import IStory from '../../../interfaces/states/interface.story';
import StoryAvatar from '../../UIElements/StoryAvatar';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const StoriesBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const stories = useSelector((state: RootState): IStory[] => state.home.stories);
  const theme = useTheme();

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  const mapStory = (story: IStory, idx: number): JSX.Element => {
    const name = story.name.split(' ')[0];

    return (
      <StoryAvatar
        key={idx}
        name={name}
        onShowStory={() => dispatch(uiActions.handleToggleLadiesStories(true))}
        src={story.avatarSrc.lq}
        publishDate={story.publishDate}
      />
    );
  };

  const storiesAvatar = stories.map((story, idx) => mapStory(story, idx));

  return (
    <Box
      className={`d-flex fd-column jc-center ai-center`}
      sx={{ backgroundColor: theme.palette.grey[100], borderRadius: 10, boxShadow: 1 }}
    >
      <div
        className={`w-100 d-flex jc-between`}
        style={{ backgroundColor: theme.palette.grey[300], borderRadius: '40px 40px 0 0' }}
      >
        <Stack className={`ml-2 pl-4 d-flex ai-center`} direction="row" spacing={2}>
          <Typography sx={{ fontSize: 14, color: theme.palette.grey[800] }}>
            ÚLTIMAS HISTORIAS
          </Typography>
          <AccessTime sx={{ color: theme.palette.grey[800] }} />
        </Stack>

        <Button
          className={`pr-4`}
          endIcon={<Instagram />}
          sx={{ fontSize: 14, borderRadius: '10px 40px 0 10px' }}
          size="small"
        >
          HISTORIAS DE IG
        </Button>
      </div>

      <Box className={`w-100`}>
        <CustomCarrousel elements={storiesAvatar} responsive={responsive} />
      </Box>
    </Box>
  );
};

export default StoriesBar;
