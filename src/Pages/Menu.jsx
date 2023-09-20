import React from "react";

import { Outlet } from "react-router-dom";
import { MenuNavigation } from "../Components";

function Menu() {
  return (
    <main className="p-6 bg-[#f8f8f8] min-h-screen">
      <MenuNavigation />
      <Outlet />
    </main>
  );
}

export default Menu;
