import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// import { fpfApi } from '../../../services/index';
import { AppDispatch, RootState } from '../../../redux/store';
import * as thunks from '../../../redux/thunks/home';
import CardsSection from '../CardsSection';
import IEscort from '../../../interfaces/states/interface.escort';
import LoadingHome from '../LoadingHome';
import NoCardsFound from '../NoCardsFound';

const ContentSection = () => {
  const cards = useSelector((state: RootState): IEscort[] => state.home.escorts);
  const isLoadingHome = useSelector((state: RootState): boolean => state.ui.isLoadingHome);
  const dispatch = useDispatch<AppDispatch>();

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
    dispatch(thunks.getEscorts());
  }, [dispatch]);

  const vip = cards.filter((card) => card.type === 'VIP');
  const premium = cards.filter((card) => card.type === 'PREMIUM');
  const gold = cards.filter((card) => card.type === 'GOLD');

  if (isLoadingHome) return <LoadingHome />;
  if (vip.length === 0 && premium.length === 0 && gold.length === 0) return <NoCardsFound />;

  return <CardsSection cards={[...vip, ...premium, ...gold]} />;
};

export default ContentSection;
