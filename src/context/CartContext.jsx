import React, { createContext, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const CartContext = createContext();

const { Provider } = CartContext;

//eslint-disable-next-line
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (menu) => {
    console.log(menu);
    const item = cart.find((cartItem) => cartItem.id === menu.id);

    item &&
      toast.error(
        <p className="text-xs">
          <span className="font-bold text-orange"> {item.name}</span> already in
          cart.
        </p>
      );

    if (!item) {
      setCart((prevCart) => [...prevCart, menu]);
      console.log(menu);
      toast.success(
        <p className="text-xs">
          Added
          <span className="font-bold text-orange "> {menu.quantity}</span>{" "}
          {menu.name} to cart
        </p>
      );
    }
    console.log(cart);
  };

  const removeFromCart = (id) => {
    console.log(id);
  };

  return (
    <>
      <Toaster position="top-center" />
      <Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
      </Provider>
    </>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
