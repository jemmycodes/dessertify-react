import React, { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { AiFillMinusCircle, AiFillStar } from "react-icons/ai";
import { LazyImage } from "..";

// eslint-disable-next-line react/prop-types
const MenuItems = ({ image, description, price, name }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-col max-w-lg bg-white rounded-md shadow-lg md:gap-3 md:p-3 md:flex-row">
      <LazyImage
        src={image}
        alt={name}
        height="300"
        width="300"
        className="object-cover w-full h-40 md:w-32 rounded-t-md md:h-full md:rounded-md "
      />
      <hgroup className="flex flex-col w-full gap-2 p-3 md:p-0">
        <p className="font-bold ">{name}</p>
        <p className="text-xs text-gray-500 line-clamp-3">{description}</p>

        <span className="text-sm">
          <strong className="text-orange">${price}</strong> X<i>{quantity}</i>
        </span>
        <span className="flex items-center gap-2">
          <AiFillMinusCircle
            className="text-2xl text-orange "
            onClick={() =>
              quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1)
            }
          />
          <input
            type="number"
            className="w-10 text-center border rounded-md focus:outline-none focus:border-orange"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <IoAddCircle
            className="text-2xl cursor-pointer text-orange"
            onClick={() => setQuantity((prevQuantity) => +prevQuantity + 1)}
          />
        </span>
        <div className="flex items-center gap-2 text-sm">
          <p>Rating:</p>
          <span className="flex gap-1 text-yellow-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
        </div>
        <button className="px-2 py-2 text-sm transition-colors duration-200 border rounded-md border-orange hover:text-white hover:bg-orange text-orange">
          Add to cart
        </button>
      </hgroup>
    </div>
  );
};

export default MenuItems;
