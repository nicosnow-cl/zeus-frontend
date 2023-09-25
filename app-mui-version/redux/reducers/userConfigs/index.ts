import { createSlice } from '@reduxjs/toolkit';

export interface UserConfigsState {
  show18YearsAdvice: boolean;
}

const initialState = {
  show18YearsAdvice: true,
};

const userConfigsReducer = createSlice({
  name: 'others',
  initialState,
  reducers: {
    handleToggle18YearsAdvice: (state, action) => {
      state.show18YearsAdvice = action.payload;
    },
  },
  extraReducers: (builder): void => {},
});

export const { actions: userConfigsActions } = userConfigsReducer;
export default userConfigsReducer.reducer;
