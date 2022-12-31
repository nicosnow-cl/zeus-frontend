import { createSlice } from '@reduxjs/toolkit';

import * as thunks from '../../thunks/home';
import IEscort from '../../../interfaces/states/interface.escort';
import IStory from '../../../interfaces/states/interface.story';

export interface IHomeState {
  escorts: IEscort[];
  stories: IStory[];
}

const initialState: IHomeState = {
  escorts: [],
  stories: [],
};

const homeReducer = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder): void => {
    builder.addCase(thunks.getEscorts.fulfilled, (state, action) => {
      state.escorts = action.payload;
    });

    builder.addCase(thunks.getStories.fulfilled, (state, action) => {
      state.stories = action.payload;
    });
  },
});

export const { actions: homeActions } = homeReducer;
export default homeReducer.reducer;
