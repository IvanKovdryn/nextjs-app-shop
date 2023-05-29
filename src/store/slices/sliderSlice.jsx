import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    count: 2,
  },
  reducers: {
    changeCount(state, { payload: count }) {
      state.count = count;
    },
  },
});

export const sliderReducer = sliderSlice.reducer;

export const { changeCount } = sliderSlice.actions;
