import React from "react";
import Navigation from "../Navigation/Navigation";
// import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main className="md:grid grid-cols-root-layout">
      <Navigation />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </main>
  );
}

export default RootLayout;
