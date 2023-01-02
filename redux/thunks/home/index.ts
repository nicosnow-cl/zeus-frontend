import { createAsyncThunk } from '@reduxjs/toolkit';

import { uiActions } from '../../reducers/ui';
import HomeActions from '../../actions/home';
import IEscort from '../../../interfaces/states/interface.escort';
import IPartialFilters from '../../../interfaces/objects/interface.partial-filters';
import IStory from '../../../interfaces/states/interface.story';
import obtainEscortsPost from '../../../services/home/obtainEscortsPost';
import obtainStoriesGet from '../../../services/home/obtainStoriesGet';

export const getEscorts = createAsyncThunk(
  HomeActions.GET_ESCORTS,
  async (filters: IPartialFilters | undefined = undefined, thunkApi): Promise<IEscort[]> => {
    const { dispatch } = thunkApi;

    dispatch(uiActions.handleLoadingHome(true));
    const result = await obtainEscortsPost(filters);
    dispatch(uiActions.handleLoadingHome(false));

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
