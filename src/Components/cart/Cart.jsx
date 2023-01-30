import CartLayout from "../Layout/CartLayout";
import { BiArrowBack, BiRefresh } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import Image from "../Ui/Image";
import { showCart, clearCart } from "../../store/slices/cartSlice";
import emptyCart from "../../assets/emptyCart.svg";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const itemsInCart = cartItems.map((item) => (
    <CartItems
      name={item.name}
      image={item.image}
      price={item.price}
      id={item.id}
      key={item.id}
      amount={item.quantity}
    />
  ));

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const hideCartHandler = () => {
    dispatch(showCart());
  };

  return (
    <CartLayout>
      {cartItems.length > 0 ? (
        <div className="cart-container">
          <div className="flex gap-2 flex-col h-[45vh] hide-scroll-bar overflow-y-scroll">
            {itemsInCart}
          </div>
          <div className="text-ashText">
            <div className="flex justify-between ">
              <p>Sub Total</p>
              <p>-</p>
              <p>
                <span className="text-pepperRed font-bold">₦</span>
                {total}
              </p>
            </div>
            <div className="flex mb-2 justify-between">
              <p>Delivery</p>
              <p>-</p>
              <p>
                <span className="text-pepperRed font-bold">₦</span>0
              </p>
            </div>
            <hr />
            <div className="flex mt-3 text-white justify-between">
              <p>Total</p>
              <p>-</p>
              <p>
                <span className="text-pepperRed font-bold">₦</span>
                {total}
              </p>
            </div>
            <button className="bg-orange w-full mt-2 text-white rounded-3xl py-2">
              Order Now
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute text-center space-y-2 top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2">
          <Image
            src={emptyCart}
            alt="empty cart"
            className="w-full h-48 object-cover"
          />
          <p>Your cart is empty!</p>
        </div>
      )}
      <div className="flex justify-between px-6 py-4 items-center">
        <BiArrowBack
          className="text-3xl cursor-pointer"
          onClick={hideCartHandler}
        />
        <h3>Cart</h3>
        <span className="flex items-center  gap-1">
          <p>Clear Cart</p>
          <BiRefresh
            onClick={clearCartHandler}
            className="text-3xl text-orange cursor-pointer"
          />
        </span>
      </div>
    </CartLayout>
  );
}

export default Cart;
