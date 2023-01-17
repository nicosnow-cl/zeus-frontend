import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { AppDispatch, RootState } from '../../../redux/store';
import { initialState } from '../../../redux/reducers/ui';
import * as thunks from '../../../redux/thunks/home';
import CardsSection from '../CardsSection';
import LoadingHome from '../LoadingHome';
import NoCardsFound from '../NoCardsFound';

let FIRST_RENDER_DONE = false;

const ContentSection = () => {
  const { value: cards, isLoading } = useSelector((state: RootState) => state.home.cardsState);
  const dispatch = useDispatch<AppDispatch>();

  console.count('ContentSection render');

  useEffect((): void => {
    if (FIRST_RENDER_DONE) return;

    dispatch(thunks.getCards(initialState.filters));
    FIRST_RENDER_DONE = true;
  }, [dispatch]);

  if (isLoading) return <LoadingHome />;
  if (!cards.length) return <NoCardsFound />;

  return <CardsSection cards={cards} />;
};

export default ContentSection;
