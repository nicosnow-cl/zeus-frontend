import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAppearances, getServices } from '../../thunks/others/index';

export interface IOthers {
  appearances: any[];
  services: any[];
}

export const initialState: IOthers = {
  appearances: [],
  services: [],
};

const othersReducer = createSlice({
  name: 'others',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAppearances.fulfilled, (state, action) => {
      state.appearances = action.payload;
    });

    builder.addCase(getServices.fulfilled, (state, action) => {
      state.services = action.payload;
    });
  },
});

export const { actions: othersActions } = othersReducer;
export default othersReducer.reducer;
