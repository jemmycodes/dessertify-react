import { BiMenuAltRight } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";
import Logo from "./Logo";
import { TiShoppingCart } from "react-icons/ti";
import { FiLogIn } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [navigation, setNavigation] = useState(false);

  const navigationHandler = () => {
    setNavigation((prevState) => !prevState);
  };

  return (
    <nav>
      <Logo />
      {!navigation && (
        <BiMenuAltRight
          className="text-4xl cursor-pointer md:hidden ml-auto"
          onClick={navigationHandler}
        />
      )}
      {navigation && (
        <span className="relative flex z-50 -translate-x-48 mr-auto">
          <TiShoppingCart className="text-4xl md:bg-blackText  cursor-pointer ml-auto" />
          <div className="p-2 bg-pepperRed rounded-full absolute top-0 right-0"></div>
        </span>
      )}
      {navigation && (
        <GiKnifeFork
          className="text-4xl cursor-pointer z-50 ml-auto"
          onClick={navigationHandler}
        />
      )}
      <ul className={navigation ? "nav-open" : "nav-close"}>
        <div className="flex md:flex-row flex-col items-center  gap-6">
          <li>
            <NavLink
              to="/"
              onClick={() => setNavigation(false)}
              className={({ isActive }) =>
                isActive ? "active-link-class" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              onClick={() => setNavigation(false)}
              className={({ isActive }) =>
                isActive ? "active-link-class" : ""
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setNavigation(false)}
              className={({ isActive }) =>
                isActive ? "active-link-class" : ""
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              onClick={() => setNavigation(false)}
              className={({ isActive }) =>
                isActive ? "active-link-class" : ""
              }
            >
              Services
            </NavLink>
          </li>
          <li>Contact us</li>

          {navigation && (
            <li>
              <NavLink to="/home" onClick={() => setNavigation(false)}>
                <Logo />
              </NavLink>
            </li>
          )}
          {navigation && (
            <li>
              <NavLink to="/login" onClick={() => setNavigation(false)}>
                <span className=" gap-1 items-center flex justify-center">
                  Login
                  <FiLogIn />
                </span>
              </NavLink>
            </li>
          )}
          <span className="relative hidden md:flex ">
            <TiShoppingCart className="cart-icons" />
            <div className=" bg-pepperRed p-1 rounded-full absolute top-0 right-0 "></div>
          </span>
        </div>
      </ul>
      <NavLink
        to="/login"
        onClick={() => setNavigation(false)}
        className={({ isActive }) => (isActive ? "active-link-class" : "")}
      >
        <span className=" gap-1 items-center md:flex hidden border px-2 py-1 rounded-lg">
          Login
          <FiLogIn />
        </span>
      </NavLink>
    </nav>
  );
}

export default Navigation;
