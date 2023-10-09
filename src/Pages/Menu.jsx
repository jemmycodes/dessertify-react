import React from "react";
import { icecream, cookies, donut, desserts } from "../assets";
import {
  Outlet,
  NavLink,
  useSearchParams,
  useLocation,
  Navigate,
} from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";

const navData = [
  { image: desserts, name: "All", path: "desserts" },
  { image: icecream, name: "Icecream", path: "Ice_Cream" },
  { image: cookies, name: "Cookies", path: "Cookie" },
  { image: donut, name: "Donuts", path: "Donut" },
];

function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  // active route function
  const assignActiveClass = ({ isActive }) =>
    isActive ? "text-white  bg-orange" : "";

  return (
    <>
      {pathname === "/menu" && <Navigate to="/menu/desserts" replace={true} />}
      <main className="min-h-screen ">
        <header className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
          <nav id="menu-navigation" className="overflow-scroll scrollbar-hide ">
            <ul className="flex gap-3">
              {navData.map((item) => (
                <NavLink
                  className={assignActiveClass}
                  key={item.name}
                  to={item.path}
                >
                  <img
                    src={item.image}
                    alt={`${item.path} icon`}
                    height="20"
                    width="20"
                  />

                  <p>{item.name}</p>
                </NavLink>
              ))}
            </ul>
          </nav>
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              id="search"
              className="w-full px-6 py-3 pl-12 text-xs rounded-lg focus:outline-none focus:shadow-lg"
              placeholder="Search"
              autoComplete="on"
              value={searchParams.get("search") || ""}
              onChange={(e) => setSearchParams({ search: e.target.value })}
              required
            />
            <MdOutlineSearch className="absolute left-0 mt-4 ml-4 text-xl font-bold -top-1 text-orange" />
          </div>
        </header>
        <section className="grid justify-between gap-5 py-5 grid-cols-menu-small-screens md:grid-cols-menu-items ">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default Menu;
