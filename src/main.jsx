import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { StrictMode } from "react";

import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
