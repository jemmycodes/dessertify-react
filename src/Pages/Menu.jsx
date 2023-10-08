import React from "react";

import { Outlet } from "react-router-dom";
import { MenuNavigation } from "../Components";
import { Search } from "../Components";

function Menu() {
  return (
    <main className="p-6 bg-[#f8f8f8] min-h-screen">
      <header className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <MenuNavigation />
        <Search />
      </header>
      <Outlet />
    </main>
  );
}

export default Menu;
