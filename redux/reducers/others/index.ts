import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show18YearsAdvice: true,
};

const othersReducer = createSlice({
  name: 'others',
  initialState,
  reducers: {
    handleToggle18YearsAdvice: (state, action) => {
      state.show18YearsAdvice = action.payload;
    },
  },
  extraReducers: (builder): void => {},
});

export const { actions: othersActions } = othersReducer;
export default othersReducer.reducer;
