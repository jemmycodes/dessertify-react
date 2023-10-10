import React from "react";

// eslint-disable-next-line react/prop-types
const CartLayout = ({ children }) => {
  return <main className="flex flex-col h-screen md:flex-row">{children}</main>;
};

export default CartLayout;
