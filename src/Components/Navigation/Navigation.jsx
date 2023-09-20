import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineRestaurantMenu,
  MdShoppingCart,
  MdHome,
} from "react-icons/md";
import Logo from "./Logo";

const assignActiveClass = ({ isActive }) =>
  isActive ? "p-2 bg-orange text-white rounded-full" : "";

const Navigation = () => {
  return (
    <nav
      id="home-nav"
      className="bg-white/30 md:flex-col md:flex shadow-md backdrop-blur-sm text-black/70 fixed  bottom-2 z-20 w-[90vw] max-w-sm rounded-full left-1/2 p-3 -translate-x-1/2 md:sticky md:left-0 md:top-0 md:w-full md:h-screen md:-translate-x-0 md:rounded-none md:justify-between "
    >
      <div className="hidden md:block">
        <Logo />
      </div>
      <ul className="flex items-center justify-around w-full md:flex-col md:gap-10 md:justify-center">
        <li>
          <NavLink to="/" className={assignActiveClass}>
            <MdHome />
          </NavLink>
          {/* <p>Home</p> */}
        </li>
        <li>
          <NavLink to="/menu/all" className={assignActiveClass}>
            <MdOutlineRestaurantMenu />
          </NavLink>
          {/* <p>Menu</p> */}
        </li>
        <li>
          <NavLink to="cart" className={assignActiveClass}>
            <MdShoppingCart />
          </NavLink>
          {/* <p>Cart</p> */}
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default Navigation;
