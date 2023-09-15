import React from "react";
import { Outlet } from "react-router-dom";
import MenuNavigation from "../Components/Navigation/MenuNavigation";

function Menu() {
  return (
    <>
      <p className="text-center text-3xl pt-4 text-blackText">Our Hot Dishes</p>
      <MenuNavigation />
      <Outlet />
    </>
  );
}

export default Menu;
