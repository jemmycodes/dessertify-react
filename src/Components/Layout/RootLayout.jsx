import React from "react";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="md:grid grid-cols-root-layout">
      <Navigation />
      <div className="p-6 bg-orange/5">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
