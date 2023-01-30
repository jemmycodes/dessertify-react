import { createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";

const initialState = {
  cart: [],
  totalAmount: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      state.totalAmount =
        state.totalAmount + action.payload.price * action.payload.quantity;
      if (!existingItem) {
        state.cart = [...state.cart, action.payload];
      } else {
        existingItem.quantity++;
      }
    },
    showCart(state) {
      state.showCart = !state.showCart;
    },
    removeFromCart(state, action) {
      state.totalAmount =
        state.totalAmount - action.payload.price * action.payload.quantity;
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        existingItem.quantity--;
      }
    },
    clearCart(state) {
      state.cart = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, showCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
