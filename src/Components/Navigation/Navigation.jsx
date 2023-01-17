import { BiMenuAltRight } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";
import Logo from "./Logo";
// import { Link } from "react-router-dom";

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
        <li>Home</li>
        <li>Menu</li>

        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
        {navigation && (
          <li>
            <Logo />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
