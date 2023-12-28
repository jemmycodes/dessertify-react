import React, { useEffect } from "react";
import useAuth from "../../state/useAuth";
import { Toaster } from "react-hot-toast";
import Navigation from "../Navigation/Navigation";
import { Outlet, useLocation } from "react-router-dom";

function RootLayout() {
  const getSession = useAuth((state) => state.getSession);

  useEffect(() => {
    (async () => {
      await getSession();
      console.log("finshed getting session");
    })();
  }, []);

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
