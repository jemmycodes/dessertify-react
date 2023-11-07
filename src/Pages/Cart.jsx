import { emptyCart } from "../assets";
import React, { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import useCartStore from "../store/CartStore";
import { getUserSession } from "../utils/utils";
import { CartItems, LazyImage } from "../Components";
import { Link, useNavigate } from "react-router-dom";
import CartLayout from "../Components/Layout/CartLayout";
import toast from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useCartStore(state => state.cartItems);
  const totalAmount = useCartStore(state => state.totalAmount);

  useEffect(() => {
    const checkAuthentication = async () => {
      console.log("checking authentication")
      const response = await getUserSession();

      if (!response) {
        toast.error("Please login to access cart!");
        navigate("/login");
      }
    };

    checkAuthentication();
  });

  if (!cartItems.length)
    return (
      <figure className="flex flex-col items-center justify-center w-full h-screen gap-2 p-4">
        <LazyImage
          src={emptyCart}
          alt="empty cart"
          height="300"
          width="300"
          className="w-full max-w-sm mx-auto"
        />
        <p className="text-lg font-semibold">Your cart is empty!</p>
        <Link
          to="/menu"
          className="flex items-center gap-2 px-3 py-2 text-sm border whitespace-nowrap"
        >
          <BiArrowBack />
          Continue Shopping
        </Link>
      </figure>
    );

  return (
    <CartLayout>
      <section className="w-full ">
        <div className="flex flex-col w-full max-w-2xl gap-4 p-4 mx-auto md:py-16 md:px-10">
          <header className="flex items-center justify-between w-full pb-4 border-b ">
            <h1 className="text-xl font-bold md:text-2xl">Shopping Cart</h1>
            <Link
              to="/menu"
              className="flex items-center gap-2 px-3 py-2 text-sm border whitespace-nowrap"
            >
              <BiArrowBack />
              Back to Menu
            </Link>
          </header>

          <div
            className="flex flex-col flex-grow gap-5 overflow-y-scroll h-[20rem] md:h-[30rem] pr-4"
            id="cart"
          >
            {cartItems.map(item => (
              <CartItems
                key={item.id}
                id={item.id}
                image={item.image}
                category={item.category.replace("_", " ")}
                price={item.price}
                name={item.name}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
      </section>
      <aside className="md:min-w-[300px] md:max-w-xs w-full rounded-t-3xl md:rounded-t-none  px-8 py-16 text-gray-500 bg-[#f5f5f6] ">
        <h2 className="max-w-xs pb-4 mx-auto text-xl font-bold text-black border-b">
          Order Summary
        </h2>
        <div className="flex flex-col max-w-xs gap-4 py-4 mx-auto">
          <span className="flex justify-between">
            <p className="text-sm font-bold">ITEMS {cartItems.length}</p>
            <p className="font-bold">${totalAmount}</p>
          </span>
          <div className="flex flex-col gap-4">
            <label className="text-sm font-bold">SHIPPING</label>
            <select className="w-full p-2 text-sm border-0 rounded-md focus:border-0 focus:outline-none">
              <option>Pickup - 0$</option>
              <option>Delivery - $20</option>
            </select>
          </div>

          <form className="flex flex-col gap-4 pb-8 border-b border-b-gray-400">
            <label className="text-sm font-bold">ADDRESS</label>
            <input
              type="text"
              className="w-full px-5 py-3 text-xs text-black border-0 rounded-md focus:border-0 focus:outline-none"
              placeholder="Enter your code"
            />
          </form>
          <div className="flex flex-col gap-8 mt-5">
            <span className="flex justify-between gap-4 font-bold">
              <p>TOTAL COST</p>
              <p>$ {totalAmount + 20}</p>
            </span>
            <button
              type="button"
              className="px-2 py-3 text-sm font-bold text-white uppercase bg-orange"
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </CartLayout>
  );
};

export default Cart;
