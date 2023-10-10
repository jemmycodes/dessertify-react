import React, { createContext, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const CartContext = createContext();

const { Provider } = CartContext;

//eslint-disable-next-line
const CartProvider = ({ children }) => {
    const itemExists = (id) => cart.findIndex((item) => item?.id === id);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Check if item exists in the cart already
    const existingFoodIndex = itemExists(item.id);

    if (existingFoodIndex === -1) {
      setCart((prevCart) => [item, ...prevCart]);
      toast.success(`${item.quantity} ${item.name} added to cart!`);
    } else {
      const existingFood = cart[existingFoodIndex];
      const cartData = [...cart];
      cartData.splice(existingFoodIndex, 1, {
        ...item,
        quantity: +item.quantity + +existingFood.quantity,
      });
      setCart(cartData);
      toast.success(`${item.quantity} ${existingFood.name} added to cart!`)
    }
  };


  const removeFromCart = (id) => {
    const existingFoodIndex = itemExists(id);

    if (existingFoodIndex >= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }
    
    toast.success(`${cart[existingFoodIndex].name} removed from cart!`)
  };

  const reduceFromCart = (id) => {
    const existingFoodIndex = itemExists(id);
    if (existingFoodIndex >= 0) {
      const existingFood = cart[existingFoodIndex];
      if (existingFood.quantity === 1) return;
      const cartData = [...cart];
      cartData.splice(existingFoodIndex, 1, {
        ...existingFood,
        quantity: +existingFood.quantity - 1,
      });

      setCart(cartData);
      
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <Provider value={{ cart, addToCart, removeFromCart, reduceFromCart }}>
        {children}
      </Provider>
    </>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
