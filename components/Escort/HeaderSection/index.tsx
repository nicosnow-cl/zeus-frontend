import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import useLocalStorage from 'beautiful-react-hooks/useLocalStorage';

import { AppContext } from '../../../pages/_app';
import { AppDispatch, RootState } from '../../../redux/store';
import { getStoriesById } from '../../../redux/thunks/home';
import { uiActions } from '../../../redux/reducers/ui';
import EscortType from '../../../types/type.escort';
import IImage from '../../../interfaces/objects/interface.image';
import StoryAvatar from '../../UIElements/StoryAvatar/index';

export interface IHeaderSectionProps {
  age: number;
  avatar: IImage;
  banner: IImage;
  id: string;
  name: string;
  type: EscortType;
}

const HeaderSection = ({ age, avatar, banner, id, name, type }: IHeaderSectionProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { value } = useSelector((state: RootState) => state.home.storiesState);
  const { theme } = useContext(AppContext);
  const [storiesSeen, setStoriesSeen] = useLocalStorage<{ [id: string]: string }>(
    'stories-seen',
    {},
  );

  const backgroundColor = theme?.palette.grey[200];
  const color = theme?.palette.getContrastText(backgroundColor);
  const hasStories = value && value.length > 0;
  const showBorder = hasStories && storiesSeen[id] !== value[0].highesUploadedDate;

  const handleAvatarClick = () => {
    dispatch(uiActions.handleSetSelectedEscortStory(id));
    dispatch(uiActions.handleToggleLadiesStories(true));
    setStoriesSeen((prev: any) => ({ ...prev, [id]: value[0].highesUploadedDate }));
  };

  useEffect(() => {
    dispatch(getStoriesById(id));
  }, [id, dispatch]);

  return (
    <>
      <div className={`w-100 d-flex fd-column jc-between relative`} style={{ height: 300 }}>
        <Image
          alt={`banner-img-${name}`}
          blurDataURL={banner.placeholder}
          fill
          placeholder="blur"
          quality={50}
          src={banner.hq}
          style={{ objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
        />
      </div>

      <Grid container style={{ backgroundColor }}>
        <Grid
          className={`d-flex jc-center relative`}
          item
          xs={12}
          sm={5}
          md={4}
          sx={{ height: 110 }}
        >
          <div
            style={{
              position: 'absolute',
              width: 200,
              height: 200,
              bottom: 0,
              margin: '0 auto',
            }}
          >
            <StoryAvatar
              onClick={hasStories ? handleAvatarClick : undefined}
              size={200}
              image={avatar}
              showBorder={showBorder}
            />
          </div>
        </Grid>

        <Grid className={`p-2 d-flex jc-evenly ai-center col-gap-3`} item xs={12} sm={7} md={8}>
          <Typography variant="h2" style={{ color }}>
            {name}
            <Typography variant="h6">{age} años</Typography>
          </Typography>

          <Divider orientation="vertical" sx={{ maxHeight: '65%' }} />

          <Typography className={`ml-2`} variant="h6" style={{ color }}>
            Acompañante {type}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderSection;
