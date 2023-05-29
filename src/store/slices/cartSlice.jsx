import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: 0,
    items: [],
    categories: ["electronics", "jewelery", "mens", "womens"],
  },
  reducers: {
    addToCart(state, { payload: item }) {
      if (!state.length) {
        state.items.push(item);
      } else if (!state.items.some((i) => i.id === item.id)) {
        state.items.push(item);
      } else if (
        state.items.some((i) => i.id === item.id) &&
        !state.items.some((i) => i.size === item.size)
      ) {
        state.items.push(item);
      }
      state.totalPrice = state.items
        .map((item) => item.price * item.amount)
        .reduce((a, b) => a + b, 0);
    },
    removeFromCart(state, { payload: item }) {
      if (state.items.some((i) => i.id === item.id && i.size === item.size)) {
        const index = state.items.findIndex(
          (i) => i.id === item.id && i.size === item.size
        );
        if (index !== -1) {
          state.items.splice(index, 1);
        }
      }
    },
    changeAmount(state, { payload: copy }) {
      const item = {
        ...state.items.find((i) => i.id === copy.id && i.size === copy.size),
      };
      const index = state.items.findIndex(
        (i) => i.id === copy.id && i.size === copy.size
      );
      if (item) {
        item.amount = copy.amount;
        state.items.splice(index, 1, item);
      }
      if (state.items.length > 1) {
        state.totalPrice = state.items
          .map((item) => item.price * item.amount)
          .reduce((a, b) => a + b);
      } else {
        state.totalPrice = state.items.map((item) => item.price * item.amount);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeFromCart, changeAmount, clearCart } =
  cartSlice.actions;

export default cartSlice;
