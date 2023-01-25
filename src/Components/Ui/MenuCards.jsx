import Image from "./Image";
import { TbShoppingCartPlus } from "react-icons/tb";

function MenuCards(props) {
  return (
    <div className="menu--card">
      <div className="menu--card__image">
        <Image
          src={props.src}
          alt={props.title}
          className="max-w-[7rem] rounded-full"
        />
        <span className="cart--icon">
          <TbShoppingCartPlus />
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
          {(props.price * 100).toFixed(0)}
        </p>
      </div>
    </div>
  );
}

export default MenuCards;
