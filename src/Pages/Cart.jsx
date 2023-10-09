import React from "react";
import { useCart } from "../context/CartContext";

// eslint-disable-next-line
const Cart = () => {
  const { cart } = useCart();

  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <img src={item.image} alt="" width={100} />
          <p>{item.quantity}</p>
        </div>
      ))}
    </>
  );
};

export default Cart;
