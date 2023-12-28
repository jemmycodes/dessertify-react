import { create } from "zustand";
import toast from "react-hot-toast";
import { checkIfItemExists } from "../utils/utils";

const useCart = create((set) => ({
  cartItems: [],
  totalAmount: 0,
  addToCart: (item) =>
    set(({ cartItems, totalAmount }) => {
      console.log(userExists);
      totalAmount = totalAmount + item.quantity * item.price;
      const existingItemIndex = checkIfItemExists(item.id, cartItems);

      if (existingItemIndex !== -1) {
        const existingItem = cartItems[existingItemIndex];
        existingItem.quantity = existingItem.quantity + item.quantity;
        toast.success(`${item.quantity} ${item.name} added to cart`);

        return { cartItems: [...cartItems], totalAmount };
      }

      toast.success(`${item.name} added to cart`);

      return { cartItems: [item, ...cartItems], totalAmount };
    }),

  removeFromCart: (id) =>
    set(({ cartItems, totalAmount }) => {
      const index = checkIfItemExists(id, cartItems);

      const item = cartItems[index];

      totalAmount = totalAmount - item.price * item.quantity;

      toast.success(`${item.name} removed from cart`);

      return {
        cartItems: cartItems.filter((item) => item.id !== id),
        totalAmount,
      };
    }),

  increaseQuantity: (id) =>
    set(({ cartItems, totalAmount }) => {
      const itemIndex = checkIfItemExists(id, cartItems);

      const item = cartItems[itemIndex];

      totalAmount = totalAmount + item.price;

      item.quantity++;

      return { cartItems: [...cartItems], totalAmount };
    }),

  decreaseQuantity: (id) =>
    set(({ cartItems, totalAmount }) => {
      const itemIndex = checkIfItemExists(id, cartItems);

      const item = cartItems[itemIndex];

      item.quantity > 1 && item.quantity--;

      if (item.quantity > 1) {
        totalAmount = totalAmount - item.price;
      }

      return { cartItems: [...cartItems], totalAmount };
    }),
}));

export default useCart;
