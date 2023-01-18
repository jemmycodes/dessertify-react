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
        <h3 className="text-xl">{props.title}</h3>
        <h4 className="text-xs">{props.description}</h4>
        <p className="font-bold">
          <span className=" text-pepperRed">₦</span>
          {props.price}
        </p>
      </div>
    </div>
  );
}

export default MenuCards;
