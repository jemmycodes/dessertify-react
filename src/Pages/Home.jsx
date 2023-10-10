import React from "react";
import { heroImage, icecream, cookies, donut } from "../assets";
import { LazyImage } from "../Components";
import { NavLink } from "react-router-dom";

const navData = [
  { path: "menu/Ice_Cream", name: "Icecream", image: icecream },
  { path: "menu/Cookie", name: "Cookies", image: cookies },
  {
    path: "menu/Donut",
    name: "Donuts",
    image: donut,
  },
];

const Home = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-center min-h-screen bg-orange/10 px-8 py-4 md:flex-row"
    >
      <div className="flex flex-col items-center justify-between w-full max-w-5xl gap-5 mx-auto md:flex-row ">
        <section className="flex flex-col gap-4 ">
          <hgroup className="text-dark-brown">
            <h1 className="text-5xl font-black text-center md:text-left font-frank-ruhl">
              Treat Yourself
              <br /> to Sweetness
            </h1>
            <p className="font-poppins   font-light text-center md:text-left  tracking-[0.2rem]">
              that meets your needs
            </p>
          </hgroup>
          <nav className="flex flex-wrap justify-center w-full gap-3 md:justify-start">
            {navData.map((item) => (
              <NavLink
                key={item.name}
                className="flex flex-col items-center justify-center gap-4 px-3 py-4 transition-colors duration-500 bg-white rounded-full group hover:bg-orange/10"
                to={item.path}
              >
                <span className="p-2 rounded-full bg-orange/10 group-hover:bg-white">
                  <img src={item.image} alt="icecream" height="25" width="25" />
                </span>
                <p>{item.name}</p>
              </NavLink>
            ))}
          </nav>
        </section>
        <figure>
          <LazyImage
            src={heroImage}
            alt="ai display of donuts"
            className="object-cover w-full "
          />
        </figure>
      </div>
    </section>
  );
};
export default Home;
