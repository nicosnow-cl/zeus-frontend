import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as thunks from '../../thunks/home';
import ICard from '../../../interfaces/states/interface.card';
import IMedia from '../../../interfaces/objects/interface.media';
import IStory from '../../../interfaces/states/interface.story';

export interface IHomeState {
  cardsState: { value: ICard[]; isLoading: boolean; firstLoadDone: boolean };
  stories: IStory[];
  medias: IMedia[];
}

const initialState: IHomeState = {
  cardsState: { value: [], isLoading: true, firstLoadDone: false },
  stories: [],
  medias: [],
};

const homeReducer = createSlice({
  name: 'home',
  initialState,
  reducers: {
    handleLoadingCards: (state, action: PayloadAction<boolean | undefined>): void => {
      state.cardsState.isLoading = action.payload ?? !state.cardsState.isLoading;
    },
    setMedias: (state, action): void => {
      state.medias = action.payload;
    },
  },
  extraReducers: (builder): void => {
    builder.addCase(thunks.getCards.fulfilled, (state, action) => {
      state.cardsState.value = action.payload;
      state.cardsState.isLoading = false;

      if (!state.cardsState.firstLoadDone) state.cardsState.firstLoadDone = true;
    });

    builder.addCase(thunks.getStories.fulfilled, (state, action) => {
      state.stories = action.payload;
    });
  },
});

export const { actions: homeActions } = homeReducer;
export default homeReducer.reducer;
