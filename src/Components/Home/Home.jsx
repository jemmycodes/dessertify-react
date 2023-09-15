import React from "react";
import { heroImage, icecream, cookies, donut } from "../../assets";
import { LazyImage } from "../index.js";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="hero"
      className="bg-orange/10 min-h-screen px-8 py-4 md:flex-row flex justify-center items-center"
    >
      <div className="max-w-5xl mx-auto flex gap-5 flex-col w-full justify-between items-center md:flex-row ">
        <section className="flex gap-4 flex-col  ">
          <hgroup className="text-dark-brown">
            <h1 className="text-5xl  md:text-left text-center font-black font-frank-ruhl">
              Treat Yourself
              <br /> to Sweetness
            </h1>
            <p className="font-poppins   font-light text-center md:text-left  tracking-[0.2rem]">
              that meets your needs
            </p>
          </hgroup>
          <nav className="flex flex-wrap w-full gap-3  justify-center md:justify-start">
            <NavLink className="group hover:bg-orange/10 flex flex-col  justify-center gap-4 items-center px-3 py-4 rounded-full bg-white transition-colors duration-500">
              <span className="bg-orange/10 p-2 rounded-full group-hover:bg-white">
                <img src={icecream} alt="icecream" height="25" width="25" />
              </span>
              <p>Cream</p>
            </NavLink>
            <NavLink className="group hover:bg-orange/10 flex flex-col  justify-center gap-4 items-center px-3 py-4 rounded-full bg-white transition-colors duration-500">
              <span className="bg-orange/10 p-2 rounded-full group-hover:bg-white">
                <img src={donut} alt="donuts" height="25" width="25" />
              </span>
              <p>Donuts</p>
            </NavLink>{" "}
            <NavLink className="group hover:bg-orange/10 flex flex-col  justify-center gap-4 items-center px-3 py-4 rounded-full bg-white transition-colors duration-500">
              <span className="bg-orange/10 p-2 rounded-full group-hover:bg-white">
                <img src={cookies} alt="cookies" height="25" width="25" />
              </span>
              <p>Cookies</p>
            </NavLink>
          </nav>
          <div className="relative w-full md:w-3/4 md:mx-0  mx-auto">
            <input
              type="search"
              className="px-4 py-3 text-xs rounded-full w-full focus:outline-none focus:shadow-lg"
              placeholder="Search"
            />
            <button
              type="submit"
              className="bg-orange absolute rounded-full right-2 top-1/2 px-4 py-1 -translate-y-1/2 text-white"
            >
              <BsArrowRight className="text-xl" />
            </button>
          </div>
        </section>
        <figure>
          <LazyImage
            src={heroImage}
            alt="ai display of donuts"
            className="w-full  object-cover "
          />
        </figure>
      </div>
    </section>
  );
};
export default Home;
