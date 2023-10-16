import React from "react";
import { LazyImage } from "..";
import useCartStore from "../../store/CartStore";

// eslint-disable-next-line
const CartItems = ({ image, name, category, id, quantity, price }) => {
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const increaseQuantity = useCartStore(state => state.increaseQuantity);
  const decreaseQuantity = useCartStore(state => state.decreaseQuantity);

  return (
    <div className="flex justify-between gap-6 md:grid place-content-end grid-cols-cart-items">
      <figure className="flex gap-3 overflow-hidden ">
        <LazyImage
          src={image}
          alt={name}
          height="100"
          width="100"
          className="w-20 h-full object-cover md:w-1/2 md:max-w-[100px]  md:aspect-square"
        />
        <figcaption className="flex-col justify-between hidden w-full gap-2 md:flex">
          <p className="text-sm">{name}</p>
          <p className="text-xs font-bold text-orange">{category}</p>
          <button
            className="text-sm text-gray-600  px-0 text-left cursor-pointer"
            onClick={() => removeFromCart(id)}
          >
            Remove
          </button>
        </figcaption>
      </figure>
      <figcaption className="flex flex-col justify-between gap-2 md:hidden">
        <p className="text-sm">{name}</p>
        <p className="text-xs font-bold text-orange">{category}</p>
        <p className="text-sm text-gray-600 cursor-pointer">Remove</p>
      </figcaption>
      <span className="flex flex-col items-center self-start gap-2 text-lg md:flex-row">
        <button
          type="button"
          onClick={() => {
            decreaseQuantity(id);
          }}
        >
          -
        </button>
        <p
          type="text"
          className="w-12 p-1 text-xs text-center border rounded-md "
        >
          {quantity}
        </p>
        <button
          type="button"
          onClick={() => {
            increaseQuantity(id);
          }}
        >
          +
        </button>
      </span>
      <p className="text-sm font-bold text-right md:font-normal">${price}</p>
      <p className="hidden text-sm text-right md:inline-block">
        ${price * quantity}
      </p>
    </div>
  );
};

export default CartItems;
