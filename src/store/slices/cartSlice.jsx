import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [], showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, showCart } = cartSlice.actions;

export default cartSlice.reducer;
