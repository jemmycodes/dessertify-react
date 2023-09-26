import React, { useState } from "react";
import { LazyImage } from "..";

//eslint-disable-next-line
const MenuItems = ({ image, description, price, name }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <figure>
        <LazyImage
          src={image}
          alt={`Image of ${name}`}
          className=""
          height={300}
          width={300}
        />
      </figure>
      <figcaption>
        <span
          onClick={() => {
            if (amount <= 0) return;
            setAmount((prevAmount) => prevAmount - 1);
          }}
        >
          -
        </span>
        <input
          type="number"
          className="p-1 w-10 "
          min={0}
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
        <span onClick={() => setAmount((prevAmount) => prevAmount + 1)}>+</span>
      </figcaption>
    </div>
  );
};

export default MenuItems;
