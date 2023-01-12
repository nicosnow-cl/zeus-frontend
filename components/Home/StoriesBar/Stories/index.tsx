import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../../../redux/store';
import { uiActions } from '../../../../redux/reducers/ui';
import CustomCarrousel from '../../../UIElements/CustomCarrousel';
import IStory from '../../../../interfaces/states/interface.story';
import StoryAvatar from '../../../UIElements/StoryAvatar';

export interface IStoriesCarouselProps {
  fontColor?: string;
  responsive?: any;
  stories: IStory[];
}

const DEFAULT_RESPONSIVE = {
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

const StoriesCarousel = ({
  fontColor,
  responsive = DEFAULT_RESPONSIVE,
  stories,
}: IStoriesCarouselProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const avatars = stories.map((story, idx) => (
    <StoryAvatar
      key={idx}
      fontColor={fontColor}
      image={story.avatarSrc}
      name={story.name}
      onClick={() => {
        dispatch(uiActions.handleSetSelectedEscortStory(story.escortId));
        dispatch(uiActions.handleToggleLadiesStories(true));
      }}
      publishDate={story.publishDate}
    />
  ));

  return <CustomCarrousel elements={avatars} responsive={responsive} />;
};

export default StoriesCarousel;
