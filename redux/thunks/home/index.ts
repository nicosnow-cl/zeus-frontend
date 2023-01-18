import { createAsyncThunk } from '@reduxjs/toolkit';

import { homeActions } from '../../reducers/home';
import HomeActions from '../../actions/home';
import ICard from '../../../interfaces/states/interface.card';
import IPartialFilters from '../../../interfaces/objects/interface.partial-filters';
import IStory from '../../../interfaces/states/interface.story';
import obtainCardsPost from '../../../services/home/obtainCardsPost';
import obtainStoriesByIdGet from '../../../services/home/obtainStoriesByIdGet';
import obtainStoriesGet from '../../../services/home/obtainStoriesGet';

export const getCards = createAsyncThunk(
  HomeActions.GET_CARDS,
  async (filters: IPartialFilters | undefined = undefined, thunkApi): Promise<ICard[]> => {
    const { dispatch } = thunkApi;

    dispatch(homeActions.handleLoadingCards(true));
    const cards = await obtainCardsPost(filters);
    dispatch(homeActions.handleLoadingCards(false));

    return cards;
  },
);

export const getStories = createAsyncThunk(
  HomeActions.GET_STORIES,
  async (_, thunkApi): Promise<IStory[]> => {
    const { dispatch } = thunkApi;

    dispatch(homeActions.handleLoadingStories(true));
    const result = await obtainStoriesGet();
    dispatch(homeActions.handleLoadingStories(false));

    return result;
  },
);

export const getStoriesById = createAsyncThunk(
  HomeActions.GET_STORIES_BY_ID,
  async (id: string): Promise<IStory | null> => {
    return await obtainStoriesByIdGet(id);
  },
);
