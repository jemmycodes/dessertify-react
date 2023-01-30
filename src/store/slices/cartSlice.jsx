import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? localStorage.getItem("totalAmount")
    : 0;

const storeToLocalStorage = (cart, amount) => {
  localStorage.setItem("cartItems", JSON.stringify(cart));
  localStorage.setItem("totalAmount", JSON.stringify(amount));
};

const initialState = {
  cart: items,
  totalAmount: Number(totalAmount),
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
      storeToLocalStorage(
        state.cart.map((item) => item),
        state.totalAmount
      );
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
      storeToLocalStorage(
        state.cart.map((item) => item),
        state.totalAmount
      );
    },
    clearCart(state) {
      state.cart = [];
      state.totalAmount = 0;
      storeToLocalStorage(
        state.cart.map((item) => item),
        state.totalAmount
      );
    },
  },
});

export const { addToCart, showCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
