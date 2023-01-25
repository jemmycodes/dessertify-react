import { NavLink } from "react-router-dom";
import { BiCookie } from "react-icons/bi";
import { MdOutlineIcecream } from "react-icons/md";
import { GiDoughRoller } from "react-icons/gi";

function MenuNavigation() {
  return (
    <div className="dishes-row">
      <ul className="flex gap-6 items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-link__active" : "menu-link__not-active"
          }
          to="menu/Ice_Cream"
        >
          <span>
            <MdOutlineIcecream />
          </span>
          Ice-Cream
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-link__active" : "menu-link__not-active"
          }
          to="menu/Donut"
        >
          <span>
            <GiDoughRoller />
          </span>
          Doughnuts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu-link__active" : "menu-link__not-active"
          }
          to="menu/Cookie"
        >
          <span>
            <BiCookie />
          </span>
          Cookies
        </NavLink>
      </ul>
    </div>
  );
}

export default MenuNavigation;
