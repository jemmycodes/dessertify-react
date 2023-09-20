import React from "react";
import { icecream, cookies, donut, desserts } from "../../assets";
import { NavLink } from "react-router-dom";

const assignActiveClass = ({ isActive }) =>
  isActive ? "text-white  bg-orange" : "";

export default function MenuNavigation() {
  return (
    <nav id="menu-navigation" className="overflow-scroll scrollbar-hide ">
      <ul className="flex gap-3">
        <NavLink className={assignActiveClass} to="desserts">
          <img src={desserts} alt="" height="20" width="20" />

          <p>All</p>
        </NavLink>
        <NavLink className={assignActiveClass} to="Ice_Cream">
          <img src={icecream} alt="" height="20" width="20" />
          <p>Icecream</p>
        </NavLink>{" "}
        <NavLink className={assignActiveClass} to="Cookie">
          <img src={cookies} alt="" height="20" width="20" />
          <p>Cookies</p>
        </NavLink>{" "}
        <NavLink className={assignActiveClass} to="Donut">
          <img src={donut} alt="" height="20" width="20" />
          <p>Donuts</p>
        </NavLink>
      </ul>
    </nav>
  );
}
