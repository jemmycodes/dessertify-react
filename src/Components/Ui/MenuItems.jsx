import React from "react";
import { LazyImage } from "..";

const MenuItems = ({ image, description, name, price }) => {
  return (
    <article className="flex gap-4 shadow-lg bg-white px-5 py-4 rounded-xl">
      <figure className="flex flex-col gap-2">
        <LazyImage
          src={image}
          alt={name}
          height="300"
          width="200"
          className="rounded-lg  flex-grow object-cover max-w-[6rem]"
        />
        <figcaption className="flex gap-2 items-center justify-between">
          <button className="rounded-btns">-</button>
          <span className="text-sm">3</span>
          <button className="rounded-btns">+</button>
        </figcaption>
      </figure>
      <hgroup className="flex flex-col gap-2">
        <span className="flex justify-between items-center">
          <h3 className="text-lg font-semibold ">{name}</h3>
          <h5 className="text-orange font-semibold">{price}</h5>
        </span>

        <p className="text-xs max-h-16  text-ellipsis overflow-hidden text-gray-400">
          {description}
        </p>

        <span className="flex gap-2 mb-3 items-center">
          <h5>Size</h5>
          <p className="border py-1 px-5 ml-2   text-sm rounded-full">Small</p>
          <p className="border py-1 px-5  text-sm rounded-full">Large</p>
        </span>
        <button className="border font-medium hover:text-white hover:bg-orange transition-colors duration-500 border-orange text-orange text-sm px-4 py-2 rounded-full">
          Add to Cart
        </button>
      </hgroup>
    </article>
  );
};

export default MenuItems;
