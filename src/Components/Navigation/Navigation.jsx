import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import {
  MdOutlineRestaurantMenu,
  MdShoppingCart,
  MdHome,
  MdLogin,
} from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Logo from "./Logo";
import useAuth from "../../state/useAuth";
import { signUserOut } from "../../utils/supabase";

const assignActiveClass = ({ isActive }) =>
  isActive ? "p-2 bg-orange text-white rounded-full" : "";

const Navigation = () => {
  //check to hide the navigation in auth screens
  const { pathname } = useLocation();
  const isAuth = pathname === "/signup" || pathname === "/login";

  const session = useAuth((state) => state.session);

  return (
    !isAuth && (
      <nav
        id="home-nav"
        className="bg-white/30 md:flex-col md:flex shadow-md backdrop-blur-sm text-black/70 fixed  bottom-2 z-20 w-[90vw] max-w-sm rounded-full left-1/2 p-3 -translate-x-1/2 md:sticky md:left-0 md:top-0 md:w-full md:h-screen md:-translate-x-0 md:rounded-none md:justify-between">
        <div className="hidden md:block">
          <Logo />
        </div>
        <ul className="flex items-center justify-around w-full md:flex-col md:gap-10 md:justify-center">
          <li>
            <NavLink to="/" className={assignActiveClass}>
              <MdHome />
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={assignActiveClass}>
              <MdOutlineRestaurantMenu />
            </NavLink>
          </li>
          <li>
            <NavLink to="cart" className={assignActiveClass}>
              <MdShoppingCart />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={session ? "profile" : "login"}
              className={assignActiveClass}>
              {session ? <FaRegUserCircle /> : <MdLogin />}
            </NavLink>
          </li>
          {session && (
            <button className="text-2xl" onClick={signUserOut}>
              <BiLogOut />
            </button>
          )}
        </ul>
        <div></div>
      </nav>
    )
  );
};

export default Navigation;
