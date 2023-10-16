import React from "react";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function RootLayout() {
  return (
    <div className="md:grid grid-cols-root-layout">
      <Toaster position="top-center" />
      <Navigation />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
