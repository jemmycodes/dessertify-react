import { BiMenuAltRight } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";
import Logo from "./Logo";
import { TiShoppingCart } from "react-icons/ti";
import { FiLogIn } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../../store/slices/cartSlice";

function Navigation() {
  const [navigation, setNavigation] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const navigationHandler = () => {
    setNavigation((prevState) => !prevState);
  };

  const showCartHandler = () => {
    dispatch(showCart());
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
          <TiShoppingCart
            className="text-4xl md:bg-blackText  cursor-pointer ml-auto"
            onClick={showCartHandler}
          />
          <div className="text-white px-[.3rem] bg-pepperRed rounded-full absolute top-0 right-0">
            {cart.length}
          </div>
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
            <TiShoppingCart className="cart-icons" onClick={showCartHandler} />
            <div className="text-white bg-pepperRed px-2  text-xs cursor-pointer rounded-full absolute top-0 right-0 ">
              {cart.length}
            </div>
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
