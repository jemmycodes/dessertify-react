import Image from "./Image";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

function MenuCards(props) {
  // format the price coming from props
  const price = +(props.price * 100).toFixed(0);

  // configure the cart items

  const dispatch = useDispatch();

  // reducer actions to add to cart
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: props.id,
        name: props.title,
        image: props.src,
        quantity: 1,
        price,
      })
    );
  };

  return (
    <div className="menu--card">
      <div className="menu--card__image">
        <Image
          src={props.src}
          alt={props.title}
          className="w-28 h-28 object-cover rounded-full"
        />
        <span className="cart--icon">
          <TbShoppingCartPlus onClick={addToCartHandler} />
        </span>
      </div>
      <div className="text-right space-y-1">
        <h3 className="text-xl ml-auto max-w-[15rem]">{props.title}</h3>
        <h4 className="text-xs  ml-auto max-w-[15rem]">
          <span className="font-bold italic"> Category: &nbsp;</span>
          {props.category === "Ice_Cream" ? "Ice Cream" : props.category}
        </h4>
        <p className="font-bold">
          <span className=" text-pepperRed">₦</span>
          {price}
        </p>
      </div>
    </div>
  );
}

export default MenuCards;
