import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { sliderReducer } from "./slices/sliderSlice";
import { productsReducer } from "./slices/productsSlice";
import { dataReducer } from "./slices/dataSlice";
const reducer = {
  cart: cartReducer,
  slider: sliderReducer,
  products: productsReducer,
  data: dataReducer,
};

const store = configureStore({
  reducer,
});

export default store;
