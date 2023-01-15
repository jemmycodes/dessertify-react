import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";
import Logo from "./Logo";

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
          <Link href="/" onClick={() => setNavigation(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/menu" onClick={() => setNavigation(false)}>
            Menu
          </Link>
        </li>

        <li>
          <Link href="/about" onClick={() => setNavigation(false)}>
            About
          </Link>
        </li>
        <li>
          <Link href="/services" onClick={() => setNavigation(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact-us" onClick={() => setNavigation(false)}>
            Contact Us
          </Link>
        </li>
        {navigation && <Logo />}
      </ul>
    </nav>
  );
}

export default Navigation;
