import React from "react";
import Navigation from "../Navigation/Navigation";
// import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="md:grid grid-cols-root-layout">
      <Navigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
