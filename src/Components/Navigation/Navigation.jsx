import { BiMenuAltRight } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";
import Logo from "./Logo";
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
          className="text-4xl cursor-pointer md:hidden"
          onClick={navigationHandler}
        />
      )}

      {navigation && (
        <GiKnifeFork
          className="text-4xl cursor-pointer z-50"
          onClick={navigationHandler}
        />
      )}
      <ul className={navigation ? "nav-open" : "nav-close"}>
        <li>
          <NavLink to="/" onClick={() => setNavigation(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" onClick={() => setNavigation(false)}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setNavigation(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setNavigation(false)}>
            Services
          </NavLink>
        </li>
        <li>Contact us</li>
        {navigation && (
          <li>
            <NavLink to="/" onClick={() => setNavigation(false)}>
              <Logo />
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="/login" onClick={() => setNavigation(false)}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
