import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IFilters from '../../../interfaces/states/interface.filters';
import IPartialFilters from '../../../interfaces/objects/interface.partial-filters';

export interface IUiState {
  actualProfileMedia: number;
  filters: IFilters;
  isLoadingHome: boolean;
  isLoadingStories: boolean;
  selectedEscortStory: number;
  showFiltersModal: boolean;
  showLadiesStories: boolean;
  showLadyImage: boolean;
  showLadyProfile: boolean;
  showRegionModal: boolean;
  showSidebar: boolean;
}

const initialState: IUiState = {
  actualProfileMedia: 0,
  filters: {
    appareance: [],
    city: 'Santiago',
    name: '',
    promotion: false,
    services: [],
    type: '',
    video: false,
  },
  isLoadingHome: false,
  isLoadingStories: false,
  selectedEscortStory: 0,
  showFiltersModal: false,
  showLadiesStories: false,
  showLadyImage: false,
  showLadyProfile: false,
  showRegionModal: false,
  showSidebar: false,
};

const uiReducer = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    handleApplyProfileMedia: (state, action: PayloadAction<number>) => {
      state.actualProfileMedia = action.payload;
    },
    handleApplyFilters: (state, action: PayloadAction<IPartialFilters>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    handleLoadingHome: (state, action: PayloadAction<boolean>) => {
      state.isLoadingHome = action.payload === undefined ? !state.isLoadingHome : action.payload;
    },
    handleLoadingStories: (state, action: PayloadAction<boolean>) => {
      state.isLoadingStories =
        action.payload === undefined ? !state.isLoadingStories : action.payload;
    },
    handleToggleFiltersModal: (state, action: PayloadAction<boolean | undefined>) => {
      state.showFiltersModal =
        action.payload === undefined ? !state.showFiltersModal : action.payload;
    },
    handleToggleLadiesStories: (state, action: PayloadAction<boolean | undefined>) => {
      state.showLadiesStories =
        action.payload === undefined ? !state.showLadiesStories : action.payload;
    },
    handleSetSelectedEscortStory: (state, action: PayloadAction<number>) => {
      state.selectedEscortStory = action.payload;
    },
    handleToggleLadyImage: (state, action: PayloadAction<boolean | undefined>) => {
      state.showLadyImage = action.payload === undefined ? !state.showLadyImage : action.payload;
    },
    handleToggleLadyProfile: (state, action: PayloadAction<boolean | undefined>) => {
      state.showLadyProfile =
        action.payload === undefined ? !state.showLadyProfile : action.payload;
    },
    handleToggleRegionModal: (state, action: PayloadAction<boolean | undefined>) => {
      state.showRegionModal =
        action.payload === undefined ? !state.showRegionModal : action.payload;
    },
    handleToggleSidebar: (state, action: PayloadAction<boolean | undefined>) => {
      state.showSidebar = action.payload === undefined ? !state.showSidebar : action.payload;
    },
  },
  extraReducers: (builder): void => {},
});

export const { actions: uiActions } = uiReducer;
export default uiReducer.reducer;
