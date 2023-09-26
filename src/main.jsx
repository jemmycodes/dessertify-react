import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { StrictMode } from "react";

import { MenuProvider } from "./context/MenuContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </StrictMode>
);
