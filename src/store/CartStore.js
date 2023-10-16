import { create } from "zustand";
import toast from "react-hot-toast";
import { checkIfItemExists } from "../functions/functions";

const useCartStore = create(set => ({
  cartItems: [],
  addToCart: item =>
    set(({ cartItems }) => {
      const existingItemIndex = checkIfItemExists(item.id, cartItems);

      if (existingItemIndex !== -1) {
        const existingItem = cartItems[existingItemIndex];
        existingItem.quantity = existingItem.quantity + item.quantity;
        toast.success(`${item.quantity} ${item.name} added to cart`);
        return { cartItems: [...cartItems] };
      }

      toast.success(`${item.name} added to cart`);
      return { cartItems: [item, ...cartItems] };
    }),

  removeFromCart: id =>
    set(({ cartItems }) => {
      const index = checkIfItemExists(id, cartItems);

      const item = cartItems[index];

      toast.success(`${item.name} removed from cart`);

      return { cartItems: cartItems.filter(item => item.id !== id) };
    }),

  increaseQuantity: id =>
    set(({ cartItems }) => {
      const itemIndex = checkIfItemExists(id, cartItems);

      const item = cartItems[itemIndex];

      item.quantity++;

      return { cartItems: [...cartItems] };
    }),

  decreaseQuantity: id =>
    set(({ cartItems }) => {
      const itemIndex = checkIfItemExists(id, cartItems);

      const item = cartItems[itemIndex];

      item.quantity > 1 && item.quantity--;

      //   item.quantity--;

      return { cartItems: [...cartItems] };
    }),
}));

export default useCartStore;
