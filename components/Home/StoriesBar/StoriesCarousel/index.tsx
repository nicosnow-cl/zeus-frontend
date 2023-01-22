import { useDispatch } from 'react-redux';
import useLocalStorage from 'beautiful-react-hooks/useLocalStorage';

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
  const [storiesSeen, setStoriesSeen] = useLocalStorage<{ [id: string]: string }>(
    'stories-seen',
    {},
  );

  const avatars = stories.map((story, idx) => {
    const escortId = story.escortId.toString();
    const isNew = storiesSeen[escortId] !== story.highesUploadedDate;

    return (
      <StoryAvatar
        key={idx}
        color={fontColor}
        image={story.avatar}
        name={story.name}
        onClick={() => {
          dispatch(uiActions.handleSetSelectedEscortStory(escortId));
          dispatch(uiActions.handleToggleLadiesStories(true));
          setStoriesSeen((prev: any) => ({ ...prev, [escortId]: story.highesUploadedDate }));
        }}
        publishDate={story.highesUploadedDate}
        showBorder={true}
        isNew={isNew}
      />
    );
  });

  return <CustomCarrousel elements={avatars} responsive={responsive} />;
};

export default StoriesCarousel;
