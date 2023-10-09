import { Link } from "react-router-dom";
import React from "react";
import { notfound } from "../assets";
import { IoChevronForwardSharp } from "react-icons/io5";

const NotFound = () => {
  // 404 page
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3 p-5 md:flex-row">
      <figure>
        <img src={notfound} className="w-full max-w-lg " />
      </figure>
      <section>
        <h1 className="text-5xl font-bold">404</h1>
        <h2>Something&apos;s missing</h2>
        <p>The page is missing or you assembled the link incorrectly. </p>
        <Link className="flex items-center gap-1 text-blue-600 " to="/">
          Go to home
          <IoChevronForwardSharp />
        </Link>
      </section>
    </div>
  );
};

export default NotFound;
