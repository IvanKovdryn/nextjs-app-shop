import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProducts(state, { payload: products }) {
      state.products = products;
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const { addProducts } = productsSlice.actions;
