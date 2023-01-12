import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// import { fpfApi } from '../../../services/index';
import { AppDispatch, RootState } from '../../../redux/store';
import * as thunks from '../../../redux/thunks/home';
import CardsSection from '../CardsSection';
import LoadingHome from '../LoadingHome';
import NoCardsFound from '../NoCardsFound';

let FIRST_RENDER_DONE = false;

const ContentSection = () => {
  const { value: cards, isLoading } = useSelector((state: RootState) => state.home.cardsState);
  const dispatch = useDispatch<AppDispatch>();

  console.count('ContentSection render');

  // useEffect((): void => {
  //   fpfApi
  //     .get('/actors', {
  //       params: {
  //         fields:
  //           'photos,hair_color,eyes_color,height,weight,cup_size,bust_size,waist_size,hip_size,has_fake_boobs,tattoos,piercings,career_start,career_end,social_links,additional_info',
  //         limit: 100,
  //         page: 1,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }, []);

  useEffect((): void => {
    if (FIRST_RENDER_DONE) return;

    dispatch(thunks.getCards());
    FIRST_RENDER_DONE = true;
  }, [dispatch]);

  if (isLoading) return <LoadingHome />;
  if (!cards.length) return <NoCardsFound />;

  const vip = cards.filter((card) => card.type === 'VIP');
  const premium = cards.filter((card) => card.type === 'PREMIUM');
  const gold = cards.filter((card) => card.type === 'GOLD');

  return <CardsSection cards={[...vip, ...premium, ...gold]} />;
};

export default ContentSection;
