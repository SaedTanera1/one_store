import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: [],
};
export const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findproduct = state.product.find(
        (product) => product.id === action.payload.id
      );

      if (findproduct) {
        findproduct.quntity += action.payload.quntity;
      } else {
        state.product.push(action.payload);
      }
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    removeItem: (state, action) => {
      state.product = state.product.filter(
        (product) => product.id !== action.payload
      );
    },
    Cler: (state, action) => {
      state.product = [];
    },
  },
});

export const { addToCart, removeItem, Cler, decrement } = cartslice.actions;
export default cartslice.reducer;
