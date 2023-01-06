import { AccessTime, Instagram } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';

import { AppContext } from '../../../pages/_app';
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
  const { theme } = useContext(AppContext);
  const dispatch = useDispatch<AppDispatch>();
  const stories = useSelector((state: RootState): IStory[] => state.home.stories);
  const backgroundColorBody = theme?.palette.grey[100];
  const backgroundColorHeader = theme?.palette.grey[300];
  const fontColor = theme?.palette.getContrastText(backgroundColorHeader);

  useEffect(() => {
    !stories.length && dispatch(getStories());
  }, [dispatch]);

  const mapStory = (story: IStory, idx: number): JSX.Element => {
    const name = story.name.split(' ')[0];

    return (
      <StoryAvatar
        key={idx}
        fontColor={fontColor}
        name={name}
        onShowStory={() => dispatch(uiActions.handleToggleLadiesStories(true))}
        publishDate={story.publishDate}
        src={story.avatarSrc.lq}
      />
    );
  };

  const storiesAvatar = stories.map((story, idx) => mapStory(story, idx));

  return (
    <Box
      className={`d-flex fd-column jc-center ai-center`}
      sx={{ backgroundColor: backgroundColorBody, borderRadius: 10, boxShadow: 1 }}
    >
      <div
        className={`w-100 d-flex jc-between`}
        style={{ backgroundColor: backgroundColorHeader, borderRadius: '40px 40px 0 0' }}
      >
        <div className={`ml-2 pl-4 d-flex ai-center col-gap-2`} style={{ color: fontColor }}>
          <Typography sx={{ fontSize: 14 }}>ÚLTIMAS HISTORIAS</Typography>
          <AccessTime />
        </div>

        <Button
          className={`pr-4`}
          endIcon={<Instagram />}
          sx={{ fontSize: 14, borderRadius: '10px 40px 0 10px' }}
          size="small"
        >
          HISTORIAS DE IG
        </Button>
      </div>

      <div className={`w-100`}>
        <CustomCarrousel elements={storiesAvatar} responsive={responsive} />
      </div>
    </Box>
  );
};

export default StoriesBar;
