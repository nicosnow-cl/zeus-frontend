import { createAsyncThunk } from '@reduxjs/toolkit';

import { uiActions } from '../../reducers/ui';
import HomeActions from '../../actions/home';
import ICard from '../../../interfaces/states/interface.card';
import IPartialFilters from '../../../interfaces/objects/interface.partial-filters';
import IStory from '../../../interfaces/states/interface.story';
import obtainCardsPost from '../../../services/home/obtainEscortsPost';
import obtainStoriesGet from '../../../services/home/obtainStoriesGet';
import { homeActions } from '../../reducers/home';

export const getCards = createAsyncThunk(
  HomeActions.GET_CARDS,
  async (filters: IPartialFilters | undefined = undefined, thunkApi): Promise<ICard[]> => {
    const { dispatch } = thunkApi;

    dispatch(homeActions.handleLoadingCards(true));
    const result = await obtainCardsPost(filters);
    dispatch(homeActions.handleLoadingCards(false));

    return result;
  },
);

export const getStories = createAsyncThunk(
  HomeActions.GET_STORIES,
  async (_, thunkApi): Promise<IStory[]> => {
    const { dispatch } = thunkApi;

    dispatch(uiActions.handleLoadingStories(true));
    const result = await obtainStoriesGet();
    dispatch(uiActions.handleLoadingStories(false));

    return result;
  },
);
