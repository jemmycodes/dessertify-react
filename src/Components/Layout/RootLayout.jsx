import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useAuth from "../../state/useAuth";
import { useRef } from "react";

function RootLayout() {
  const { pathname } = useLocation();

  const isAuthPage = pathname === "/signup" || pathname === "/login";

  return (
    <div className={isAuthPage ? "" : "md:grid grid-cols-root-layout"}>
      <Toaster position="top-center" />
      <Navigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
