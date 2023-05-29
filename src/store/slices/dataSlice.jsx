import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    dataCheckout: [],
  },
  reducers: {
    setData(state, { payload: items }) {
      state.data = items;
    },
    setDataCheckout(state, { payload: items }) {
      state.dataCheckout = items;
    },
  },
});

export const dataReducer = dataSlice.reducer;

export const { setData, setDataCheckout } = dataSlice.actions;
